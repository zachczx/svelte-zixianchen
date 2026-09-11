import { expect, test } from '@playwright/test';
import { feedbackConfig } from '../../src/lib/feedback-config';

const production = { PROD: true, DEV: false, PUBLIC_POSTHOG_KEY: 'phc_production' };
const development = {
	...production,
	PROD: false,
	DEV: true,
	PUBLIC_POSTHOG_TEST_MODE: 'true',
	PUBLIC_POSTHOG_TEST_KEY: 'phc_test',
};

test('production uses the proxy on canonical hosts only', () => {
	for (const hostname of ['zixianchen.com', 'www.zixianchen.com']) {
		expect(feedbackConfig(production, hostname)).toEqual({
			key: 'phc_production',
			apiHost: 'https://phz.zixianchen.com',
			uiHost: 'https://us.posthog.com',
		});
	}
	for (const hostname of ['localhost', '127.0.0.1', 'preview.workers.dev', 'zixianchen.com.example.com']) {
		expect(feedbackConfig({ ...development, PROD: true, DEV: false }, hostname)).toBeNull();
	}
});

test('local opt-in requires a distinct test key and cannot enable a remote host', () => {
	expect(feedbackConfig(development, 'localhost')?.key).toBe('phc_test');
	expect(feedbackConfig({ ...development, PUBLIC_POSTHOG_TEST_MODE: 'false' }, 'localhost')).toBeNull();
	expect(feedbackConfig({ ...development, PUBLIC_POSTHOG_TEST_KEY: '' }, 'localhost')).toBeNull();
	expect(feedbackConfig({ ...development, PUBLIC_POSTHOG_TEST_KEY: ' phc_production ' }, 'localhost')).toBeNull();
	expect(feedbackConfig(development, 'preview.workers.dev')).toBeNull();
	expect(feedbackConfig(development, 'zixianchen.com')).toBeNull();
});

test('missing keys and malformed hosts fail closed', () => {
	expect(feedbackConfig({ ...production, PUBLIC_POSTHOG_KEY: ' ' }, 'zixianchen.com')).toBeNull();
	for (const host of ['not a URL', 'http://phz.zixianchen.com', 'javascript:alert(1)']) {
		expect(feedbackConfig({ ...production, PUBLIC_POSTHOG_HOST: host }, 'zixianchen.com')).toBeNull();
	}
	expect(feedbackConfig({ ...production, PUBLIC_POSTHOG_HOST: '  ' }, 'zixianchen.com')?.apiHost).toBe(
		'https://phz.zixianchen.com',
	);
});
