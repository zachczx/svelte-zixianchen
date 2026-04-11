# Refactor TODO

Ordered from zero-risk cleanup → bigger structural refactors. Safe to do 1–7 in one pass; 8 and 9 each warrant their own review.

---

## 1. Delete unused lib files

Zero importers anywhere in the codebase. Verified via grep.

- [ ] `src/lib/Intermission.svelte`
- [ ] `src/lib/ExitLinks.svelte`
- [ ] `src/lib/StackUsed.svelte` (only self-references)
- [ ] `src/lib/svg/NetworkSvg.svelte`
- [ ] `src/lib/svg/TankSvg.svelte`
- [ ] `src/lib/svg/Mail-sent-rafiki.svelte`
- [ ] `src/lib/svg/Code-typing-bro.svelte`
- [ ] Remove the now-empty `src/lib/svg/` directory if nothing else lives in it

---

## 2. Remove unused `AlignCenterText` imports

Imported but never used in markup:

- [ ] `src/routes/projects/appraize/+page.svelte:12`
- [ ] `src/routes/projects/rinku/+page.svelte:9`
- [ ] `src/routes/projects/wronged/+page.svelte:12`
- [ ] `src/routes/projects/roamichi/+page.svelte:20`

---

## 3. Remove dead ghost state in blog layout

`src/routes/blog/+layout.svelte:6-8` declares state that is never referenced:

```ts
let ghostColor = $state('');
const ghostAddClassMainRight = ['translate-x-4', 'text-red-900'];
const ghostAddClassBlogLeft = ['-translate-x-4', 'text-orange-400'];
```

- [ ] Delete all three declarations

---

## 4. Prune dead `ProjectEntry` snippet props

`src/lib/ProjectEntry.svelte` declares snippets that are never passed or never rendered.

- [ ] Remove `want` prop — never passed by any project page
- [ ] Remove `header` prop — no caller uses `{#snippet header()}`
- [ ] Remove `undone` prop — render block is commented out at ProjectEntry.svelte:87-90
- [ ] Remove `takeaway` prop — render block is commented out at ProjectEntry.svelte:95-98
- [ ] Remove `children` prop — no project uses it
- [ ] Delete the commented `{#if undone}` / `{#if takeaway}` blocks
- [ ] Delete the orphaned `{#snippet undone()}` in `src/routes/projects/cubby/+page.svelte:43` (it renders nothing today)

After this pass, `ProjectEntryProps` should only have: `id`, `title`, `screenshots`, `stack?`, `problem?`, `built?`, `more?`.

---

## 5. Drop dead `mode` prop in `Projects.svelte`

`src/routes/+page.svelte:183` is the only caller and never passes `mode`, so all `mode === 'dark' ? ... : ...` branches are unreachable.

- [ ] Remove `let { mode = '' } = $props();` in `src/routes/Projects.svelte:19`
- [ ] Collapse the Abbreviation `<svg>` fill/fill-opacity ternaries (lines ~63-65) to the non-dark values
- [ ] Collapse the BTOnomics title class ternary (lines ~122-124) — drop the `brightness-125` branch

---

## 6. Fix `IntersectionObserver` leak on homepage

`src/routes/+page.svelte:12-27` creates an observer in `onMount` but never disconnects it. With client-side nav + view transitions, the observer keeps firing after leaving the homepage.

- [ ] Return a cleanup function from `onMount` that calls `observer.disconnect()`
- [ ] Drop the double `NodeListOf<HTMLElement>` typing — `document.querySelectorAll<HTMLElement>('.navItem')` or just `.forEach(el => observer.observe(el))` is cleaner
- [ ] Consider `const` instead of `let` for `navItem` and `observerNav`

Target shape:

```ts
onMount(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) navCurrent = entry.target.id;
        });
    });
    document
        .querySelectorAll<HTMLElement>('.navItem')
        .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
});
```

---

## 7. Simplify contact form email validation

`src/routes/contact/+page.svelte:92-105` runs identical regex logic inside both `onkeydown` and `onkeyup`.

- [ ] Replace with a rune:
  ```ts
  let disabledSubmitButton = $derived(email !== '' && !emailRegex.test(email));
  ```
- [ ] Delete both `onkeydown` and `onkeyup` handlers on the email input
- [ ] Optional: inline `preventDefault` as `onsubmit={(e) => { e.preventDefault(); handleSubmit(e); }}` and drop the helper

---

## 8. Data-drive `NavDock.svelte`

`src/lib/NavDock.svelte` is ~230 lines of six near-identical `<a class="dock">…</a>` blocks differing only in `href`, label, active-state key, and icon SVG.

- [ ] Create `src/lib/icons/` with small icon components (or a single `Icon.svelte` that takes a name)
  - `HouseIcon`, `AccountIcon`, `GridIcon`, `ArticleIcon`, `MailIcon`, `LinkedInIcon`, `GitHubIcon`
- [ ] In `NavDock.svelte`, define a data array:
  ```ts
  const items = [
      { href: '/#header', key: 'header', label: 'Home', icon: HouseIcon, match: 'nav' },
      { href: '/#about', key: 'about', label: 'About', icon: AccountIcon, match: 'nav' },
      // ...
      { href: '/contact', label: 'Contact', icon: MailIcon, match: 'path' },
      { href: 'https://www.linkedin.com/in/zixianchen/', label: 'LinkedIn', icon: LinkedInIcon, match: 'external' },
      { href: 'https://github.com/zachczx?tab=repositories', label: 'GitHub', icon: GitHubIcon, match: 'external' },
  ]
  ```
- [ ] Render with `{#each}`, handling the divider separately (or as a sentinel entry)
- [ ] Reuse the new icon components in `src/routes/+page.svelte:78-112` (LinkedIn, GitHub, blog SVGs are duplicated verbatim there)
- [ ] Verify dock magnification hover CSS still works (it relies on adjacent-sibling selectors — should still match after `{#each}` since each iteration emits a sibling `<a>`)

---

## 9. Extract `ProjectCard` from `Projects.svelte`

`src/routes/Projects.svelte` has 10 project cards, each repeating the same figure/figcaption structure and the overlay class expression:

```
{showBg ? 'group-hover:bg-base-200/90 opacity-0 group-hover:opacity-100' : 'bg-base-200/90 opacity-100'}
```

- [ ] Create `src/lib/ProjectCard.svelte` with props: `href`, `bg` (image), `bgPosition?`, `showBg`, and a `title` snippet + `caption` string (or snippet)
- [ ] Or: keep it inline as a `{#snippet card(...)}` defined once in `Projects.svelte` and call it per project
- [ ] Move the 10 cards into a data array covering: href, bg image import, bgPosition, title render, caption text, and any per-card quirks (e.g. abbreviation's inline SVG, appraize's logo img)
- [ ] Render with `{#each}`
- [ ] Sanity-check the aspect-ratio / grid CSS still applies after the restructure (`#project-grid > a { aspect-ratio: 1; width: 100% }` selector must still match)

---

## Notes

- Static-site build (`pnpm build`) + `pnpm check` + `pnpm lint` after each batch is enough for verification since there's no test suite.
- Consider running `pnpm dev` and visually spot-checking `/`, `/contact`, `/blog`, and a couple of `/projects/*` pages after task 8 and task 9 — both touch rendered DOM structure.
