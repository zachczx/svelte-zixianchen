<script>
	import profilepic from '$lib/assets/kitandi.webp?enhanced&w=500';
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=500';
	import pill from '$lib/assets/pill.webp';
	import rankamateLogo from '$lib/assets/rankamate-logo.webp?enhanced&w=200';
	import TablerLink from '$lib/svg/TablerLink.svelte';
	import astronautGuitar from '$lib/assets/astronaut-guitar.webp';
	import headphoneSquare from '$lib/assets/headphone-square.webp';
	import money from '$lib/assets/money.webp';
	import supercomputer from '$lib/assets/supercomputer.webp';
	import TankSvg from '$lib/svg/TankSvg.svelte';
	import treesvg from '$lib/svg/trees-tree-svgrepo-com.svg';
	import NetworkSvg from '$lib/svg/NetworkSvg.svelte';
	import ChatSvg from '$lib/svg/ChatSvg.svelte';
	import PresentationStatsSvg from '$lib/svg/PresentationStatsSvg.svelte';
	import www from '$lib/assets/www.webp';
	import challenge from '$lib/assets/challenge.webp';
	import selfSndgoPic from '$lib/assets/DSC03163.webp?enhanced&w=300;500;1000';
	import oldBtonomicsLogo from '$lib/assets/btonomics_logo-3-300x100.webp';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	/* onMount(async () => {
		await import('https://unpkg.com/@splinetool/viewer/build/spline-viewer.js');
	});
 */
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let tl = gsap.matchMedia();
		const elLeft = document.getElementsByClassName('fromLeft');
		const elRight = document.getElementsByClassName('fromRight');
		const elBottom = document.getElementsByClassName('fromBottom');
		const elAuto = document.getElementsByClassName('fromAuto');
		tl.add('(min-width: 1028px)', () => {
			/*for (let i = 0; i < elLeft.length; i++) {
				gsap.from(elAuto[i], {
					scrollTrigger: {
						trigger: elAuto[i],
						start: 'top center',
						end: 'center center',
						scrub: true,
						markers: false
					},
					y: -100,
					autoAlpha: 0.8,
					ease: 'sine.out',
					stagger: 0.05
				});
			}*/
			/*gsap.from('.fromAuto', {
				y: 100,
				autoAlpha: 0.5,
				duration: 0.5,
				ease: 'sine.out',
				stagger: 0.08
			}); */

			for (let i = 0; i < elLeft.length; i++) {
				gsap.from(elLeft[i], {
					scrollTrigger: {
						trigger: elLeft[i],
						start: 'top 80%',
						end: 'center 60%',
						scrub: true,
						markers: false,
					},
					x: -100,
					autoAlpha: 0.8,
					duration: 1,
					ease: 'circ.out',
					delay: 0.3,
					stagger: 0.3,
				});
			}

			for (let i = 0; i < elRight.length; i++) {
				gsap.from(elRight[i], {
					scrollTrigger: {
						trigger: elRight[i],
						start: 'top 80%',
						end: 'center 60%',
						scrub: true,
						markers: false,
					},
					x: 100,
					autoAlpha: 0.8,
					duration: 1,
					ease: 'circ.out',
					delay: 0.3,
					stagger: 0.3,
				});
			}

			/*  
			For the middle cards 
			*/

			// For fromBottom
			for (let i = 0; i < elBottom.length; i++) {
				gsap.from(elBottom[i], {
					scrollTrigger: {
						trigger: elBottom[i],
						start: 'top 80%',
						end: 'center 70%',
						scrub: true,
						markers: false,
					},
					y: 70,
					autoAlpha: 0.8,
					ease: 'circ.out',
				});
			}

			gsap.from('.animate-about-work', {
				scrollTrigger: {
					trigger: '.animate-about-work',
					start: 'top 70%',
					end: 'bottom 70%',
					scrub: true,
					markers: false,
				},
				y: 70,
				autoAlpha: 0.8,
				ease: 'circ.out',
				stagger: { each: 0.5, from: 'end' },
			});
			gsap.from('.animate-education-certifications', {
				scrollTrigger: {
					trigger: '.animate-education-certifications',
					start: 'top 80%',
					end: 'center 70%',
					scrub: true,
					markers: false,
				},
				y: 70,
				autoAlpha: 0.8,
				ease: 'circ.out',
				stagger: 0.4,
			});

			gsap.from('.animate-tech-comms', {
				scrollTrigger: {
					trigger: '.animate-tech-comms',
					start: 'top 80%',
					end: 'center 70%',
					scrub: true,
					markers: false,
				},
				y: 70,
				autoAlpha: 0.8,
				ease: 'circ.out',
				stagger: { each: 0.3, from: 'end' },
			});

			gsap.from('.animate-sveltekit-django', {
				scrollTrigger: {
					trigger: '.animate-sveltekit-django',
					start: 'top 70%',
					end: 'center 70%',
					scrub: true,
					markers: false,
				},
				y: 70,
				autoAlpha: 0.8,
				ease: 'circ.out',
				stagger: 0.2,
			});

			/*  
			For animation within cards
			*/
			gsap.from('.animate-terminal', {
				scrollTrigger: {
					trigger: '.animate-terminal',
					start: 'bottom 80%',
					end: 'center 70%',
					scrub: true,
					markers: false,
				},
				y: 50,
				perspective: 900,
				rotateX: 90,
				autoAlpha: 0.5,
				scale: 1.1,
				ease: 'circ.inOut',
			});

			gsap.from('.animate-stats-icon', {
				scrollTrigger: {
					trigger: '.animate-stats-icon',
					start: 'bottom 80%',
					end: 'center 80%',
					scrub: true,
					markers: false,
				},
				autoAlpha: 0.5,
				y: 100,
				ease: 'circ.inOut',
				stagger: 0.2,
			});

			gsap.from('.animate-stats', {
				scrollTrigger: {
					trigger: '.animate-stats',
					start: 'top bottom',
					end: 'top 70%',
					scrub: true,
					markers: false,
				},
				autoAlpha: 0,
				x: -40,
				ease: 'circ.inOut',
				stagger: 0.1,
			});

			gsap.from('.animate-comms', {
				scrollTrigger: {
					trigger: '.animate-comms',
					start: '-200 bottom',
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

			gsap.from('.animate-logo', {
				scrollTrigger: {
					trigger: '.animate-logo',
					start: 'bottom 80%',
					end: 'center 70%',
					scrub: true,
					markers: false,
				},
				y: 50,
				perspective: 900,
				rotateX: 90,
				autoAlpha: 0.7,
				scale: 1.1,
				ease: 'circ.out',
			});
		});
		gsap.to('.tank-svg', {
			scrollTrigger: {
				trigger: '.tank-svg',
				start: 'top 80%',
				end: '+=900',
				scrub: true,
				markers: false,
			},
			x: 600,
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
	const numMonthsSdTech = getMonthsBetween(startSdTech, today, true);
	const percentMonthsTech = Math.round(((25 + 36 + numMonthsSdTech) / numMonthsTotal) * 100);
	const percentMonthsComms = Math.round((37 / numMonthsTotal) * 100);
	const percentMonthsPolicy = Math.round((28 / numMonthsTotal) * 100);
</script>

<section class="px-3 py-10">
	<div id="header" class="screen mb-8 grid items-end">
		<div class="justify-self-center">
			<enhanced:img
				src={selfSndgoPic}
				alt="Me"
				class="mb-8 rounded-2xl"
				sizes="(min-width:1920px) 1000px, (min-width:1080px) 500px, (min-width:768px) 300px" />
		</div>
		<!-- <spline-viewer
			loading-anim-type="spinner-big-dark"
			url="https://prod.spline.design/UaBercf6C6N4dA9Z/scene.splinecode"
			style="max-height: 60vh"
			class="hidden pb-20 lg:flex"></spline-viewer> -->
		<div class="">
			<h1
				class="montserrat text-center text-7xl leading-none tracking-tighter text-black lg:text-[10rem] xl:text-[11rem] 2xl:text-[11rem] min-[1921px]:text-[20rem]">
				Zixian Chen
			</h1>
			<h2 class="custom-reveal-text montserrat mb-4 text-center text-3xl leading-none tracking-tighter lg:text-5xl">
				<span>I bridge the gaps between public policy, business needs and tech solutions.</span>
			</h2>
			<div class="mb-8 flex justify-center space-x-3 lg:mb-20">
				<!-- jam icons -->
				<a href="https://www.linkedin.com/in/zixianchen/"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-12 w-12 transition duration-500 ease-in-out hover:scale-[1.15] hover:fill-green-800"
						viewBox="-2 -2 24 24"
						><g
							><path
								d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z" /><path
								d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" /></g
						></svg
					></a>
				<a href="https://github.com/zachczx?tab=repositories"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-12 w-12 transition duration-500 ease-in-out hover:scale-[1.15] hover:fill-green-800"
						viewBox="-2 -2 24 24"
						><g
							><path
								d="M8.18 15.008c.12 0 .211-.004.271-.012a.317.317 0 0 0 .18-.107c.06-.063.09-.154.09-.274l-.004-.557c-.003-.355-.004-.637-.004-.844l-.188.033a2.41 2.41 0 0 1-.455.028a3.498 3.498 0 0 1-.57-.057a1.276 1.276 0 0 1-.548-.246a1.04 1.04 0 0 1-.36-.503l-.082-.189a2.046 2.046 0 0 0-.258-.417a.989.989 0 0 0-.357-.312l-.057-.04a.602.602 0 0 1-.106-.1a.455.455 0 0 1-.074-.114c-.016-.038-.003-.07.04-.094a.533.533 0 0 1 .238-.037l.164.025c.11.021.245.087.406.196c.16.11.293.251.397.426c.126.224.277.395.455.512a.964.964 0 0 0 .536.176c.18 0 .336-.013.467-.04a1.63 1.63 0 0 0 .369-.124c.049-.365.182-.647.4-.843a5.61 5.61 0 0 1-.839-.148a3.346 3.346 0 0 1-.77-.32a2.204 2.204 0 0 1-.66-.548c-.174-.219-.317-.505-.43-.86a4.09 4.09 0 0 1-.167-1.229c0-.66.216-1.223.647-1.687c-.202-.497-.183-1.054.057-1.671c.159-.05.394-.013.705.11c.311.123.54.228.684.316c.145.087.26.16.348.22a5.814 5.814 0 0 1 1.573-.212c.54 0 1.065.07 1.573.213l.31-.197c.214-.13.465-.251.754-.36c.29-.11.511-.14.664-.09c.246.617.268 1.174.065 1.67c.432.465.648 1.027.648 1.688c0 .464-.056.875-.168 1.233c-.112.358-.257.644-.434.86a2.29 2.29 0 0 1-.664.545a3.342 3.342 0 0 1-.77.32a5.605 5.605 0 0 1-.84.147c.284.245.426.633.426 1.163v1.957c0 .093.014.168.041.226a.226.226 0 0 0 .131.119c.06.021.114.035.16.04c.047.006.113.009.2.009z" /><path
								d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" /></g
						></svg
					></a>
				<a href="https://btonomics.com/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-2 -2 24 24"
						class="h-12 w-12 transition duration-500 ease-in-out hover:scale-[1.15] hover:fill-green-800"
						><g
							><path
								d="M5.024 12.655h3.92v1.887h-3.92zm5.881 0h3.918v1.887h-3.918zM5.021 8.881h9.802v1.887H5.021zm.003-3.774h5.881v1.887H5.024zm7.841 0h1.96v1.887h-1.96z" /><path
								d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" /></g
						></svg
					></a>
			</div>
		</div>
	</div>

	<div class="grid auto-cols-fr auto-rows-auto gap-7 xl:grid-cols-4">
		<div class="fromLeft relative col-span-2 row-span-3 grid items-end rounded-2xl md:col-span-1">
			<div
				class="a_bg-gradient-to-tr a_from-[#b5de6e] a_from-30% a_to-70% absolute h-96 w-full rounded-2xl border bg-base-100 to-[#f2ffac] shadow-xl">
			</div>
			<figure>
				<enhanced:img src={profilepic} alt="Doggo and I" class="z-20 scale-100 rounded-2xl" />
			</figure>
		</div>
		<div
			class="animate-about-work card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl lg:col-span-1"
			style="background: linear-gradient(to right, rgba(254,254,254,0.9) 40%, rgba(254,254,254,0.85) 90%), url({www}); background-size: cover; background-position: center 60%">
			<div class="card-body space-y-4">
				<h3>About</h3>
				<div class="text-2xl">
					I <span class="font-bold">understand web tech</span>. I can go broad and deep for tech issues and technical
					stuff.
				</div>
			</div>
		</div>
		<div
			class="animate-about-work card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl lg:col-span-1"
			style="background: linear-gradient(to right, rgba(254,254,254,0.96) 40%, rgba(254,254,254,0.9) 90%), url({challenge}); background-size: cover; background-position: left">
			<div class="card-body space-y-4">
				<h3>Work</h3>
				<div class="text-2xl">
					I <span class="font-bold">challenge flawed tech policies</span> that are ineffective and archaic. I push to
					<span class="font-bold">rewrite, not digitalize</span> poor biz requirements.
				</div>
			</div>
		</div>
		<div
			class="fromRight col-span-2 row-span-1 h-full w-full space-y-0 self-center rounded-2xl opacity-0 saturate-0 xl:col-span-1 xl:row-span-3 xl:opacity-100"
			style="background: url({headphoneSquare}) no-repeat; background-size: cover; background-position: 20% 25%">
		</div>
		<div
			class="fromBottom card col-span-2 w-full border border-base-300 bg-base-100 shadow-xl"
			style="background: linear-gradient(to right, rgba(254,254,254,0.95), rgba(254,254,254,0.7)), url({astronautGuitar}); background-size: cover; background-position: right">
			<div>
				<div class="card-body space-y-4">
					<h3 class="z-10">Personal</h3>
					<p class="text-2xl">
						I'm a hobbyist in <span class="font-bold">webdev</span>,
						<span class="font-bold">stable diffusion</span>.
					</p>
					<p class="text-2xl">
						I enjoy listening to
						<span class="font-bold">tech business</span> perspectives (shoutout All-In Podcast).
					</p>
				</div>
			</div>
		</div>
		<div
			class="animate-education-certifications card col-span-2 w-full border border-base-300 bg-base-100 shadow-xl lg:col-span-1"
			style="background: linear-gradient(to right, rgba(253,253,253,1), rgba(254,254,254,0.85)), url({money}); background-size: cover; background-position: right bottom;">
			<div class="card-body space-y-4">
				<h3>Education</h3>
				<p class="text-2xl">
					Studied <span class="font-bold">Political Science</span>. Loved comparative & money politics.
				</p>
			</div>
		</div>
		<div
			class="animate-education-certifications card col-span-2 w-full border border-base-300 bg-base-100 shadow-xl lg:col-span-1"
			style="background: linear-gradient(rgba(254,254,254,0.95), rgba(254,254,254,0.8)), url({supercomputer}); background-size: cover; background-position: center ">
			<div class="card-body space-y-4">
				<h3>Certifications</h3>
				<p class="text-2xl">
					Did Coursera Specializations (<a
						href="https://www.coursera.org/account/accomplishments/specialization/D9EZKV26D69B"
						class="font-bold text-primary underline hover:text-secondary">Meta Back-end Developer</a
					>,
					<a
						href="https://www.coursera.org/account/accomplishments/specialization/certificate/MVCFEP4ZHVSV"
						class="font-bold text-primary underline hover:text-secondary">AWS Fundamentals</a
					>,
					<a
						href="https://www.credly.com/badges/369dd8b6-19bd-45ba-8272-2b997111c2b7/linked_in_profile"
						class="font-bold text-primary underline hover:text-secondary">Google UX</a
					>),
					<a
						href="https://bcert.me/bc/html/show-badge.html?b=twwbrxwh"
						class="font-bold text-primary underline hover:text-secondary">Certified ScrumMaster</a
					>.
				</p>
			</div>
		</div>
		<!-- 
			Break
		-->
		<div class="col-span-2 h-24 md:col-span-4"></div>
		<!-- 
			Break
		-->
		<div class="fromLeft card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl md:col-span-1">
			<div class="card-body">
				<div class="mb-3 self-center"><PresentationStatsSvg /></div>
				<h2>Career Stats</h2>
				<div class="cols-auto-cols grid justify-items-start divide-y-2 bg-base-100">
					<div class="stat grid grid-cols-3 px-0">
						<div class="col-span-2 text-3xl font-medium">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-code me-3 inline h-12 w-12 stroke-primary"
								><path stroke="none" d="M0 0h24v24H0z" class="animate-stats" fill="none" /><path
									class="animate-stats"
									d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" class="animate-stats" /><path
									d="M14 4l-4 16"
									class="animate-stats" /></svg>
							<div class="animate-stats inline-block">Tech</div>
						</div>
						<div class="animate-stats text-5xl font-bold text-primary">{percentMonthsTech}%</div>
					</div>
					<div class="stat grid grid-cols-3 px-0">
						<div class="col-span-2 text-3xl font-medium">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-messages me-3 inline h-12 w-12 stroke-base-content stroke-primary"
								><path stroke="none" class="animate-stats" d="M0 0h24v24H0z" fill="none" /><path
									d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"
									class="animate-stats" /><path
									d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"
									class="animate-stats" /></svg>
							<div class="animate-stats inline-block">Comms</div>
						</div>
						<div class="animate-stats text-5xl font-bold text-lime-500">{percentMonthsComms}%</div>
					</div>

					<div class="stat grid grid-cols-3 px-0">
						<div class="col-span-2 text-3xl font-medium">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-file-text me-3 inline h-12 w-12 stroke-base-content stroke-primary"
								><path stroke="none" d="M0 0h24v24H0z" fill="none" class="animate-stats" />
								<g class="animate-stats">
									<path d="M14 3v4a1 1 0 0 0 1 1h4" /><path
										d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /></g>
								<g class="animate-stats"><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" /></g></svg>
							<div class="animate-stats inline-block">Policy</div>
						</div>
						<div class="animate-stats text-5xl font-bold text-lime-500">{percentMonthsPolicy}%</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class="animate-tech-comms card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl md:col-span-1">
			<div class="card-body space-y-4">
				<h3>Tech</h3>

				<div>
					<h4 class="text-2xl font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-code inline h-8 w-8 stroke-primary pb-1"
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path
								d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg
						><span class="ps-2">Tech Infra Policy Team Lead</span>
					</h4>
					<p>
						Did policies, funding assessments for cloud, on-prem hosting, SG Tech Stack, toolchains and other infra.
					</p>
				</div>
				<div>
					<h4 class="text-2xl font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-code inline h-8 w-8 stroke-primary pb-1"
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path
								d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg
						><span class="ps-2">Comms Tech Team Lead</span>
					</h4>
					<p>Owned media analyst products. Led investments in NLP & CV research.</p>
				</div>
				<div class="flex items-center justify-center"><NetworkSvg /><NetworkSvg /></div>
			</div>
		</div>
		<div
			class="animate-tech-comms card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl md:col-span-1">
			<div class="card-body space-y-4">
				<h3>Comms</h3>
				<div>
					<h4 class="text-2xl font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-messages inline h-8 w-8 stroke-primary"
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
								d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" /><path
								d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg
						><span class="ps-2">Media Relations Officer</span>
					</h4>
					<p>Managed media and collaborated on unpaid features of MINDEF & SAF.</p>
				</div>
				<div>
					<h4 class="text-2xl font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-messages inline h-8 w-8 stroke-primary"
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
								d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" /><path
								d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg
						><span class="ps-2">Comms Strategist</span>
					</h4>
					<p>Crafted comms campaigns and strategies.</p>
				</div>
				<div class="item-start self-center"><ChatSvg /></div>
			</div>
		</div>
		<div class="fromRight card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl md:col-span-1">
			<div class="card-body space-y-4">
				<h3>Policy</h3>
				<div>
					<h4 class="text-2xl font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-file-text inline h-8 w-8 stroke-primary"
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path
								d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 9l1 0" /><path
								d="M9 13l6 0" /><path d="M9 17l6 0" /></svg
						><span class="ps-2">NS Policy Officer</span>
					</h4>
					<p>Did NS policies for sportsmen, leave, citizenship, exit control. Worked in Committee to Strengthen NS.</p>
				</div>
			</div>
			<div
				class="flex h-28 items-end p-0"
				style="background: url('/trees-tree-svgrepo-com.svg'); background-repeat: repeat-x; background-position: top">
				<TankSvg class="tank-svg" />
			</div>
		</div>
		<!-- 
			Break
		-->
		<div class="col-span-2 h-24 md:col-span-4"></div>
		<!-- 
			Break
		-->
		<div class="fromLeft card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl lg:col-span-1">
			<div class="card-body space-y-4">
				<h2>Side Projects</h2>
				<div class="animate-terminal mockup-code">
					<pre data-prefix=">"><code>npm install <span class="text-yellow-300">@sveltejs/kit astro</span></code></pre>
					<pre data-prefix="$"><code>pip install <span class="text-yellow-300">Django</span></code></pre>
					<pre data-prefix=">"><code>npm install <span class="text-yellow-300">tailwindcss htmx.org</span></code></pre>
				</div>
			</div>
		</div>
		<div
			class="animate-sveltekit-django card col-span-2 row-span-2 border border-base-300 bg-base-100 shadow-xl md:col-span-1">
			<div class="group card-body grid gap-y-5">
				<div class="space-y-4">
					<h3 class="text-start">Sveltekit</h3>
					<p class="pb-4 text-2xl">
						I made
						<span class="text-primary"
							><a href="https://titude.app/" class="font-bold text-primary underline hover:text-secondary">Apptitude</a
							></span
						>, which gives me a clear and convenient way to distribute guides, notes, links, YouTube, organized along
						tech competencies to share with my non-technical teammates.
					</p>
					<p class="pb-4 text-2xl">I used Sveltekit with tons of JS objects.</p>
					<p class="rounded-2xl bg-base-200 p-4 text-2xl font-bold">
						Deployed as a static website to Cloudflare Pages for better perf.
					</p>
				</div>
				<div class="place-self-center">
					<a href="https://titude.app/"><enhanced:img src={apptitudeLogo} alt="Apptitude" class="animate-logo" /></a>
				</div>
			</div>
		</div>
		<div
			class="animate-sveltekit-django card col-span-2 row-span-2 border border-base-300 bg-base-100 shadow-xl md:col-span-1">
			<div class="group card-body grid gap-y-5">
				<div class="space-y-4">
					<h3 class="text-start">Sveltekit + SortableJS</h3>
					<p class="pb-4 text-2xl">
						<a href="https://appraize.zixian.dev/" class="font-bold text-primary underline hover:text-secondary"
							>Appraize</a> makes ranking sessions easier via drag & drop.
					</p>
					<p class="pb-4 text-2xl">
						Also comes with a mini dashboard, more responsive UI, db backend (Drizzle/Postgres), sessions, filters,
						keyboard shortcut, csv file upload, form actions/validation.
					</p>
					<p class="rounded-2xl bg-base-200 p-4 pb-4 text-2xl font-bold">Deployed in a docker container on NodeJS.</p>
				</div>
				<div class="place-self-center">
					<a href="https://appraize.zixian.dev/"
						><h3 class="animate-logo text-5xl text-purple-800 lg:text-[6rem]">Appraize</h3></a>
				</div>
			</div>
		</div>
		<div
			class="fromRight card col-span-2 row-span-2 w-full overflow-hidden border border-base-300 bg-base-100 shadow-xl md:col-span-1">
			<div class="group card-body grid gap-y-5">
				<div class="relative space-y-4">
					<h3 class="text-start">Django + SortableJS + Htmx</h3>
					<p class="pb-4 text-2xl">
						<a href="https://app.zixian.dev/rank/" class="font-bold text-primary underline hover:text-secondary"
							>Rank-a-mate</a> was my first stab at making a drag & drop tool for ranking sessions in lieu of Excel.
					</p>
					<p class="rounded-2xl bg-base-200 p-4 text-2xl font-bold">Deployed on Ubuntu, Nginx, Gunicorn.</p>
					<div class="grid h-60 place-items-center">
						<a href="https://app.zixian.dev/rank/"
							><enhanced:img src={rankamateLogo} alt="Rank-a-Mate" class="animate-logo" /></a>
					</div>
				</div>
			</div>
		</div>

		<div
			class="fromLeft card card-side col-span-2 row-span-2 w-full border border-base-300 bg-base-100 shadow-xl md:col-span-1">
			<div class="card-body relative">
				<div class="space-y-4">
					<h3>Django + Htmx</h3>
					<p class="pb-4 text-start text-2xl">
						<span class="font-bold text-primary underline hover:text-secondary"
							><a href="https://app.zixian.dev/eatyourmeds/">Eat Your Medicine!</a></span>
						was a try at making something that helped me plan dose timings and display medicine info for my kid.
					</p>

					<p class="rounded-2xl bg-base-200 p-4 text-start text-2xl font-bold">Deployed on Ubuntu, Nginx, Gunicorn</p>
				</div>
				<div class="group relative mt-10 flex">
					<a href="https://app.zixian.dev/eatyourmeds/">
						<img
							src={pill}
							alt="bg"
							class="animate-logo brightness-25 z-1 group-hover:brightness-25 absolute top-0 rotate-[25deg] scale-[1] blur-lg" /><img
							src={pill}
							alt="Eat Your Meds"
							class="animate-logo z-50 rotate-[25deg]" /><img
							src={pill}
							alt="Eat Your Meds"
							class="animate-logo absolute -right-20 top-20 z-50 rotate-[50deg] scale-50" /><img
							src={pill}
							alt="Eat Your Meds"
							class="animate-logo absolute -right-24 top-20 z-30 rotate-[50deg] scale-[0.4] blur-xl" />
					</a>
				</div>
			</div>
		</div>
		<div class="col-span-2 grid gap-7 md:col-span-3 md:grid-cols-2">
			<div class="fromBottom card w-full border border-base-300 bg-base-100 shadow-xl">
				<div class="group card-body grid gap-y-5">
					<div class="relative space-y-4">
						<h3 class="text-start">WordPress</h3>
						<p class="pb-4 text-2xl">
							I started
							<span class="font-bold text-primary underline hover:text-secondary"
								><a href="https://old.btonomics.com/">BTOnomics</a></span
							>, a blog on home renovation in 2018. I used WordPress, with it being an obvious choice in 2018.
						</p>
						<p class="text-2xl">
							Experimented with content for SEO, themes/plug-ins, tweaking, getting perf hits, optimizing, then
							installing more. Got good SEO by writing organic content that people wanted and good page load speeds, esp
							TTFB/LCP/render-blocking.
						</p>
						<p class="rounded-2xl bg-base-200 p-4 pb-8 text-2xl font-bold">
							Deployed on Bunny CDN, Litespeed webserver on an Apache webhost. Read-only archive now on Ubuntu, Nginx,
							PHP-FPM.
						</p>
						<div class="grid place-items-center">
							<a href="https://old.btonomics.com"
								><img src={oldBtonomicsLogo} alt="Old Btonomics.com" class="animate-logo" /></a>
						</div>
					</div>
				</div>
			</div>
			<div class="fromBottom card w-full border border-base-300 bg-base-100 shadow-xl">
				<div class="group card-body grid gap-y-5">
					<div class="relative space-y-4">
						<h3 class="text-start">AstroJS</h3>
						<p class="pb-4 text-2xl">
							Migrated <span class="font-bold text-primary underline hover:text-secondary"
								><a href="https://btonomics.com/">BTOnomics</a></span> to AstroJS, in part to see if it lives up to the hype.
							Not disappointed. Chatgpt did the bulk of conversion of WordPress HTML to markdown, with a few hiccups here
							and there.
						</p>
						<p class="text-2xl">
							Native markdown support, native view transitions, great image tools, really fast speeds. Haven't felt the
							need to reach into Svelte or React.
						</p>
						<p class="rounded-2xl bg-base-200 p-4 pb-4 text-2xl font-bold">Deployed on Cloudflare Pages.</p>
						<div class="grid place-items-center">
							<a href="https://old.btonomics.com"
								><span class="text-6xl font-black text-gray-500 lg:text-[6rem]">BTOnomics</span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<p class="mt-14 text-center text-base">Copyright © 2024 Zixian Chen. All rights reserved.</p>
</section>

<style>
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
			animation-range-start: cover 20vh;
			animation-range-end: cover 40vh;
		}
	}
	@media only screen and (min-width: 1600px) {
		.custom-reveal-text span {
			animation-range-start: cover 20vh;
			animation-range-end: cover 40vh;
		}
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
