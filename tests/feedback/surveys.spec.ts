import { gunzipSync } from 'node:zlib';
import { expect, test, type Page } from '@playwright/test';

const proxyOrigin = 'https://phz.zixianchen.com';
const survey = {
	id: '01a08f68-1080-0000-b817-2c3f4e1b3d1a',
	name: 'Browser fixture',
	type: 'api',
	schedule: 'always',
	start_date: '2026-01-01T00:00:00Z',
	end_date: null,
	questions: [
		{
			id: 'clarity',
			type: 'single_choice',
			question: 'Was this post relevant to you?',
			choices: ['Yes', 'Somewhat', 'No'],
		},
		{ id: 'detail', type: 'open', question: 'What could make it more useful?', optional: true },
	],
	conditions: { url: '/blog/so-you-want-bigger-job', urlMatchType: 'icontains' },
	appearance: {
		surveyPopupDelaySeconds: 1,
		displayThankYouMessage: true,
		thankYouMessageHeader: 'Thanks for your feedback.',
		submitButtonText: 'Send feedback',
	},
};

interface CapturedEvent {
	event: string;
	properties: Record<string, unknown>;
}

async function interceptPostHog(page: Page, blocked = false) {
	// Exercise ordinary visitor capture; production keeps PostHog's automation filtering.
	await page.addInitScript(() => {
		Object.defineProperty(navigator, 'webdriver', { get: () => false });
		Object.defineProperty(navigator, 'userAgentData', { get: () => undefined });
	});
	const events: CapturedEvent[] = [];
	const paths: string[] = [];
	const unexpected: string[] = [];
	// Only network responses are fixtures. SDK initialization, rendering, interactions,
	// persistence and event serialization are the real installed PostHog implementation.
	await page.route('**/*', async (route) => {
		const request = route.request();
		const url = new URL(request.url());
		if (url.origin === 'http://127.0.0.1:6174') return route.continue();
		if (url.hostname === 'u.zixianchen.com') return route.abort();
		if (url.origin !== proxyOrigin) {
			unexpected.push(request.url());
			return route.abort();
		}
		paths.push(url.pathname);
		if (blocked) return route.abort();
		const headers = {
			'access-control-allow-origin': '*',
			'access-control-allow-headers': '*',
			'access-control-allow-methods': 'POST, GET, OPTIONS',
		};
		if (request.method() === 'OPTIONS') return route.fulfill({ status: 204, headers });
		if (url.pathname.startsWith('/array/')) {
			const config = {
				analytics: { endpoint: '/i/v0/e/' },
				surveys: true,
				supportedCompression: [],
				hasFeatureFlags: true,
			};
			return route.fulfill({
				contentType: 'application/javascript',
				headers,
				body: `window._POSTHOG_REMOTE_CONFIG = { phc_browser_fixture: { config: ${JSON.stringify(config)} } };`,
			});
		}
		if (url.pathname.startsWith('/flags/')) {
			return route.fulfill({ json: { featureFlags: {}, featureFlagPayloads: {} }, headers });
		}
		if (url.pathname === '/api/surveys/') {
			return route.fulfill({ json: { surveys: [survey] }, headers });
		}
		if (url.pathname === '/i/v0/e/' || url.pathname === '/e/') {
			const data = request.postDataBuffer();
			if (data) {
				const body = data[0] === 0x1f && data[1] === 0x8b ? gunzipSync(data).toString() : data.toString();
				const payload = JSON.parse(body);
				events.push(...(Array.isArray(payload) ? payload : (payload.batch ?? [payload])));
			}
			return route.fulfill({ json: { status: 1 }, headers });
		}
		unexpected.push(request.url());
		return route.abort();
	});
	return { events, paths, unexpected };
}

const article = '/blog/so-you-want-bigger-job';
const otherArticle = '/blog/adding-backblaze-b2-bucket-to-coolify';
const section = (page: Page) => page.getByRole('region', { name: 'Post feedback' });
async function choose(page: Page, answer = 'Somewhat') {
	await expect(section(page)).toBeVisible();
	await section(page).getByText(answer, { exact: true }).click();
}

for (const width of [390, 768, 1280]) {
	test(`inline survey submits and follows the theme at ${width}px`, async ({ page }) => {
		await page.setViewportSize({ width, height: 900 });
		const { events, paths, unexpected } = await interceptPostHog(page);
		await page.goto(article);
		await expect(section(page)).toBeVisible();
		await expect(section(page).getByRole('button', { name: 'Send feedback' })).toBeVisible();
		await expect(section(page).getByRole('button', { name: 'Send feedback' })).toBeDisabled();
		expect(events.some((e) => e.event === 'survey shown')).toBe(false);
		if (process.env.FEEDBACK_SCREENSHOTS) {
			await section(page).scrollIntoViewIfNeeded();
			await page.screenshot({ path: `.tmp/feedback-review/dark-${width}.png` });
		}
		const dark = await section(page).evaluate((el) => getComputedStyle(el).color);
		await page.getByRole('button', { name: 'Switch blog to light mode' }).click();
		await expect.poll(() => section(page).evaluate((el) => getComputedStyle(el).color)).not.toBe(dark);
		await choose(page);
		if (process.env.FEEDBACK_SCREENSHOTS) await page.screenshot({ path: `.tmp/feedback-review/light-${width}.png` });
		await section(page).getByRole('textbox').fill('More explanation of the design decisions.');
		await section(page).getByRole('button', { name: 'Send feedback' }).click();
		await expect(section(page).getByRole('status')).toHaveText('Thanks for your feedback.');
		await expect.poll(() => events.filter((e) => e.event === 'survey sent').length).toBe(1);
		const sent = events.find((e) => e.event === 'survey sent')!;
		expect(sent.properties.$survey_id).toBe(survey.id);
		expect(sent.properties.$survey_response_clarity).toBe('Somewhat');
		expect(sent.properties.$survey_response_detail).toContain('design decisions');
		expect(sent.properties.article_path).toBe(article);
		expect(sent.properties.article_title).toBeTruthy();
		expect(sent.properties.$survey_questions).toHaveLength(2);
		expect(paths.some((p) => p.endsWith('/surveys.js'))).toBe(false);
		expect(unexpected).toEqual([]);
		await page.goto(`${article}?ref=test#conclusion`);
		await expect(section(page).getByRole('status')).toHaveText('Thanks for your feedback.');
		await expect(section(page).getByRole('button')).toHaveCount(0);
		await page.goto(otherArticle);
		await choose(page, 'Yes');
		await section(page).getByRole('button', { name: 'Send feedback' }).click();
		await expect(section(page).getByRole('status')).toHaveText('Thanks for your feedback.');
		expect(events.filter((e) => e.event === 'survey sent')).toHaveLength(2);
	});
}

test('failure preserves the answer and retries the same event', async ({ page }) => {
	await interceptPostHog(page);
	const attempts: string[] = [];
	let fail = true;
	await page.route('**/i/v0/e/', async (route) => {
		const body = route.request().postData() || '';
		if (!body.includes('"event":"survey sent"')) return route.fallback();
		attempts.push(body);
		if (fail) return route.fulfill({ status: 503, headers: { 'access-control-allow-origin': '*' } });
		return route.fulfill({ json: { status: 1 }, headers: { 'access-control-allow-origin': '*' } });
	});
	await page.goto(article);
	await choose(page);
	await section(page).getByRole('textbox').fill('Keep this answer');
	await section(page).getByRole('button', { name: 'Send feedback' }).click();
	await expect(section(page).getByRole('alert')).toContainText('Could not send');
	await expect(section(page).getByRole('textbox')).toHaveValue('Keep this answer');
	expect(await page.evaluate(() => Object.keys(localStorage).filter((k) => k.startsWith('article-feedback:')))).toEqual(
		[],
	);
	fail = false;
	await section(page).getByRole('button', { name: 'Try again' }).click();
	await expect(section(page).getByRole('status')).toHaveText('Thanks for your feedback.');
	expect(attempts).toHaveLength(2);
	expect(attempts[0]).toBe(attempts[1]);
});

test('blocked feedback leaves reading and theme controls usable', async ({ page }) => {
	await interceptPostHog(page, true);
	await page.goto(article);
	await expect(section(page)).toBeHidden();
	await page.getByRole('button', { name: 'Switch blog to light mode' }).click();
	await expect(page.locator('#blog-shell')).toHaveAttribute('data-theme', 'light');
});

test('unlaunched and ended surveys stay hidden', async ({ page }) => {
	await interceptPostHog(page);
	for (const overrides of [{ start_date: null }, { end_date: '2026-09-01T00:00:00Z' }, { type: 'popover' }]) {
		await page.route('**/api/surveys/**', (route) =>
			route.fulfill({
				json: { surveys: [{ ...survey, ...overrides }] },
				headers: { 'access-control-allow-origin': '*' },
			}),
		);
		await page.goto(article);
		await page.waitForLoadState('networkidle');
		await expect(section(page)).toBeHidden();
	}
});

test('storage failure does not break sending feedback', async ({ page }) => {
	const { events } = await interceptPostHog(page);
	await page.addInitScript(() => {
		const original = Storage.prototype.setItem;
		Storage.prototype.setItem = function (key, value) {
			if (key.startsWith('article-feedback:')) throw new Error('Storage unavailable');
			return original.call(this, key, value);
		};
	});
	await page.goto(article);
	await choose(page, 'No');
	await section(page).getByRole('button', { name: 'Send feedback' }).click();
	await expect(section(page).getByRole('status')).toHaveText('Thanks for your feedback.');
	expect(events.filter((e) => e.event === 'survey sent')).toHaveLength(1);
});

test('survey absent on indexes and portfolio pages', async ({ page }) => {
	const { paths } = await interceptPostHog(page);
	for (const path of ['/blog', '/blog/unlisted', '/', '/projects/lingo', '/contact']) {
		paths.length = 0;
		await page.goto(path);
		await page.waitForLoadState('networkidle');
		await expect(section(page)).toHaveCount(0);
		expect(paths.some((p) => p.startsWith('/api/surveys/'))).toBe(false);
		if (!path.startsWith('/blog')) expect(paths).toEqual([]);
	}
});

test('keyboard selection and submission work without a comment', async ({ page }) => {
	const { events } = await interceptPostHog(page);
	await page.goto(article);
	const yes = section(page).getByRole('radio', { name: 'Yes', exact: true });
	await yes.focus();
	await page.keyboard.press('Space');
	await expect(yes).toBeChecked();
	await page.keyboard.press('ArrowRight');
	await expect(section(page).getByRole('radio', { name: 'Somewhat', exact: true })).toBeChecked();
	await page.keyboard.press('Tab');
	await expect(section(page).getByRole('textbox')).toBeFocused();
	await page.keyboard.press('Tab');
	await page.keyboard.press('Enter');
	await expect(section(page).getByRole('status')).toHaveText('Thanks for your feedback.');
	expect(events.filter((e) => e.event === 'survey sent')).toHaveLength(1);
});
