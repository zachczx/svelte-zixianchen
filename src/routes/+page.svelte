<script>
	import profilepic from '$lib/assets/kitandi.webp?enhanced&w=500';
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=500';
	import pill from '$lib/assets/pill.webp';
	import rankamateLogo from '$lib/assets/rankamate-logo.webp?enhanced&w=150';
	import TablerLink from '$lib/svg/TablerLink.svelte';

	import TankSvg from '$lib/svg/TankSvg.svelte';
	import treesvg from '$lib/svg/trees-tree-svgrepo-com.svg';
	import NetworkSvg from '$lib/svg/NetworkSvg.svelte';
	import ChatSvg from '$lib/svg/ChatSvg.svelte';
	import PresentationStatsSvg from '$lib/svg/PresentationStatsSvg.svelte';
	import versus from '$lib/assets/fightIronManCaptainAmerica.webp';
	import selfSndgoPic from '$lib/assets/DSC03163.webp?enhanced&w=300;500;1000';
	import eatYourMedsLogo from '$lib/assets/eatyourmedslogo.webp';
	import oldBtonomicsLogo from '$lib/assets/btonomics_logo-3-300x100.webp';
	import spotify from '$lib/assets/spotify.webp';
	import courseraLogo from '$lib/assets/coursera-logo-full-rgb.png?enhanced&w=200';
	import scrumAllianceLogo from '$lib/assets/scrumalliance.png?enhanced&w=200';

	import sun3d from '$lib/assets/sun3d.webp?enhanced&w=350';
	import school3d from '$lib/assets/school3d.webp?enhanced&w=500';
	import earth3d from '$lib/assets/earth3d.webp?enhanced&w=200';
	import calendarBriefcase3d from '$lib/assets/calendarBriefcase3d.webp?enhanced&w=500';
	import hourglass3d from '$lib/assets/hourglass3d.webp?enhanced&w=500';
	import Nav from '$lib/Nav.svelte';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import TablerArrowNarrowRight from '$lib/svg/TablerArrowNarrowRight.svelte';
	/* onMount(async () => {
		await import('https://unpkg.com/@splinetool/viewer/build/spline-viewer.js');
	});
 */
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let tl = gsap.matchMedia();

		tl.add('(min-width: 1028px)', () => {
			/*  
			For animation within cards
			*/

			gsap.from('.animate-comms', {
				scrollTrigger: {
					trigger: '.animate-comms',
					start: '-300 bottom',
					end: 'top 70%',
					scrub: true,
					markers: false,
				},
				autoAlpha: 0.5,
				y: 30,
				ease: 'circ.out',
				stagger: 0.25,
			});
			//my original idea: transform:perspective(900px) rotateX(45deg);
		});
		gsap.to('.tank-svg', {
			scrollTrigger: {
				trigger: '.tank-svg',
				start: 'top 80%',
				end: '+=900',
				scrub: true,
				markers: false,
			},
			x: 400,
			scale: 0.5,
			ease: 'circ.out',
		});

		const networkSvg = document.getElementsByClassName('network-child');
		for (let i = 0; i < networkSvg.length; i++) {
			gsap.from(networkSvg[i], {
				scrollTrigger: {
					trigger: networkSvg[i],
					start: 'top 80%',
					end: 'center 70%',
					scrub: true,
					markers: false,
				},
				y: 300,
				autoAlpha: 0.8,
				ease: 'circ.out',
				stagger: 0.5,
			});
		}
	});

	//////////////////////////////////

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
	<Nav />
	<div class="max-w-screen-2xl">
		<section class="px-3 pb-2 pt-4">
			<div id="header" class="screen mb-8 grid content-center gap-y-10">
				<div class="justify-self-center">
					<enhanced:img
						src={selfSndgoPic}
						alt="Me"
						class="rounded-2xl"
						sizes="(min-width:1920px) 1000px, (min-width:1080px) 500px, (min-width:768px) 300px" />
				</div>
				<div class="lg:mb-20 lg:pb-28">
					<h1 class=" text-center text-7xl leading-none tracking-tighter text-black lg:text-9xl">Hello, I'm Zixian.</h1>
					<h2 class="custom-reveal-text mb-4 text-center text-2xl leading-none tracking-tighter lg:text-4xl">
						<span>I bridge the gaps between public policy, business needs and tech solutions.</span>
					</h2>
				</div>
			</div>

			<div class="grid auto-cols-fr auto-rows-auto gap-7 xl:grid-cols-4" id="about">
				<div class="relative col-span-2 row-span-1 grid items-end rounded-2xl md:col-span-1">
					<div class="absolute h-96 w-full rounded-2xl border bg-gradient-to-tr from-gray-100 to-base-100 shadow-xl">
					</div>
					<figure>
						<enhanced:img src={profilepic} alt="Doggo and I" class="z-20 scale-100 rounded-2xl" />
					</figure>
				</div>
				<div
					class="animate-about-work-learned card col-span-2 row-span-1 w-full border border-gray-200 bg-base-100 shadow-xl lg:col-span-1">
					<div class="card-body grid justify-items-center">
						<enhanced:img src={earth3d} alt="WWW" class="-mt-10 justify-self-center" />

						<div class="space-y-4">
							<h3>About</h3>
							<p>
								I <b>understand web tech</b>. I can go broad and deep for tech issues and technical stuff.
							</p>
						</div>
					</div>
				</div>
				<div
					class="animate-about-work-learned card col-span-2 row-span-1 min-h-48 w-full border border-gray-200 bg-[#57262D] bg-base-100 shadow-xl lg:col-span-1"
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
				<div
					class="animate-personal-education card col-span-2 w-full overflow-hidden border border-gray-200 bg-base-100 shadow-xl lg:col-span-1">
					<div class="card-body relative max-h-96 space-y-4">
						<h3>Education</h3>
						<p>
							Studied <b>Political Science</b>. Loved comparative & money politics. Did too much IR before I got there.
						</p>
						<enhanced:img src={school3d} alt="Studies" class="-mb-10" />
					</div>
				</div>
				<div
					class="animate-about-work-learned card col-span-2 w-full border border-gray-200 bg-base-100 shadow-xl lg:col-span-1">
					<div class="card-body space-y-4">
						<h3>Learned</h3>
						<div class="space-y-2">
							<ul class="list">
								<li>
									<a
										href="https://www.coursera.org/account/accomplishments/specialization/D9EZKV26D69B"
										class="text-primary underline hover:text-secondary">Meta Back-end Dev</a>
								</li>
								<li>
									<a
										href="https://www.coursera.org/account/accomplishments/specialization/certificate/MVCFEP4ZHVSV"
										class="text-primary underline hover:text-secondary">AWS Fundamentals</a>
								</li>
								<li>
									<a
										href="https://www.credly.com/badges/369dd8b6-19bd-45ba-8272-2b997111c2b7/linked_in_profile"
										class="text-primary underline hover:text-secondary">Google UX</a>
								</li>
								<li>
									<a
										href="https://bcert.me/bc/html/show-badge.html?b=twwbrxwh"
										class="text-primary underline hover:text-secondary">Certified ScrumMaster</a>
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
					class="animate-personal-education card col-span-2 grid w-full grid-cols-2 border border-gray-200 bg-base-100 shadow-xl">
					<div class="card-body space-y-4 self-center">
						<h3 class="">Interests</h3>
						<p>
							I dabble in <b>webdev</b>, <b>stable diffusion</b> in my free time. I like hearing about the
							<b>business side of tech</b>.
						</p>
					</div>
					<div class="self-center">
						<enhanced:img src={sun3d} alt="Hobbies!" class="" />
					</div>
				</div>
				<div
					class="animate-personal-education card col-span-2 grid w-full border border-gray-200 bg-base-100 shadow-xl md:col-span-1"
					style="background-image: url({spotify}); background-size: 190%; background-repeat: no-repeat; background-position: left 60%">
					<div>
						<div class="card-body space-y-4">
							<h3 class="text-base-100">Playlist</h3>
							<ul class="text-xl text-base-100">
								<li>All-In Podcast</li>
								<li>Lenny's Podcast</li>
								<li>Primeagen</li>
								<li>Theo</li>
								<li>Syntax</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- 
			Break
		-->
				<div class="col-span-2 h-72 md:col-span-4"></div>
				<!-- 
			Break
		-->
				<div
					class="fromLeft card col-span-2 row-span-1 w-full border border-gray-200 bg-base-100 shadow-xl md:col-span-1"
					id="career">
					<div class="card-body">
						<enhanced:img src={calendarBriefcase3d} alt="" class="" />
						<h2>Career</h2>
						<span class="ms-1 text-xl font-bold text-gray-500">({numYearsTotal} years)</span>
					</div>
				</div>

				<div
					class="animate-tech-comms-policy card col-span-2 row-span-2 w-full border border-gray-200 bg-base-100 shadow-xl md:col-span-1">
					<div class="card-body space-y-4">
						<h3>Tech <span class="text-xl text-gray-500">({percentMonthsTech}%)</span></h3>
						<div>
							<h4>Tech Infra Policy Team Lead</h4>
							<p>
								Did policies, funding assessments for cloud, on-prem hosting, SG Tech Stack, toolchains and other infra.
							</p>
						</div>
						<div>
							<h4>Comms Tech Team Lead</h4>
							<p>Owned media analyst products. Led investments in NLP & CV research.</p>
						</div>
						<div class="flex items-center justify-center"><NetworkSvg /><NetworkSvg /></div>
					</div>
				</div>
				<div
					class="animate-tech-comms-policy card col-span-2 row-span-2 w-full border border-gray-200 bg-base-100 shadow-xl md:col-span-1">
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
						<div class="item-start self-center"><ChatSvg /></div>
					</div>
				</div>
				<div
					class="animate-tech-comms-policy card col-span-2 row-span-2 w-full border border-gray-200 bg-base-100 shadow-xl md:col-span-1 md:row-span-1">
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
						<TankSvg class="tank-svg" />
					</div>
				</div>

				<!-- 
			Break
		-->
				<div class="col-span-2 h-72 md:col-span-4"></div>
				<!-- 
			Break
		-->
				<div
					class="card z-10 col-span-2 row-span-1 w-full border border-gray-200 bg-base-100 shadow-xl lg:col-span-1"
					id="side">
					<div class="card-body space-y-4 px-6">
						<enhanced:img src={hourglass3d} alt="" class="-mt-[10rem]" />
						<h2>Side Projects</h2>
					</div>
				</div>
				<div
					class="animate-apptitude-appraize-rank card col-span-2 row-span-2 border border-gray-200 bg-base-100 shadow-xl md:col-span-1">
					<div class="group card-body grid items-center gap-y-5">
						<div class="space-y-8">
							<div class="place-self-center pb-4">
								<a href="https://titude.app/"><enhanced:img src={apptitudeLogo} alt="Apptitude" /></a>
							</div>
							<div class="grid content-around gap-y-4 rounded-2xl bg-base-300 p-4 text-xl font-bold">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										class="me-2 inline"
										viewBox="0 0 24 24"
										><g
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											color="currentColor"
											><path
												d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009" /><path
												d="m8 13l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L8 17m4 0h4" /></g
										></svg
									>Sveltekit, Gsap, Tailwind
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-cpu me-2 inline"
										><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
											d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path
											d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path
											d="M14 3v2" /><path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path
											d="M10 21v-2" /></svg
									>Cloudflare Pages
								</div>
							</div>
							<p class="px-2">
								I made
								<span class="text-primary"
									><a href="https://titude.app/" class="font-bold text-primary underline hover:text-secondary"
										>Apptitude</a
									></span
								>, which gives me a clear and convenient way to distribute guides, notes, links, YouTube, organized
								along tech competencies to share with my non-technical teammates.
							</p>

							<p class="px-2">Used JS objects in lieu of a DB/markdown.</p>
						</div>
						<a href="https://titude.app/" class="btn btn-neutral mx-2 text-xl"
							>Apptitude<TablerArrowNarrowRight class="ms-2 h-[1.5em] w-[1.5em]" /></a>
					</div>
				</div>
				<div
					class="animate-apptitude-appraize-rank card col-span-2 row-span-2 border border-gray-200 bg-base-100 shadow-xl md:col-span-1">
					<div class="group card-body grid items-center gap-y-5">
						<div class="space-y-8">
							<div class="place-self-center pb-4">
								<a href="https://appraize.zixian.dev/"
									><h3 class="text-center text-6xl font-black text-purple-800">Appraize</h3></a>
							</div>
							<div class="grid content-around gap-y-4 rounded-2xl bg-base-200 p-4 text-xl font-bold">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										class="me-2 inline"
										viewBox="0 0 24 24"
										><g
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											color="currentColor"
											><path
												d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009" /><path
												d="m8 13l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L8 17m4 0h4" /></g
										></svg
									>Sveltekit, SortableJS, Tailwind
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-cpu me-2 inline"
										><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
											d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path
											d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path
											d="M14 3v2" /><path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path
											d="M10 21v-2" /></svg
									>Ubuntu, Nginx, Coolify, NodeJS, Postgres, Turso
								</div>
							</div>
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
					class="animate-apptitude-appraize-rank card col-span-2 row-span-2 w-full overflow-hidden border border-gray-200 bg-base-100 shadow-xl md:col-span-1">
					<div class="group card-body grid items-center gap-y-5">
						<div class="space-y-8">
							<div class="flex justify-center">
								<a href="https://app.zixian.dev/rank/"
									><enhanced:img src={rankamateLogo} alt="Rank-a-Mate" class="" /></a>
							</div>
							<div class="grid content-around gap-y-4 rounded-2xl bg-base-200 p-4 text-xl font-bold">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										class="me-2 inline"
										viewBox="0 0 24 24"
										><g
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											color="currentColor"
											><path
												d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009" /><path
												d="m8 13l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L8 17m4 0h4" /></g
										></svg
									>Django, HTMX, SortableJS, Bootstrap
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-cpu me-2 inline"
										><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
											d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path
											d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path
											d="M14 3v2" /><path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path
											d="M10 21v-2" /></svg
									>Ubuntu, Nginx, Gunicorn
								</div>
							</div>
							<p class="px-2">
								<a href="https://app.zixian.dev/rank/" class="font-bold text-primary underline hover:text-secondary"
									>Rank-a-mate</a> was my first stab at making a drag & drop tool for ranking sessions in lieu of Excel.
							</p>
							<p class="px-2">UX feels like a basic CRUD webapp, but I enjoyed HTMX and everything was lightweight.</p>
						</div>
						<a href="https://app.zixian.dev/rank/" class="btn btn-neutral mx-2 text-xl"
							>Rank-a-Mate<TablerArrowNarrowRight class="ms-2 h-[1.5em] w-[1.5em]" /></a>
					</div>
				</div>

				<div
					class="animate-eat-btonomics card card-side col-span-2 row-span-2 w-full border border-gray-200 bg-base-100 shadow-xl md:col-span-1">
					<div class="group card-body relative grid items-center gap-y-5">
						<div class="space-y-8">
							<div class="avatar flex justify-center pb-4">
								<div class="w-56 rounded-full">
									<a href="https://app.zixian.dev/eatyourmeds/"><img src={eatYourMedsLogo} alt="Eat Your Meds!" /></a>
								</div>
							</div>
							<div class="grid content-around gap-y-4 rounded-2xl bg-base-300 p-4 text-xl font-bold">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										class="me-2 inline"
										viewBox="0 0 24 24"
										><g
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											color="currentColor"
											><path
												d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009" /><path
												d="m8 13l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L8 17m4 0h4" /></g
										></svg
									>Django, HTMX, Bootstrap
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="icon icon-tabler icons-tabler-outline icon-tabler-cpu me-2 inline"
										><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
											d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path
											d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path
											d="M14 3v2" /><path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path
											d="M10 21v-2" /></svg
									>Ubuntu, Nginx, Gunicorn
								</div>
							</div>
						</div>

						<p class="px-2">
							<span class="font-bold text-primary underline hover:text-secondary"
								><a href="https://app.zixian.dev/eatyourmeds/">Eat Your Medicine!</a></span>
							was a try at planning dose timings and getting medicine info. It was tedious for both of us parents to record/coord
							medicine stuff and sync with one another.
						</p>

						<p class="px-2">
							Used Django's class-based views for CRUD and auth, nearly everything built in. Sprinkled HTMX and
							datepicker.js for user interactions.
						</p>

						<a href="https://app.zixian.dev/eatyourmeds/" class="btn btn-neutral mx-2 text-xl"
							>Eat Your Meds!<TablerArrowNarrowRight class="ms-2 h-[1.5em] w-[1.5em]" /></a>
					</div>
				</div>
				<div class="col-span-2 grid gap-7 md:col-span-3 md:grid-cols-2">
					<div class="animate-eat-btonomics card w-full border border-gray-200 bg-base-100 shadow-xl">
						<div class="group card-body grid items-center gap-y-5">
							<div class="space-y-8">
								<div class="flex justify-center pb-4">
									<a href="https://old.btonomics.com"><img src={oldBtonomicsLogo} alt="Old Btonomics.com" /></a>
								</div>
								<div class="grid content-around gap-y-4 rounded-2xl bg-base-300 p-4 text-xl font-bold">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											class="me-2 inline"
											viewBox="0 0 24 24"
											><g
												fill="none"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												color="currentColor"
												><path
													d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009" /><path
													d="m8 13l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L8 17m4 0h4" /></g
											></svg
										>Wordpress, Bunny CDN
									</div>
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="icon icon-tabler icons-tabler-outline icon-tabler-cpu me-2 inline"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path
												d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path
												d="M14 3v2" /><path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path
												d="M10 21v-2" /></svg
										>Ubuntu, Nginx, PHP-FPM, Apache
									</div>
								</div>

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
					<div class="animate-eat-btonomics card w-full border border-gray-200 bg-base-100 shadow-xl">
						<div class="group card-body grid items-center gap-y-5">
							<div class="space-y-8">
								<h3 class="pb-4 text-center text-4xl font-black text-base-content">
									<a href="https://btonomics.com">BTOnomics v2</a>
								</h3>
								<div class="grid content-around gap-y-4 rounded-2xl bg-base-300 p-4 text-xl font-bold">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											class="me-2 inline"
											viewBox="0 0 24 24"
											><g
												fill="none"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												color="currentColor"
												><path
													d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009" /><path
													d="m8 13l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L8 17m4 0h4" /></g
											></svg
										>AstroJS, Tailwind, Pagefind
									</div>
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="icon icon-tabler icons-tabler-outline icon-tabler-cpu me-2 inline"
											><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
												d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path
												d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path
												d="M14 3v2" /><path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path
												d="M10 21v-2" /></svg
										>Cloudflare Pages
									</div>
								</div>

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
			<p class="mt-24 text-center text-base">
				Copyright © 2024 Zixian Chen. All rights reserved. Some icons from <a
					href="https://www.freepik.com/free-psd/3d-rendering-kawaii-time-date-icon_32312582.htm#&position=20&from_view=collections&uuid=b54263a3-356c-4242-84f8-1a3bd53f3865"
					>Freepik</a>
			</p>
		</section>
	</div>
</div>

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
