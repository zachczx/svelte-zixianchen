<script>
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=500';
	import rankamateLogo from '$lib/assets/rankamate-logo.webp?enhanced&w=150';
	import StackUsed from '$lib/StackUsed.svelte';
	import TankSvg from '$lib/svg/TankSvg.svelte';
	import treesvg from '$lib/svg/trees-tree-svgrepo-com.svg';
	import ChatSvg from '$lib/svg/ChatSvg.svelte';
	import PresentationStatsSvg from '$lib/svg/PresentationStatsSvg.svelte';
	import versus from '$lib/assets/fightIronManCaptainAmerica.webp';
	import selfSndgoPic from '$lib/assets/DSC03163.webp?enhanced&w=300;500;1000';
	import eatYourMedsLogo from '$lib/assets/eatyourmedslogo.webp';
	import oldBtonomicsLogo from '$lib/assets/btonomics_logo-3-300x100.webp?enhanced&w=250';
	import spotify from '$lib/assets/spotify.webp?enhanced&w=300';
	import courseraLogo from '$lib/assets/coursera-logo-full-rgb.png?enhanced&w=200';
	import scrumAllianceLogo from '$lib/assets/scrumalliance.png?enhanced&w=200';
	import server from '$lib/assets/server.webp';
	import programming from '$lib/assets/programming.webp?enhanced&w=800';
	import study from '$lib/assets/study.webp?enhanced&w=500';
	import CodeTypingBro from '$lib/svg/Code-typing-bro.svelte';
	import TextingBro from '$lib/svg/Texting-bro.svelte';
	import lego from '$lib/assets/lego-2539844.webp';
	import ResumeBro from '$lib/svg/Resume-bro.svelte';
	import Stack from '$lib/svg/Stack.svelte';
	import Nav from '$lib/Nav.svelte';
	import { onMount } from 'svelte';
	import TablerArrowNarrowRight from '$lib/svg/TablerArrowNarrowRight.svelte';

	//////////////////////////////////

	let animate = $state('');
	let navCurrent = $state('');

	onMount(() => {
		let tank = document.getElementById('tank');

		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('drive-right');
						animate = 'drive-right';
						observer.unobserve(entry.target);
					}
				});
			},
			{
				root: null,
				threshold: 0,
			},
		);

		observer.observe(tank);

		let navItem = document.querySelectorAll('.navItem');
		console.log(navItem);

		let observerNav = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log(entry.target.id);
					navCurrent = entry.target.id;
				} else {
					console.log('exiting', entry.target.id);
				}
			});
		});
		for (let i = 0; i < navItem.length; i++) {
			observerNav.observe(navItem[i]);
		}
	});

	function getMonthsBetween(date1, date2, roundUpFractionalMonths) {
		//Months will be calculated between start and end dates.
		//Make sure start date is less than end date.
		//But remember if the difference should be negative.
		var startDate = date1;
		var endDate = date2;
		var inverse = false;
		if (date1 > date2) {
			startDate = date2;
			endDate = date1;
			inverse = true;
		}

		//Calculate the differences between the start and end dates
		var yearsDifference = endDate.getFullYear() - startDate.getFullYear();
		var monthsDifference = endDate.getMonth() - startDate.getMonth();
		var daysDifference = endDate.getDate() - startDate.getDate();

		var monthCorrection = 0;
		//If roundUpFractionalMonths is true, check if an extra month needs to be added from rounding up.
		//The difference is done by ceiling (round up), e.g. 3 months and 1 day will be 4 months.
		if (roundUpFractionalMonths === true && daysDifference > 0) {
			monthCorrection = 1;
		}
		//If the day difference between the 2 months is negative, the last month is not a whole month.
		else if (roundUpFractionalMonths !== true && daysDifference < 0) {
			monthCorrection = -1;
		}

		return (inverse ? -1 : 1) * (yearsDifference * 12 + monthsDifference + monthCorrection);
	}
	const today = new Date();
	const startWork = new Date(2013, 6, 1);
	const startSdTech = new Date(2023, 12, 1);
	const numMonthsTotal = getMonthsBetween(startWork, today, true);
	const numYearsTotal = numMonthsTotal / 12;
	const numMonthsSdTech = getMonthsBetween(startSdTech, today, true);
	const percentMonthsTech = Math.round(((25 + 36 + numMonthsSdTech) / numMonthsTotal) * 100);
	const percentMonthsComms = Math.round((37 / numMonthsTotal) * 100);
	const percentMonthsPolicy = Math.round((28 / numMonthsTotal) * 100);
</script>

<div class="spectrum-background grid min-h-dvh justify-items-center">
	<Nav {navCurrent} />
	<div class="max-w-screen-2xl">
		<section class="px-3 pb-2 pt-4">
			<div id="header" class="screen mb-1 grid content-center gap-y-10">
				<div class="justify-self-center">
					<enhanced:img
						src={selfSndgoPic}
						alt="Me"
						class="rounded-2xl"
						sizes="(min-width:1920px) 1000px, (min-width:1080px) 800px, (min-width:768px) 600px" />
				</div>
				<div class="xl:mb-20 xl:pb-28">
					<h1 class=" text-center text-7xl leading-none tracking-tighter text-black xl:text-9xl">Hello, I'm Zixian.</h1>
					<h2 class="custom-reveal-text mb-4 text-center text-2xl leading-none tracking-tighter xl:text-4xl">
						<span>I'm a civil servant trying to close gaps between policy, business needs, tech.</span>
					</h2>
				</div>
			</div>

			<div class="grid auto-cols-fr auto-rows-auto gap-7 xl:grid-cols-4">
				<div
					class="navItem card col-span-2 row-span-1 w-full overflow-hidden border border-gray-200 bg-base-100 shadow-xl xl:col-span-2"
					style="background-image: url({server}); background-size: 120%; background-position: right"
					id="about">
					<div class="card-body grid h-full grid-cols-2 justify-items-center">
						<div></div>
						<div class="space-y-4 self-center text-base-100">
							<h3>About</h3>
							<p>
								I understand <b>tech, the web, computers</b>. I go broad and deep into technical details, no matter if
								they're meta frameworks or cpu coolers.
							</p>
						</div>
					</div>
				</div>
				<div
					class="card col-span-2 row-span-1 min-h-48 w-full border border-gray-200 bg-[#57262D] bg-base-100 shadow-xl xl:col-span-1"
					style="background-image: url({versus}); background-size: cover; background-position: center">
					<div class="card-body grid pb-0">
						<div>
							<h3 class="text-center text-base-100">Work</h3>
						</div>
						<div class="mb-6 self-end">
							<p class="text-center text-base-100">I fight bad policies & business requirements.</p>
						</div>
					</div>
				</div>
				<div class="card col-span-2 w-full overflow-hidden border border-gray-200 bg-base-100 shadow-xl xl:col-span-1">
					<div class="card-body relative max-h-96 space-y-4">
						<h3>Education</h3>
						<p>
							Studied <b>Political Science</b>. Loved comparative & money politics. Wish I could undo all the IR I did
							prior.
						</p>
						<enhanced:img src={study} alt="Studies" class="-mb-6" />
					</div>
				</div>
				<div class="card col-span-2 w-full border border-gray-200 bg-base-100 shadow-xl xl:col-span-1">
					<div class="card-body space-y-4">
						<h3>Upgrades</h3>
						<div class="space-y-2 pt-2">
							<ul class="flex flex-wrap space-x-6 xl:grid xl:space-x-0 xl:space-y-6">
								<li class="">
									<a
										href="https://www.coursera.org/account/accomplishments/specialization/D9EZKV26D69B"
										class="rounded-full bg-red-300 px-2 py-2 text-lg hover:bg-red-500 hover:text-base-100 xl:px-4 xl:text-xl"
										>Meta Back-end Dev</a>
								</li>
								<li>
									<a
										href="https://www.coursera.org/account/accomplishments/specialization/certificate/MVCFEP4ZHVSV"
										class="rounded-full bg-red-300 px-2 py-2 text-lg hover:bg-red-500 hover:text-base-100 xl:px-4 xl:text-xl"
										>AWS Fundamentals</a>
								</li>
								<li>
									<a
										href="https://www.credly.com/badges/369dd8b6-19bd-45ba-8272-2b997111c2b7/linked_in_profile"
										class="rounded-full bg-red-300 px-2 py-2 text-lg hover:bg-red-500 hover:text-base-100 xl:px-4 xl:text-xl"
										>Google UX</a>
								</li>
								<li>
									<a
										href="https://bcert.me/bc/html/show-badge.html?b=twwbrxwh"
										class="rounded-full bg-red-300 px-2 py-2 text-lg hover:bg-red-500 hover:text-base-100 xl:px-4 xl:text-xl"
										>Certified ScrumMaster</a>
								</li>
							</ul>
						</div>
						<div class="pt-8">
							<enhanced:img src={courseraLogo} alt="" />
							<enhanced:img src={scrumAllianceLogo} alt="" class="ms-10" />
						</div>
					</div>
				</div>
				<div
					class="card col-span-2 grid w-full grid-cols-2 overflow-hidden border border-gray-200 bg-base-100 shadow-xl">
					<div class="card-body space-y-4 self-center">
						<h3>Interests</h3>
						<p class="z-10">
							I do <b>webdev</b>, <b>stable diffusion</b> in my free time. Started webdev in 2000s in the era of xhtml &
							php4.
						</p>
						<p>
							I like the
							<b>business side of tech</b>.
						</p>
					</div>
					<div class="self-center">
						<enhanced:img src={programming} alt="" class="translate-x-16 scale-150" />
					</div>
				</div>
				<!-- bg-[#57262D] -->
				<div
					class="card relative col-span-2 grid w-full overflow-hidden border border-gray-200 bg-gradient-to-tl from-base-100 to-gray-50 shadow-xl xl:col-span-1">
					<div>
						<div class="card-body grid h-full content-center space-y-4">
							<h3 class="">Playlist</h3>
							<ul class="list text-xl">
								<li>All-In Podcast</li>
								<li>Primeagen</li>
								<li>Theo</li>
								<li>Fireship</li>
								<li>Syntax</li>
								<li>Lenny's Podcast</li>
								<li>Olivio Sarikas</li>
							</ul>
							<enhanced:img src={spotify} alt="" class="absolute -bottom-20 -right-40 xl:bottom-0 xl:top-40" />
						</div>
					</div>
				</div>

				<div class="col-span-2 h-80 xl:col-span-4"></div>

				<div
					class="navItem card col-span-2 row-span-1 w-full overflow-hidden border border-gray-200 bg-base-100 shadow-xl xl:col-span-1"
					id="career">
					<ResumeBro class="-mb-10" />
					<div class="card-body">
						<h2>Career</h2>
					</div>
				</div>
				<div
					class="card col-span-2 h-full min-h-96 w-full border border-gray-200 bg-base-100 shadow-xl xl:col-span-3"
					style="background: url({lego}); background-position: center 10%">
					<div class="relative h-full w-full rounded-xl bg-black opacity-[0.3]"></div>
					<div class="absolute left-0 right-0 top-14 mx-auto text-center text-2xl text-base-100">
						I've worked for <span class="mx-3 text-4xl font-extrabold">{numYearsTotal} years</span> in the public service.
						Here's a breakdown.
					</div>
				</div>
				<div
					class="card relative col-span-2 row-span-1 w-full overflow-hidden border border-gray-200 bg-base-100 shadow-xl xl:col-span-2">
					<div class="card-body z-20 grid grid-cols-1 content-start gap-x-8 space-y-4 xl:grid-cols-3">
						<h3 class="col-span-1 xl:col-span-3">
							Tech <span class="text-xl text-gray-500">({percentMonthsTech}%)</span>
						</h3>
						<div>
							<h4>Service Delivery Tech Team Lead</h4>
							<p>Manage products, tech consultancy for citizen & employee services.</p>
						</div>
						<div>
							<h4>Tech Infra Policy Team Lead</h4>
							<p>Policies & funding for cloud, on-prem hosting, SG Tech Stack, endpoint devices, dev toolchains.</p>
						</div>
						<div>
							<h4>Comms Tech Team Lead</h4>
							<p>Developed & bought media analytic products. Led investments in NLP & CV research.</p>
						</div>
					</div>
					<div>
						<Stack class="absolute -bottom-[20rem] left-0 right-0 mx-auto" />
					</div>
				</div>
				<div
					class="card col-span-2 row-span-1 w-full overflow-hidden border border-gray-200 bg-base-100 shadow-xl xl:col-span-1">
					<div class="card-body space-y-4">
						<h3>Comms <span class="text-xl text-gray-500">({percentMonthsComms}%)</span></h3>
						<div>
							<h4>Media Relations Officer</h4>
							<p>Managed media and collaborated on unpaid features of MINDEF & SAF.</p>
						</div>
						<div>
							<h4>Comms Strategist</h4>
							<p>Crafted comms campaigns and strategies.</p>
						</div>
					</div>
					<TextingBro class="-mb-0 -translate-y-0" />
				</div>
				<div
					class="card col-span-2 row-span-1 w-full border border-gray-200 bg-base-100 shadow-xl xl:col-span-1 xl:row-span-1">
					<div class="card-body mb-4 space-y-4">
						<h3>Policy <span class="text-xl text-gray-500">({percentMonthsPolicy}%)<span></span></span></h3>
						<div>
							<h4>NS Policy Officer</h4>
							<p>
								Did NS policies for sportsmen, leave, citizenship, exit control. Worked in Committee to Strengthen NS.
							</p>
						</div>
					</div>
					<div
						class="flex h-36 items-end overflow-hidden p-0"
						style="background: url('/trees-tree-svgrepo-com.svg'); background-repeat: repeat-x; background-position: top">
						<div id="tank" class={animate}>
							<TankSvg
								onclick={() => {
									animate = 'drive-right-r';
								}} />
						</div>
					</div>
				</div>

				<div class="col-span-2 h-80 xl:col-span-4"></div>

				<div
					class="navItem card z-10 col-span-2 row-span-1 w-full border border-gray-200 bg-base-100 shadow-xl xl:col-span-1"
					id="side">
					<div class="card-body space-y-4 px-6">
						<CodeTypingBro class="-mx-5 -mb-[2rem] -mt-[5rem]" />

						<h2>Side Projects</h2>
					</div>
				</div>
				<div class="card col-span-2 row-span-2 border border-gray-200 bg-base-100 shadow-xl xl:col-span-1">
					<div class="group grid items-center gap-y-5 p-4 2xl:p-8">
						<div class="space-y-8">
							<div class="place-self-center pb-4 pt-4">
								<a href="https://titude.app/"><enhanced:img src={apptitudeLogo} alt="Apptitude" /></a>
							</div>
							<StackUsed framework="Sveltekit" library="Gsap, Tailwind" host="Cloudflare Pages" />
							<p class="px-2">
								I made
								<span class="text-primary"
									><a href="https://titude.app/" class="font-bold text-primary underline hover:text-secondary"
										>Apptitude</a
									></span
								>, which gives me a clear and convenient way to distribute guides, notes, links, YouTube, organized
								along tech competencies to share with my non-technical teammates.
							</p>

							<p class="px-2">
								Kept it simple with bento grids, static site generation. Used JS objects pre-compilation instead of
								heavier DB/markdown.
							</p>
						</div>
						<a href="https://titude.app/" class="btn btn-neutral mx-2 text-xl"
							>Apptitude<TablerArrowNarrowRight class="ms-2 h-[1.5em] w-[1.5em]" /></a>
					</div>
				</div>
				<div class="card col-span-2 row-span-2 border border-gray-200 bg-base-100 shadow-xl xl:col-span-1">
					<div class="group grid items-center gap-y-5 p-4 2xl:p-8">
						<div class="space-y-8">
							<div class="place-self-center pb-4 pt-4">
								<a href="https://appraize.zixian.dev/"
									><h3 class="text-center text-6xl font-black text-purple-800">Appraize</h3></a>
							</div>
							<StackUsed
								framework="Sveltekit"
								library="SortableJS, Tailwind"
								host="Ubuntu, Nginx, Coolify, NodeJS, Postgres, Turso" />
							<p class="px-2">
								<a href="https://appraize.zixian.dev/" class="font-bold text-primary underline hover:text-secondary"
									>Appraize</a> makes ranking sessions easier via drag & drop.
							</p>
							<p class="px-2">
								Also comes with a mini dashboard, more responsive UI, db backend (Drizzle/Postgres), sessions, filters,
								keyboard shortcut, csv file upload, form actions/validation.
							</p>
						</div>
						<a href="https://appraize.zixian.dev/" class="btn btn-neutral mx-2 text-xl"
							>Appraize<TablerArrowNarrowRight class="ms-2 h-[1.5em] w-[1.5em]" /></a>
					</div>
				</div>
				<div
					class="card col-span-2 row-span-2 w-full overflow-hidden border border-gray-200 bg-base-100 shadow-xl xl:col-span-1">
					<div class="group grid items-center gap-y-5 p-4 2xl:p-8">
						<div class="space-y-8">
							<div class="flex justify-center">
								<a href="https://app.zixian.dev/rank/"
									><enhanced:img src={rankamateLogo} alt="Rank-a-Mate" class="" /></a>
							</div>
							<StackUsed framework="Django" library="HTMX, SortableJS, Bootstrap" host="Ubuntu, Nginx, Gunicorn" />
							<p class="px-2">
								<a href="https://app.zixian.dev/rank/" class="font-bold text-primary underline hover:text-secondary"
									>Rank-a-mate</a> was my first stab at making a drag & drop tool for ranking sessions in lieu of Excel.
							</p>
							<p class="px-2">
								UX is generally the same as a basic CRUD webapp on a JS framework, but HTMX gives a lot of interactivity
								for such a small bundle size. I enjoyed the HTMX DX.
							</p>
						</div>
						<a href="https://app.zixian.dev/rank/" class="btn btn-neutral mx-2 text-xl"
							>Rank-a-Mate<TablerArrowNarrowRight class="ms-2 h-[1.5em] w-[1.5em]" /></a>
					</div>
				</div>

				<div
					class="card card-side col-span-2 row-span-2 w-full border border-gray-200 bg-base-100 shadow-xl xl:col-span-1">
					<div class="group relative grid items-center gap-y-5 p-4 2xl:p-8">
						<div class="space-y-8">
							<div class="avatar flex justify-center pb-4">
								<div class="w-56 rounded-full">
									<a href="https://app.zixian.dev/eatyourmeds/"><img src={eatYourMedsLogo} alt="Eat Your Meds!" /></a>
								</div>
							</div>
							<StackUsed framework="Django" library="HTMX, Bootstrap" host="Ubuntu, Nginx, Gunicorn" />
						</div>

						<p class="px-2">
							<span class="font-bold text-primary underline hover:text-secondary"
								><a href="https://app.zixian.dev/eatyourmeds/">Eat Your Medicine!</a></span>
							was a try at planning dose timings and getting medicine info.
						</p>
						<p class="px-2">
							It was tedious for both of us parents to record/coord medicine stuff and sync with one another.
						</p>

						<p class="px-2">Used Django for CRUD & auth. Sprinkled HTMX and datepicker.js for user interactions.</p>

						<a href="https://app.zixian.dev/eatyourmeds/" class="btn btn-neutral mx-2 text-xl"
							>Eat Your Meds!<TablerArrowNarrowRight class="ms-2 h-[1.5em] w-[1.5em]" /></a>
					</div>
				</div>
				<div class="col-span-2 grid gap-7 xl:col-span-3 xl:grid-cols-2">
					<div class="card w-full border border-gray-200 bg-base-100 shadow-xl">
						<div class="group grid items-center gap-y-5 p-4 2xl:p-8">
							<div class="space-y-8">
								<div class="flex justify-center pb-4">
									<a href="https://old.btonomics.com"
										><enhanced:img src={oldBtonomicsLogo} alt="Old Btonomics.com" /></a>
								</div>
								<StackUsed framework="Wordpress" host="Ubuntu, Nginx, PHP-FPM, Apache, Bunny.net" />
								<p class="px-2">
									In 2018, I started
									<span class="font-bold text-primary underline hover:text-secondary"
										><a href="https://old.btonomics.com/">BTOnomics</a></span
									>, a Wordpress blog on home renovation. WordPress was an obvious choice then and the instance is still
									kept alive owing to nostalgia.
								</p>

								<p class="px-2">
									Experimented with themes & plug-ins, tweaking, optimizing. Wrote organic content that people liked and
									cut page load speeds, esp TTFB/LCP.
								</p>
							</div>
							<a href="https://old.btonomics.com" class="btn btn-neutral mx-2 text-xl"
								>Old Btonomics<TablerArrowNarrowRight class="ms-2 h-[1.5em] w-[1.5em]" /></a>
						</div>
					</div>
					<div class="card w-full border border-gray-200 bg-base-100 shadow-xl">
						<div class="group grid items-center gap-y-5 p-4 2xl:p-8">
							<div class="space-y-8">
								<h3 class="pb-4 text-center text-4xl font-black text-base-content">
									<a href="https://btonomics.com">BTOnomics v2</a>
								</h3>
								<StackUsed framework="AstroJS" library="Tailwind, Pagefind" host="Cloudflare Pages" />
								<p class="px-2">
									Migrated <span class="font-bold text-primary underline hover:text-secondary"
										><a href="https://btonomics.com/">BTOnomics</a></span> to AstroJS, in part to try it. Enjoyed it. I used
									ChatGPT to convert WordPress html/shortcode to markdown, which was smooth after a few tries.
								</p>

								<p class="px-2">
									Native markdown support, native view transitions, great image tools, really fast speeds. Haven't felt
									the need to reach into Svelte or React.
								</p>
							</div>
							<a href="https://btonomics.com" class="btn btn-neutral mx-2 text-xl"
								>BTOnomics<TablerArrowNarrowRight class="ms-2 h-[1.5em] w-[1.5em]" /></a>
						</div>
					</div>
				</div>
			</div>
			<p class="mt-24 text-center text-base">Copyright © 2024 Zixian Chen. All rights reserved.</p>
			<p class="text-center text-base">
				Communication illustrations by <a href="https://www.freepik.com/">Freepik</a> and
				<a href="https://storyset.com/communication">Storyset</a>.
			</p>
		</section>
	</div>
</div>
<span class="drive-right"></span>

<style>
	.spectrum-background {
		/* 
			https://www.schemecolor.com/pastel-green-yellow-and-red.php
			https://mycolor.space/gradient3?ori=circle&hex=%23E0FFCC&hex2=%23FFF8B8&hex3=%23CAF2C2&submit=submit
		
		background-image: radial-gradient(
			circle,
			#e0ffcc,
			#e5fec8,
			#ebfdc3,
			#f1fbbf,
			#f7fabc,
			#f5f9bb,
			#f3f8ba,
			#f1f7b9,
			#e7f6ba,
			#ddf5bd,
			#d3f4bf,
			#caf2c2
		);*/
		background-image: linear-gradient(to bottom, #fefefe, #ffe8ff, #ffcece, #ffca78, #d2de32);
	}
	@media only screen and (min-width: 1024px) {
		.screen {
			min-height: 100vh;
		}
	}

	@keyframes scroll-reveal {
		to {
			background-size: 100% 100%;
		}
	}

	@keyframes drive-right {
		to {
			transform: translateX(250px) scale(0.6);
		}
	}
	@keyframes drive-right-r {
		from {
			transform: translateX(-100px);
		}
		to {
			transform: translateX(500px) scale(0.6);
		}
	}

	.drive-right {
		animation-name: drive-right;
		animation-duration: 2s;
		animation-timing-function: linear;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
	.drive-right-r {
		animation-name: drive-right-r;
		animation-duration: 4s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
	/* for custom reveal of text */
	.custom-reveal-text span {
		color: hsl(177 72% 37% / 30%);
		background-clip: text;
		background-repeat: no-repeat;
		background-size: 0% 100%;
		background-image: linear-gradient(90deg, black, black);
		animation: scroll-reveal linear forwards;
		animation-timeline: view();
		animation-range-start: cover 30vh;
		animation-range-end: cover 40vh;
	}

	@media only screen and (min-width: 1024px) {
		.custom-reveal-text span {
			animation-range-start: cover 30vh;
			animation-range-end: cover 40vh;
		}
	}
	@media only screen and (min-width: 1600px) {
		.custom-reveal-text span {
			animation-range-start: cover 30vh;
			animation-range-end: cover 40vh;
		}
	}
	.list li::before {
		content: '🔥';
		padding-right: 0.4rem;
	}

	/* for other stuff */
	/* .overlay::before {
		content: '';
		z-index: 1;
		border-radius: 15px 0 0 15px;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: block;
		position: absolute;
		background: linear-gradient(to right, rgba(254, 254, 254, 0.8) 70%, rgba(0, 0, 0, 0) 90%);
	}
	.teams-circle::before {
		content: 'CZ';
		height: 80px;
		width: 80px;
		font-size: 35px;
		font-weight: 800;
		color: #223b58;
		position: absolute;
		left: 20%;
		top: 20%;
		z-index: 5;
	}
	.teams-circle {
		height: 80px;
		width: 80px;
		position: relative;
		background-color: #cddaea;
		border-radius: 50%;
		display: inline-block;
	}
	.teams-circle::after {
		content: '';
		height: 30px;
		width: 30px;
		background:
			url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>')
				3px no-repeat,
			#76a526;
		border-radius: 50%;
		position: absolute;
		top: 65%;
		border: 3px solid #f8fdef;
		right: 0%;
		z-index: 5;
	} */
</style>
