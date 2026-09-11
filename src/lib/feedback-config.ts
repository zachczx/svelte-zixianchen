interface FeedbackEnvironment {
	PROD: boolean;
	DEV: boolean;
	PUBLIC_POSTHOG_KEY?: string;
	PUBLIC_POSTHOG_HOST?: string;
	PUBLIC_POSTHOG_UI_HOST?: string;
	PUBLIC_POSTHOG_TEST_MODE?: string;
	PUBLIC_POSTHOG_TEST_KEY?: string;
}

export function feedbackConfig(env: FeedbackEnvironment, hostname: string) {
	const productionHost = ['zixianchen.com', 'www.zixianchen.com'].includes(hostname);
	const localHost = ['localhost', '127.0.0.1', '[::1]'].includes(hostname);
	const productionKey = env.PUBLIC_POSTHOG_KEY?.trim();
	const testKey = env.PUBLIC_POSTHOG_TEST_KEY?.trim();
	const localTesting = env.DEV && localHost && env.PUBLIC_POSTHOG_TEST_MODE === 'true';
	const key = env.PROD && productionHost ? productionKey : localTesting ? testKey : undefined;
	if (!key || (localTesting && key === productionKey)) return null;

	const apiHost = env.PUBLIC_POSTHOG_HOST?.trim() || 'https://phz.zixianchen.com';
	const uiHost = env.PUBLIC_POSTHOG_UI_HOST?.trim() || 'https://us.posthog.com';
	// Fail closed on malformed configuration; never silently fall back to direct ingestion.
	try {
		if ([apiHost, uiHost].some((host) => new URL(host).protocol !== 'https:')) return null;
	} catch {
		return null;
	}
	return { key, apiHost, uiHost };
}
