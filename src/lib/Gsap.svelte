<script>
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=450';
	import rankamateLogo from '$lib/assets/rankamate-logo.webp?enhanced&w=200';
	import eatYourMedsLogo from '$lib/assets/eatyourmedslogo.webp?enhanced&w=250';
	import oldBtonomicsLogo from '$lib/assets/btonomics_logo-3-300x100.webp?enhanced&w=300';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount, tick } from 'svelte';
	import StackUsed from '$lib/StackUsed.svelte';
	import Sveltekit from '$lib/logos/Sveltekit.svelte';
	import Greensock from '$lib/logos/Greensock.svelte';
	import Tailwind from '$lib/logos/Tailwind.svelte';
	import Cloudflare from '$lib/logos/Cloudflare.svelte';
	import Svelte from '$lib/logos/Svelte.svelte';
	import Sortable from '$lib/logos/Sortablejs.png?enhanced&w=60';
	import Nginx from '$lib/logos/Nginx.svelte';
	import Coolify from '$lib/logos/Coolify.svelte';
	import Nodejs from '$lib/logos/Nodejs.svelte';
	import Postgresql from '$lib/logos/Postgresql.svelte';
	import Turso from '$lib/logos/Turso.svelte';
	import Htmx from '$lib/logos/Htmx.svelte';
	import Django from '$lib/logos/Django.svelte';
	import Bootstrap from '$lib/logos/Bootstrap.svelte';
	import Gunicorn from '$lib/logos/Gunicorn.svelte';
	import Wordpress from '$lib/logos/Wordpress.svelte';
	import ApacheHttp from '$lib/logos/Apache-http.svelte';
	import Mysql from '$lib/logos/Mysql.svelte';
	import Bunny from '$lib/logos/Bunny.svelte';
	import Astro from '$lib/logos/Astro.svelte';
	import CloudflarePages from '$lib/logos/Cloudflare-pages.svelte';
	import Pagefind from '$lib/logos/Pagefind.svelte';
	import CodeTypingBro from './svg/Code-typing-bro.svelte';
	import ExitLinks from './ExitLinks.svelte';

	const oddColor = 'bg-gray-100';
	const evenColor = 'bg-gray-50';

	onMount(() => {
		// let segments = gsap.utils.toArray('.scroll-content');
		const svgTyping = document.getElementsByClassName('bubble');
		const segments1 = document.getElementsByClassName('scroll-content1');
		const segments2 = document.getElementsByClassName('scroll-content2');
		const segments3 = document.getElementsByClassName('scroll-content3');
		const segments4 = document.getElementsByClassName('scroll-content4');
		const segments5 = document.getElementsByClassName('scroll-content5');
		const segments6 = document.getElementsByClassName('scroll-content6');
		const logoIcon = document.getElementsByClassName('logoIcon');
		const scrollLogo = document.getElementsByClassName('scroll-logo');
		console.log(segments1);
		gsap.registerPlugin(ScrollTrigger);

		/**
		 * For the coding bros typing svg animations
		 */
		const svgTypingAnimation = gsap.timeline({ repeat: -1 });
		svgTypingAnimation.to(svgTyping, {
			stagger: { each: 0.2, from: 'random' },
			duration: 1,
			ease: 'bounce.out',
			scale: 1.4,
		});
		svgTypingAnimation.to(svgTyping, {
			stagger: { each: 0.2, from: 'random' },
			duration: 0.9,
			ease: 'bounce.out',
			scale: 1,
		});

		/**
		 * For the individual pages
		 */
		const mm = gsap.matchMedia();

		mm.add(
			{ isLgBreakpoint: '(min-width: 1024px)', prefersReducedMotion: '(prefers-reduced-motion: no-preference)' },
			(context) => {
				let { isLgBreakpoint, prefersReducedMotion } = context.conditions;

				if (isLgBreakpoint && prefersReducedMotion) {
					const tl = gsap.timeline({
						defaults: {
							scale: 0.7,
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
		);
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

<div class="grid content-center justify-items-center bg-gray-50 px-4 lg:min-h-dvh">
	<h2>Here are my side projects</h2>
	<div><CodeTypingBro class="h-96 w-96 xl:h-[50rem] xl:w-[50rem]" /></div>
</div>
<div class="scroll-container1 max-w-dvw grid min-h-dvh py-10 lg:grid-cols-3">
	<div class="w-full content-center justify-self-center px-20">
		<div class="flex justify-center">
			<a href="https://titude.app/"><enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class="" /> </a>
		</div>
		<ExitLinks url="https://titude.app/" github="https://github.com/zachczx/apptitude" className="fill-lime-400" />
		<StackUsed framework="Sveltekit" library="Gsap, Tailwind" host="Cloudflare Pages" className="lg:hidden" />
		<div class="mt-10 hidden flex-wrap items-end justify-center space-y-4 lg:flex">
			<Sveltekit class="h-10 pe-6" />
			<Tailwind class="h-10 grow pe-6" />
			<Cloudflare class="h-10 pe-6" />
			<Greensock class="h-10 pe-6" />
		</div>
	</div>
	<div class="grid p-8 lg:col-span-2">
		<div class="scroll-content1 grid max-h-36 lg:w-2/3 lg:justify-start">
			<h3 class="mb-4 underline decoration-lime-400 decoration-8 underline-offset-4">Problem I tried solving</h3>
			<p>
				How might I help my non-technical teammates access to vast repositories of free-to-access knowledge to gain
				tech-related competencies?
			</p>
		</div>
		<div class="scroll-content1 grid max-h-36 content-center lg:w-2/3 lg:justify-self-end">
			<h3 class="mb-4 underline decoration-lime-400 decoration-8 underline-offset-4">What I wanted to do</h3>
			<p>Display lists of tech resources from Youtube, blogs, tutorials, courses, sorted by tech competency.</p>
		</div>
		<div class="scroll-content1 grid max-h-36 content-center justify-self-start lg:w-2/3">
			<h3 class="mb-4 underline decoration-lime-400 decoration-8 underline-offset-4">What I built</h3>
			<ul class="ml-6 list-outside list-disc marker:text-lime-400">
				<li>Website through static site generation</li>
				<li>Used JS objects to store slices of info</li>
				<li>A CMS or DB was unnecessary overhead</li>
			</ul>
		</div>
		<div class="scroll-content1 grid max-h-36 content-center justify-self-end lg:w-2/3">
			<h3 class="mb-4 underline decoration-lime-400 decoration-8 underline-offset-4">Not yet done</h3>
			<p>
				Making learning plans the front and center to learning, so all the suggested resources revolve around a learning
				plan once committed.
			</p>
		</div>
	</div>
</div>

<div class="scroll-container2 max-w-dvw grid min-h-dvh py-10 lg:grid-cols-3 {oddColor}">
	<div class="place-self-center px-20">
		<a href="https://appraize.zixian.dev/"
			><h3 class="text-center text-6xl font-black text-[#491eff] lg:text-8xl">Appraize</h3></a>
		<ExitLinks
			url="https://appraize.zixian.dev/"
			github="https://github.com/zachczx/svelte-appraize"
			className="fill-[#491eff]" />
		<StackUsed framework="Sveltekit" library="Gsap, Tailwind" host="Cloudflare Pages" className="lg:hidden" />
		<div class="mt-10 hidden flex-wrap items-end justify-center space-y-4 lg:flex">
			<Sveltekit class="h-10 pe-6" />
			<enhanced:img src={Sortable} class="pe-6" alt="Sortable JS" />
			<Tailwind class="h-10 pe-6" />
			<Nginx class="h-10 pe-6" />
			<Coolify class="h-10 pe-6" />
			<Nodejs class="h-10 pe-6" />
			<Postgresql class="h-10 pe-6" />
			<Turso class="h-10 pe-6" />
		</div>
	</div>
	<div class="grid p-8 lg:col-span-2">
		<div class="scroll-content2 grid content-center lg:w-2/3 lg:justify-start">
			<h3 class="mb-4 underline decoration-[#491eff] decoration-8 underline-offset-4">Problem I tried solving</h3>
			<p>
				How might we speed up ranking sessions, which need manual selection to form a numbered list "1, 2, 3..." on
				Excel. Every change to the list required manual reordering.
			</p>
		</div>
		<div class="scroll-content2 grid content-center lg:w-2/3 lg:justify-self-end">
			<h3 class="mb-4 underline decoration-[#491eff] decoration-8 underline-offset-4">What I wanted to do</h3>
			<p>Speed up ranking sessions via drag & drop.</p>
		</div>
		<div class="scroll-content2 grid content-center justify-self-start lg:w-2/3">
			<h3 class="mb-4 underline decoration-[#491eff] decoration-8 underline-offset-4">What I built</h3>
			<ul class="ml-6 list-outside list-disc marker:text-[#491eff]">
				<li>Drag & drop of officers and supplementary info (grades, dept, remarks)</li>
				<li>Sessions and mini dashboard each session</li>
				<li>Backend DB (Drizzle/Postgres) and CSV bulk uploads</li>
				<li>Filters and keyboard shortcuts</li>
				<li>Form actions/validation</li>
			</ul>
		</div>
		<div class="scroll-content2 grid content-center lg:w-2/3 lg:justify-self-end">
			<h3 class="mb-4 underline decoration-[#491eff] decoration-8 underline-offset-4">Not yet done</h3>
			<p>Haven't added authentication, which is probably needed for a private thing like ranking.</p>
		</div>
	</div>
</div>

<div class="scroll-container3 max-w-dvw grid min-h-dvh py-10 lg:grid-cols-3 {evenColor}">
	<div class="w-full place-self-center px-20">
		<div class="flex content-center items-center justify-center">
			<a href="https://rankamate.zixian.dev/"><enhanced:img src={rankamateLogo} alt="Rank-a-Mate" /></a>
		</div>
		<ExitLinks
			url="https://rankamate.zixian.dev/"
			github="https://github.com/zachczx/django-rankamate"
			className="fill-red-800" />
		<StackUsed
			framework="Django"
			library="HTMX, SortableJS, Bootstrap"
			host="Ubuntu, Nginx, Gunicorn"
			className="lg:hidden" />
		<div class="mt-10 hidden flex-wrap items-end justify-center space-y-4 lg:flex">
			<Django class="h-10 pe-6" />
			<Htmx class="h-10 pe-6" />
			<enhanced:img src={Sortable} class="pe-6" alt="Sortable JS" />
			<Nginx class="h-10 pe-6" />
			<Gunicorn class="h-10 pe-6" />
			<Bootstrap class="h-10 pe-6" />
			<Postgresql class="h-10 pe-6" />
		</div>
	</div>
	<div class="grid p-8 lg:col-span-2">
		<div class="scroll-content3 grid content-center lg:w-2/3 lg:justify-start">
			<h3 class="mb-4 underline decoration-red-800 decoration-8 underline-offset-4">Problem I tried solving</h3>
			<p>
				<a href="https://rankamate.zixian.dev/" class="font-bold text-primary underline hover:text-secondary"
					>Rank-a-Mate</a> was my first stab at making a drag & drop tool for ranking sessions in lieu of Excel.
			</p>
			<p>
				Same problem statement - How might we speed up ranking sessions, which need manual selection to form a numbered
				list "1, 2, 3..." on Excel. Every change to the list required manual reordering.
			</p>
		</div>
		<div class="scroll-content3 grid content-center lg:w-2/3 lg:justify-self-end">
			<h3 class="mb-4 underline decoration-red-800 decoration-8 underline-offset-4">What I wanted to do</h3>
			<p>Speed up ranking sessions via drag & drop.</p>
		</div>
		<div class="scroll-content3 grid content-center lg:w-2/3 lg:justify-self-start">
			<h3 class="mb-4 underline decoration-red-800 decoration-8 underline-offset-4">What I built</h3>
			<ul class="ml-6 list-outside list-disc marker:text-red-800">
				<li>Basic CRUD webapp with drag & drop of officers and session-based workflow</li>
				<li>Allowed addition of supplementary info (grades, dept)</li>
				<li>Sliders to adjust quotas for each grade</li>
				<li>Backend DB via Django</li>
			</ul>
		</div>
		<div class="scroll-content3 grid content-center lg:w-2/3 lg:justify-self-end">
			<h3 class="mb-4 underline decoration-red-800 decoration-8 underline-offset-4">Not yet done</h3>
			<p>
				Rebuilt this as Appraize. This lacked filters, dashboard, keyboard shortcuts, uploads, etc that I subsequently
				built in Appraize.
			</p>
		</div>
	</div>
</div>

<div class="scroll-container4 max-w-dvw grid min-h-dvh py-10 lg:grid-cols-3 {oddColor}">
	<div class="place-self-center px-20">
		<div class="avatar flex justify-center">
			<div class="w-56 rounded-full">
				<a href="https://eatyourmeds.zixian.dev/"><enhanced:img src={eatYourMedsLogo} alt="Eat Your Meds!" /></a>
			</div>
		</div>
		<ExitLinks
			url="https://eatyourmeds.zixian.dev/"
			github="https://github.com/zachczx/django-eatyourmeds"
			className="fill-lime-700" />
		<StackUsed framework="Django" library="HTMX, Bootstrap" host="Ubuntu, Nginx, Gunicorn" className="lg:hidden" />
		<div class="mt-10 hidden flex-wrap items-end justify-center space-y-4 lg:flex">
			<Django class="h-10 pe-6" />
			<Htmx class="h-10 pe-6" />
			<Nginx class="h-10 pe-6" />
			<Gunicorn class="h-10 pe-6" />
			<Bootstrap class="h-10 pe-6" />
			<Postgresql class="h-10 pe-6" />
		</div>
	</div>
	<div class="grid p-8 lg:col-span-2">
		<div class="scroll-content4 grid content-center lg:w-2/3 lg:justify-start">
			<h3 class="mb-4 underline decoration-lime-700 decoration-8 underline-offset-4">Problem I tried solving</h3>
			<p>How might I make it easier and shorter to plan medicine dose timings and get accurate info.</p>
		</div>
		<div class="scroll-content4 grid content-center justify-self-end lg:w-2/3">
			<h3 class="mb-4 underline decoration-lime-700 decoration-8 underline-offset-4">What I wanted to do</h3>
			<p>Make it less tedious for both of us parents to record/coord medicine stuff and sync with one another.</p>
		</div>
		<div class="scroll-content4 grid content-center lg:w-2/3 lg:justify-self-start">
			<h3 class="mb-4 underline decoration-lime-700 decoration-8 underline-offset-4">What I built</h3>
			<ul class="ml-6 list-outside list-disc marker:text-lime-700">
				<li>Basic CRUD webapp with user authentication.</li>
				<li>Sprinkled HTMX and datepicker.js for user interactions.</li>
				<li>Backend via Django</li>
			</ul>
		</div>
		<div class="scroll-content4 grid content-center lg:w-2/3 lg:justify-self-end">
			<h3 class="mb-4 underline decoration-lime-700 decoration-8 underline-offset-4">Not yet done</h3>
			<p>Honestly, ChatGPT does it better (Gemini refuses, so no luck there).</p>
		</div>
	</div>
</div>

<div class="scroll-container5 max-w-dvw grid min-h-dvh py-10 lg:grid-cols-3 {evenColor}">
	<div class="place-self-center px-20">
		<div class="flex justify-center">
			<a href="https://old.btonomics.com"><enhanced:img src={oldBtonomicsLogo} alt="Btonomics Old Logo" class="" /> </a>
		</div>
		<ExitLinks url="https://old.btonomics.com" className="fill-yellow-500" />
		<StackUsed framework="Wordpress" host="Ubuntu, Nginx, PHP-FPM, Apache, Bunny.net" className="lg:hidden" />
		<div class="mt-10 hidden flex-wrap items-end justify-center space-y-4 lg:flex">
			<Wordpress class="h-10 pe-6" />
			<ApacheHttp class="h-10 pe-6" />
			<Nginx class="h-6 pe-6" />
			<Mysql class="h-10 pe-6" />
			<Bunny class="h-10 pe-6" />
		</div>
	</div>
	<div class="grid p-8 lg:col-span-2">
		<div class="scroll-content5 grid content-center lg:w-2/3 lg:justify-start">
			<h3 class="mb-4 underline decoration-yellow-500 decoration-8 underline-offset-4">Problem I tried solving</h3>
			<p>
				There was barely any info online to guide me through the renovation journey (choosing an ID/contractor, deciding
				on a design, buying from Taobao).
			</p>
		</div>
		<div class="scroll-content5 grid content-center lg:w-2/3 lg:justify-self-end">
			<h3 class="mb-4 underline decoration-yellow-500 decoration-8 underline-offset-4">What I wanted to do</h3>
			<p>
				Started <a href="https://old.btonomics.com" class="font-bold text-primary underline hover:text-secondary"
					>BTOnomics</a> (previously pewpewpew.cc) in 2018, which was a blog that documented my journey and my advice to
				other people in similar shoes.
			</p>
		</div>
		<div class="scroll-content5 grid content-center lg:w-2/3 lg:justify-self-start">
			<h3 class="mb-4 underline decoration-yellow-500 decoration-8 underline-offset-4">What I built</h3>
			<ul class="ml-6 list-outside list-disc marker:text-yellow-500">
				<li>WordPress was the obvious choice.</li>
				<li>Wrote organic content that other people liked as well.</li>
				<li>Tinkered with themes & plug-ins, tweaking, optimizing.</li>
				<li>Finetuned content for SEO and Core Web Vitals, esp TTFB/LCP.</li>
			</ul>
		</div>
		<div class="scroll-content5 grid content-center lg:w-2/3 lg:justify-self-end">
			<h3 class="mb-4 underline decoration-yellow-500 decoration-8 underline-offset-4">Not yet done</h3>
			<p>
				Wordpress got too bulky and tiresome to manage and host. Not least the sprawling repository of images (not least
				the multiple resized copies of every image). I'm still keeping this Wordpress instance out of nostalgia.
			</p>
		</div>
	</div>
</div>

<div class="scroll-container6 max-w-dvw grid min-h-dvh py-10 lg:grid-cols-3 {oddColor}">
	<div class="place-self-center px-20">
		<div class="flex justify-center">
			<h3 class="pb-4 pt-6 text-center text-4xl font-bold text-[#38bdf8] lg:text-7xl">
				<a href="https://btonomics.com">BTOnomics</a>
			</h3>
		</div>
		<ExitLinks
			url="https://btonomics.com"
			github="https://github.com/zachczx/astro-btonomics"
			className="fill-[#38bdf8]" />
		<StackUsed framework="AstroJS" library="Tailwind, Pagefind" host="Cloudflare Pages" className="lg:hidden" />
		<div class="mt-10 hidden flex-wrap items-end justify-center space-y-4 lg:flex">
			<Astro class="h-14 pe-6" />
			<Tailwind class="h-10 grow pe-6" />
			<Cloudflare class="h-10 pe-6" />
			<Pagefind class="h-10 pe-6" />
		</div>
	</div>
	<div class="grid space-y-6 p-8 lg:col-span-2">
		<div class="scroll-content6 grid content-center lg:w-2/3 lg:justify-start">
			<h3 class="mb-4 underline decoration-[#38bdf8] decoration-8 underline-offset-4">Problem I tried solving</h3>
			<p>Wordpress got too bulky and tiresome to manage and host.</p>
		</div>
		<div class="scroll-content6 grid content-center lg:w-2/3 lg:justify-self-end">
			<h3 class="mb-4 underline decoration-[#38bdf8] decoration-8 underline-offset-4">What I wanted to do</h3>
			<p>I moved BTOnomics to a more modern framework and tried AstroJS, which had been gaining a lot of praise.</p>
		</div>
		<div class="scroll-content6 grid content-center justify-self-start lg:w-2/3">
			<h3 class="mb-4 underline decoration-[#38bdf8] decoration-8 underline-offset-4">What I built</h3>
			<ul class="ml-6 list-outside list-disc marker:text-[#38bdf8]">
				<li>Migrated to AstroJS as a static site.</li>
				<li>
					I enjoy using Astro. Native markdown support, native view transitions, great image tools, really fast speeds.
				</li>
				<li>There's always the option to reach into Svelte/React/Alpine if I wanted to.</li>
				<li>Used ChatGPT to convert WordPress html/shortcode to markdown.</li>
			</ul>
		</div>
		<div class="scroll-content6 grid content-center justify-self-end lg:w-2/3">
			<h3 class="mb-4 underline decoration-[#38bdf8] decoration-8 underline-offset-4">Not yet done</h3>
			<p>Haven't recreated all the old functionalities, especially comments, but I figured I don't need it anyway.</p>
		</div>
	</div>
</div>

<style>
	/* * {
		border: red solid 1px;
	} */

	.fullWidth {
		width: 100vw;
	}

	.z150vw {
		width: 150vw;
	}

	.list li::before {
		content: '🔥';
		padding-right: 0.4rem;
	}

	/* .scroll-container1,
	.scroll-container2,
	.scroll-container3,
	.scroll-container4,
	.scroll-container5,
	.scroll-container6 {
		overflow-x: clip;
	} */
</style>
