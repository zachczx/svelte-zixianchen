# Repository Guidelines

## Project Structure & Module Organization

This is a SvelteKit personal website. Route files live in `src/routes`, with page components following SvelteKit names such as `+page.svelte`, `+page.ts`, `+layout.svelte`, and server routes such as `sitemap.xml/+server.ts`. Blog Markdown posts are stored in `src/routes/blog/posts` and use kebab-case slugs. Shared components, project metadata, logos, screenshots, and imported assets live under `src/lib`. Public static files, favicons, robots.txt, and SVGs served directly by Vite live in `static`. Build and framework output (`build`, `.svelte-kit`) should be treated as generated.

## Build, Test, and Development Commands

- `pnpm install`: install dependencies from `pnpm-lock.yaml`.
- `pnpm dev`: run the local Vite dev server, configured to start on port `6173` when available.
- `pnpm build`: create the static production build in `build`.
- `pnpm preview`: preview the built site locally.
- `pnpm check`: sync SvelteKit types and run `svelte-check`.
- `pnpm lint`: run Prettier in check mode and ESLint.
- `pnpm format`: format the repository with Prettier.

Before submitting JavaScript, TypeScript, or Svelte changes, run `pnpm format` and `pnpm check`. Also run `pnpm build` for route, content, asset, or config changes.

## Coding Style & Naming Conventions

Use TypeScript and Svelte conventions already present in the repository. Prettier is configured for tabs, single quotes, trailing commas, `bracketSameLine`, and a `120` character print width, with Svelte and Tailwind plugins enabled. ESLint extends `eslint:recommended`, `plugin:svelte/recommended`, and `prettier`.

Name Svelte components in PascalCase, for example `ProjectShell.svelte`. Keep route and blog slugs kebab-case. Prefer shared UI and data in `src/lib` over duplicating logic inside route files.

## Testing Guidelines

There is no dedicated test script or test framework configured yet. Treat `pnpm check`, `pnpm lint`, and `pnpm build` as the required validation suite. If adding tests later, keep names explicit, such as `feature-name.test.ts`, and document the new command in `package.json` and this guide.

## Commit & Pull Request Guidelines

Recent commits use Conventional Commit-style prefixes such as `feat:`, `fix:`, `refactor:`, and `style:`. Keep commit subjects imperative and scoped to one change.

Do not push commits or branches unless the user explicitly asks for a push. A request to commit does not imply permission to push.

Pull requests should include a short summary, linked issue when applicable, commands run, and screenshots or screen recordings for visual changes. Call out content migrations, asset additions, and any deployment implications for Cloudflare or static output.

## Security & Configuration Tips

Do not commit secrets, API keys, or local environment files. Review `wrangler.jsonc`, SvelteKit config, and deployment-related changes carefully because this site is built as static output.
