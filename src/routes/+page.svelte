<script lang="ts">
	import TankSvg from '$lib/svg/TankSvg.svelte';
	import versus from '$lib/assets/fightIronManCaptainAmerica.webp';
	import selfSndgoPic from '$lib/assets/profile.webp?enhanced&w=800';
	import spotify from '$lib/assets/spotify.webp?enhanced&w=400';
	import server from '$lib/assets/server.webp';
	import programming from '$lib/assets/programming.webp?enhanced&w=800';
	import TextingBro from '$lib/svg/Texting-bro.svg?dataurl';
	import lego from '$lib/assets/lego-2539844.webp';
	import ResumeBro from '$lib/svg/Resume-bro.svg?dataurl';
	import OnlineResume from '$lib/svg/Online-resume-rafiki.svg?dataurl';
	import Nav from '$lib/Nav.svelte';
	import { onMount } from 'svelte';
	import WebsiteFooter from '$lib/WebsiteFooter.svelte';
	import Intermission from '$lib/Intermission.svelte';
	import { addNeumorphismInset, removeNeumorphismInset } from '$lib/Neumorphism';
	import robotEyes from '$lib/assets/robot-eyes.webp?enhanced&w=900';
	import ryzen from '$lib/assets/ryzen.webp?enhanced&w=1000';
	import heroTopSmartNation from '$lib/assets/hero-top-smart-nation.webp';
	import building from '$lib/assets/joel-filipe-jU9VAZDGMzs-unsplash.webp';
	import winXp from '$lib/assets/windowsxp.png?enhanced';
	import ubuntuCli from '$lib/assets/ubuntu-cli.webp?enhanced&w=600';
	import bridge from '$lib/assets/thomas-kelley-hgbdG_QHNcw-unsplash.webp';
	import moneySvg from '$lib/svg/Manage money-cuate.svg?dataurl';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Globe from '$lib/magic-ui/Globe.svelte';
	import AnimatedBeamMultipleInput from '$lib/magic-ui/AnimatedBeamMultipleInput.svelte';
	import CareerPercentage from '$lib/CareerPercentage.svelte';
	import ProjectsDashboard from '$lib/ProjectsDashboard.svelte';
	import ProjectDashboardArchived from '$lib/ProjectDashboardArchived.svelte';
	import Moon from '$lib/assets/luke-stackpoole-TRXSkmJb40c-unsplash.webp';
	import Sunlight from '$lib/assets/pexels-evie-shaffer-1259279-3585648.webp';

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
</script>

<svelte:head>
	<title>Hi! I'm Zixian.</title>
	<meta name="description" content="Hello, I'm Zixian Chen." />
</svelte:head>

<Nav {navCurrent} />
<div class="grid min-h-dvh justify-items-center 2xl:overflow-x-clip">
	<header
		id="header"
		class="navItem hidden content-center justify-items-center xl:grid xl:min-h-dvh xl:max-w-[1500px] xl:grid-cols-5 xl:gap-x-10 xl:gap-y-10">
		<div class="content-center justify-self-center xl:col-span-1">
			<span
				class="inline-block w-full bg-gradient-to-r from-gray-700 to-slate-700 bg-clip-text font-serif text-4xl leading-none tracking-tighter text-[#341319] text-transparent xl:text-start xl:text-[7rem]"
				>Hello
			</span>
		</div>
		<div class="h-[10rem] w-full justify-self-end overflow-hidden rounded-br-full rounded-tl-full xl:col-span-4">
			<img src={heroTopSmartNation} alt="" class="hero-scroll-sn -mt-[7.5rem] -translate-x-0" />
		</div>
		<div
			class="hidden h-[10rem] w-full justify-self-end overflow-hidden rounded-br-full rounded-tl-full xl:col-span-2 xl:grid">
			<enhanced:img src={ryzen} alt="" class="hero-scroll -mt-[4rem]"></enhanced:img>
		</div>

		<div class=" x h-[10rem] w-full justify-self-end overflow-hidden rounded-bl-full rounded-tr-full xl:col-span-2">
			<enhanced:img src={robotEyes} alt="" class="hero-scroll -mt-28 scale-[1]"></enhanced:img>
		</div>
		<div class="content-center justify-self-center xl:col-span-1">
			<span
				class="inline-block w-full bg-gradient-to-r from-gray-700 to-slate-700 bg-clip-text font-serif text-4xl leading-none tracking-tighter text-[#341319] text-transparent xl:text-start xl:text-[7rem]"
				>I'm</span>
		</div>
		<div class="xl:col-span-3 xl:justify-self-end">
			<h1
				class="inline-block bg-gradient-to-r from-pink-600 via-orange-600 to-red-700 bg-clip-text text-start font-serif text-6xl text-transparent xl:text-center xl:text-[8rem] 2xl:text-[15rem]">
				Zixian.
			</h1>
		</div>
		<div class="h-[15rem] w-[30rem] justify-self-center overflow-hidden rounded-full xl:col-span-2">
			<enhanced:img src={selfSndgoPic} alt="" class="hero-scroll -translate-x-0 -translate-y-10"></enhanced:img>
		</div>
	</header>

	<div class="grid w-full justify-items-center bg-[#0E0E0E] text-neutral-content lg:grid-cols-5">
		<div class="grid justify-items-center pt-8 lg:col-span-3 lg:pt-28">
			<h2 class="justify-self-start px-4 pb-24 text-6xl font-extrabold">Night</h2>
			<section
				id="about"
				class="navItem grid min-h-[50vh] w-full max-w-[1000px] gap-y-8 px-4 lg:grid-cols-3 lg:gap-y-24">
				<h3 class="text-4xl font-bold">About Me</h3>
				<div class="col-span-2 space-y-8 text-lg">
					<p>
						I've done <b>webdev</b> as a hobby on-off since 2000s — HTML Goodies, PHP4 days, Wordpress, Javascript, Python
						frameworks.
					</p>
					<p>
						I like <b>building PCs</b> - love being cheap, hate cable management.
					</p>
					<p>
						I enjoy learning about <b>businesses</b>, <b>product ideas</b>, <b>entrepreneurship</b>.
					</p>
					<p>
						I dabble with photography, AI image gen via <b>Stable diffusion LORAs</b>.
					</p>
				</div>
				<h3 class="text-4xl font-bold">Education</h3>
				<div class="col-span-2 space-y-8 text-lg">
					<p>
						I was a <b>Political Science</b> major who did International Relations & Comparative Politics. Enjoyed researching
						interests, incentives, money, civil wars.
					</p>
				</div>

				<h3 class="text-4xl font-bold">Playlist</h3>
				<ul class="list col-span-2 flex flex-wrap gap-4 text-lg lg:gap-x-8 lg:gap-y-4">
					<li>All-In Podcast</li>
					<li>Lenny's Podcast</li>
					<li>ThePrimeagen</li>
					<li>Theo - t3.gg</li>
					<li>Fireship</li>
					<li>SyntaxFM</li>
					<li>YC Startup School</li>
				</ul>

				<div></div>
			</section>

			<section
				id="projects"
				class="navItem grid w-full max-w-[1000px] gap-y-8 px-4 pb-8 lg:grid-cols-3 lg:gap-y-24 lg:pb-28">
				<h3 class="text-4xl font-bold">My projects</h3>
				<div
					class="grid justify-items-center gap-y-8 text-center lg:col-span-2 lg:grid-cols-2 lg:justify-items-start lg:text-start">
					<ProjectsDashboard mode="dark" />
				</div>
			</section>
		</div>
		<div
			class="hidden h-full w-full overflow-hidden bg-primary lg:col-span-2 lg:grid"
			style="background-image:url({Moon}); background-size: cover; background-position: center;">
		</div>
	</div>
	<div class="grid min-h-dvh w-full justify-items-center lg:grid-cols-5">
		<div
			class="hidden h-full w-full overflow-hidden lg:col-span-2 lg:grid"
			style="background-image:url({Sunlight}); background-size: cover; background-position: bottom;">
		</div>
		<section
			class="mt-8 grid w-full max-w-[1000px] grid-rows-[auto_1fr_auto] content-start gap-y-8 bg-base-100 lg:col-span-3 lg:mt-28 lg:grid-cols-3 lg:gap-y-24">
			<h2 class="justify-self-start px-4 text-6xl font-extrabold lg:col-span-4">Day</h2>
			<h2 class="content-start px-4 text-4xl font-bold">Jobs</h2>
			<div class="grid content-start gap-y-4 px-4 lg:col-span-2 lg:grid-cols-4 lg:gap-y-8">
				<div class="text-lg font-bold">2023</div>
				<div class="lg:col-span-3">
					<h4 class="font-medium">Service Delivery Tech Team Lead</h4>
					<p class="text-base-content/60">
						Manage products, offer tech consultancy for citizen & employee service delivery.
					</p>
				</div>
				<div class="text-lg font-bold">2021</div>
				<div class="lg:col-span-3">
					<h4 class="font-medium">Tech Infra Policy Team Lead</h4>
					<p class="text-base-content/60">
						Policies & funding for Govt cloud, on-prem hosting, SG Tech Stack, endpoint devices, dev toolchains.
					</p>
				</div>
				<div class="text-lg font-bold">2018</div>
				<div class="lg:col-span-3">
					<h4 class="font-medium">Comms Tech Team Lead</h4>
					<p class="text-base-content/60">
						Developed & bought media analytic products. Led investments in NLP & CV research.
					</p>
				</div>
				<div class="text-lg font-bold">2017</div>
				<div class="lg:col-span-3">
					<h4 class="font-medium">Comms Strategist</h4>
					<p class="text-base-content/60">Did comms campaigns and strategies.</p>
				</div>
				<div class="text-lg font-bold">2015</div>
				<div class="lg:col-span-3">
					<h4 class="font-medium">Media Relations Officer</h4>
					<p class="text-base-content/60">Got earned media, did crisis comms, did public relations work.</p>
				</div>
				<div class="text-lg font-bold">2013</div>
				<div class="lg:col-span-3">
					<h4 class="font-medium">NS Policy Officer</h4>
					<p class="text-base-content/60">
						Did NS policies for sportsmen, leave, citizenship, exit control. Worked in Committee to Strengthen NS.
					</p>
				</div>
			</div>
			<div class="lg:col-span-4">
				<WebsiteFooter />
			</div>
		</section>
	</div>
</div>

<style>
	.list {
		li::before {
			content: '🔥';
			/* padding-right: 0.4rem; */
			padding-right: 0.25rem;
			/* padding-left: 0.2rem; */
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
	}
</style>
