<script>
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=450';
	import rankamateLogo from '$lib/assets/rankamate-logo.webp?enhanced&w=200';
	import eatYourMedsLogo from '$lib/assets/eatyourmedslogo.webp?enhanced&w=250';
	import oldBtonomicsLogo from '$lib/assets/btonomics_logo-3-300x100.webp?enhanced&w=300';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount, tick } from 'svelte';
	import StackUsed from '$lib/StackUsed.svelte';
	import Sveltekit from '$lib/logos/Sveltekit.svg?dataurl';
	import Greensock from '$lib/logos/Greensock.svg?dataurl';
	import Tailwind from '$lib/logos/Tailwind.svg?dataurl';
	import TailwindSmall from '$lib/logos/tailwindcss-small.svg?dataurl';
	import Cloudflare from '$lib/logos/Cloudflare.svg?dataurl';
	import Drizzle from '$lib/logos/Drizzle.svg?dataurl';
	import DrizzlePng from '$lib/logos/Drizzle.png?enhanced&w=40';
	import Svelte from '$lib/logos/Svelte.svg';
	import Sortable from '$lib/logos/Sortablejs.png?enhanced&w=40';
	import Nginx from '$lib/logos/Nginx.svg?dataurl';
	import Coolify from '$lib/logos/Coolify.svg?dataurl';
	import Nodejs from '$lib/logos/Nodejs.svg?dataurl';
	import Postgresql from '$lib/logos/Postgresql.svg?dataurl';
	import Turso from '$lib/logos/Turso.svg?dataurl';
	import Htmx from '$lib/logos/Htmx.svg?dataurl';
	import Django from '$lib/logos/Django.svg?dataurl';
	import Bootstrap from '$lib/logos/Bootstrap.svg?dataurl';
	import Gunicorn from '$lib/logos/Gunicorn.svg?dataurl';
	import Wordpress from '$lib/logos/Wordpress.svg?dataurl';
	import ApacheHttp from '$lib/logos/Apache-http.svg?dataurl';
	import Mysql from '$lib/logos/Mysql.svg?dataurl';
	import Bunny from '$lib/logos/Bunny.svg?dataurl';
	import Astro from '$lib/logos/Astro.svg?dataurl';
	import CloudflarePages from '$lib/logos/Cloudflare-pages.svg?dataurl';
	import Pagefind from '$lib/logos/Pagefind.svg?dataurl';

	import ExitLinks from '$lib/ExitLinks.svelte';
	import Golang from '$lib/logos/Golang.svg?dataurl';
	import Sqlite from '$lib/logos/sqlite.svg?dataurl';
	import Templ from '$lib/logos/templ.svg?dataurl';
	import Abbreviation from '$lib/waves/Abbreviation.svelte';
	import Appraize from '$lib/waves/Appraize.svelte';
	import Apptitude from '$lib/waves/Apptitude.svelte';
	import Btonomics from '$lib/waves/Btonomics.svelte';
	import Btonomicsold from '$lib/waves/Btonomicsold.svelte';
	import Eatyourmeds from '$lib/waves/Eatyourmeds.svelte';
	import Rankamate from '$lib/waves/Rankamate.svelte';

	// onMount(() => {
	// let segments = gsap.utils.toArray('.scroll-content');
	// const segments1 = document.getElementsByClassName('scroll-content1');
	// const segments2 = document.getElementsByClassName('scroll-content2');
	// const segments3 = document.getElementsByClassName('scroll-content3');
	// const segments4 = document.getElementsByClassName('scroll-content4');
	// const segments5 = document.getElementsByClassName('scroll-content5');
	// const segments6 = document.getElementsByClassName('scroll-content6');
	// const logoIcon = document.getElementsByClassName('logoIcon');
	// const scrollLogo = document.getElementsByClassName('scroll-logo');
	// gsap.registerPlugin(ScrollTrigger);
	/**
	 * For the individual pages
	 */
	/* const mm = gsap.matchMedia();

		mm.add(
			{ isLgBreakpoint: '(min-width: 1024px)', prefersReducedMotion: '(prefers-reduced-motion: no-preference)' },
			(context) => {
				let { isLgBreakpoint, prefersReducedMotion } = context.conditions;

				if (isLgBreakpoint && prefersReducedMotion) {
					const tl = gsap.timeline({
						defaults: {
							// scale: 0.7,
							autoAlpha: 0,
							ease: 'circ.out',
							stagger: { each: 0.3 },
						},
					});
					tl.from(segments1, {
						scrollTrigger: {
							trigger: '.scroll-container1',
							start: 'center center',
							scrub: true,
							pin: true,
							end: '+=1000',
							markers: false,
						},
					});
					tl.from(segments2, {
						scrollTrigger: {
							trigger: '.scroll-container2',
							start: 'center center',
							scrub: true,
							pin: true,
							end: '+=1000',
							markers: false,
						},
					});
					tl.from(segments3, {
						scrollTrigger: {
							trigger: '.scroll-container3',
							start: 'center center',
							scrub: true,
							pin: true,
							end: '+=1000',
							markers: false,
						},
					});
					tl.from(segments4, {
						scrollTrigger: {
							trigger: '.scroll-container4',
							start: 'center center',
							scrub: true,
							pin: true,
							end: '+=1000',
							markers: false,
						},
					});
					tl.from(segments5, {
						scrollTrigger: {
							trigger: '.scroll-container5',
							start: 'center center',
							scrub: true,
							pin: true,
							end: '+=1000',
							markers: false,
						},
					});
					tl.from(segments6, {
						scrollTrigger: {
							trigger: '.scroll-container6',
							start: 'center center',
							scrub: true,
							pin: true,
							end: '+=1000',
							markers: false,
						},
					});
				}
			},
		); */
	// tl.from(logoIcon, {
	// 	autoAlpha: 0,
	// 	scale: 0.6,
	// 	ease: 'bounce.out',
	// 	stagger: { each: 0.3 },
	// 	scrollTrigger: {
	// 		trigger: logoIcon,
	// 		start: 'center 90%',
	// 		scrub: true,
	// 		end: 'center center',
	// 		markers: false,
	// 	},
	// });
	// });
</script>

<div id="abbreviation" class="scroll-container7 max-w-dvw background-abbreviation grid min-h-dvh lg:grid-cols-3">
	<div class="place-self-center">
		<div class="flex justify-center">
			<a href="https://abbreviation.zixian.dev"
				><h3 class="pb-4 pt-6 text-center text-5xl font-bold tracking-tighter text-[#0069ff] lg:text-7xl">
					Abbreviati<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						class="-mx-[0.2em] inline"
						viewBox="0 0 24 24"
						><g fill="none"
							><path
								fill="#0069ff"
								fill-opacity=".25"
								fill-rule="evenodd"
								d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14M10.087 7.38A5 5 0 0 1 12 7a.5.5 0 0 0 0-1a6 6 0 0 0-6 6a.5.5 0 0 0 1 0a5 5 0 0 1 3.087-4.62"
								clip-rule="evenodd" /><path stroke="#0069ff" stroke-linecap="round" d="M20.5 20.5L17 17" /><circle
								cx="11"
								cy="11"
								r="8.5"
								stroke="#0069ff" /></g
						></svg
					>n
				</h3></a>
		</div>
		<ExitLinks url="https://abbreviation.zixian.dev" className="fill-[#0069ff]  shadow-md" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md">
				<img src={Golang} class="h-10 scale-125" alt="Golang" />
			</div>
			<div class="flex items-center justify-center rounded-3xl bg-gray-200/20 p-5 shadow-md backdrop-blur-md">
				<img src={Htmx} class="h-8" alt="Htmx" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Sqlite} class="h-10 grow" alt="Sqlite" />
			</div>
			<div class="flex items-center justify-center rounded-3xl bg-gray-200/20 p-5 shadow-md backdrop-blur-md">
				<img src={Templ} class="h-8" alt="Templ" />
			</div>
		</div>
	</div>
	<StackUsed framework="Go, SQLite" library="HTMX, Templ, Tailwind" host="" className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="grid max-h-[1000px] content-start gap-10 lg:grid-cols-2 xl:max-w-[1600px]">
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#0069ff] decoration-8 underline-offset-4">The Problem</h3>
				<p>
					People forget what acronyms and abbreviations mean. They then need to ask a colleague or pray that it shows up
					in email archives.
				</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#0069ff] decoration-8 underline-offset-4">What I wanted</h3>
				<p>
					I wanted to build a search engine and database of abbreviations. There were already a couple of
					implementations out there, but I wanted to build a better, faster, more modern one.
				</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#0069ff] decoration-8 underline-offset-4">What I built</h3>
				<ul class="ms-6 list-outside list-disc space-y-2 marker:text-[#0069ff]">
					<li>A search engine and database of abbreviations & acronyms in Go.</li>
					<li>Focused on being minimal, fast, and usable.</li>
					<li>Uses full-text search and fuzzy matching (Jaro-Winkler and Metaphone [Phonetic]).</li>
					<li>
						Experimented with other algorithms for matching — Levenshtein, Jaccard, Aho Corasick, Jaccard, Beider-Morse,
						Soundex. Results were meh though.
					</li>
					<li>Implemented backend admin features for identifying duplicate entries.</li>
					<li>
						It was interesting learning stuff on Go, Docker, Makefile, Templ and dev toolchain (Air, Tailwind, Esbuild,
						Prettier).
					</li>
				</ul>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#0069ff] decoration-8 underline-offset-4">Not yet done</h3>
				<ul class="ms-6 list-outside list-disc space-y-2 marker:text-[#0069ff]">
					<li>Users say a tagging feature will be useful, but is too much work for now.</li>
					<li>
						Semantic-based search would be fun to implement (e.g., searching CEO of ministry should ideally return
						Minister/PS)
					</li>
					<li>If this scales way bigger (or maybe just for fun) - trying Minhash and Bloom filters</li>
					<li>
						Adding Valkey makes it slower than just using SQLite, but I'd love to continue trying ways to cache
						expensive results/queries.
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="col-span-3 -mt-[12rem] hidden xl:flex"><Abbreviation /></div>
</div>
<div
	id="appraize"
	class="scroll-container2 max-w-dvw background-appraize grid min-h-dvh bg-[#491eff]/5 pt-10 lg:grid-cols-3">
	<div class="place-self-center">
		<a href="https://appraize.zixian.dev/"
			><h3 class="text-center font-sans text-6xl font-black tracking-tighter text-[#491eff] lg:text-8xl">
				Appraize
			</h3></a>
		<ExitLinks
			url="https://appraize.zixian.dev/"
			github="https://github.com/zachczx/svelte-appraize"
			className="fill-[#491eff]" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Sveltekit} class="h-10" alt="Sveltekit" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<enhanced:img src={Sortable} class="" alt="Sortable JS"></enhanced:img>
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<enhanced:img src={DrizzlePng} class="rounded-xl" alt="Drizzle"></enhanced:img>
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={TailwindSmall} class="h-10" alt="Tailwind" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Coolify} class="h-10" alt="Coolify" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Postgresql} class="h-10" alt="Postgres" />
			</div>
		</div>
	</div>
	<StackUsed
		framework="Sveltekit"
		library="Sortable, Drizzle, Tailwind, Postgresql, Turso"
		host="Coolify, NodeJS, Nginx"
		className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="grid max-h-[1000px] max-w-[1000px] content-start gap-10 lg:grid-cols-2">
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#491eff] decoration-8 underline-offset-4">The Problem</h3>
				<p>
					How might we speed up ranking sessions, which need manual selection to form a numbered list "1, 2, 3..." on
					Excel. Every change to the list required manual reordering.
				</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#491eff] decoration-8 underline-offset-4">What I wanted</h3>
				<p>Speed up ranking sessions via drag & drop.</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#491eff] decoration-8 underline-offset-4">What I built</h3>
				<ul class="ml-6 list-outside list-disc space-y-2 marker:text-[#491eff]">
					<li>Drag & drop of officers and add. info</li>
					<li>Sessions and mini dashboard each session</li>
					<li>Backend DB (Drizzle + Postgres/Turso)</li>
					<li>CSV bulk uploads</li>
					<li>Filters and keyboard shortcuts</li>
					<li>Form actions/validation</li>
				</ul>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#491eff] decoration-8 underline-offset-4">Not yet done</h3>
				<p>Haven't added authentication, which is probably needed for a private thing like ranking.</p>
			</div>
		</div>
	</div>
	<div class="col-span-3 -mt-[12rem] hidden xl:flex"><Appraize /></div>
</div>

<div
	id="apptitude"
	class="scroll-container1 max-w-dvw background-apptitude grid min-h-dvh bg-lime-400/10 pt-10 lg:grid-cols-3">
	<div class="w-full content-center justify-self-center px-20">
		<div class="flex justify-center">
			<a href="https://titude.app/"><enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class=""></enhanced:img></a>
		</div>
		<ExitLinks url="https://titude.app/" github="https://github.com/zachczx/apptitude" className="fill-lime-400" />
		<div class="mx-10 mt-10 hidden flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Sveltekit} class="h-10" alt="Sveltekit" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Greensock} class="h-10" alt="Gsap" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Pagefind} class="h-10" alt="Pagefind" />
			</div>
		</div>
	</div>
	<StackUsed framework="Sveltekit" library="Gsap, Tailwind, Pagefind" host="Cloudflare" className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="grid max-h-[1000px] max-w-[1000px] content-start gap-10 lg:grid-cols-2">
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-400 decoration-8 underline-offset-4">The Problem</h3>
				<p>
					How might I help my non-technical teammates access to vast repositories of free-to-access knowledge to gain
					tech-related competencies?
				</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-400 decoration-8 underline-offset-4">What I wanted</h3>
				<p>Display lists of tech resources from Youtube, blogs, tutorials, courses, sorted by tech competency.</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-400 decoration-8 underline-offset-4">What I built</h3>
				<ul class="ml-6 list-outside list-disc marker:text-lime-400">
					<li>Static Website</li>
					<li>Used JS objects to store/read info</li>
					<li>I felt CMS, DB, markdown files were unnecessary overhead</li>
				</ul>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-400 decoration-8 underline-offset-4">Not yet done</h3>
				<p>
					Making learning plans the front and center to learning, so all the suggested resources revolve around a
					learning plan once committed.
				</p>
			</div>
		</div>
	</div>
	<div class="col-span-3 -mt-[4rem] hidden xl:flex"><Apptitude /></div>
</div>

<div
	id="btonomics"
	class="scroll-container6 max-w-dvw background-btonomics grid min-h-dvh bg-[#38bdf8]/10 pt-10 lg:grid-cols-3">
	<!-- <style="background: linear-gradient(rgba(250,250,250,0.7), rgba(250,250,250,0.7)), url({shape}); background-size: cover;"> -->
	<div class="place-self-center">
		<div class="flex justify-center">
			<a href="https://btonomics.com"
				><h3 class="pb-4 pt-6 text-center font-serif text-5xl font-bold text-[#38bdf8] lg:text-7xl">BTOnomics</h3></a>
		</div>
		<ExitLinks
			url="https://btonomics.com"
			github="https://github.com/zachczx/astro-btonomics"
			className="fill-[#38bdf8]" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Astro} class="h-10 scale-125" alt="Astro" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" />
			</div>
			<div class="flex items-center justify-center rounded-3xl bg-gray-200/20 p-5 shadow-md backdrop-blur-md">
				<img src={Pagefind} class="h-8" alt="Pagefind" />
			</div>
		</div>
	</div>
	<StackUsed framework="AstroJS" library="Tailwind, Pagefind" host="Cloudflare" className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="grid max-h-[1000px] max-w-[1000px] content-start gap-10 lg:grid-cols-2">
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#38bdf8] decoration-8 underline-offset-4">The Problem</h3>
				<p>Wordpress got too bulky and tiresome to manage and host.</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#38bdf8] decoration-8 underline-offset-4">What I wanted</h3>
				<p>I moved BTOnomics to a more modern framework and tried AstroJS, which had been gaining a lot of praise.</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#38bdf8] decoration-8 underline-offset-4">What I built</h3>
				<ul class="ms-6 list-outside list-disc space-y-2 marker:text-[#38bdf8]">
					<li>Migrated to AstroJS as a static site.</li>
					<li>I enjoyed using Astro. Native markdown support, view transitions, image tooling, fast.</li>
					<li>There's always the option to reach into Svelte/React/Alpine if I wanted to.</li>
					<li>Used ChatGPT to convert WordPress html/shortcode to markdown.</li>
				</ul>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#38bdf8] decoration-8 underline-offset-4">Not yet done</h3>
				<p>
					Haven't recreated all the old functionalities from plugins, especially comments, but I figured I didn't need
					it anyway.
				</p>
			</div>
		</div>
	</div>
	<div class="col-span-3 -mt-[4rem] hidden xl:flex"><Btonomics /></div>
</div>

<div
	id="btonomics-old"
	class="scroll-container5 max-w-dvw background-btonomicsold grid min-h-dvh bg-yellow-500/10 pt-10 lg:grid-cols-3">
	<div class="place-self-center px-20">
		<div class="flex justify-center">
			<a href="https://old.btonomics.com"
				><enhanced:img src={oldBtonomicsLogo} alt="Btonomics Old Logo" class=""></enhanced:img></a>
		</div>
		<ExitLinks url="https://old.btonomics.com" className="fill-yellow-500" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Wordpress} class="h-10" alt="Wordpress" />
			</div>
			<div class="flex items-center justify-center rounded-3xl bg-gray-200/20 p-5 shadow-md backdrop-blur-md">
				<img src={Nginx} class="h-8" alt="Nginx" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Mysql} class="h-10" alt="MySQL" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Bunny} class="h-10" alt="BunnyCDN" />
			</div>
		</div>
	</div>
	<StackUsed framework="Wordpress" library="Mysql" host="Nginx, Apache, Bunny CDN" className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="grid max-h-[1000px] max-w-[1000px] content-start gap-10 lg:grid-cols-2">
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-yellow-500 decoration-8 underline-offset-4">The Problem</h3>
				<p>
					There was barely any info online to guide me through the renovation journey (choosing an ID/contractor,
					deciding on a design, buying from Taobao).
				</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-yellow-500 decoration-8 underline-offset-4">What I wanted</h3>
				<p>
					Started BTOnomics as <a href="https://web.archive.org/web/20180513112335/http://pewpewpew.cc/"
						>pewpewpew.cc</a> in 2018, which was a blog that documented my journey and my advice to other people in similar
					shoes.
				</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-yellow-500 decoration-8 underline-offset-4">What I built</h3>
				<ul class="ml-6 list-outside list-disc space-y-2 marker:text-yellow-500">
					<li>WordPress was the obvious choice.</li>
					<li>Wrote organic content that other people liked as well.</li>
					<li>Tinkered with themes & plug-ins, tweaking, optimizing.</li>
					<li>Finetuned content for SEO and Core Web Vitals, esp TTFB/LCP.</li>
				</ul>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-yellow-500 decoration-8 underline-offset-4">Not yet done</h3>
				<p>
					Wordpress got too bulky and tiresome to manage and host. Not least the sprawling repository of images (not
					least the multiple resized copies of every image). I'm still keeping this Wordpress instance out of nostalgia.
				</p>
			</div>
		</div>
	</div>
	<div class="col-span-3 -mt-[4rem] hidden xl:flex"><Btonomicsold /></div>
</div>

<div
	id="eatyourmeds"
	class="scroll-container4 max-w-dvw background-eatyourmeds grid min-h-dvh bg-lime-700/10 pt-10 lg:grid-cols-3">
	<div class="place-self-center px-20">
		<div class="avatar flex justify-center">
			<div class="w-56 rounded-full">
				<a href="https://eatyourmeds.zixian.dev/"
					><enhanced:img src={eatYourMedsLogo} alt="Eat Your Meds!"></enhanced:img></a>
			</div>
		</div>
		<ExitLinks
			url="https://eatyourmeds.zixian.dev/"
			github="https://github.com/zachczx/django-eatyourmeds"
			className="fill-lime-700" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Django} class="h-10" alt="Django" />
			</div>
			<div class="flex items-center justify-center rounded-3xl bg-gray-200/20 p-5 shadow-md backdrop-blur-md">
				<img src={Htmx} class="h-8" alt="Htmx" />
			</div>
			<div class="flex items-center justify-center rounded-3xl bg-gray-200/20 p-5 shadow-md backdrop-blur-md">
				<img src={Nginx} class="h-8" alt="Nginx" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Gunicorn} class="h-10" alt="Gunicorn" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Bootstrap} class="h-10" alt="Bootstrap" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Postgresql} class="h-10" alt="Postgres" />
			</div>
		</div>
	</div>
	<StackUsed framework="Django" library="HTMX, Bootstrap, Postgresql" host="Nginx, Gunicorn" className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="grid max-h-[1000px] max-w-[1000px] content-start gap-10 lg:grid-cols-2">
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-700 decoration-8 underline-offset-4">The Problem</h3>
				<p>How might I make it easier and shorter to plan medicine dose timings and get accurate info.</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-700 decoration-8 underline-offset-4">What I wanted</h3>
				<p>Make it less tedious for both of us parents to record/coord medicine stuff and sync with one another.</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-700 decoration-8 underline-offset-4">What I built</h3>
				<ul class="ml-6 list-outside list-disc space-y-2 marker:text-lime-700">
					<li>Basic CRUD webapp with user authentication.</li>
					<li>Sprinkled HTMX and datepicker.js for user interactions.</li>
					<li>Backend via Django</li>
				</ul>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-700 decoration-8 underline-offset-4">Not yet done</h3>
				<p>Honestly, ChatGPT does it better (Gemini refuses, so no luck there).</p>
			</div>
		</div>
	</div>
	<div class="col-span-3 -mt-[4rem] hidden xl:flex"><Eatyourmeds /></div>
</div>

<div
	id="rankamate"
	class="scroll-container3 max-w-dvw background-rankamate grid min-h-dvh bg-red-800/10 pt-10 lg:grid-cols-3">
	<div class="w-full place-self-center px-20">
		<div class="flex content-center items-center justify-center">
			<a href="https://rankamate.zixian.dev/"><enhanced:img src={rankamateLogo} alt="Rank-a-Mate"></enhanced:img></a>
		</div>
		<ExitLinks
			url="https://rankamate.zixian.dev/"
			github="https://github.com/zachczx/django-rankamate"
			className="fill-red-800" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Django} class="h-10" alt="Django" />
			</div>
			<div class="flex items-center justify-center rounded-3xl bg-gray-200/20 p-5 shadow-md backdrop-blur-md">
				<img src={Htmx} class="h-8" alt="Htmx" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<enhanced:img src={Sortable} class="" alt="Sortable JS"></enhanced:img>
			</div>
			<div class="flex items-center justify-center rounded-3xl bg-gray-200/20 p-5 shadow-md backdrop-blur-md">
				<img src={Nginx} class="h-8" alt="Nginx" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Gunicorn} class="h-10" alt="Gunicorn" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Bootstrap} class="h-10" alt="Bootstrap" />
			</div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4 shadow-md backdrop-blur-md">
				<img src={Postgresql} class="h-10" alt="Postgres" />
			</div>
		</div>
	</div>
	<StackUsed
		framework="Django"
		library="HTMX, SortableJS, Bootstrap, Postgresql"
		host="Nginx, Gunicorn"
		className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="grid max-h-[1000px] max-w-[1000px] content-start gap-10 lg:grid-cols-2">
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-red-800 decoration-8 underline-offset-4">The Problem</h3>
				<p>Rank-a-Mate was my first stab at making a drag & drop tool for ranking sessions in lieu of Excel.</p>
				<ul class="ml-6 list-outside list-disc space-y-2 marker:text-red-800">
					<li>
						Same problem statement - How might we speed up ranking sessions, which need manual selection to form a
						numbered list "1, 2, 3..." on Excel.
					</li>
					<li>Every change to the list required manual reordering.</li>
				</ul>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-red-800 decoration-8 underline-offset-4">What I wanted</h3>
				<p>Speed up ranking sessions via drag & drop.</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-red-800 decoration-8 underline-offset-4">What I built</h3>
				<ul class="ml-6 list-outside list-disc space-y-2 marker:text-red-800">
					<li>Basic CRUD webapp with drag & drop of officers and session-based workflow</li>
					<li>Allowed addition of supplementary info (grades, dept)</li>
					<li>Sliders to adjust quotas for each grade</li>
					<li>Backend DB via Django</li>
				</ul>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-red-800 decoration-8 underline-offset-4">Not yet done</h3>
				<ul class="ml-6 list-outside list-disc space-y-2 marker:text-red-800">
					<li>Rebuilt this as Appraize.</li>
					<li>
						This lacked filters, dashboard, keyboard shortcuts, uploads, etc that I subsequently built in Appraize.
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="col-span-3 -mt-[4rem] hidden xl:flex"><Rankamate /></div>
</div>

<style>
	/* * {
		border: red solid 1px;
	} */

	/* h1:not(.font-sans),
	h2:not(.font-sans),
	h3:not(.font-sans) {
		font-family: 'IBM Plex Serif', serif;
	} */

	/* .scroll-container1,
	.scroll-container2,
	.scroll-container3,
	.scroll-container4,
	.scroll-container5,
	.scroll-container6 {
		overflow-x: clip;
	} */

	/* 	
	##Device = Desktops
	##Screen = 1281px to higher resolution desktops
	https://gist.github.com/gokulkrishh/242e68d1ee94ad05f488
	 */
	@media (min-width: 1281px) {
		/* .background-apptitude {
			background: radial-gradient(600px at 40% 30%, rgb(180, 227, 115, 1), #fafafa 40%, transparent),
				radial-gradient(300px at 50% 70%, rgb(180, 227, 115, 0.99), #fafafa 80%, transparent),
				radial-gradient(600px at 90% 70%, rgb(180, 227, 115, 0.7), #fafafa, transparent);
		}
		.background-appraize {
			background: radial-gradient(500px at 30% 30%, rgba(73, 30, 255, 0.2), #fafafa, transparent),
				radial-gradient(600px at 90% 50%, rgb(73, 30, 255, 0.6), #fafafa 40%, transparent);
		} */
		/* .background-rankamate {
			background: radial-gradient(300px at 10% 20%, rgb(153, 27, 27, 0.2), #fafafa, transparent),
				radial-gradient(800px at 70% 50%, rgb(153, 27, 27, 0.6), #fafafa, transparent),
				radial-gradient(750px at 90% 30%, rgb(153, 27, 27, 0.1), #fafafa, transparent);
		}
		.background-eatyourmeds {
			background: radial-gradient(500px at 40% 50%, rgba(77, 124, 15, 0.2), #fafafa, transparent),
				radial-gradient(800px at 90% 70%, rgb(77, 124, 15, 0.05), #fafafa, transparent);
		} */
	}
</style>
