<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import { onMount } from 'svelte';
	import WebsiteFooter from '$lib/WebsiteFooter.svelte';
	import { addNeumorphismInset, removeNeumorphismInset } from '$lib/Neumorphism';
	import moneySvg from '$lib/svg/Manage money-cuate.svg?dataurl';
	import ProjectsDashboard from '$lib/ProjectsDashboard.svelte';
	// import ProjectDashboardArchived from '$lib/ProjectDashboardArchived.svelte';
	import Moon from '$lib/assets/luke-stackpoole-TRXSkmJb40c-unsplash.webp';
	import Computer from '$lib/assets/federica-galli-aiqKc07b5PA-unsplash.webp';
	import Waterfall from '$lib/assets/aditya-chinchure-LtHTe32r_nA-unsplash.webp';
	import ZXC from '$lib/assets/zixianchen-alt.webp';
	import { gsap } from 'gsap';

	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	///////////////////////////////////
	let navCurrent: string = $state('header');

	onMount(() => {
		let navItem: NodeListOf<HTMLElement> = document.querySelectorAll('.navItem') as NodeListOf<HTMLElement>;

		let observerNav: IntersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					navCurrent = entry.target.id;
				} else {
					//console.log('exiting', entry.target.id);
				}
			});
		});
		for (let i = 0; i < navItem.length; i++) {
			observerNav.observe(navItem[i]);
		}

		/* gsap.registerPlugin(ScrollTrigger);
		let mm = gsap.matchMedia();
		mm.add(
			{
				// set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
				isLarge: `(min-width: 1024px)`,
				reduceMotion: '(prefers-reduced-motion: reduce)',
			},
			(context) => {
				let { isLarge, reduceMotion } = context.conditions;

				if (isLarge) {
					let tl = gsap.timeline({
						scrollTrigger: {
							trigger: '#projects',
							pin: false, // pin the trigger element while active
							start: 'center 80%', // when the top of the trigger hits the top of the viewport
							// end: '+=500', // end after scrolling 500px beyond the start
							scrub: false, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
						},
					});

					tl.from('.proj', {
						x: 100,
						duration: 0.3,
						opacity: 0,
						stagger: {
							each: 0.1,
							from: 0,
							grid: 'auto',
						},
					});

					gsap.from('#moon', {
						scrollTrigger: {
							trigger: '#moon',
							pin: false, // pin the trigger element while active
							start: 'center bottom', // when the top of the trigger hits the top of the viewport
							end: 'center 40%', // end after scrolling 500px beyond the start
							scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
						},
						duration: 0.5,
						// x: 50,
						autoAlpha: 0.1,
						// rotation: 270,
					});

					let tl2 = gsap.timeline({
						scrollTrigger: {
							trigger: '#jobs',
							pin: false, // pin the trigger element while active
							start: 'center 80%', // when the top of the trigger hits the top of the viewport
							// end: '+=500', // end after scrolling 500px beyond the start
							scrub: false, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
						},
					});
					tl2.from('.job', {
						x: -100,
						duration: 0.3,
						opacity: 0,
						stagger: {
							each: 0.1,
							from: 0,
							grid: 'auto',
						},
					});

					gsap.from('#com', {
						scrollTrigger: {
							trigger: '#com',
							pin: false, // pin the trigger element while active
							start: 'center bottom', // when the top of the trigger hits the top of the viewport
							end: 'center 40%', // end after scrolling 500px beyond the start
							scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
						},

						duration: 0.5,
						// x: 50,
						autoAlpha: 0.1,
						// rotation: 270,
					});
				}
			},
		); */
	});
</script>

<svelte:head>
	<title>Hi! I'm Zixian.</title>
	<meta name="description" content="Hello, I'm Zixian Chen." />
</svelte:head>

<Nav {navCurrent} />
<div class="bg-base-200 grid min-h-dvh justify-items-center 2xl:overflow-x-clip">
	<header id="header" class="navItem w-full place-items-center py-20 lg:grid lg:min-h-dvh lg:py-0">
		<div class="bg-base-200 flex w-full flex-wrap items-center justify-center gap-8 lg:min-h-dvh">
			<div>
				<img src={ZXC} alt="" class="h-72 lg:h-[40rem]" />
			</div>
		</div>
	</header>

	<div class="mt-20 grid min-h-dvh w-full justify-items-center bg-gray-400/5">
		<div class="grid justify-items-center">
			<div class="grid min-h-[50vh] w-full max-w-[1000px] content-center gap-y-4 px-4 lg:grid-cols-3 lg:gap-y-24">
				<h2
					id="about"
					class="navItem hidden justify-self-start px-4 pt-12 text-9xl font-extrabold lg:col-span-3 lg:grid lg:pt-20">
					About Me
				</h2>
				<h3 class="text-4xl font-bold">Interests</h3>
				<div class="col-span-2 mb-4 space-y-8">
					<p>
						I started <strong>webdev</strong> as a hobby in the early 2000s. Spanned eras across Frontpage, nested tables,
						HTML Goodies, PHP, Wordpress, and more recently Go, Javascript, Python stuff.
					</p>
					<p>
						I like <strong>building PCs</strong> - love being cheap, hate cable management.
					</p>
					<p>
						I enjoy learning about <strong>businesses</strong>, <strong>product ideas</strong>, <strong>design</strong>,
						<strong>entrepreneurship</strong>.
					</p>
					<p>I dabble with Photoshop, Davinci Resolve, SDXL LORAs.</p>
				</div>
				<h3 class="text-4xl font-bold">Studied</h3>
				<div class="col-span-2 mb-4 h-full content-center space-y-8">
					<p>Political Science. Enjoyed researching incentives, money, civil wars.</p>
				</div>
				<h3 class="text-4xl font-bold">Playlist</h3>
				<ul class="list col-span-2 flex-row flex-wrap content-start items-center gap-4 lg:gap-x-8 lg:gap-y-4">
					<li>All-In Podcast</li>
					<li>Lenny's Podcast</li>
					<li>ThePrimeagen</li>
					<li>Theo - t3.gg</li>
					<li>Fireship</li>
					<li>SyntaxFM</li>
					<li>YC Startup School</li>
				</ul>

				<div></div>
			</div>
		</div>
	</div>

	<div class="bg-base-200 grid min-h-dvh w-full justify-items-center lg:grid-cols-5">
		<div
			id="com"
			class="hidden h-full w-full overflow-hidden saturate-[0.4] lg:col-span-2 lg:grid"
			style="background-image:url({Computer}); background-size: cover; background-position: bottom;">
			<div class="to-base-200 h-full w-full bg-linear-to-r from-transparent from-90%"></div>
		</div>
		<section
			class="bg-base-200 grid w-full max-w-[1000px] grid-rows-[auto_1fr_auto] content-start gap-y-8 lg:col-span-3 lg:gap-y-24">
			<h2 id="jobs" class="justify-self-start px-4 pt-8 text-9xl font-extrabold lg:pt-28">Day</h2>
			<div class="grid content-start gap-y-4 px-4 lg:grid-cols-[auto_1fr] lg:gap-y-16">
				<div class="pe-12 text-4xl font-bold">2023</div>
				<div class="job">
					<h4 class="font-medium">Service Delivery Tech Team Lead</h4>
					<p class="text-base-content/60">
						Manage products, advise business owners for citizen & employee service delivery.
					</p>
				</div>
				<div class="pe-12 text-4xl font-bold">2021</div>
				<div class="job">
					<h4 class="font-medium">Tech Infra Policy Team Lead</h4>
					<p class="text-base-content/60">
						Policies & funding for Govt cloud, on-prem hosting, SG Tech Stack, endpoint devices, dev toolchains.
					</p>
				</div>
				<div class="pe-12 text-4xl font-bold">2018</div>
				<div class="job">
					<h4 class="font-medium">Comms Tech Team Lead</h4>
					<p class="text-base-content/60">
						Developed & bought media analytic products. Led investments in NLP & CV research.
					</p>
				</div>
				<div class="pe-12 text-4xl font-bold">2017</div>
				<div class="job">
					<h4 class="font-medium">Comms Strategist</h4>
					<p class="text-base-content/60">Did comms campaigns and strategies.</p>
				</div>
				<div class="pe-12 text-4xl font-bold">2015</div>
				<div class="job">
					<h4 class="font-medium">Media Relations Officer</h4>
					<p class="text-base-content/60">Got earned media, did crisis comms, did public relations work.</p>
				</div>
				<div class="pe-12 text-4xl font-bold">2013</div>
				<div class="job">
					<h4 class="font-medium">NS Policy Officer</h4>
					<p class="text-base-content/60">
						Did NS policies for sportsmen, leave, citizenship, exit control. Worked in Committee to Strengthen NS.
					</p>
				</div>
			</div>
		</section>
	</div>

	<div class="text-neutral-content grid w-full justify-items-center bg-[#0E0E0E] lg:grid-cols-5">
		<div class="grid w-full justify-items-center pt-8 lg:col-span-3 lg:pt-28">
			<section
				class="grid w-full max-w-[1000px] gap-y-8 px-4 pb-8 lg:grid-cols-3 lg:gap-y-24 lg:justify-self-end lg:pb-28">
				<h2 id="projects" class="navItem justify-self-start text-9xl font-extrabold lg:col-span-3">Night</h2>
				<h3 class="text-4xl font-bold">Side Projects</h3>
				<div
					class="grid justify-items-center gap-y-8 text-center lg:col-span-2 lg:grid-cols-1 lg:justify-items-start lg:text-start">
					<ProjectsDashboard />
				</div>
			</section>
		</div>
		<div
			id="moon"
			class="hidden h-full w-full overflow-hidden bg-black lg:col-span-2 lg:grid"
			style="background-image:url({Moon}); background-size: cover; background-position: center;">
		</div>
		<div class="lg:col-span-5">
			<WebsiteFooter />
		</div>
	</div>
</div>

<style>
	/* .list {
		li::before {
			content: '🔥';
		}
		li:nth-child(2)::before {
			content: '🚀';
		}
		li:nth-child(3)::before {
			content: '✨';
		}
		li:nth-child(4)::before {
			content: '🎃';
		}
		li:nth-child(5)::before {
			content: '👑';
		}
		li:nth-child(6)::before {
			content: '🌞';
		}
		li:nth-child(7)::before {
			content: '🤖';
		}
	} */

	.list {
		li {
			list-style-type: none;
			padding-left: 1.75rem;
			/* ion:logo-youtube */
			background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 512 512"><path fill="%230E0E0E" d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9M207 353.89v-196.5l145 98.2Z"/></svg>')
				no-repeat left center;
			&:hover {
				background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 512 512"><path fill="%23FF0000" d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9M207 353.89v-196.5l145 98.2Z"/></svg>')
					no-repeat left center;
			}
		}
	}
</style>
