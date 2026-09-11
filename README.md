# Zixian's personal website

A statically generated Astro portfolio and blog, deployed through Cloudflare Workers Static Assets.

Astro owns routing, content, and rendering. Browser JavaScript is limited to focused interactions such as navigation state, Pagefind blog search, theme persistence, the contact form, screenshot galleries, and the animated canvas.

## PostHog surveys

The blog layout loads PostHog on production builds served from `zixianchen.com` or `www.zixianchen.com`, when `PUBLIC_POSTHOG_KEY` is configured. Development is off by default; preview domains and builds without a key do not load the SDK. Portfolio and contact pages do not load PostHog. Existing Umami analytics remain enabled.

Copy `.env.example` to `.env` for a local build, and configure the same public values in the hosting build environment. Use this site's PostHog project token, not a personal API key. Browser requests default to the proxy at `https://phz.zixianchen.com`; `PUBLIC_POSTHOG_HOST` can override it. The dashboard host remains `https://us.posthog.com` (`PUBLIC_POSTHOG_UI_HOST`). The proxy must forward events, feature flags, survey requests, remote configuration (`/array/*`), and SDK assets (`/static/*`). These values are embedded by Astro during the build; changing Worker runtime variables alone does not update them.

Enable Surveys in that PostHog project's settings. Create a **popover** or **feedback button** survey, configure its questions, URL targeting, delay and display frequency, save it as a draft, and preview it before launching. PostHog owns question rendering, targeting, dismissal and response storage; no survey ID or custom survey UI is required in this repository. API/inline surveys require additional site code.

This site's project is [zixianchen.com (604259)](https://us.posthog.com/project/604259). The [Blog article feedback](https://us.posthog.com/project/604259/surveys/01a08f68-1080-0000-b817-2c3f4e1b3d1a) asks whether an article was useful, followed by optional written feedback. It targets blog articles after 30 seconds, once per visitor, with a 30-day gap from other surveys. The project must have Surveys enabled and the survey must be launched in PostHog before it can appear.

The proxy is provisioned through PostHog's managed proxy service. Cloudflare DNS points `phz.zixianchen.com` at its assigned CNAME; no additional Worker proxy is required. Keep this separate from the website's static-assets/contact Worker.

### Local survey validation

For manual testing, set `PUBLIC_POSTHOG_TEST_MODE=true` and `PUBLIC_POSTHOG_TEST_KEY` to a **separate test project's public token**, then run `pnpm dev` on localhost. Enable Surveys and configure localhost URL targeting in that test project. The test key must differ from `PUBLIC_POSTHOG_KEY`; production builds and remote preview hosts cannot use this bypass. Restart the dev server after environment changes.

Run `pnpm exec playwright install chromium` once, then `pnpm test:feedback` for repeatable browser checks. The tests use the installed PostHog SDK and survey renderer with isolated network fixtures, verifying proxy paths, answers in serialized submission events, dismissal/completion persistence, URL targeting, mobile display, and blocked-request behavior. They do not send fake responses to PostHog. A separate local Astro server and temporary caches/results run under `.tmp/feedback-tests`, cleaned before and after each run. These tests verify the integration; a deployed first-event check is still needed to verify the hosting build variables and account settings.

The integration captures pageviews and survey events. Automatic interaction/form capture, dead-click capture, session replay, performance capture and exception capture are disabled. Visitors are not explicitly identified. PostHog uses its default browser persistence for anonymous identity and survey state; survey answers are sent to PostHog. Keep questions focused and avoid requesting sensitive information.

After deployment, verify a pageview reaches the correct project and preview a targeted survey on the production domain. Check display, dismissal and submission, including a narrow mobile viewport. Blocked PostHog requests should leave navigation and the contact form usable. Localhost is intentionally excluded, even when previewing a production build.

See [PostHog survey installation](https://posthog.com/docs/surveys/installation) and [JavaScript configuration](https://posthog.com/docs/libraries/js/config).
