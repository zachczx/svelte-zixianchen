import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { gunzipSync } from 'node:zlib';
import { expect, test, type Page } from '@playwright/test';

const require = createRequire(import.meta.url);
const surveysScript = readFileSync(require.resolve('posthog-js/dist/surveys.js'), 'utf8');
const proxyOrigin = 'https://phz.zixianchen.com';
const survey = {
	id: '00000000-0000-4000-8000-000000000001',
	name: 'Browser fixture',
	type: 'popover',
	schedule: 'once',
	start_date: '2026-01-01T00:00:00Z',
	end_date: null,
	questions: [
		{
			id: 'clarity',
			type: 'single_choice',
			question: 'Was this article useful?',
			choices: ['Yes', 'Partly', 'No'],
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
		const headers = { 'access-control-allow-origin': '*' };
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
		if (url.pathname.startsWith('/static/') && url.pathname.endsWith('/surveys.js')) {
			return route.fulfill({ contentType: 'application/javascript', headers, body: surveysScript });
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

for (const viewport of [
	{ width: 1280, height: 900 },
	{ width: 390, height: 844 },
]) {
	test(`survey submits through the proxy at ${viewport.width}px`, async ({ page }) => {
		await page.setViewportSize(viewport);
		const { events, paths, unexpected } = await interceptPostHog(page);
		await page.goto('/blog/so-you-want-bigger-job');
		await expect(page.getByText(survey.questions[0].question, { exact: true })).toBeVisible();
		await page.getByText('Partly', { exact: true }).click();
		await page.getByRole('button', { name: 'Submit survey', exact: true }).click();
		await page.getByRole('textbox').fill('More explanation of the design decisions.');
		await page.getByRole('button', { name: 'Submit survey', exact: true }).click();
		await expect(page.getByText('Thanks for your feedback.', { exact: true })).toBeVisible();
		await expect.poll(() => events.some((event) => event.event === 'survey sent')).toBe(true);
		const sent = events.find((event) => event.event === 'survey sent')!;
		expect(sent.properties.$survey_id).toBe(survey.id);
		expect(JSON.stringify(sent.properties)).toContain('Partly');
		expect(JSON.stringify(sent.properties)).toContain('More explanation of the design decisions.');
		expect(events.filter((event) => event.event === '$pageview')).toHaveLength(1);
		expect(paths.some((path) => path.startsWith('/array/'))).toBe(true);
		expect(paths.some((path) => path.startsWith('/static/') && path.endsWith('/surveys.js'))).toBe(true);
		expect(unexpected).toEqual([]);
		await page.reload();
		await page.waitForTimeout(2000);
		await expect(page.getByText(survey.questions[0].question, { exact: true })).toBeHidden();
	});
}

test('dismissal persists across page loads', async ({ page }) => {
	const { events, paths, unexpected } = await interceptPostHog(page);
	await page.goto('/blog/so-you-want-bigger-job');
	await expect(page.getByText(survey.questions[0].question, { exact: true })).toBeVisible();
	await page.getByRole('button', { name: /close|dismiss/i }).click();
	await expect
		.poll(() => events.some((event) => event.event === 'survey dismissed'), {
			message: JSON.stringify({ events, paths, unexpected }),
			timeout: 12000,
		})
		.toBe(true);
	await page.reload();
	await page.waitForTimeout(2000);
	await expect(page.getByText(survey.questions[0].question, { exact: true })).toBeHidden();
});

test('blocked requests leave the blog usable', async ({ page }) => {
	const { paths } = await interceptPostHog(page, true);
	await page.goto('/blog/so-you-want-bigger-job');
	await expect.poll(() => paths.length).toBeGreaterThan(0);
	await expect(page.getByText(survey.questions[0].question, { exact: true })).toBeHidden();
	await page.getByRole('button', { name: 'Switch blog to light mode' }).click();
	await expect(page.locator('#blog-shell')).toHaveAttribute('data-theme', 'light');
});

test('a healthy SDK respects survey URL targeting', async ({ page }) => {
	const { paths, events } = await interceptPostHog(page);
	await page.goto('/blog');
	await expect.poll(() => paths.includes('/api/surveys/')).toBe(true);
	await page.waitForTimeout(2000);
	await expect(page.getByText(survey.questions[0].question, { exact: true })).toBeHidden();
	expect(events.some((event) => event.event === 'survey shown')).toBe(false);
});

test('portfolio and contact pages do not load PostHog', async ({ page }) => {
	const { paths } = await interceptPostHog(page);
	for (const path of ['/', '/projects/lingo', '/contact']) {
		await page.goto(path);
		await page.waitForLoadState('networkidle');
		expect(paths).toEqual([]);
	}
});
