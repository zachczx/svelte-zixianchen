<script>
	import TankSvg from '$lib/svg/TankSvg.svelte';
	import versus from '$lib/assets/fightIronManCaptainAmerica.webp';
	import selfSndgoPic from '$lib/assets/DSC03163.webp?enhanced';
	//&w=400;600;700;1000';
	import spotify from '$lib/assets/spotify.webp?enhanced&w=400';
	import server from '$lib/assets/server.webp';
	import programming from '$lib/assets/programming.webp?enhanced&w=800';
	import TextingBro from '$lib/svg/Texting-bro.svg?dataurl';
	import lego from '$lib/assets/lego-2539844.webp';
	import ResumeBro from '$lib/svg/Resume-bro.svg?dataurl';
	import Nav from '$lib/Nav.svelte';
	import { onMount } from 'svelte';
	import WebsiteFooter from '$lib/WebsiteFooter.svelte';
	import Portfolio from '$lib/Portfolio.svelte';
	import Quote from '$lib/Quote.svelte';
	import Intermission from '$lib/Intermission.svelte';

	///////////////////////////////////

	let animate = $state('');
	let navCurrent = $state('');

	onMount(() => {
		let tank = document.getElementById('tank');

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

		let navItem = document.querySelectorAll('.navItem');
		console.log(navItem);

		let observerNav = new IntersectionObserver((entries) => {
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

		const canvas = document.getElementById('c');
		const context = canvas.getContext('2d');

		canvas.width = window.innerWidth;
		canvas.height = 800; //window.innerHeight;
		const katakana =
			'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
		const latin =
			'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const nums = '0123456789012345678901234567890123456789012345678901234567890123456789';

		const alphabet = katakana + latin + nums;

		const fontSize = 48;
		const columns = canvas.width / fontSize;

		/** @type {string[]}*/
		const rainDrops = [];

		for (let x = 0; x < columns; x++) {
			rainDrops[x] = 1;
		}

		const draw = () => {
			// lies under new characters raining down, transparency does subtle overlay effect
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
		};

		setInterval(draw, 90);
	});

	/**
	 * Calculate months in between 2 dates
	 * @param {Date} date1
	 * @param {Date} date2
	 * @param {boolean} roundUpFractionalMonths
	 * @returns {number}
	 */
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
	const numYearsTotal = Math.round(numMonthsTotal / 12);
	const numMonthsSdTech = getMonthsBetween(startSdTech, today, true);
	const percentMonthsTech = Math.round(((25 + 36 + numMonthsSdTech) / numMonthsTotal) * 100);
	const percentMonthsComms = Math.round((37 / numMonthsTotal) * 100);
	const percentMonthsPolicy = Math.round((28 / numMonthsTotal) * 100);

	/**
	 * Insert neumorphism css class
	 * @param {Event} evt
	 */
	function addNeumorphismInset(evt) {
		const el = evt.currentTarget;
		el?.classList.add('neumorphism-inset');
		el.classList.remove('neumorphism');
	}

	/**
	 * Remove neumorphism css class
	 * @param {Event} evt
	 */
	function removeNeumorphismInset(evt) {
		const el = evt.currentTarget;
		el?.classList.remove('neumorphism-inset');
		el.classList.add('neumorphism');
	}
</script>

<svelte:head>
	<title>Hi! I'm Zixian.</title>
	<meta name="description" content="Hello, I'm Zixian Chen." />
</svelte:head>

<Nav {navCurrent} />
<div class="grid min-h-dvh justify-items-center 2xl:overflow-x-clip">
	<!-- max-w-screen-2xl -->
	<header
		id="header"
		class="screen grid grid-flow-dense content-center justify-items-center gap-y-10 bg-gray-100 px-4 pb-14 pt-8 lg:pb-0 lg:pt-0 xl:grid-cols-2 2xl:w-dvw">
		<div class="order-last grid max-w-[40rem] content-center justify-items-center space-y-10 lg:ms-8 xl:order-none">
			<h1 class="w-full text-center font-sans text-4xl leading-none tracking-tighter text-black xl:text-6xl">
				<span
					class="inline-block bg-gradient-to-r from-pink-600 via-orange-600 to-red-700 bg-clip-text font-serif text-6xl text-transparent xl:text-[8rem] 2xl:text-[13rem]"
					>Zixian.</span>
			</h1>

			<div class="flex justify-center space-x-8">
				<a
					href="https://www.linkedin.com/in/zixianchen/"
					onkeydown={addNeumorphismInset}
					onmousedown={addNeumorphismInset}
					onmouseup={removeNeumorphismInset}
					onkeyup={removeNeumorphismInset}
					class="neumorphism flex h-16 w-16 items-center justify-center rounded-full"
					id="linkedinCircle">
					<!-- flowbite:linkedin-solid -->
					<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24"
						><g fill="#888888"
							><path
								fill-rule="evenodd"
								d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606"
								clip-rule="evenodd" /><path d="M7.2 8.809H4V19.5h3.2z" /></g
						></svg>
				</a>
				<a
					href="https://github.com/zachczx?tab=repositories"
					class="neumorphism flex h-16 w-16 items-center justify-center rounded-full"
					id="elGithub"
					onkeydown={addNeumorphismInset}
					onmousedown={addNeumorphismInset}
					onmouseup={removeNeumorphismInset}
					onkeyup={removeNeumorphismInset}>
					<!-- tabler:brand-github-filled -->
					<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24"
						><path
							fill="#888888"
							d="M5.315 2.1c.791-.113 1.9.145 3.333.966l.272.161l.16.1l.397-.083a13.3 13.3 0 0 1 4.59-.08l.456.08l.396.083l.161-.1c1.385-.84 2.487-1.17 3.322-1.148l.164.008l.147.017l.076.014l.05.011l.144.047a1 1 0 0 1 .53.514a5.2 5.2 0 0 1 .397 2.91l-.047.267l-.046.196l.123.163c.574.795.93 1.728 1.03 2.707l.023.295L21 9.5c0 3.855-1.659 5.883-4.644 6.68l-.245.061l-.132.029l.014.161l.008.157l.004.365l-.002.213L16 21a1 1 0 0 1-.883.993L15 22H9a1 1 0 0 1-.993-.883L8 21v-.734c-1.818.26-3.03-.424-4.11-1.878l-.535-.766c-.28-.396-.455-.579-.589-.644l-.048-.019a1 1 0 0 1 .564-1.918c.642.188 1.074.568 1.57 1.239l.538.769c.76 1.079 1.36 1.459 2.609 1.191L8 17.562l-.018-.168a5.03 5.03 0 0 1-.021-.824l.017-.185l.019-.12l-.108-.024c-2.976-.71-4.703-2.573-4.875-6.139l-.01-.31L3 9.5a5.6 5.6 0 0 1 .908-3.051l.152-.222l.122-.163l-.045-.196a5.2 5.2 0 0 1 .145-2.642l.1-.282l.106-.253a1 1 0 0 1 .529-.514l.144-.047z" /></svg>
				</a>
				<a
					href="/blog"
					class="neumorphism flex h-16 w-16 items-center justify-center rounded-full"
					onkeydown={addNeumorphismInset}
					onmousedown={addNeumorphismInset}
					onmouseup={removeNeumorphismInset}
					onkeyup={removeNeumorphismInset}>
					<!-- material-symbols:article -->
					<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24"
						><path
							fill="#888888"
							d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z" /></svg>
				</a>
			</div>
			<h2
				class="neumorphism-inset custom-reveal-text mb-4 w-full rounded-5xl p-8 font-sans text-2xl leading-none tracking-tighter xl:text-4xl">
				<span>I'm a public servant trying to close gaps between policy, business, tech.</span>
			</h2>
		</div>
		<div class="relative mt-8 h-fit content-center justify-self-center rounded-5xl lg:me-10 lg:mt-0 lg:max-w-fit">
			<!-- border-8 border-gray-100 lg:border-[1rem] 2xl:border-[3rem] -->
			<enhanced:img
				src={selfSndgoPic}
				alt="Me"
				class="rounded-5xl"
				sizes="(min-width:2560px) 1000px,(min-width:1920px) 600px, (min-width:1600px) 400px, (min-width:1080px) 400px, (min-width:768px) 600px"
			></enhanced:img>
			<!-- 
			<div
				class="neumorphism-inset absolute top-0 z-10 h-full w-full rounded-5xl border border-gray-200 bg-white/[0.7] opacity-75">
			</div> -->
		</div>
	</header>

	<main>
		<section class="grid justify-items-center bg-gray-100 px-4 2xl:w-dvw">
			<div class="grid auto-cols-fr auto-rows-auto gap-7 py-10 lg:py-28 xl:grid-cols-4 2xl:max-w-screen-2xl">
				<div
					class="navItem neumorphism card col-span-2 row-span-1 w-full overflow-hidden rounded-5xl bg-base-100 xl:col-span-3"
					style="background-image: url({server}); background-size: 100%; background-position: right"
					id="about">
					<div class="card-body grid h-full grid-cols-2 justify-items-center pe-4 ps-20">
						<div></div>
						<div class="space-y-4 self-center text-base-100">
							<h3>About Me</h3>
							<p>
								I'm into <b>tech, the web & computers</b>. Both hardware and software. From the technical details to
								design. From the products to surrounding ecosystems.
							</p>
						</div>
					</div>
				</div>
				<!-- <div
					class="card relative col-span-2 row-span-1 min-h-48 w-full overflow-hidden rounded-5xl bg-gray-800 xl:col-span-1"
					style="background-image: url({versus}); background-size: cover; background-position: center">
					<div class="card-body z-10 grid pb-0">
						<div>
							<h3 class="text-center text-base-100">Work</h3>
						</div>
						<div class="mb-6 self-end">
							<p class="text-center text-base-100">I fight bad policies & business requirements.</p>
						</div>
					</div>
					<div class="absolute h-full w-full bg-pink-900/50"></div>
				</div> -->
				<div
					class="neumorphism-inset card col-span-2 w-full overflow-hidden rounded-5xl bg-gradient-to-br from-pink-50 to-pink-200 xl:col-span-1">
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
				<div
					class="neumorphism card col-span-2 w-full rounded-5xl bg-gradient-to-br from-pink-50 to-pink-200 xl:col-span-1">
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
					class="neumorphism card col-span-2 grid w-full grid-cols-2 overflow-hidden rounded-5xl bg-gradient-to-br from-pink-50 to-pink-200">
					<div class="card-body space-y-4 self-center">
						<h3>Interests</h3>
						<p class="z-10">
							<b>Webdev</b> since 2000s (XHTML, PHP4), back for Wordpress, then Javascript and Python frameworks.
						</p>
						<p class="z-10">
							<b>Building PCs</b>, love the value but hate the cable mgmt.
						</p>
						<p class="z-10">
							<b>Tech business & entrepreneurship</b>, listening to people talk problems.
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
					class="neumorphism card relative col-span-2 grid w-full overflow-hidden rounded-5xl bg-gradient-to-br from-pink-50 to-pink-200 xl:col-span-1">
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

		<section class="grid min-h-[50rem] w-auto content-center justify-items-center gap-y-10 bg-gray-50 px-4 py-20">
			<Quote />
		</section>

		<div class="wrapper grid justify-items-center bg-gray-100 px-4 py-10 lg:py-28">
			<!-- color scheme https://convertingcolors.com/hex-color-FF725E.html -->
			<section class="grid max-w-screen-2xl auto-cols-fr auto-rows-auto gap-7 xl:grid-cols-4">
				<div
					class="neumorphism navItem card col-span-2 row-span-1 w-full overflow-hidden rounded-5xl bg-gradient-to-br from-[#FFF8F7] to-[#FFE2DE] xl:col-span-1"
					id="career">
					<img src={ResumeBro} class="-mb-10" alt="Career" />
					<div class="card-body">
						<h2>Career</h2>
					</div>
				</div>
				<div
					class="neumorphism card col-span-2 h-full min-h-96 w-full rounded-5xl bg-base-100 xl:col-span-3"
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
						<div class="neumorphism-inset absolute h-full w-full"></div>
					</div>
					<div
						class="neumorphism card relative col-span-2 row-span-1 w-full overflow-hidden rounded-5xl bg-gradient-to-br from-[#FFF8F7] to-[#FFE2DE] xl:col-span-2">
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
					class="neumorphism card col-span-2 row-span-1 w-full overflow-hidden rounded-5xl bg-gradient-to-br from-[#FFF8F7] to-[#FFE2DE] xl:col-span-1">
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
					<div class="neumorphism card row-span-1 w-full rounded-5xl bg-gradient-to-br from-[#FFF8F7] to-[#FFE2DE]">
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
						class="neumorphism-inset card row-span-1 grid w-full content-center overflow-hidden rounded-5xl bg-gradient-to-tl from-[#FFF8F7] to-[#FFE2DE]">
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

		<section
			class="wrapper grid min-h-[40rem] content-center justify-items-center gap-y-10 bg-gray-100 px-4 lg:min-h-[50rem] xl:py-20">
			<Intermission />
		</section>
	</main>
</div>

<section id="side" class="navItem">
	<Portfolio />
</section>
<WebsiteFooter class="bg-gray-100" />
<span class="drive-right"></span>

<style>
	/* * {
		border: red solid 1px;
	} */
	h1:not(.font-sans),
	h2:not(.font-sans),
	h3:not(.font-sans) {
		font-family: 'IBM Plex Serif', serif;
	}

	.neumorphism {
		box-shadow:
			12px 12px 12px rgba(0, 0, 0, 0.15),
			-10px -10px 10px white;
	}
	.neumorphism-children > div {
		box-shadow:
			12px 12px 12px rgba(0, 0, 0, 0.1),
			-10px -10px 10px white;
	}

	.neumorphism-inset {
		box-shadow:
			inset 5px 5px 10px rgba(163, 177, 198, 0.5),
			inset -5px -5px 12px rgba(255, 255, 255, 0.8);
	}

	.neumorphism-alt {
		box-shadow:
			13px 13px 20px #cbced1,
			-13px -13px 20px #ffffff;
	}

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
		color: hsl(177 72% 37% / 30%);
		background-clip: text;
		background-repeat: no-repeat;
		background-size: 0% 100%;
		background-image: linear-gradient(90deg, black, black);
		animation: scroll-reveal linear forwards;
		animation-timeline: view();
		animation-range-start: cover 50vh;
		animation-range-end: cover 60vh;
	}

	@media only screen and (min-width: 1024px) {
		.custom-reveal-text span {
			animation-range-start: cover 45vh;
			animation-range-end: cover 50vh;
		}
	}
	@media only screen and (min-width: 1600px) {
		.custom-reveal-text span {
			animation-range-start: cover 45vh;
			animation-range-end: cover 50vh;
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
