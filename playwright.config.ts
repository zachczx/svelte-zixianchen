import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests/feedback',
	fullyParallel: false,
	workers: 1,
	forbidOnly: !!process.env.CI,
	reporter: 'list',
	outputDir: '.tmp/feedback-tests/results',
	// PostHog intentionally filters HeadlessChrome events; use the normal desktop profile.
	use: { ...devices['Desktop Chrome'], baseURL: 'http://127.0.0.1:6174' },
	webServer: {
		command: 'node scripts/feedback-dev.mjs',
		url: 'http://127.0.0.1:6174',
		reuseExistingServer: false,
		env: {
			PUBLIC_POSTHOG_KEY: 'phc_production_fixture',
			PUBLIC_POSTHOG_HOST: 'https://phz.zixianchen.com',
			PUBLIC_POSTHOG_UI_HOST: 'https://us.posthog.com',
			PUBLIC_POSTHOG_TEST_MODE: 'true',
			PUBLIC_POSTHOG_TEST_KEY: 'phc_browser_fixture',
		},
	},
});
