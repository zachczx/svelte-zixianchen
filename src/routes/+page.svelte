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

	import CodeTypingBro from '$lib/svg/Code-typing-bro.svelte';
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=310';
	import rankamateLogo from '$lib/assets/rankamate-logo.webp?enhanced&w=120';
	import eatYourMedsLogo from '$lib/assets/eatyourmedslogo.webp?enhanced&w=250';
	import btonomicsOldLogo from '$lib/assets/btonomics_logo-3-300x100.webp?enhanced&w=250';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	///////////////////////////////////

	let animate: string = $state('');
	let navCurrent: string = $state('');

	onMount(() => {
		let tank = document.getElementById('tank') as HTMLElement;

		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// entry.target.classList.add('drive-right');
						animate = 'drive-right-r';
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

		/**
		 * Matrix code
		 */

		const canvas = document.getElementById('c') as HTMLCanvasElement;
		const context = canvas.getContext('2d');

		canvas.width = window.innerWidth;
		canvas.height = 800; //window.innerHeight;
		const katakana =
			'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
		const latin =
			'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const nums = '0123456789012345678901234567890123456789012345678901234567890123456789';

		const alphabet = katakana + latin + nums;

		const fontSize: number = 48;
		const columns = canvas.width / fontSize;

		const rainDrops: string | number[] = [];

		for (let x = 0; x < columns; x++) {
			rainDrops[x] = 1;
		}

		const draw = () => {
			// lies under new characters raining down, transparency does subtle overlay effect
			if (context != null) {
				context.fillStyle = 'rgb(255, 114, 94, 0.09)';
				context.fillRect(0, 0, canvas.width, canvas.height);

				context.fillStyle = '#fafafa'; //'#FF725E';

				context.font = fontSize + 'px monospace';

				for (let i = 0; i < rainDrops.length; i++) {
					const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
					context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

					if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
						rainDrops[i] = 0;
					}
					rainDrops[i]++;
				}
			}
		};

		setInterval(draw, 90);

		//////////////// End Canvas

		// For GSAP

		gsap.registerPlugin(ScrollTrigger);
		const mm = gsap.matchMedia();
		let elHeroScroll = document.getElementsByClassName('hero-scroll');
		let elTaglineShift = document.getElementsByClassName('tagline-shift');
		mm.add(
			{ isLgBreakpoint: '(min-width: 1024px)', prefersReducedMotion: '(prefers-reduced-motion: no-preference)' },
			(context) => {
				let { isLgBreakpoint, prefersReducedMotion } = context.conditions;

				if (isLgBreakpoint && prefersReducedMotion) {
					const tl = gsap.timeline({
						defaults: {
							filter: 'grayscale(100%)',
							ease: 'circ.out',
							// stagger: { each: 0.1 },
						},
					});
					for (let i = 0; i < elHeroScroll.length; i++) {
						tl.to(elHeroScroll[i], {
							y: -50,
							scrollTrigger: {
								trigger: elHeroScroll[i],
								start: 'center 30%',
								scrub: true,
								pin: false,
								end: '+=100',
								markers: false,
							},
						});
					}

					tl.to('.hero-scroll-sn', {
						y: -50,
						scrollTrigger: {
							trigger: '.hero-scroll-sn',
							start: 'center 20%',
							scrub: true,
							pin: false,
							end: '+=200',
							markers: false,
						},
					});
					for (let i = 0; i < elTaglineShift.length; i++) {
						gsap.to(elTaglineShift[i], {
							y: -120 * (i + 1),
							textDecoration: 'solid underline red 10px',

							autoAlpha: 1,
							scrollTrigger: {
								trigger: elTaglineShift[i],
								start: 'bottom 80%',
								scrub: true,
								pin: false,
								end: '+=100',
								markers: false,
							},
						});
					}
					gsap.to('.tagline-no-shift', {
						textDecoration: 'solid underline red 10px',

						autoAlpha: 1,
						scrollTrigger: {
							trigger: '.tagline-no-shift',
							start: 'bottom 80%',
							scrub: true,
							pin: false,
							end: '+=100',
							markers: false,
						},
					});
				}
			},
		);

		/**
		 * For the coding bros typing svg animations
		 */
		// const svgTyping = document.getElementsByClassName('bubble');

		// const svgTypingAnimation = gsap.timeline({ repeat: -1 });
		// svgTypingAnimation.to(svgTyping, {
		// 	stagger: { each: 0.2, from: 'random' },
		// 	duration: 0.5,
		// 	// ease: 'bounce.out',
		// 	scale: 1.4,
		// });
		// svgTypingAnimation.to(svgTyping, {
		// 	stagger: { each: 0.2, from: 'random' },
		// 	duration: 0.9,
		// 	// ease: 'bounce.out',
		// 	scale: 1,
		// });
	});

	/**
	 * Calculate months in between 2 dates
	 * @param {Date} date1
	 * @param {Date} date2
	 * @param {boolean} roundUpFractionalMonths
	 * @returns {number}
	 */
	function getMonthsBetween(date1: Date, date2: Date, roundUpFractionalMonths: boolean): number {
		//Months will be calculated between start and end dates.
		//Make sure start date is less than end date.
		//But remember if the difference should be negative.
		let startDate = date1;
		let endDate = date2;
		let inverse = false;
		if (date1 > date2) {
			startDate = date2;
			endDate = date1;
			inverse = true;
		}

		//Calculate the differences between the start and end dates
		let yearsDifference = endDate.getFullYear() - startDate.getFullYear();
		let monthsDifference = endDate.getMonth() - startDate.getMonth();
		let daysDifference = endDate.getDate() - startDate.getDate();

		let monthCorrection = 0;
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
	const today: Date = new Date();
	const startWork: Date = new Date(2013, 6, 1);
	const startSdTech: Date = new Date(2023, 12, 1);
	const numMonthsTotal: number = getMonthsBetween(startWork, today, true);
	const numYearsTotal: number = Math.round(numMonthsTotal / 12);
	const numMonthsSdTech: number = getMonthsBetween(startSdTech, today, true);
	const percentMonthsTech: number = Math.round(((25 + 36 + numMonthsSdTech) / numMonthsTotal) * 100);
	const percentMonthsComms: number = Math.round((37 / numMonthsTotal) * 100);
	const percentMonthsPolicy: number = Math.round((28 / numMonthsTotal) * 100);
</script>

<svelte:head>
	<title>Hi! I'm Zixian.</title>
	<meta name="description" content="Hello, I'm Zixian Chen." />
</svelte:head>

<Nav {navCurrent} />
<div class="grid min-h-dvh justify-items-center 2xl:overflow-x-clip">
	<header
		id="header"
		class="hidden content-center justify-items-center xl:grid xl:min-h-dvh xl:max-w-[1500px] xl:grid-cols-5 xl:gap-x-10 xl:gap-y-10">
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
			class="hidden h-[10rem] w-full justify-self-end overflow-hidden rounded-br-full rounded-br-full rounded-tl-full xl:col-span-2 xl:grid">
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
	<enhanced:img src={selfSndgoPic} alt="" class="max-w-screen xl:hidden"></enhanced:img>
	<main>
		<section
			class="max-w-dvw hidden min-h-[30rem] content-center gap-y-20 xl:grid xl:min-h-[60rem]"
			style="background:url({bridge}); background-size: cover; background-position: center">
			<h2
				class="custom-reveal-text mb-4 w-full rounded-5xl text-center font-sans text-2xl leading-none tracking-tighter xl:text-4xl">
				<span>I'm a public servant trying to close gaps between</span><span class="opacity-0">
					policy, business, tech.</span>
			</h2>
			<h2
				class="custom-reveal-text tagline-no-shift mb-4 w-full rounded-5xl text-center font-sans text-2xl leading-none tracking-tighter xl:text-4xl">
				<span class="opacity-0">I'm a public servant trying to close gaps between </span><span>policy,</span><span
					class="opacity-0">business, tech.</span>
			</h2>
			<h2
				class="custom-reveal-text tagline-shift mb-4 mt-10 w-full rounded-5xl text-center font-sans text-2xl leading-none tracking-tighter xl:text-4xl">
				<span class="opacity-0">I'm a public servant trying to close gaps between policy,</span><span
					>business,
				</span><span class="opacity-0"> tech.</span>
			</h2>
			<h2
				class="custom-reveal-text tagline-shift mb-4 mt-10 w-full rounded-5xl text-center font-sans text-2xl leading-none tracking-tighter xl:text-4xl">
				<span class="opacity-0">I'm a public servant trying to close gaps between policy, business, </span><span
					>tech.
				</span>
			</h2>
		</section>
		<section class="max-w-dvw grid min-h-[7.5rem] place-items-center content-center gap-y-10 text-center xl:hidden">
			<h2
				class="custom-reveal-text mb-4 w-full rounded-5xl text-center font-sans text-2xl leading-none tracking-tighter xl:text-4xl">
				<span>I'm a public servant trying to close gaps between policy, business, tech.</span>
			</h2>
		</section>
		<section class="grid justify-items-center bg-[#E9ECEF] px-4 2xl:w-dvw">
			<div class="grid auto-cols-fr auto-rows-auto gap-7 py-10 lg:py-28 xl:grid-cols-4 2xl:max-w-screen-2xl">
				<div
					class="navItem card col-span-2 row-span-1 w-full overflow-hidden rounded-5xl bg-gradient-to-br from-red-50 to-red-200 xl:col-span-3"
					id="about">
					<div class="card-body relative grid h-fit grid-cols-2 justify-items-center p-8">
						<div class="z-10 hidden max-h-56 xl:flex">
							<enhanced:img src={winXp} alt="Windows XP ugh" class="-ms-20 mt-14 rounded-2xl"></enhanced:img>
						</div>

						<div class="z-10 col-span-2 space-y-4 self-center xl:col-span-1">
							<h3>About Me</h3>
							<p>
								I'm into <b>web dev, computers, devices, sysadmin</b>.
							</p>
							<p>I'll die on the hills of Windows, Ubuntu, Android.</p>
							<p>Never used a Mac.</p>
						</div>
						<enhanced:img
							src={ubuntuCli}
							alt="Ubuntu"
							class="absolute -left-14 top-4 hidden -rotate-[0deg] rounded-2xl xl:flex"></enhanced:img>
					</div>
				</div>
				<div
					class="card col-span-2 w-full overflow-hidden rounded-5xl bg-gradient-to-br from-red-50 to-red-200 xl:col-span-1">
					<div class="card-body grid max-h-96 content-center space-y-4">
						<h3>Education</h3>
						<div class="space-y-2">
							<p>
								Studied <b>Political Science</b> at NUS.
							</p>
							<p>I loved comparative & money politics. But I did lots of IR. 🥲</p>
						</div>
					</div>
				</div>
				<div class="card col-span-2 w-full rounded-5xl bg-gradient-to-br from-red-50 to-red-200 xl:col-span-1">
					<div class="card-body space-y-4 overflow-hidden">
						<h3>Certification</h3>
						<div class="space-y-2 pt-2">
							<ul class="grid gap-y-8">
								<li>
									<a
										href="https://www.coursera.org/account/accomplishments/specialization/D9EZKV26D69B"
										class="rounded-full bg-red-300 px-4 py-2 text-lg hover:bg-red-500 hover:text-base-100 xl:px-4 xl:text-xl"
										>Meta Back-end Dev</a>
								</li>
								<li>
									<a
										href="https://www.coursera.org/account/accomplishments/specialization/certificate/MVCFEP4ZHVSV"
										class="rounded-full bg-red-300 px-4 py-2 text-lg hover:bg-red-500 hover:text-base-100 xl:px-4 xl:text-xl"
										>AWS Fundamentals</a>
								</li>
								<li>
									<a
										href="https://www.credly.com/badges/369dd8b6-19bd-45ba-8272-2b997111c2b7/linked_in_profile"
										class="rounded-full bg-red-300 px-4 py-2 text-lg hover:bg-red-500 hover:text-base-100 xl:px-4 xl:text-xl"
										>Google UX</a>
								</li>
								<li>
									<a
										href="https://bcert.me/bc/html/show-badge.html?b=twwbrxwh"
										class="rounded-full bg-red-300 px-4 py-2 text-lg hover:bg-red-500 hover:text-base-100 xl:px-4 xl:text-xl"
										>Certified ScrumMaster</a>
								</li>
							</ul>
						</div>
						<div class="containerC relative -m-12 h-36">
							<div class="circle0"></div>
							<div class="circle"></div>
							<div class="circle2"></div>
							<div
								id="google"
								class="absolute left-48 top-6 z-10 rounded-full border-2 border-gray-200 bg-pink-600 stroke-base-100 p-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
									><path
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M20.945 11a9 9 0 1 1-3.284-5.997l-2.655 2.392A5.5 5.5 0 1 0 17.125 14H13v-3z" /></svg>
							</div>
							<div
								id="aws"
								class="absolute left-36 top-20 z-10 rounded-full border-2 border-gray-200 bg-pink-600 stroke-base-100 p-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
									><path
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 18.5a15.198 15.198 0 0 1-7.37 1.44A14.62 14.62 0 0 1 3 17m16.5 4c.907-1.411 1.451-3.323 1.5-5c-1.197-.773-2.577-.935-4-1M3 11V6.5a1.5 1.5 0 0 1 3 0V11M3 9h3m3-4l1.2 6L12 7l1.8 4L15 5m3 5.25c0 .414.336.75.75.75H20a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75" /></svg>
							</div>
							<div
								id="meta"
								class="absolute left-20 top-32 z-10 rounded-full border-2 border-gray-200 bg-pink-600 stroke-base-100 p-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
									><path
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 10.174C13.766 7.39 15.315 6 16.648 6c2 0 3.263 2.213 4 5.217c.704 2.869.5 6.783-2 6.783c-1.114 0-2.648-1.565-4.148-3.652a27.627 27.627 0 0 1-2.5-4.174m0 0C10.234 7.39 8.685 6 7.352 6c-2 0-3.263 2.213-4 5.217c-.704 2.869-.5 6.783 2 6.783C6.466 18 8 16.435 9.5 14.348c1-1.391 1.833-2.783 2.5-4.174" /></svg>
							</div>
							<div
								id="coursera"
								class="absolute left-72 top-20 z-10 rounded-full border-2 border-gray-200 bg-pink-600 fill-base-100 p-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32"
									><path
										d="M31.99 15.74a4.181 4.181 0 0 0-.026-.37v-.005a7.929 7.929 0 0 0-1.318-3.75a8.18 8.18 0 0 0-1.156-1.385a8.307 8.307 0 0 0-2.188-1.51a9.381 9.381 0 0 0-4.068-.891a9.821 9.821 0 0 0-3.396.594a8.465 8.465 0 0 0-2.427 1.328c-.151.125-.302.25-.443.385l-.115.115l-.156.167l-.109.109l-.188.198c-.141.156-.271.313-.396.464l-.005-.005c-.255.307-.49.635-.667.922c-.12.188-.234.38-.344.573l-1.531 3.089h.005l-.083.161l-.167.339c-.333.682-.693 1.359-1.094 1.917c-.896.979-1.906 1.464-3.208 1.464c-.089 0-.182-.005-.276-.01c-.786-.031-1.458-.219-2.052-.573a3.425 3.425 0 0 1-1.328-1.37a3.566 3.566 0 0 1-.432-1.828v-.047c.042-1.01.427-1.802 1.208-2.479c.188-.167.385-.302.594-.427c.026-.016.057-.031.083-.047c.583-.318 1.24-.474 1.99-.474l.234.005c1.203.047 2.125.422 2.865 1.151l2.307-4.151a8.973 8.973 0 0 0-1.865-.943c-.026-.01-.052-.026-.078-.031c-.083-.031-.167-.063-.25-.089a9.81 9.81 0 0 0-2.286-.464c-.021 0-.042-.005-.063-.005c-.12-.01-.245-.021-.365-.026c-.13-.005-.266-.01-.396-.01h-.073a9.314 9.314 0 0 0-4.036.891a8.238 8.238 0 0 0-3.339 2.891a8.008 8.008 0 0 0-1.354 4.505c-.005 2.089.755 3.917 2.266 5.458c1.583 1.615 3.63 2.484 6.094 2.589c.156.005.313.01.469.01c1.391 0 2.682-.25 3.839-.745c.286-.125.568-.266.854-.427c.156-.089.302-.188.453-.286l.104-.073l.182-.125c.219-.156.422-.328.625-.51l.068-.068c.12-.109.234-.224.344-.339l.417-.469l.156-.198l.078-.109l.073-.104c.615-1.031 2.62-4.802 2.62-4.802v-.005l.12-.229l.099-.182c.292-.536.505-.917.792-1.318l.005-.016c.656-.953 1.792-1.635 3.13-1.75c2.24-.193 4.203 1.281 4.38 3.286c.182 2.01-1.49 3.797-3.729 3.99c-.453.036-.906.01-1.349-.089l-.01.005c-1.646-.344-2.693-1.536-3.208-2.078l-2.156 3.969s.672.672 1.13 1.01a8.75 8.75 0 0 0 1.531.875a9.525 9.525 0 0 0 3.781.786c.161 0 .13 0 .297-.01c2.458-.099 4.651-1.042 6.234-2.656c1.495-1.536 2.307-3.286 2.318-5.359v-.063z" /></svg>
							</div>
							<div
								id="scrum"
								class="absolute -bottom-14 right-28 z-10 h-[70px] w-[70px] overflow-hidden rounded-full border-2 border-gray-200 bg-pink-600 fill-base-100 p-3">
								<svg class="-ms-6 -mt-8" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"
									><path
										d="M1.611 7.684a.3.3 0 1 0 .34.254a.3.3 0 0 0-.34-.254m.88.002a.325.325 0 0 0-.296.324a.325.325 0 0 0 .327.326a.325.325 0 0 0 .324-.326a.325.325 0 0 0-.325-.324zm-1.665.392a.275.275 0 0 0-.232.31c.022.15.16.253.31.231a.27.27 0 0 0 .23-.309a.273.273 0 0 0-.308-.232m2.086.375a.35.35 0 0 0 .35.35a.35.35 0 0 0 .347-.35a.35.35 0 0 0-.348-.347a.35.35 0 0 0-.349.347m3.965.027c-.613 0-1.17.34-1.17.989c0 .999 1.344.734 1.344 1.435c0 .36-.287.611-.692.611c-.296 0-.626-.098-.574-.392l.047-.262h-.4l-.061.332c-.096.564.536.744.932.744c.643 0 1.195-.397 1.195-1.06c0-1.037-1.344-.768-1.344-1.436c0-.336.297-.545.666-.545c.218 0 .513.072.469.3l-.04.232h.401l.07-.362c.083-.43-.482-.586-.843-.586m-6.541.287a.245.245 0 0 0-.207.278a.244.244 0 0 0 .277.205a.243.243 0 0 0 .207-.275a.246.246 0 0 0-.277-.207m3.326.127a.367.367 0 0 0-.31.416a.367.367 0 0 0 .415.311a.367.367 0 0 0 .311-.416a.367.367 0 0 0-.416-.31m5.664.534c-.778 0-1.4.68-1.4 1.457c0 .625.403 1.052 1.047 1.052c.578 0 .914-.355.914-.355l-.121-.355s-.315.312-.754.312c-.41 0-.657-.27-.657-.687c0-.554.448-1.028.926-1.028c.209 0 .452.085.422.28l-.03.162h.374l.052-.276c.07-.426-.455-.562-.773-.562m7.625 0c-.413 0-.768.369-.873.582h-.01c.03-.085.067-.272.067-.328c0-.128-.066-.198-.24-.198h-.497l-.064.356h.273c.07 0 .087.036.078.097l-.347 1.944h.422l.191-1.07c.087-.474.405-.967.826-.967c.244 0 .315.138.315.332c0 .08-.019.174-.032.27l-.255 1.435h.42l.197-1.096c.078-.46.391-.941.8-.941c.253 0 .32.137.32.345c0 .228-.185 1.028-.185 1.25c0 .408.287.45.483.45c.104 0 .187-.008.187-.008l.065-.356s-.045.01-.106.01c-.109 0-.195-.03-.195-.209c0-.19.191-.981.191-1.266c0-.407-.229-.632-.603-.632c-.366 0-.696.255-.865.582h-.01c-.022-.38-.2-.582-.553-.582m-4.963.027c-.348 0-.643.298-.79.639h-.01c.034-.114.077-.345.077-.407c0-.137-.064-.203-.234-.203h-.496l-.07.354h.275c.074 0 .087.048.078.105l-.343 1.938h.421l.157-.89c.095-.55.46-1.087.865-1.087c.056 0 .096.011.117.016l.084-.455a1 1 0 0 0-.13-.01m.492.03l-.066.353h.365l-.203 1.166a1.6 1.6 0 0 0-.031.303c0 .45.282.63.617.63c.461 0 .767-.328.91-.574h.008c-.03.36.144.526.44.526a3 3 0 0 0 .2-.008l.065-.356s-.04.01-.105.01c-.109 0-.196-.038-.196-.209a1 1 0 0 1 .014-.146l.305-1.696h-.787l-.067.354h.365l-.129.734c-.078.455-.435.947-.875.947c-.247 0-.33-.127-.33-.336c0-.075.014-.174.036-.273l.252-1.426zM.193 9.57a.226.226 0 0 0-.191.256a.23.23 0 0 0 .258.192a.225.225 0 0 0 .191-.256a.23.23 0 0 0-.258-.192m.219.778a.19.19 0 0 0-.162.216a.193.193 0 0 0 .219.162a.19.19 0 0 0 .162-.216a.194.194 0 0 0-.219-.162m.494.648a.166.166 0 0 0-.14.188a.164.164 0 0 0 .187.138a.166.166 0 0 0 .14-.187a.164.164 0 0 0-.187-.139m2.487.22a.401.401 0 1 0 0 .803a.403.403 0 0 0 .402-.402c0-.221-.18-.4-.402-.4m-1.811.077a.157.157 0 0 0-.145.156a.157.157 0 0 0 .159.158a.157.157 0 0 0 .156-.158a.157.157 0 0 0-.156-.156zm.672.092a.436.436 0 0 0-.418.435a.436.436 0 1 0 .435-.435zm2.205.175a.366.366 0 0 0-.365.368c0 .202.163.367.365.367a.367.367 0 0 0 .367-.367a.37.37 0 0 0-.367-.368m-3.065.51a.466.466 0 0 0-.466.467c0 .258.208.467.466.467a.466.466 0 0 0 .467-.467a.466.466 0 0 0-.467-.467m3.858.323a.32.32 0 0 0-.318.32c0 .177.14.32.318.32a.32.32 0 0 0 .32-.32a.32.32 0 0 0-.32-.32m2.812.482L6.49 15.93h-.308l-.05.275h.98l.052-.275h-.348l.44-.858h1.191l.135.858h-.354l-.046.275h.964l.05-.275h-.31l-.484-3.055zm1.684 0l-.049.266h.393l-.44 2.466a1 1 0 0 0-.021.18c0 .374.256.432.426.432c.07 0 .152-.014.152-.014l.047-.275s-.034.01-.108.01c-.104 0-.209-.015-.209-.214c0-.037.01-.1.018-.156l.478-2.695zm1.162 0l-.049.266h.39l-.437 2.466a1 1 0 0 0-.023.18c0 .374.258.432.428.432c.07 0 .152-.014.152-.014l.047-.275s-.034.01-.108.01c-.104 0-.209-.015-.209-.214c0-.037.01-.1.018-.156l.477-2.695zm1.639 0l-.074.402h.336l.074-.402zm-11.592.299a.493.493 0 0 0-.492.492c0 .272.22.49.492.49a.49.49 0 0 0 .492-.49a.493.493 0 0 0-.492-.492m22.576.039c-.256 0-.463.23-.463.518c0 .287.207.517.463.517c.26 0 .467-.23.467-.517c0-.289-.208-.518-.467-.518m-15.355.004h.008s0 .104.017.213l.21 1.363H7.39l.703-1.363c.052-.11.084-.213.084-.213m15.355.092c.21 0 .371.184.371.421s-.161.422-.37.422c-.208 0-.368-.185-.368-.422s.16-.422.367-.422m-17.945.097a.297.297 0 0 0-.297.297a.298.298 0 0 0 .596 0a.3.3 0 0 0-.3-.297m17.787.055v.535h.092v-.207h.08l.092.207h.101l-.094-.197c-.011-.024-.017-.03-.017-.03v-.003c.04-.012.09-.059.09-.141c0-.1-.062-.164-.155-.164zm.092.076h.078c.048 0 .08.033.08.088c0 .057-.032.09-.08.09h-.078zm-9.16.229c-.457 0-.795.246-.795.246l.09.261s.297-.222.658-.222c.335 0 .447.174.447.426c0 .085-.035.27-.035.27h-.143c-.6 0-1.484.155-1.484.917c0 .384.288.598.64.598c.518 0 .81-.512.805-.512h.008c-.022.317.14.465.397.465c.078 0 .164-.01.164-.01l.049-.265s-.04.01-.114.01c-.1 0-.205-.025-.205-.223c0-.2.219-1.018.219-1.297c0-.46-.284-.664-.701-.664m2.92 0c-.54 0-.888.427-.975.63h-.01a1.6 1.6 0 0 0 .074-.379c0-.123-.055-.195-.22-.195h-.418l-.05.266h.298c.07 0 .087.047.078.103l-.361 2.014h.295l.197-1.094c.095-.558.53-1.043 1-1.043c.243 0 .379.129.379.399c0 .265-.205 1.127-.205 1.34c0 .36.26.408.418.408c.073 0 .16-.01.16-.01l.049-.265s-.04.01-.11.01c-.104 0-.209-.02-.209-.223c0-.19.205-1.057.205-1.35c0-.393-.213-.611-.595-.611m2.53 0c-.726 0-1.378.649-1.378 1.459c0 .639.408 1.037 1.004 1.037c.557 0 .888-.356.888-.356l-.095-.265s-.313.332-.77.332c-.426 0-.722-.29-.722-.768c0-.649.53-1.15 1.039-1.15c.213 0 .51.09.474.312l-.031.176h.275l.043-.252c.066-.388-.43-.525-.726-.525m2.311 0c-.74 0-1.279.715-1.279 1.492c0 .601.392 1.004.992 1.004c.461 0 .822-.313.822-.313l-.091-.265s-.323.289-.719.289c-.461 0-.7-.327-.7-.739c0-.118.022-.218.022-.218h1.68s.06-.204.06-.389c0-.497-.247-.861-.787-.861m-10.058.056l-.047.266h.39l-.277 1.535c-.009.066-.023.126-.023.174c0 .374.262.418.427.418c.061 0 .153-.01.153-.01l.047-.266s-.036.01-.11.01c-.104 0-.207-.024-.207-.222a1 1 0 0 1 .012-.137l.322-1.768zm10.045.213c.287 0 .5.186.5.565c0 .094-.018.18-.018.18h-1.369c.157-.484.526-.745.887-.745M5.45 14.46a.25.25 0 1 0 0 .502a.25.25 0 1 0 0-.502m9.051.53h.127l-.022.103c-.095.412-.439.904-.847.904c-.292 0-.414-.175-.414-.379c0-.587.79-.629 1.156-.629m-9.568.404a.22.22 0 0 0-.22.216a.22.22 0 0 0 .22.22c.12 0 .216-.1.216-.22a.216.216 0 0 0-.216-.216m-.809.513a.21.21 0 0 0-.207.207c0 .114.093.205.207.205a.204.204 0 0 0 .205-.205a.206.206 0 0 0-.205-.207" /></svg>
							</div>
						</div>
					</div>
				</div>
				<div
					class="card col-span-2 grid w-full grid-cols-2 overflow-hidden rounded-5xl bg-gradient-to-br from-red-50 to-red-200">
					<div class="card-body space-y-4 self-center">
						<h3>Interests</h3>
						<p class="z-10">
							<b>Webdev</b> on-off since 2000s — PHP4 days, Wordpress, Javascript, Python frameworks
						</p>
						<p class="z-10">
							<b>Building PCs</b>, love building rigs for cheap, hate cable mgmt
						</p>
						<p class="z-10">
							<b>Tech business & entrepreneurship</b>, I like listening to people's ideas
						</p>
						<p class="z-10">
							<b>Stable diffusion LORAs</b> to get free Korean AI portraits
						</p>
					</div>
					<div class="self-center">
						<enhanced:img src={programming} alt="" class="translate-x-16 scale-150"></enhanced:img>
					</div>
				</div>

				<div
					class="card relative col-span-2 grid w-full overflow-hidden rounded-5xl bg-gradient-to-br from-red-50 to-red-200 xl:col-span-1">
					<div>
						<div class="card-body grid h-full content-start space-y-4">
							<h3 class="">Playlist</h3>
							<ul class="list flex flex-wrap text-xl">
								<li>All-In Podcast</li>
								<li>Primeagen</li>
								<li>Theo</li>
								<li>Fireship</li>
								<li>Syntax</li>
								<li>Lenny's Podcast</li>
								<li>Olivio Sarikas</li>
							</ul>
							<enhanced:img src={spotify} alt="" class="absolute left-0 right-0 m-auto" />
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="grid justify-items-center bg-gray-100">
			<div
				class="relative grid min-h-[30rem] w-auto max-w-screen-2xl content-center justify-items-center gap-y-10 overflow-hidden px-4 py-10 lg:min-h-[70rem] lg:grid-cols-2">
				<div class="content-center justify-self-center">
					<img src={moneySvg} alt="$$$" class="w-[90vw] lg:w-[40rem]" />
				</div>
				<div class="space-y-20 self-center justify-self-center lg:ms-8 lg:mt-8 lg:max-w-[50vw] lg:p-10">
					<h2>My side projects help my work.</h2>
					<div class="grid gap-4 lg:grid-cols-1 lg:gap-14">
						<div class="space-y-6 rounded-6xl">
							<h3>Opportunities, Gaps</h3>
							<p>
								I spot opportunities and gaps in systems, ideas and processes. I'm no genius - I often just apply things
								I gleaned from what product leaders, engineers, tech influencers put out online.
							</p>
							<p>I have Hacker News, Reddit, daily.dev, and Youtube to thank.</p>
						</div>
						<div class="space-y-6 rounded-6xl">
							<h3>Know What It Takes</h3>
							<p>
								Because I do coding, I can understand technical complexities, trade-offs, best practices, and
								"definition of done".
							</p>
						</div>
						<div class="space-y-6 rounded-6xl">
							<h3>Cost Scrutiny</h3>
							<p>I challenge cost estimates and hidden assumptions. We shouldn't spend just because we can.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="wrapper grid justify-items-center bg-gray-100 px-4 py-4">
			<!-- color scheme https://convertingcolors.com/hex-color-FF725E.html -->
			<section class="grid max-w-screen-2xl auto-cols-fr auto-rows-auto gap-7 pb-10 lg:py-28 xl:grid-cols-4">
				<div
					class="navItem card col-span-2 row-span-1 w-full overflow-hidden rounded-5xl bg-gradient-to-br from-[#FFF8F7] to-[#FFE2DE] xl:col-span-1"
					id="career">
					<img src={OnlineResume} class="" alt="Career" />
					<div class="card-body">
						<h2>Career</h2>
					</div>
				</div>
				<div
					class="card col-span-2 h-full min-h-96 w-full rounded-5xl bg-base-100 xl:col-span-3"
					style="background: url({lego}); background-position: center 10%">
					<div class="relative h-full w-full rounded-5xl bg-black opacity-[0.3]"></div>
					<div class="absolute left-0 right-0 top-14 mx-auto text-center text-2xl text-base-100">
						I've worked for <span class="mx-3 text-4xl font-extrabold">{numYearsTotal} years</span> in the public service.
						Here's a breakdown.
					</div>
				</div>
				<div class="col-span-2 grid gap-7">
					<!-- subgrid -->
					<div class="card relative col-span-2 row-span-1 w-full overflow-hidden rounded-5xl bg-base-100 xl:col-span-2">
						<canvas class="block hidden md:grid" id="c"></canvas>
						<div class="absolute h-full w-full"></div>
					</div>
					<div
						class="card relative col-span-2 row-span-1 w-full overflow-hidden rounded-5xl bg-gradient-to-br from-[#FFF8F7] to-[#FFE2DE] xl:col-span-2">
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
					</div>
				</div>
				<div
					class="card col-span-2 row-span-1 w-full overflow-hidden rounded-5xl bg-gradient-to-br from-[#FFF8F7] to-[#FFE2DE] xl:col-span-1">
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
					<img src={TextingBro} class="-mb-0 lg:-translate-y-8 lg:scale-125" alt="Comms" />
				</div>
				<div class="col-span-2 grid gap-7 xl:col-span-1">
					<!-- subgrid -->
					<div class="card row-span-1 w-full rounded-5xl bg-gradient-to-br from-[#FFF8F7] to-[#FFE2DE]">
						<div class="card-body mb-4 grid content-center space-y-4">
							<h3>Policy <span class="text-xl text-gray-500">({percentMonthsPolicy}%)<span></span></span></h3>
							<div>
								<h4>NS Policy Officer</h4>
								<p>
									Did NS policies for sportsmen, leave, citizenship, exit control. Worked in Committee to Strengthen NS.
								</p>
							</div>
						</div>
					</div>
					<div
						class="card row-span-1 grid w-full content-center overflow-hidden rounded-5xl bg-gradient-to-tl from-[#FFF8F7] to-[#FFE2DE]">
						<div
							class="p-0 pt-4"
							style="background: url('/trees-tree-svgrepo-com.svg'); background-repeat: repeat-x; background-position: top">
							<div id="tank" class={animate}>
								<TankSvg
									onclick={() => {
										let tank = document.getElementById('tank');
										tank?.classList.remove('drive-right-r');
									}} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div class="bg-colored-pattern">
			<section class="grid content-center justify-items-center gap-y-10 px-4 py-20 lg:min-h-[50rem]">
				<Intermission />
			</section>

			<section id="projects" class="navItem grid justify-items-center bg-gray-50">
				<div
					class="grid max-w-[1600px] content-center justify-items-center gap-y-20 pb-20 pt-20 lg:min-h-dvh lg:grid-cols-3">
					<h2 class="mb-20 text-center lg:col-span-3 lg:pb-0">
						These are my projects to solve personal and work pain points.
					</h2>
					<!-- <div class="hidden lg:col-span-3 lg:flex">
						<a href="/projects"><CodeTypingBro class="h-96 w-96 xl:h-[25rem] xl:w-[25rem]" /></a>
					</div> -->
					<div class="lg:flex lg:items-center lg:justify-center">
						<figure class="grid content-center justify-items-center space-y-2">
							<figcaption class="text-center">
								<a href="/projects/#abbreviation"
									><h3 class="pb-1 font-sans text-4xl font-extrabold text-[#0069ff] lg:flex lg:text-6xl">
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
													clip-rule="evenodd" /><path
													stroke="#0069ff"
													stroke-linecap="round"
													d="M20.5 20.5L17 17" /><circle cx="11" cy="11" r="8.5" stroke="#0069ff" /></g
											></svg
										>n
									</h3>
									<div class="italic">Abbreviation/acronym search</div>
								</a>
							</figcaption>
						</figure>
					</div>

					<figure class="grid content-center space-y-2 self-center">
						<figcaption class="text-center">
							<a href="/projects/#appraize">
								<h3 class="pb-2 font-sans text-4xl font-black text-[#491eff] lg:text-6xl">Appraize</h3>
								<div class="italic">Drop & drop ranking</div></a>
						</figcaption>
					</figure>

					<figure class="lg:grid">
						<figcaption>
							<a href="/projects/#apptitude"
								><enhanced:img src={apptitudeLogo} alt="Apptitude Logo"></enhanced:img>
								<div class="text-center italic">Tech-related upskilling</div></a>
						</figcaption>
					</figure>

					<div class="lg:flex lg:items-center lg:justify-center">
						<figure class="grid justify-items-center space-y-2">
							<figcaption class="text-center">
								<a href="/projects/#btonomics"
									><h3 class="pb-1 font-serif text-4xl font-bold text-[#38bdf8] lg:flex lg:text-6xl">BTOnomics</h3>
									<div class="text-center italic">Home renovation blog for budget folks</div></a>
							</figcaption>
						</figure>
					</div>

					<a href="/projects/#cancelninja" class="group inline-block"
						><h3 class="text-4xl font-extrabold tracking-tighter text-base-content lg:text-6xl">
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
						<div class="text-center italic">SaaS & Dark Pattern tracker</div>
					</a>

					<div class="lg:flex lg:items-center lg:justify-center">
						<figure class="grid justify-items-center space-y-2">
							<figcaption>
								<a href="/projects/"
									><h3
										class="content-center pb-1 text-center font-inter text-4xl font-normal text-[#1b510f] lg:flex lg:justify-center lg:text-6xl">
										Grumplr
									</h3>
									<div class="text-center italic">Reddit-lite style bulletin board</div></a>
							</figcaption>
						</figure>
					</div>
				</div>

				<div class="grid content-center justify-items-center gap-y-20 bg-gray-50 pb-20 lg:grid-cols-3">
					<h2 class="mb-20 text-center lg:col-span-3 lg:pb-0">And projects of the past.</h2>

					<div class="grid w-full max-w-[1600px] gap-20 lg:col-span-3 lg:grid-cols-3">
						<figure class="content-center justify-items-center space-y-2 self-center lg:grid">
							<div class="avatar flex justify-center">
								<div class="w-24 rounded-full lg:w-28">
									<a href="/projects/#eatyourmeds" aria-label="eatyourmeds link" class="group"
										><enhanced:img
											src={eatYourMedsLogo}
											alt="Eat Your Meds!"
											class="saturate-[0.2] group-hover:saturate-100"></enhanced:img>
									</a>
								</div>
							</div>
							<figcaption class="text-center italic">Medicine dose tracker</figcaption>
						</figure>

						<figure class="grid content-center justify-items-center space-y-2 self-center">
							<figcaption class="text-center">
								<a href="/projects/#rankamate" class="group grid justify-items-center"
									><enhanced:img src={rankamateLogo} alt="Rank-a-Mate" class=" saturate-[0.2] group-hover:saturate-100"
									></enhanced:img>
									<div class="italic">Drag & drop ranking v0.1</div>
								</a>
							</figcaption>
						</figure>

						<figure class="grid content-center justify-items-center space-y-2 self-center">
							<figcaption class="text-center">
								<a href="/projects/#btonomics-old" class="group grid justify-items-center"
									><enhanced:img
										src={btonomicsOldLogo}
										alt="BTOnomics on Wordpress"
										class="mb-2 saturate-[0.2] group-hover:saturate-100"></enhanced:img>
									<div class="italic">Original BTOnomics on Wordpress</div>
								</a>
							</figcaption>
						</figure>
					</div>
				</div>
			</section>
		</div>
	</main>
</div>

<WebsiteFooter />
<span class="drive-right"></span>

<style>
	.fontinter {
		font-family: 'Inter Variable', sans-serif;
		font-weight: 700;
	}

	.bg-colored-pattern {
		/* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1080%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(233%2c 236%2c 239%2c 1)'%3e%3c/rect%3e%3cuse xlink:href='%23SvgjsSymbol1087' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1087' x='720' y='0'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1080'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1086'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1084'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1085'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1082'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1081'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1083'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1087'%3e%3cuse xlink:href='%23SvgjsPath1081' x='30' y='30' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='30' y='90' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1083' x='30' y='150' stroke='rgba(243%2c 168%2c 168%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='30' y='210' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='30' y='270' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='30' y='330' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1084' x='30' y='390' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='30' y='450' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='30' y='510' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='30' y='570' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='90' y='30' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='90' y='90' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='90' y='150' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='90' y='210' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1084' x='90' y='270' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='90' y='330' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1084' x='90' y='390' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='90' y='450' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='90' y='510' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='90' y='570' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='150' y='30' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='150' y='90' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='150' y='150' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1083' x='150' y='210' stroke='rgba(243%2c 168%2c 168%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='150' y='270' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='150' y='330' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='150' y='390' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='150' y='450' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='150' y='510' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='150' y='570' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='210' y='30' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='210' y='90' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='210' y='150' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='210' y='210' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='210' y='270' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='210' y='330' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='210' y='390' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='210' y='450' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='210' y='510' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1084' x='210' y='570' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1083' x='270' y='30' stroke='rgba(243%2c 168%2c 168%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='270' y='90' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='270' y='150' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='270' y='210' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='270' y='270' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='270' y='330' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='270' y='390' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='270' y='450' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='270' y='510' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='270' y='570' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='330' y='30' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='330' y='90' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='330' y='150' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='330' y='210' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='330' y='270' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='330' y='330' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='330' y='390' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='330' y='450' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1084' x='330' y='510' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='330' y='570' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='390' y='30' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='390' y='90' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='390' y='150' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='390' y='210' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='390' y='270' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='390' y='330' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='390' y='390' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='390' y='450' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='390' y='510' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='390' y='570' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='450' y='30' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='450' y='90' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='450' y='150' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='450' y='210' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='450' y='270' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='450' y='330' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='450' y='390' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='450' y='450' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='450' y='510' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='450' y='570' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='510' y='30' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='510' y='90' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='510' y='150' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='510' y='210' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='510' y='270' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='510' y='330' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='510' y='390' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='510' y='450' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1083' x='510' y='510' stroke='rgba(243%2c 168%2c 168%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='510' y='570' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='570' y='30' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='570' y='90' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='570' y='150' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='570' y='210' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='570' y='270' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='570' y='330' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='570' y='390' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='570' y='450' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='570' y='510' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1083' x='570' y='570' stroke='rgba(243%2c 168%2c 168%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='630' y='30' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='630' y='90' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='630' y='150' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='630' y='210' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='630' y='270' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='630' y='330' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='630' y='390' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='630' y='450' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='630' y='510' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='630' y='570' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='690' y='30' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='690' y='90' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='690' y='150' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='690' y='210' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1084' x='690' y='270' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1081' x='690' y='330' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1085' x='690' y='390' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='690' y='450' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1082' x='690' y='510' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1086' x='690' y='570' stroke='rgba(243%2c 168%2c 168%2c 1)'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e"); */
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1045%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(229%2c 231%2c 235%2c 1)'%3e%3c/rect%3e%3cpath d='M1788.86 400.97L1794.41 400.97L1794.41 469.18L1788.86 469.18z' fill='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M14.94 240.45 a8.85 8.85 0 1 0 17.7 0 a8.85 8.85 0 1 0 -17.7 0z' stroke='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M515.49 1007.47L612.12 1007.47L612.12 1104.1L515.49 1104.1z' stroke='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M1724.51 510L1832.51 510L1832.51 566.48L1724.51 566.48z' fill='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M1302.28 16.55L1399.07 16.55L1399.07 113.34L1302.28 113.34z' stroke='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M1609.66 377.36a68.61 68.61 0 1 0 84.24-108.31z' fill='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M614.29 106.12a36.09 36.09 0 1 0-47.84 54.04z' fill='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M1382.7 491.28 a91.53 91.53 0 1 0 183.06 0 a91.53 91.53 0 1 0 -183.06 0z' fill='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M178.95 970.4a48.47 48.47 0 1 0-18.31 95.2z' fill='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M373.32 283.35L412.75 283.35L412.75 322.78L373.32 322.78z' fill='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M936.26 220.32 a84.65 84.65 0 1 0 169.3 0 a84.65 84.65 0 1 0 -169.3 0z' stroke='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M932.04 537.7 a35.58 35.58 0 1 0 71.16 0 a35.58 35.58 0 1 0 -71.16 0z' stroke='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M1477.24 483.07L1577.12 483.07L1577.12 582.95L1477.24 582.95z' stroke='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M711.81 433.22a95.7 95.7 0 1 0-11.4-191.06z' fill='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M1470.88 235.08a12.64 12.64 0 1 0-23.62-9.01z' stroke='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M220.94 741.93L278.67 741.93L278.67 799.66L220.94 799.66z' stroke='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M1404.79 937.64L1411.23 937.64L1411.23 995.53L1404.79 995.53z' fill='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M1213.24 614.46L1278.4 614.46L1278.4 682.47L1213.24 682.47z' fill='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M1097.2 1130.72a76.43 76.43 0 1 0 75.91-132.68z' fill='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M761.01 354.65L843.12 354.65L843.12 402.57L761.01 402.57z' stroke='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M794.66 874.96L816.64 874.96L816.64 896.94L794.66 896.94z' stroke='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M387.05 671.67L488.89 671.67L488.89 746.43L387.05 746.43z' fill='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3cpath d='M457.43 1014.82L564.52 1014.82L564.52 1065.27L457.43 1065.27z' stroke='rgba(252%2c 165%2c 165%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1045'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
	}

	/* * {
		border: red solid 1px;
	} */
	/* h1:not(.font-sans),
	h2:not(.font-sans),
	h3:not(.font-sans) {
		font-family: 'IBM Plex Serif', serif;
	} */

	/* Orbit for courses */
	.containerC {
		display: flex;
	}

	.circle0 {
		height: 200px;
		width: 200px;
		background-color: rgba(250, 250, 250, 0.8);
		border-color: rgb(176, 176, 176);
		border-width: 4px;
		border-radius: 50%;
		top: 100px;
		left: 100px;
		position: absolute;
		z-index: 2;
	}

	.circle {
		height: 300px;
		width: 300px;
		background-color: rgba(250, 250, 250, 0.6);
		border-color: rgb(176, 176, 176);
		border-width: 4px;
		border-radius: 50%;
		top: 50px;
		left: 50px;
		position: absolute;
		z-index: 1;
	}

	.circle2 {
		height: 100px;
		width: 100px;
		background-color: rgba(250, 250, 250, 0.4);
		border-color: rgb(176, 176, 176);
		border-width: 4px;
		border-radius: 50%;
		top: 150px;
		left: 150px;
		position: absolute;
		z-index: 3;
	}

	/* ///////////////////////////////////// */
	.overflow-x-clip {
		overflow-x: clip;
	}

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
		background-image: linear-gradient(to bottom, #ffe8ff, #ffcece);
	}

	.spectrum-background2 {
		background-image: linear-gradient(to bottom, #ffca78, #d2de32);
	}

	.spectrum-background3 {
		background-image: linear-gradient(
			to bottom,
			/* rgba(255, 102, 149, 0.1) 35%,  rgba(255, 114, 94, 0.3) 65%,*/ hsla(8, 100%, 91%, 0.7) 0%,
			rgba(245, 123, 0, 0.4) 100%
		);
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
			transform: translateX(300px) scale(0.6);
		}
	}
	@keyframes drive-right-r {
		from {
			transform: translateX(-100px);
		}
		to {
			transform: translateX(700px) scale(0.6);
		}
	}
	@media (prefers-reduced-motion: no-preference) {
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
	}
	/* for custom reveal of text */
	.custom-reveal-text span {
		color: hsl(350 46% 47% / 30%);
		/* color: hsl(177 72% 37% / 30%); */
		background-clip: text;
		background-repeat: no-repeat;
		background-size: 0% 100%;
		background-image: linear-gradient(90deg, black, black);
		animation: scroll-reveal linear forwards;
		animation-timeline: view();
		animation-range-start: cover 40vh;
		animation-range-end: cover 60vh;
	}

	@media only screen and (min-width: 1024px) {
		.custom-reveal-text span {
			animation-range-start: cover 30vh;
			animation-range-end: cover 45vh;
		}
	}
	@media only screen and (min-width: 1600px) {
		.custom-reveal-text span {
			animation-range-start: cover 20vh;
			animation-range-end: cover 30vh;
		}
	}
	.list {
		li::before {
			content: '🔥';
			/* padding-right: 0.4rem; */
			padding-right: 0.2rem;
			padding-left: 0.2rem;
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
