<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import { onMount } from 'svelte';
	import WebsiteFooter from '$lib/WebsiteFooter.svelte';
	// import ProjectDashboardArchived from '$lib/ProjectDashboardArchived.svelte';
	import Moon from '$lib/assets/luke-stackpoole-TRXSkmJb40c-unsplash.webp';
	import Computer from '$lib/assets/federica-galli-aiqKc07b5PA-unsplash.webp';
	import ZXC from '$lib/assets/zixianchen-alt.webp';
	import Projects from './Projects.svelte';

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
	});

	const jobs = [
		{
			year: '2023',
			title: 'Service Delivery Tech Team Lead',
			desc: "Build, run stuff for citizens + employees services. Also dismantle what doesn't work.",
		},
		{
			year: '2021',
			title: 'Tech Infra Policy Team Lead',
			desc: 'Policies & funding for Govt cloud, on-prem hosting, SG Tech Stack, endpoint devices, dev toolchains.',
		},
		{
			year: '2018',
			title: 'Comms Tech Team Lead',
			desc: 'Developed & bought media analytic products. Led investments in NLP & CV research.',
		},
		{
			year: '2017',
			title: 'Comms Strategist',
			desc: 'Did comms campaigns and strategies.',
		},
		{
			year: '2015',
			title: 'Media Relations Officer',
			desc: 'Did public relations work. Got earned media. Did crisis comms.',
		},
		{
			year: '2013',
			title: 'NS Policy Officer',
			desc: 'Did NS policies for sportsmen, leave, citizenship, exit control.',
		},
	];
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
				<img src={ZXC} alt="" class="h-72 lg:h-160" style="view-transition-name: logo" />
			</div>
		</div>
		<div class="flex w-full items-center justify-center gap-16 max-lg:pt-12 xl:hidden">
			<a href="https://www.linkedin.com/in/zixianchen/" aria-label="LinkedIn" class="active:text-gray-500"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 20 20"
					class="uiw:linkedin size-8"
					><path
						fill="currentColor"
						d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z" /></svg>
			</a>
			<a href="https://github.com/zachczx?tab=repositories" aria-label="Github" class="active:text-gray-500"
				><svg
					width="1em"
					height="1em"
					class="size-8"
					viewBox="0 0 98 96"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xml:space="preserve"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
					<path
						d="M48.854,0C21.839,0 0,22 0,49.217C0,70.973 13.993,89.389 33.405,95.907C35.832,96.397 36.721,94.848 36.721,93.545C36.721,92.404 36.641,88.493 36.641,84.418C23.051,87.352 20.221,78.551 20.221,78.551C18.037,72.847 14.801,71.381 14.801,71.381C10.353,68.366 15.125,68.366 15.125,68.366C20.059,68.692 22.648,73.418 22.648,73.418C27.015,80.914 34.052,78.796 36.883,77.492C37.287,74.314 38.582,72.114 39.957,70.892C29.118,69.751 17.714,65.514 17.714,46.609C17.714,41.231 19.654,36.831 22.728,33.409C22.243,32.187 20.544,27.134 23.214,20.371C23.214,20.371 27.339,19.067 36.64,25.423C40.622,24.346 44.729,23.798 48.854,23.793C52.979,23.793 57.184,24.364 61.067,25.423C70.369,19.067 74.494,20.371 74.494,20.371C77.164,27.134 75.464,32.187 74.979,33.409C78.134,36.831 79.994,41.231 79.994,46.609C79.994,65.514 68.59,69.669 57.67,70.892C59.45,72.44 60.986,75.373 60.986,80.018C60.986,86.618 60.906,91.915 60.906,93.544C60.906,94.848 61.796,96.397 64.222,95.908C83.634,89.388 97.627,70.973 97.627,49.217C97.707,22 75.788,0 48.854,0Z"
						style="fill:rgb(36,41,47);" />
				</svg></a>
			<a href="/blog" aria-label="blog" class="active:text-gray-500"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
					class="material-symbols:article size-9"
					><path
						fill="currentColor"
						d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z" /></svg>
			</a>
		</div>
	</header>

	<div id="about" class="navItem mt-20 grid w-full justify-items-center bg-gray-400/5 lg:min-h-dvh">
		<div class="grid justify-items-center">
			<div
				class="grid w-full max-w-[1000px] content-start gap-y-4 px-4 py-16 lg:min-h-[50vh] lg:grid-cols-3 lg:content-center lg:gap-y-24">
				<!-- <h2
					
					class="navItem hidden justify-self-start px-4 pt-12 text-9xl font-extrabold lg:col-span-3 lg:grid lg:pt-20">
					About Me
				</h2> -->
				<h3 class="text-4xl font-bold">Interests</h3>
				<div class="col-span-2 mb-4 space-y-8">
					<p>
						I started <strong>webdev</strong> in 2000. Started with
						<span class="text-base-content/85 font-mono text-[1.05em] font-medium"
							>Frontpage, XHTML, nested tables, PHP, Wordpress</span
						>.
					</p>
					<p>
						I'm now mostly working with <span class="text-base-content/85 font-mono text-[1.05em] font-medium"
							>Go, Javascript, Python</span
						>. Also getting into some
						<span class="text-base-content/85 font-mono text-[1.05em] font-medium">Zig</span> atm.
					</p>
					<p>I've been building home admin and travel planner mobile apps.</p>
					<p>
						I like <strong>building PCs</strong>. Love being cheap. Hate cable management.
					</p>
					<p>
						I enjoy learning about <strong>businesses</strong>, <strong>product ideas</strong>, <strong>design</strong>,
						<strong>entrepreneurship</strong>.
					</p>
					<p>
						I dabble with digital creation, editing. <span
							class="text-base-content/85 font-mono text-[1.05em] font-medium"
							>Photoshop, Affinity, Davinci Resolve, SDXL LORAs</span
						>.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="bg-base-200 grid min-h-dvh w-full justify-items-center lg:grid-cols-5">
		<div
			id="com"
			class="hidden h-full w-full overflow-hidden py-4 saturate-[0.4] lg:col-span-2 lg:grid"
			style="background-image:url({Computer}); background-size: cover; background-position: bottom;">
			<div class="to-base-200 h-full w-full bg-linear-to-r from-transparent from-90%"></div>
		</div>
		<section
			class="bg-base-200 grid w-full max-w-[1000px] grid-rows-[auto_1fr_auto] content-start gap-y-8 lg:col-span-3 lg:gap-y-24">
			<h2 id="jobs" class="justify-self-start px-4 text-9xl font-extrabold lg:pt-28">Day</h2>
			<div class="grid content-start gap-y-4 px-4 lg:gap-y-16">
				{#each jobs as job}
					<div class="grid lg:grid-cols-[auto_1fr]">
						<div class="text-base-content/70 items-baseline pe-12 pt-1.5 font-mono max-lg:pt-8">{job.year}</div>
						<div class="job">
							<h4 class="text-2xl font-bold">{job.title}</h4>
							<p class="text-base-content/70 leading-relaxed">
								{job.desc}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>
	</div>

	<div class="text-neutral-content grid w-full content-start justify-items-center bg-[#0E0E0E] lg:grid-cols-5">
		<div class="grid w-full justify-items-center pt-8 lg:col-span-3 lg:pt-28">
			<section
				class="grid w-full max-w-[1000px] justify-items-start px-4 pb-8 lg:grid-cols-3 lg:justify-self-end lg:pb-28">
				<h2 id="projects" class="navItem justify-self-start pb-8 text-9xl font-extrabold lg:col-span-3 lg:pb-24">
					Night
				</h2>

				<div
					class="grid w-full content-start justify-items-center gap-y-8 text-center lg:col-span-3 lg:grid-cols-1 lg:justify-items-start lg:text-start">
					<Projects />
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
	.list {
		li::after {
			content: '▶';
			margin-inline-start: 0.75rem;
			margin-inline-end: 0.75rem;
			opacity: 30%;
		}
		/*li {
			 list-style-type: none;
			padding-left: 1.75rem; */
		/* ion:logo-youtube */
		/* background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 512 512"><path fill="%230E0E0E" d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9M207 353.89v-196.5l145 98.2Z"/></svg>')
				no-repeat left center;
			&:hover {
				background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 512 512"><path fill="%23FF0000" d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9M207 353.89v-196.5l145 98.2Z"/></svg>')
					no-repeat left center;
			} 
		}*/
	}
</style>
