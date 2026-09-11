import type { PostHog, Survey } from 'posthog-js';

export const articleSurveyId = '01a08f68-1080-0000-b817-2c3f4e1b3d1a';

export async function articleFeedback(posthog: PostHog, config: { key: string; apiHost: string }) {
	const section = document.querySelector<HTMLElement>('[data-article-feedback]');
	if (!section || posthog.has_opted_out_capturing()) return;
	const path = section.dataset.articlePath!;
	const storageKey = `article-feedback:${articleSurveyId}:${path}`;
	const form = section.querySelector('form')!;
	const status = section.querySelector<HTMLElement>('[role="status"]')!;
	const completed = () => {
		form.hidden = true;
		section.hidden = false;
		status.textContent = 'Thanks for your feedback.';
	};
	try {
		if (localStorage.getItem(storageKey) === 'sent') return completed();
	} catch {
		/* Storage is optional. */
	}
	const response = await fetch(`${config.apiHost}/api/surveys/?token=${encodeURIComponent(config.key)}`, {
		signal: AbortSignal.timeout(10000),
	});
	if (!response.ok) return;
	const data = (await response.json()) as { surveys: Survey[] };
	const survey = data.surveys?.find((item) => item.id === articleSurveyId);
	if (
		!survey ||
		survey.type !== 'api' ||
		!survey.start_date ||
		!Number.isFinite(Date.parse(survey.start_date)) ||
		Date.parse(survey.start_date) > Date.now() ||
		survey.end_date
	)
		return;
	const [question, followup] = survey.questions;
	// This focused form supports one three-choice question and one optional text answer.
	if (
		survey.questions.length !== 2 ||
		question.type !== 'single_choice' ||
		question.choices.length !== 3 ||
		!question.id ||
		followup.type !== 'open' ||
		!followup.optional ||
		!followup.id
	)
		return;
	form.querySelector('legend')!.textContent = question.question;
	const radios = [...form.querySelectorAll<HTMLInputElement>('input[type="radio"]')];
	radios.forEach((radio, index) => {
		radio.value = question.choices[index];
		radio.nextElementSibling!.textContent = question.choices[index];
	});
	form.querySelector('[data-followup-label]')!.textContent = `${followup.question} (optional)`;
	const detail = form.querySelector<HTMLElement>('[data-feedback-detail]')!;
	const textarea = form.querySelector('textarea')!;
	const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
	const error = form.querySelector<HTMLElement>('[role="alert"]')!;
	const properties = {
		$survey_id: survey.id,
		$survey_name: survey.name,
		$survey_submission_id: crypto.randomUUID(),
		$survey_questions: survey.questions.map(({ id, question }) => ({ id, question })),
		article_path: path,
		article_title: section.dataset.articleTitle,
		$current_url: `https://zixianchen.com${path}`,
	};
	section.hidden = false;
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				posthog.capture('survey shown', properties);
				observer.disconnect();
			}
		},
		{ threshold: 0.5 },
	);
	observer.observe(section);
	form.addEventListener('change', () => {
		detail.hidden = false;
		submit.disabled = false;
	});
	let pending = false;
	let sent = false;
	let payload: string | undefined;
	// Retry the identical event UUID and payload after an uncertain response.
	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		if (pending || sent || posthog.has_opted_out_capturing()) return;
		const answer = radios.find((radio) => radio.checked)?.value;
		if (!answer) return;
		pending = true;
		error.textContent = '';
		submit.disabled = true;
		submit.textContent = 'Sending…';
		radios.forEach((radio) => {
			radio.disabled = true;
		});
		textarea.disabled = true;
		payload ??= JSON.stringify({
			api_key: config.key,
			uuid: crypto.randomUUID(),
			event: 'survey sent',
			distinct_id: posthog.get_distinct_id(),
			properties: {
				...properties,
				$survey_completed: true,
				$process_person_profile: false,
				[`$survey_response_${question.id}`]: answer,
				...(textarea.value.trim() ? { [`$survey_response_${followup.id}`]: textarea.value.trim() } : {}),
			},
		});
		try {
			// Explicit acknowledgement allows retry instead of treating a queued event as success.
			const result = await fetch(`${config.apiHost}/i/v0/e/`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: payload,
				signal: AbortSignal.timeout(10000),
			});
			if (!result.ok) throw new Error('Feedback request failed');
			const body = await result.json();
			if (!body || typeof body !== 'object' || !('status' in body) || body.status !== 1)
				throw new Error('Feedback was not accepted');
			sent = true;
			try {
				localStorage.setItem(storageKey, 'sent');
			} catch {
				/* Already accepted. */
			}
			completed();
			status.focus();
		} catch {
			error.textContent = 'Could not send your feedback. Please try again.';
			submit.textContent = 'Try again';
			submit.disabled = false;
		} finally {
			pending = false;
		}
	});
	window.addEventListener('storage', (event) => {
		if (event.key === storageKey && event.newValue === 'sent' && !pending) {
			sent = true;
			completed();
		}
	});
}
