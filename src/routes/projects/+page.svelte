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
	import Pocketbase from '$lib/logos/pocketbase.svg?dataurl';

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
	import Cancelninja from '$lib/waves/Cancelninja.svelte';
	import Stytch from '$lib/logos/Stytch.svelte';
	import Particles from '$lib/magic-ui/Particles.svelte';

	import Projects from '$lib/assets/allison-saeng-g45iYq7eQR4-unsplash.jpg?enhanced&w=1920px;1080px;768px;640px;400px';
	import Junkyard from '$lib/assets/sohrab-zia-WXdMkkkZWg4-unsplash.jpg?enhanced&w=1920px;1080px;768px;640px;400px';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const splash = document.getElementsByClassName('trigger-splash');
		const particles = document.getElementsByClassName('trigger-particles');
		const particlesContainer = document.getElementsByClassName('trigger-particles-container');
		let tl = gsap.matchMedia();
		tl.add('(min-width: 1028px)', () => {
			for (let i = 0; i < splash.length; i++) {
				gsap.to(splash[i], {
					scrollTrigger: {
						trigger: splash[i],
						start: 'start start',
						scrub: true,
						markers: false,
					},
					y: 300,
					filter: 'grayscale(50%)',
				});
			}

			for (let i = 0; i < particles.length; i++) {
				gsap.from(particles[i], {
					scrollTrigger: {
						trigger: particlesContainer[i],
						start: 'start center',
						// scrub: true,
						markers: false,
					},
					autoAlpha: 0,
				});
			}
		});
	});
</script>

<div class="relative min-h-[30vh] overflow-hidden">
	<div class="absolute left-1/2 top-10 z-[1] -translate-x-1/2 text-center text-black/90">
		<h2 class="lg:pt-20 xl:pt-28 2xl:pt-40">Projects</h2>
		<p class="mt-4 text-xl">Things I created to solve my problems.</p>
	</div>
	<enhanced:img
		src={Projects}
		alt="Projects"
		class="trigger-splash lg:brightness-25 max-h-[30rem] w-full object-cover object-top opacity-[0.2] lg:max-h-[40rem] xl:max-h-[80dvh] xl:opacity-100"
		sizes="(min-width:1920px) 1920px, (min-width:1080px) 1080px, (min-width:768px) 768px, (min-width:640px) 640px, (min-width:400px) 400px" />
</div>

<div id="abbreviation" class="max-w-dvw trigger-particles-container relative grid py-10 lg:grid-cols-3 lg:py-20">
	<div class="z-[1] place-self-center">
		<div class="flex justify-center">
			<a href="https://abbreviation.zixian.dev"
				><h3 class="text-center text-5xl font-bold tracking-tighter text-[#0069ff] lg:text-7xl">
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
		<ExitLinks url="https://abbreviation.zixian.dev" className="fill-[#0069ff] shadow-md" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md">
				<img src={Golang} class="h-10 scale-125" alt="Golang" />
			</div>
			<div class="z-[1] flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
				<img src={Htmx} class="h-8" alt="Htmx" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Sqlite} class="h-10 grow" alt="Sqlite" />
			</div>
			<div class="z-[1] flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
				<img src={Templ} class="h-8" alt="Templ" />
			</div>
		</div>
	</div>
	<StackUsed framework="Go, SQLite" library="HTMX, Templ, Tailwind" host="" className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="z-[1] grid content-start gap-10 lg:grid-cols-2 xl:max-w-[1600px]">
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#0069ff] decoration-8 underline-offset-4">Problem</h3>
				<p>
					People forget what acronyms and abbreviations mean. They then need to ask a colleague or pray that it shows up
					in email archives.
				</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#0069ff] decoration-8 underline-offset-4">What I wanted</h3>
				<p>
					I wanted to build a lightweight search app for abbreviations. There were already a few JS side projects by
					individual civil servants, but I wanted to make a faster one with Go.
				</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
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
				class="grid h-full content-start space-y-2 lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
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
	<div class="trigger-particles hidden lg:flex">
		<Particles className="absolute inset-0 opacity-[0.3]" refresh={true} color="#0069ff" quantity="70" size="5" />
	</div>
</div>

<div
	id="appraize"
	class="max-w-dvw trigger-particles-container relative grid bg-[#491eff]/5 py-10 lg:grid-cols-3 lg:py-20">
	<div class="z-[1] place-self-center">
		<a href="https://appraize.zixian.dev/"
			><h3 class="text-center font-sans text-5xl font-black tracking-tighter text-[#491eff] lg:text-7xl">
				Appraize
			</h3></a>
		<ExitLinks
			url="https://appraize.zixian.dev/"
			github="https://github.com/zachczx/svelte-appraize"
			className="fill-[#491eff]" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Sveltekit} class="h-10" alt="Sveltekit" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<enhanced:img src={Sortable} class="" alt="Sortable JS"></enhanced:img>
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<enhanced:img src={DrizzlePng} class="rounded-xl" alt="Drizzle"></enhanced:img>
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={TailwindSmall} class="h-10" alt="Tailwind" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Coolify} class="h-10" alt="Coolify" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Postgresql} class="h-10" alt="Postgres" />
			</div>
		</div>
	</div>
	<StackUsed
		framework="Sveltekit"
		library="Sortable, Drizzle, Tailwind, Postgres, Turso"
		host="Coolify, NodeJS, Nginx"
		className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="z-[1] grid max-w-[1400px] content-start gap-10 lg:grid-cols-2">
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#491eff] decoration-8 underline-offset-4">Problem</h3>
				<p>
					How might we speed up ranking sessions, which need manual selection to form a numbered list "1, 2, 3..." on
					Excel. Every change to the list required manual reordering.
				</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#491eff] decoration-8 underline-offset-4">What I wanted</h3>
				<p>Speed up ranking sessions via drag & drop.</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
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
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#491eff] decoration-8 underline-offset-4">Not yet done</h3>
				<p>Haven't added authentication, which is probably needed for a private thing like ranking.</p>
			</div>
		</div>
	</div>
	<div class="hidden lg:flex">
		<Particles
			className="absolute inset-0 opacity-[0.3] trigger-particles"
			refresh={true}
			color="#491eff"
			quantity="25"
			size="15" />
	</div>
</div>

<div
	id="apptitude"
	class="max-w-dvw trigger-particles-container relative grid bg-lime-400/5 py-10 lg:grid-cols-3 lg:py-20">
	<div class="z-[1] w-full content-center justify-self-center px-20">
		<div class="flex justify-center">
			<a href="https://titude.app/" aria-label="Apptitude webapp"
				><enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class=""></enhanced:img></a>
		</div>
		<ExitLinks url="https://titude.app/" github="https://github.com/zachczx/apptitude" className="fill-lime-400" />
		<div class="mx-10 mt-10 hidden flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Sveltekit} class="h-10" alt="Sveltekit" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Greensock} class="h-10" alt="Gsap" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Pagefind} class="h-10" alt="Pagefind" />
			</div>
		</div>
	</div>
	<StackUsed framework="Sveltekit" library="Gsap, Tailwind, Pagefind" host="Cloudflare" className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="z-[1] grid max-w-[1400px] content-start gap-10 lg:grid-cols-2">
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-400 decoration-8 underline-offset-4">Problem</h3>
				<p>
					How might I help my non-technical teammates access to vast repositories of free-to-access knowledge to gain
					tech-related competencies?
				</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-400 decoration-8 underline-offset-4">What I wanted</h3>
				<p>Display lists of tech resources from Youtube, blogs, tutorials, courses, sorted by tech competency.</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-400 decoration-8 underline-offset-4">What I built</h3>
				<ul class="ml-6 list-outside list-disc marker:text-lime-400">
					<li>Static Website</li>
					<li>Used JS objects to store/read info</li>
					<li>I felt CMS, DB, markdown files were unnecessary overhead</li>
				</ul>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-400 decoration-8 underline-offset-4">Not yet done</h3>
				<p>
					Making learning plans the front and center to learning, so all the suggested resources revolve around a
					learning plan once committed.
				</p>
			</div>
		</div>
	</div>
	<div class="hidden lg:flex">
		<Particles
			className="absolute inset-0 opacity-[0.5] trigger-particles"
			refresh={true}
			color="#a3e635"
			quantity="20"
			size="2" />
	</div>
</div>

<div
	id="btonomics"
	class="max-w-dvw trigger-particles-container relative grid bg-[#38bdf8]/15 py-10 lg:grid-cols-3 lg:py-20">
	<div class="z-[1] place-self-center">
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
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Astro} class="h-10 scale-125" alt="Astro" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" />
			</div>
			<div class="z-[1] flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
				<img src={Pagefind} class="h-8" alt="Pagefind" />
			</div>
		</div>
	</div>
	<StackUsed framework="AstroJS" library="Tailwind, Pagefind" host="Cloudflare" className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="z-[1] grid max-w-[1400px] content-start gap-10 lg:grid-cols-2">
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#38bdf8] decoration-8 underline-offset-4">Problem</h3>
				<ul class="ms-6 list-outside list-disc space-y-2 marker:text-[#38bdf8]">
					<li>I just lost interest in Wordpress and shared hosting.</li>
					<li>PHP, plugins/themes, huge MySQL database felt too legacy.</li>
					<li>
						Wordpress still felt bloated on a VPS, compared to what I felt was achievable with e.g. Astro, Hugo, Gatsby,
						Eleventy.
					</li>
				</ul>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#38bdf8] decoration-8 underline-offset-4">What I wanted</h3>
				<ul class="ms-6 list-outside list-disc space-y-2 marker:text-[#38bdf8]">
					<li>Rebuilt BTOnomics with AstroJS, because I saw all the praises and wanted to try it out.</li>
					<li>
						I'm happy with Astro. It's indeed good for content-first sites. It's fast. I also like native markdown
						support, view transitions, shipping HTML/CSS first.
					</li>
				</ul>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#38bdf8] decoration-8 underline-offset-4">What I built</h3>
				<ul class="ms-6 list-outside list-disc space-y-2 marker:text-[#38bdf8]">
					<li>Migrated to AstroJS as a static site.</li>
					<li>Used ChatGPT to convert WordPress html/shortcode to markdown.</li>
					<li>Recently did some rewriting to convert to Astro 5's Content Layer API.</li>
					<li>In the process I added QOL stuff like tag filtering</li>
				</ul>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#38bdf8] decoration-8 underline-offset-4">Not yet done</h3>
				<p>
					Didn't recreate Wordpress' social features, especially comments. But I don't want/need it, neither does the
					blog.
				</p>
			</div>
		</div>
	</div>
	<div class="hidden lg:flex">
		<Particles
			className="absolute inset-0 opacity-[0.3] trigger-particles"
			refresh={true}
			color="#38bdf8"
			quantity="20"
			size="15" />
	</div>
</div>

<div id="cancelninja" class="scroll-container4 max-w-dvw relative grid bg-sky-500/5 py-10 lg:grid-cols-3 lg:py-20">
	<div class="z-[1] place-self-center px-20 text-center">
		<a href="/projects/#cancelninja" class="group inline-block">
			<h3 class="text-5xl font-extrabold tracking-tighter text-base-content lg:text-7xl">
				Cancel Ninj<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="-ms-1 inline rotate-45 group-hover:text-[#3b82f6]"
					viewBox="0 0 512 512"
					><path
						fill="currentColor"
						d="m395.13 313l89.869-100.857H388.08c-45.748 0-82.824-37.063-82.824-82.824l-.297-33.208l-100.857-77.147v96.917c0 45.751-37.06 82.824-82.822 82.824l-9.844.298L27.001 299.86h96.92c45.75 0 82.822 37.062 82.822 82.824l.298 20.484l100.854 89.868v-96.913c0-45.749 37.062-82.823 82.824-82.823zM256 306.669c-27.99 0-50.666-22.685-50.666-50.665c0-27.99 22.679-50.671 50.665-50.671c27.99 0 50.67 22.682 50.67 50.671c0 27.98-22.683 50.665-50.67 50.665z" /></svg>
			</h3>
		</a>
		<ExitLinks url="https://cancelninja.com" className="fill-lime-700" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Sveltekit} class="h-10" alt="Sveltekit" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={TailwindSmall} class="h-10" alt="Tailwind" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Pocketbase} class="h-10" alt="Pocketbase" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Coolify} class="h-10" alt="Coolify" />
			</div>
		</div>
	</div>
	<StackUsed framework="Sveltekit, Pocketbase" library="Tailwind" host="Coolify" className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="z-[1] grid max-w-[1400px] content-start gap-10 lg:grid-cols-2">
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-sky-500 decoration-8 underline-offset-4">Problem</h3>
				<p>How might I stop getting tricked into paying for subscriptions I don't want.</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-sky-500 decoration-8 underline-offset-4">What I wanted</h3>
				<p>Subscription tracker that alerts me about known dark patterns and companies' dirty tricks.</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-sky-500 decoration-8 underline-offset-4">What I built</h3>
				<ul class="ml-6 list-outside list-disc space-y-2 marker:text-sky-500">
					<li>CRUD webapp, with authentication, user stuff, and calendar view.</li>
				</ul>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-sky-500 decoration-8 underline-offset-4">Not yet done</h3>
				<p>Probably OCR or natural language processing for greater automation.</p>
			</div>
		</div>
	</div>
	<div class="hidden lg:flex">
		<Particles
			className="absolute inset-0 opacity-[0.1] trigger-particles"
			refresh={true}
			color="#0ea5e9"
			quantity="30"
			size="10" />
	</div>
</div>

<div id="grumplr" class="scroll-container4 max-w-dvw relative grid bg-lime-200/30 py-10 lg:grid-cols-3 lg:py-20">
	<div class="z-[1] place-self-center px-20 text-center">
		<a href="/projects/#grumplr" class="group inline-block">
			<h3 class="font-inter text-5xl font-normal tracking-tighter text-[#1b510f] lg:text-7xl">Grumplr</h3>
		</a>
		<ExitLinks url="https://grumplr.com" github="https://github.com/zachczx/gorant" className="fill-[#1b510f]" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md">
				<img src={Golang} class="h-10 scale-125" alt="Golang" />
			</div>
			<div class="z-[1] flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
				<img src={Htmx} class="h-8" alt="Htmx" />
			</div>

			<div class="z-[1] flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
				<img src={Templ} class="h-8" alt="Templ" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Postgresql} class="h-10" alt="Postgres" />
			</div>
			<div>
				<div
					class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
					<Stytch class="h-10" />
				</div>
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" />
			</div>
		</div>
	</div>
	<StackUsed framework="Go, Postgres" library="Templ, HTMX, Tailwind" host="Coolify" className="lg:hidden" />
	<div class="z-[1] grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="grid max-w-[1400px] content-start gap-10 lg:grid-cols-2">
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#1b510f] decoration-8 underline-offset-4">Problem</h3>
				<p>
					I'm reinventing the wheel to learn building a bulletin board with Go, writing SQL, vanilla JS. I also wanted
					to try using authentication SaaS and implementing magic link logins.
				</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#1b510f] decoration-8 underline-offset-4">What I wanted</h3>
				<p>The usual posting, commenting, upvoting, anonymous mode, tagging, user management.</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#1b510f] decoration-8 underline-offset-4">What I built</h3>
				<ul class="ml-6 list-outside list-disc space-y-2 marker:text-[#1b510f]">
					<li>A small bullet board, with posting, commenting, upvoting, tagging, authentication, user management.</li>
				</ul>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#1b510f] decoration-8 underline-offset-4">Not yet done</h3>
				<ul class="ml-6 list-outside list-disc space-y-2 marker:text-[#1b510f]">
					<li>Currently redoing auth to semi-DIY with Keycloak.</li>
					<li>Probably QOL stuff like markdown formatting, polls, admin moderation.</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="hidden lg:flex">
		<Particles
			className="absolute inset-0 opacity-[0.1] trigger-particles"
			refresh={true}
			color="#1b510f"
			quantity="30"
			size="10" />
	</div>
</div>

<div class="relative min-h-[30vh]">
	<div class="absolute left-1/2 top-10 z-[1] -translate-x-1/2 text-center text-black/90">
		<h2 class="lg:pt-10">The Junkyard</h2>
		<p class="mt-4 text-xl">Projects of the past that I don't work on now.</p>
	</div>
	<enhanced:img
		src={Junkyard}
		alt="Junkyard"
		class="trigger-splash lg:brightness-25 max-h-[30rem] w-full object-cover object-center opacity-[0.2] lg:max-h-[40rem] lg:opacity-100 xl:max-h-[80dvh]"
		sizes="(min-width:1920px) 1920px, (min-width:1080px) 1080px, (min-width:768px) 768px, (min-width:640px) 640px, (min-width:400px) 400px" />
</div>

<div
	id="btonomics-old"
	class="max-w-dvw grid bg-yellow-200 py-10 saturate-50 hover:saturate-100 lg:grid-cols-3 lg:py-20">
	<div class="z-[1] place-self-center px-20">
		<div class="flex justify-center">
			<a href="https://old.btonomics.com" aria-label="BTOnomics Old"
				><enhanced:img src={oldBtonomicsLogo} alt="Btonomics Old Logo" class=""></enhanced:img></a>
		</div>
		<ExitLinks url="https://old.btonomics.com" className="fill-yellow-500" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Wordpress} class="h-10" alt="Wordpress" />
			</div>
			<div class="z-[1] flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
				<img src={Nginx} class="h-8" alt="Nginx" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Mysql} class="h-10" alt="MySQL" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Bunny} class="h-10" alt="BunnyCDN" />
			</div>
		</div>
	</div>
	<StackUsed framework="Wordpress" library="Mysql" host="Nginx, Apache, Bunny CDN" className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="grid max-w-[1400px] content-start gap-10 lg:grid-cols-2">
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-yellow-500 decoration-8 underline-offset-4">Problem</h3>
				<p>
					There was barely any info online to guide me through the renovation journey (choosing an ID/contractor,
					deciding on a design, buying from Taobao).
				</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-yellow-500 decoration-8 underline-offset-4">What I wanted</h3>
				<p>
					Started BTOnomics as <a href="https://web.archive.org/web/20180513112335/http://pewpewpew.cc/"
						>pewpewpew.cc</a> in 2018, which was a blog that documented my journey and my advice to other people in similar
					shoes.
				</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-yellow-500 decoration-8 underline-offset-4">What I built</h3>
				<ul class="ml-6 list-outside list-disc space-y-2 marker:text-yellow-500">
					<li>WordPress was the obvious choice.</li>
					<li>Wrote organic content that other people liked as well.</li>
					<li>Tinkered with themes & plug-ins, tweaking, optimizing.</li>
					<li>Finetuned content for SEO and Core Web Vitals, esp TTFB/LCP.</li>
				</ul>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-yellow-500 decoration-8 underline-offset-4">Not yet done</h3>
				<p>
					Wordpress got too bulky and tiresome to manage and host. Not least the sprawling repository of images (not
					least the multiple resized copies of every image). I'm still keeping this Wordpress instance out of nostalgia.
				</p>
			</div>
		</div>
	</div>
</div>

<div
	id="eatyourmeds"
	class="max-w-dvw grid bg-lime-700/20 py-10 saturate-50 hover:saturate-100 lg:grid-cols-3 lg:py-20">
	<div class="z-[1] place-self-center px-20">
		<div class="avatar flex justify-center">
			<div class="w-56 rounded-full">
				<a href="https://eatyourmeds.zixian.dev/" aria-label="Eat Your Meds webapp"
					><enhanced:img src={eatYourMedsLogo} alt="Eat Your Meds!"></enhanced:img></a>
			</div>
		</div>
		<ExitLinks
			url="https://eatyourmeds.zixian.dev/"
			github="https://github.com/zachczx/django-eatyourmeds"
			className="fill-lime-700" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Django} class="h-10" alt="Django" />
			</div>
			<div class="z-[1] flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
				<img src={Htmx} class="h-8" alt="Htmx" />
			</div>
			<div class="z-[1] flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
				<img src={Nginx} class="h-8" alt="Nginx" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Gunicorn} class="h-10" alt="Gunicorn" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Bootstrap} class="h-10" alt="Bootstrap" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Postgresql} class="h-10" alt="Postgres" />
			</div>
		</div>
	</div>
	<StackUsed framework="Django" library="HTMX, Bootstrap, Postgresql" host="Nginx, Gunicorn" className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="grid max-w-[1400px] content-start gap-10 lg:grid-cols-2">
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-700 decoration-8 underline-offset-4">Problem</h3>
				<p>How might I make it easier and shorter to plan medicine dose timings and get accurate info.</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-700 decoration-8 underline-offset-4">What I wanted</h3>
				<p>Make it less tedious for both of us parents to record/coord medicine stuff and sync with one another.</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-700 decoration-8 underline-offset-4">What I built</h3>
				<ul class="ml-6 list-outside list-disc space-y-2 marker:text-lime-700">
					<li>Basic CRUD webapp with user authentication.</li>
					<li>Sprinkled HTMX and datepicker.js for user interactions.</li>
					<li>Backend via Django</li>
				</ul>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-lime-700 decoration-8 underline-offset-4">Not yet done</h3>
				<p>Honestly, ChatGPT does it better (Gemini refuses, so no luck there).</p>
			</div>
		</div>
	</div>
</div>

<div id="rankamate" class="max-w-dvw grid bg-red-800/20 py-10 saturate-50 hover:saturate-100 lg:grid-cols-3 lg:py-20">
	<div class="z-[1] w-full place-self-center px-20">
		<div class="flex content-center items-center justify-center">
			<a href="https://rankamate.zixian.dev/" aria-label="Rank-a-Mate webapp"
				><enhanced:img src={rankamateLogo} alt="Rank-a-Mate"></enhanced:img></a>
		</div>
		<ExitLinks
			url="https://rankamate.zixian.dev/"
			github="https://github.com/zachczx/django-rankamate"
			className="fill-red-800" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Django} class="h-10" alt="Django" />
			</div>
			<div class="z-[1] flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
				<img src={Htmx} class="h-8" alt="Htmx" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<enhanced:img src={Sortable} class="" alt="Sortable JS"></enhanced:img>
			</div>
			<div class="z-[1] flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
				<img src={Nginx} class="h-8" alt="Nginx" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Gunicorn} class="h-10" alt="Gunicorn" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<img src={Bootstrap} class="h-10" alt="Bootstrap" />
			</div>
			<div
				class="z-[1] flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
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
		<div class="grid max-w-[1400px] content-start gap-10 lg:grid-cols-2">
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-red-800 decoration-8 underline-offset-4">Problem</h3>
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
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-red-800 decoration-8 underline-offset-4">What I wanted</h3>
				<p>Speed up ranking sessions via drag & drop.</p>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
				<h3 class="mb-4 underline decoration-red-800 decoration-8 underline-offset-4">What I built</h3>
				<ul class="ml-6 list-outside list-disc space-y-2 marker:text-red-800">
					<li>Basic CRUD webapp with drag & drop of officers and session-based workflow</li>
					<li>Allowed addition of supplementary info (grades, dept)</li>
					<li>Sliders to adjust quotas for each grade</li>
					<li>Backend DB via Django</li>
				</ul>
			</div>
			<div
				class="grid content-start space-y-2 lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 lg:backdrop-blur-md xl:border xl:border-gray-200 xl:bg-white/70 xl:shadow-md">
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
</div>

<style>
	/* * {
		border: red solid 1px;
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
