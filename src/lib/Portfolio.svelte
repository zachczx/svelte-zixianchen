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
	import CodeTypingBro from './svg/Code-typing-bro.svelte';
	import ExitLinks from './ExitLinks.svelte';
	import Golang from '$lib/logos/Golang.svg?dataurl';
	import Sqlite from '$lib/logos/sqlite.svg?dataurl';
	import Templ from '$lib/logos/templ.svg?dataurl';

	onMount(() => {
		// let segments = gsap.utils.toArray('.scroll-content');
		const svgTyping = document.getElementsByClassName('bubble');
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
		 * For the coding bros typing svg animations
		 */
		const svgTypingAnimation = gsap.timeline({ repeat: -1 });
		svgTypingAnimation.to(svgTyping, {
			stagger: { each: 0.2, from: 'random' },
			duration: 0.5,
			// ease: 'bounce.out',
			scale: 1.4,
		});
		svgTypingAnimation.to(svgTyping, {
			stagger: { each: 0.2, from: 'random' },
			duration: 0.9,
			// ease: 'bounce.out',
			scale: 1,
		});

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
	});
</script>

<div class="grid justify-items-center bg-gray-50 pb-20 pt-20 lg:min-h-dvh lg:grid-cols-10">
	<h2 class="text-center lg:col-span-10">Here are a few I've done.</h2>

	<figure class="hidden self-center lg:col-span-3 lg:grid">
		<enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class="scale-75"></enhanced:img>
		<figcaption class="-mt-3 text-center italic">Tech-related upskilling</figcaption>
	</figure>

	<div class="lg:col-span-4 lg:row-span-2">
		<CodeTypingBro class="h-96 w-96 xl:h-[40rem] xl:w-[40rem]" />
	</div>

	<figure class="col-span-3 hidden space-y-4 self-center lg:grid">
		<h3 class="text-center font-sans text-4xl font-black text-[#491eff] lg:text-6xl">Appraize</h3>
		<figcaption class="text-center italic">Drop & drop ranking</figcaption>
	</figure>

	<figure class="col-span-3 hidden content-center justify-items-center space-y-4 self-center lg:grid">
		<div class="avatar">
			<div class="w-32 rounded-full">
				<enhanced:img src={eatYourMedsLogo} alt="Eat Your Meds!"></enhanced:img>
			</div>
		</div>
		<figcaption class="text-center italic">Medicine dose tracker</figcaption>
	</figure>

	<figure class="col-span-3 hidden content-center justify-items-center self-center lg:grid">
		<enhanced:img src={rankamateLogo} alt="Rank-a-Mate" class="scale-[0.6]"></enhanced:img>
		<figcaption class="-mt-6 italic">Drag & drop ranking v0.1</figcaption>
	</figure>

	<div class="hidden lg:col-span-3 lg:grid"></div>

	<div class="-mt-4 hidden self-start lg:col-span-4 lg:flex lg:items-center lg:justify-center">
		<figure class="grid justify-items-center space-y-3">
			<h3 class="hidden font-serif text-4xl font-bold text-[#38bdf8] lg:flex lg:text-6xl">BTOnomics</h3>
			<figcaption class="italic">Budget home renovation blog</figcaption>
		</figure>
	</div>

	<div class="hidden lg:col-span-3 lg:grid"></div>
</div>
<div id="apptitude" class="scroll-container1 max-w-dvw background-1 grid min-h-dvh py-10 lg:grid-cols-3">
	<div class="w-full content-center justify-self-center px-20">
		<div class="flex justify-center">
			<a href="https://titude.app/"><enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class=""></enhanced:img></a>
		</div>
		<ExitLinks url="https://titude.app/" github="https://github.com/zachczx/apptitude" className="fill-lime-400" />
		<div class="mx-10 mt-10 hidden flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Sveltekit} class="h-10" alt="Sveltekit" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Greensock} class="h-10" alt="Gsap" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
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
</div>

<div class="scroll-container2 max-w-dvw background-2 grid min-h-dvh py-10 lg:grid-cols-3">
	<div class="place-self-center">
		<a href="https://appraize.zixian.dev/"
			><h3 class="text-center font-sans text-6xl font-black text-[#491eff] lg:text-8xl">Appraize</h3></a>
		<ExitLinks
			url="https://appraize.zixian.dev/"
			github="https://github.com/zachczx/svelte-appraize"
			className="fill-[#491eff]" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Sveltekit} class="h-10" alt="Sveltekit" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<enhanced:img src={Sortable} class="" alt="Sortable JS"></enhanced:img>
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<enhanced:img src={DrizzlePng} class="rounded-xl" alt="Drizzle"></enhanced:img>
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={TailwindSmall} class="h-10" alt="Tailwind" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Coolify} class="h-10" alt="Coolify" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
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
</div>

<div class="scroll-container3 max-w-dvw background-3 grid min-h-dvh py-10 lg:grid-cols-3">
	<div class="w-full place-self-center px-20">
		<div class="flex content-center items-center justify-center">
			<a href="https://rankamate.zixian.dev/"><enhanced:img src={rankamateLogo} alt="Rank-a-Mate"></enhanced:img></a>
		</div>
		<ExitLinks
			url="https://rankamate.zixian.dev/"
			github="https://github.com/zachczx/django-rankamate"
			className="fill-red-800" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Django} class="h-10" alt="Django" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl bg-gray-200/20 p-5">
				<img src={Htmx} class="h-8" alt="Htmx" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<enhanced:img src={Sortable} class="" alt="Sortable JS"></enhanced:img>
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl bg-gray-200/20 p-5">
				<img src={Nginx} class="h-8" alt="Nginx" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Gunicorn} class="h-10" alt="Gunicorn" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Bootstrap} class="h-10" alt="Bootstrap" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
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
				<p>
					Rebuilt this as Appraize. This lacked filters, dashboard, keyboard shortcuts, uploads, etc that I subsequently
					built in Appraize.
				</p>
			</div>
		</div>
	</div>
</div>

<div class="scroll-container4 max-w-dvw background-4 grid min-h-dvh py-10 lg:grid-cols-3">
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
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Django} class="h-10" alt="Django" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl bg-gray-200/20 p-5">
				<img src={Htmx} class="h-8" alt="Htmx" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl bg-gray-200/20 p-5">
				<img src={Nginx} class="h-8" alt="Nginx" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Gunicorn} class="h-10" alt="Gunicorn" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Bootstrap} class="h-10" alt="Bootstrap" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
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
</div>

<div class="scroll-container5 max-w-dvw background-5 grid min-h-dvh py-10 lg:grid-cols-3">
	<div class="place-self-center px-20">
		<div class="flex justify-center">
			<a href="https://old.btonomics.com"
				><enhanced:img src={oldBtonomicsLogo} alt="Btonomics Old Logo" class=""></enhanced:img></a>
		</div>
		<ExitLinks url="https://old.btonomics.com" className="fill-yellow-500" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Wordpress} class="h-10" alt="Wordpress" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl bg-gray-200/20 p-5">
				<img src={Nginx} class="h-8" alt="Nginx" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Mysql} class="h-10" alt="MySQL" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
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
</div>

<div class="scroll-container6 max-w-dvw background-6 grid min-h-dvh py-10 lg:grid-cols-3">
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
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Astro} class="h-10 scale-125" alt="Astro" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl bg-gray-200/20 p-5">
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
</div>

<div class="scroll-container7 max-w-dvw background-7 grid min-h-dvh py-10 lg:grid-cols-3">
	<div class="place-self-center">
		<div class="flex justify-center">
			<a href="https://abbreviation.zixian.dev"
				><h3 class="pb-4 pt-6 text-center font-sans text-5xl font-extrabold text-[#0069ff] lg:text-7xl">
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
		<ExitLinks
			url="https://abbreviation.zixian.dev"
			github="https://github.com/zachczx/go-abbreviation"
			className="fill-[#0069ff]" />
		<div class="mx-10 mt-10 hidden max-w-[30rem] flex-wrap items-end justify-center space-x-4 space-y-4 lg:flex">
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Golang} class="h-10 scale-125" alt="Golang" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl bg-gray-200/20 p-5">
				<img src={Htmx} class="h-8" alt="Htmx" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl border border-white/50 bg-gray-200/20 p-4">
				<img src={Sqlite} class="h-10 grow" alt="Sqlite" />
			</div>
			<div class="neumorphism flex items-center justify-center rounded-3xl bg-gray-200/20 p-5">
				<img src={Templ} class="h-8" alt="Templ" />
			</div>
		</div>
	</div>
	<StackUsed framework="Go" library="HTMX, Templ, Tailwind" host="" className="lg:hidden" />
	<div class="grid content-center justify-items-center px-4 lg:col-span-2">
		<div class="grid max-h-[1000px] max-w-[1000px] content-start gap-10 lg:grid-cols-2">
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
					I wanted to build a search engine and database of abbreviations. There was already one available, but I
					figured I could build a better, faster, more modern one.
				</p>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#0069ff] decoration-8 underline-offset-4">What I built</h3>
				<ul class="ms-6 list-outside list-disc space-y-2 marker:text-[#0069ff]">
					<li>A search engine and database of abbreviations & acronyms in Go.</li>
					<li>Focused on being performant, fast.</li>
					<li>Uses fuzzy matching (Jaro-Winkler) for error tolerance.</li>
					<li>
						Experimented with Metaphone, Levenshtein, Aho Corasick, Soundex, for string matching, but opted against it
						for accuracy and copyright issues.
					</li>
				</ul>
			</div>
			<div
				class="scroll-content1 grid content-start space-y-2 backdrop-blur-md lg:h-full lg:space-y-4 lg:rounded-6xl lg:p-10 xl:border xl:border-gray-200 xl:bg-white/40 xl:shadow-md">
				<h3 class="mb-4 underline decoration-[#0069ff] decoration-8 underline-offset-4">Not yet done</h3>
				<p>Semantic search would be useful (e.g., searching CEO of ministry should ideally return Minister/PS)</p>
			</div>
		</div>
	</div>
</div>

<style>
	/* * {
		border: red solid 1px;
	} */

	h1:not(.font-sans),
	h2:not(.font-sans),
	h3:not(.font-sans) {
		font-family: 'IBM Plex Serif', serif;
	}

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
		.background-1 {
			background: radial-gradient(600px at 40% 30%, rgb(180, 227, 115, 1), #fafafa 40%, transparent),
				radial-gradient(300px at 50% 70%, rgb(180, 227, 115, 0.99), #fafafa 80%, transparent),
				radial-gradient(600px at 90% 70%, rgb(180, 227, 115, 0.7), #fafafa, transparent);
		}
		.background-2 {
			background: radial-gradient(500px at 30% 30%, rgba(73, 30, 255, 0.2), #fafafa, transparent),
				radial-gradient(600px at 90% 50%, rgb(73, 30, 255, 0.6), #fafafa 40%, transparent);
		}
		.background-3 {
			background: radial-gradient(300px at 10% 20%, rgb(153, 27, 27, 0.2), #fafafa, transparent),
				radial-gradient(800px at 70% 50%, rgb(153, 27, 27, 0.6), #fafafa, transparent),
				radial-gradient(750px at 90% 30%, rgb(153, 27, 27, 0.1), #fafafa, transparent);
		}
		.background-4 {
			background: radial-gradient(500px at 40% 50%, rgba(77, 124, 15, 0.2), #fafafa, transparent),
				radial-gradient(800px at 90% 70%, rgb(77, 124, 15, 0.05), #fafafa, transparent);
		}
		.background-5 {
			background: radial-gradient(200px at 10% 20%, rgb(234, 179, 8, 0.3), #fafafa, transparent),
				radial-gradient(600px at 40% 30%, rgb(234, 179, 8, 0.99), #fafafa, transparent),
				radial-gradient(600px at 90% 50%, rgb(234, 179, 8, 0.4), #fafafa, transparent);
		}
		.background-6 {
			background: radial-gradient(700px at 45% 40%, rgb(56, 189, 248, 0.5), #fafafa, transparent),
				radial-gradient(700px at 90% 65%, rgb(56, 189, 248, 0.8), #fafafa, transparent);
		}
		.background-7 {
			background: radial-gradient(500px at 10% 20%, rgb(0, 105, 255, 0.3), #fafafa, transparent),
				radial-gradient(800px at 70% 50%, rgb(0, 105, 255, 0.6), #fafafa, transparent),
				radial-gradient(750px at 90% 30%, rgb(0, 105, 255, 0.4), #fafafa, transparent);
		}
	}
</style>
