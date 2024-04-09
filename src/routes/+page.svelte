<script>
	import profilepic from '$lib/assets/kitandi.webp?enhanced&w=500';
	import cuteRobot from '$lib/assets/cute-robot.webp';
	import globe from '$lib/assets/globe.webp';
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=500';
	import pill from '$lib/assets/pill.webp';
	import eatyourmedsLogo from '$lib/assets/eatyourmeds-logo.webp?enhanced&w=150';
	import rankamateLogo from '$lib/assets/rankamate-logo.webp?enhanced&w=200';
	import kitkitPortrait from '$lib/assets/kit-baby.webp';
	import TablerLink from '$lib/svg/TablerLink.svelte';
	import { animate, stagger, inView } from 'motion';

	import { onMount } from 'svelte';

	onMount(() => {
		inView(
			'.fromLeft',
			({ target }) => {
				animate(
					target,
					{ x: [-100, 0], opacity: [0, 1] },
					{ easing: 'ease-out', duration: 1, delay: stagger(0.4) }
				);
			},
			{ amount: 0.5 }
		);
		inView(
			'.fromRight',
			({ target }) => {
				animate(
					target,
					{ x: [100, 0], opacity: [0, 1] },
					{ easing: 'ease-out', duration: 1, delay: stagger(0.4) }
				);
			},
			{ amount: 0.5 }
		);
		inView(
			'.fromRightBig',
			({ target }) => {
				animate(
					target,
					{ x: [100, 0], opacity: [0, 1] },
					{ easing: 'ease-out', duration: 1, delay: stagger(0.4) }
				);
			},
			{ amount: 0.3 }
		);
		inView(
			'.fromBottom',
			({ target }) => {
				animate(
					target,
					{ y: [100, 0], opacity: [0, 1] },
					{ easing: 'ease-out', duration: 1, delay: stagger(0.4) }
				);
			},
			{ amount: 0.9 }
		);
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
	const numMonthsSdTech = getMonthsBetween(startSdTech, today, true);
	const percentMonthsTech = Math.round(((25 + 36 + numMonthsSdTech) / numMonthsTotal) * 100);
	const percentMonthsComms = Math.round((37 / numMonthsTotal) * 100);
	const percentMonthsPolicy = Math.round((28 / numMonthsTotal) * 100);
</script>

<section class="px-3 py-10">
	<div id="header" class="mb-8">
		<h1
			class="montserrat text-center text-7xl leading-none tracking-tighter text-black lg:text-[17rem]"
		>
			Zixian Chen
		</h1>
		<h2 class="montserrat text-center text-3xl leading-none tracking-tighter lg:text-5xl">
			I speak your language, be it filled with full stops or semicolons.
		</h2>
	</div>
	<div class="mb-8 flex justify-center space-x-3">
		<!-- jam icons -->
		<a href="https://www.linkedin.com/in/zixianchen/"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-12 w-12 transition duration-500 ease-in-out hover:fill-white"
				viewBox="-2 -2 24 24"
				><g
					><path
						d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z"
					/><path
						d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"
					/></g
				></svg
			></a
		>
		<a href="https://github.com/zachczx?tab=repositories"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-12 w-12 transition duration-500 ease-in-out hover:fill-white"
				viewBox="-2 -2 24 24"
				><g
					><path
						d="M8.18 15.008c.12 0 .211-.004.271-.012a.317.317 0 0 0 .18-.107c.06-.063.09-.154.09-.274l-.004-.557c-.003-.355-.004-.637-.004-.844l-.188.033a2.41 2.41 0 0 1-.455.028a3.498 3.498 0 0 1-.57-.057a1.276 1.276 0 0 1-.548-.246a1.04 1.04 0 0 1-.36-.503l-.082-.189a2.046 2.046 0 0 0-.258-.417a.989.989 0 0 0-.357-.312l-.057-.04a.602.602 0 0 1-.106-.1a.455.455 0 0 1-.074-.114c-.016-.038-.003-.07.04-.094a.533.533 0 0 1 .238-.037l.164.025c.11.021.245.087.406.196c.16.11.293.251.397.426c.126.224.277.395.455.512a.964.964 0 0 0 .536.176c.18 0 .336-.013.467-.04a1.63 1.63 0 0 0 .369-.124c.049-.365.182-.647.4-.843a5.61 5.61 0 0 1-.839-.148a3.346 3.346 0 0 1-.77-.32a2.204 2.204 0 0 1-.66-.548c-.174-.219-.317-.505-.43-.86a4.09 4.09 0 0 1-.167-1.229c0-.66.216-1.223.647-1.687c-.202-.497-.183-1.054.057-1.671c.159-.05.394-.013.705.11c.311.123.54.228.684.316c.145.087.26.16.348.22a5.814 5.814 0 0 1 1.573-.212c.54 0 1.065.07 1.573.213l.31-.197c.214-.13.465-.251.754-.36c.29-.11.511-.14.664-.09c.246.617.268 1.174.065 1.67c.432.465.648 1.027.648 1.688c0 .464-.056.875-.168 1.233c-.112.358-.257.644-.434.86a2.29 2.29 0 0 1-.664.545a3.342 3.342 0 0 1-.77.32a5.605 5.605 0 0 1-.84.147c.284.245.426.633.426 1.163v1.957c0 .093.014.168.041.226a.226.226 0 0 0 .131.119c.06.021.114.035.16.04c.047.006.113.009.2.009z"
					/><path
						d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"
					/></g
				></svg
			></a
		>

		<a href="https://btonomics.com/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-2 -2 24 24"
				class="h-12 w-12 transition duration-500 ease-in-out hover:fill-white"
				><g
					><path
						d="M5.024 12.655h3.92v1.887h-3.92zm5.881 0h3.918v1.887h-3.918zM5.021 8.881h9.802v1.887H5.021zm.003-3.774h5.881v1.887H5.024zm7.841 0h1.96v1.887h-1.96z"
					/><path
						d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"
					/></g
				></svg
			></a
		>
	</div>
	<div class="grid auto-cols-fr auto-rows-auto gap-x-3 gap-y-3 xl:grid-cols-4">
		<div class="fromLeft relative col-span-2 row-span-3 grid items-end rounded-2xl md:col-span-1">
			<div class="absolute h-96 w-full rounded-2xl border bg-base-100 shadow-xl"></div>
			<figure>
				<enhanced:img src={profilepic} alt="Doggo and I" class="z-20 scale-100 rounded-2xl" />
			</figure>
		</div>
		<div
			class="fromLeft card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl lg:col-span-2"
		>
			<div class="card-body space-y-4">
				<h3>Work</h3>

				<p class="text-2xl">
					<span class="font-bold text-primary">Generalist</span> civil servant. I write, present. I like
					being devil's advocate.
				</p>
			</div>
		</div>
		<div
			class="fromRight col-span-2 row-span-1 h-full w-full space-y-0 self-center rounded-2xl opacity-0 xl:col-span-1 xl:row-span-3 xl:opacity-100"
			style="background: url({kitkitPortrait}) no-repeat; background-size: cover; background-position: 20% 25%"
		></div>
		<!--<div class="card col-span-2 row-span-2 w-full border border-base-300 bg-base-100 shadow-xl">
			<div class="relative flex -translate-y-3 justify-center">
				<img
					src={globe}
					alt="Globe"
					height="400"
					width="400"
					class="left-50 brightness-25 absolute -z-10 scale-[1.1] blur-xl"
				/>
				<img src={globe} alt="globe" height="400" width="400" />
			</div>
			<div class="card-body grid content-start">
				<div class="teams-circle"></div>
				<p class="text-center text-2xl">
					His Don't Worry, I Can Speak Your Language (Even if it's Filled with Semicolons) My work
					involves improving MINDEF's digital services for national servicemen and employees.
				</p>
				<p class="text-center text-2xl">
					Before this, I was at Smart Nation SG working with GovTech on cloud + on-prem
					infrastructure and employee experience.
				</p>
			</div>
		</div>-->

		<div class="fromRight card col-span-2 w-full border border-base-300 bg-base-100 shadow-xl">
			<div class="card-body space-y-4">
				<h3>Personal</h3>
				<p class="text-2xl">
					Hobbyist in <span class="font-bold text-primary">webdev</span>,
					<span class="font-bold text-primary">stable diffusion</span>.
				</p>
				<p class="text-2xl">
					Enjoys listening to
					<span class="font-bold text-primary">tech business</span> issues (All-In Podcast!).
				</p>
			</div>
		</div>
		<!--<div class="card col-span-1 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl">
			<div class="card-body">
				<h3>Hobbyist</h3>
				<p class="text-center text-2xl">Hobbyist placeholder.</p>
			</div>
		</div>-->
		<div class="fromBottom card col-span-2 w-full border border-base-300 bg-base-100 shadow-xl">
			<div class="card-body space-y-4">
				<h3>Education</h3>
				<p class="text-2xl">
					Did <span class="font-bold text-primary">Political Science</span> at NUS.
				</p>
				<p class="text-2xl">
					Did Coursera Specializations (<span class="font-bold text-primary"
						><a href="https://www.coursera.org/account/accomplishments/specialization/D9EZKV26D69B"
							>Meta Back-end Developer</a
						></span
					>,
					<span class="font-bold text-primary"
						><a
							href="https://www.coursera.org/account/accomplishments/specialization/certificate/MVCFEP4ZHVSV"
							>AWS Fundamentals</a
						></span
					>,
					<span class="font-bold text-primary">Google UX</span>),
					<span class="font-bold text-primary"
						><a href="https://bcert.me/bc/html/show-badge.html?b=twwbrxwh">Certified ScrumMaster</a
						></span
					> <sup>(fwiw)</sup>.
				</p>
			</div>
		</div>
		<div
			class="fromLeft card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl md:col-span-1"
		>
			<div class="card-body">
				<h2>Career Stats</h2>
				<div class="cols-auto-cols grid bg-base-100 lg:grid-cols-3">
					<div class="stat justify-items-center border-b-2 lg:border-b-0 lg:border-r-2">
						<div class="stat-title grid justify-items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-code h-8 w-8 stroke-base-content"
								><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path
									d="M17 8l4 4l-4 4"
								/><path d="M14 4l-4 16" /></svg
							>Tech
						</div>
						<div class="stat-value text-primary">{percentMonthsTech}%</div>
					</div>

					<div class="stat justify-items-center border-b-2 lg:border-b-0 lg:border-r-2">
						<div class="stat-title grid justify-items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-messages h-8 w-8 stroke-base-content"
								><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
									d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"
								/><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg
							>Comms
						</div>
						<div class="stat-value text-primary">{percentMonthsComms}%</div>
					</div>

					<div class="stat justify-items-center">
						<div class="stat-title grid justify-items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-file-text h-8 w-8 stroke-base-content"
								><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
									d="M14 3v4a1 1 0 0 0 1 1h4"
								/><path
									d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
								/><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" /></svg
							>Policy
						</div>
						<div class="stat-value text-primary">{percentMonthsPolicy}%</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class="fromBottom card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl md:col-span-1"
		>
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
								d="M17 8l4 4l-4 4"
							/><path d="M14 4l-4 16" /></svg
						><span class="ps-2">Tech Infra Policy Team Lead</span>
					</h4>
					<p>
						Did policies, funding assessments for cloud, on-prem hosting, SG Tech Stack, toolchains
						and other infra.
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
								d="M17 8l4 4l-4 4"
							/><path d="M14 4l-4 16" /></svg
						><span class="ps-2">Comms Tech Team Lead</span>
					</h4>
					<p>Owned media analyst products. Led investments in NLP & CV research.</p>
				</div>
			</div>
		</div>
		<div
			class="fromBottom card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl md:col-span-1"
		>
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
								d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"
							/><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg
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
								d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"
							/><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg
						><span class="ps-2">Comms Strategist</span>
					</h4>
					<p>Crafted comms campaigns and strategies.</p>
				</div>
			</div>
		</div>
		<div
			class="fromRight card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl md:col-span-1"
		>
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
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
								d="M14 3v4a1 1 0 0 0 1 1h4"
							/><path
								d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
							/><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" /></svg
						><span class="ps-2">NS Policy Officer</span>
					</h4>
					<p>
						Did NS policies for sportsmen, leave, citizenship, exit control. Worked in Committee to
						Strengthen NS.
					</p>
				</div>
			</div>
		</div>

		<div
			class="fromLeft card col-span-2 row-span-1 w-full border border-base-300 bg-base-100 shadow-xl lg:col-span-1"
		>
			<div class="card-body space-y-4">
				<h2>Side Projects</h2>
				<div class="mockup-code">
					<pre data-prefix=">"><code
							>npm install <span class="text-yellow-300">svelte tailwindcss</span></code
						></pre>
					<pre data-prefix="$"><code>pip install <span class="text-yellow-300">Django</span></code
						></pre>
					<pre data-prefix=">"><code>npm install <span class="text-yellow-300">htmx.org</span></code
						></pre>
				</div>
			</div>
		</div>
		<div
			class="fromBottom card col-span-2 row-span-1 border border-base-300 bg-base-100 shadow-xl md:col-span-1"
		>
			<div class="group card-body grid gap-y-5">
				<div class="space-y-4">
					<h3 class="text-start">Sveltekit</h3>
					<p class="text-2xl">
						<span class="text-primary"
							><a href="https://titude.app/"
								><b>Apptitude</b><TablerLink class="mx-1 mb-1 inline stroke-primary" /></a
							></span
						> helps me disseminate resources for my MINDEF teammates to upskill.
					</p>
				</div>
				<div class="place-self-center">
					<a href="https://titude.app/"
						><enhanced:img
							src={apptitudeLogo}
							alt="Apptitude"
							class="opacity-50 brightness-50 transition duration-700 ease-in-out group-hover:opacity-100 group-hover:brightness-100"
						/></a
					>
				</div>
			</div>
		</div>
		<div
			class="fromBottom card col-span-2 row-span-2 w-full overflow-hidden border border-base-300 bg-base-100 shadow-xl md:col-span-1"
		>
			<div class="group card-body grid gap-y-5">
				<div class="relative space-y-4">
					<h3 class="text-start">Django + SortableJS + Htmx</h3>
					<p class="text-2xl">
						<span class="text-primary"
							><a href="https://app.zixian.dev/rank/"
								><b>Rank-a-mate</b><TablerLink class="mx-1 mb-1 inline stroke-primary" /></a
							></span
						> offers dragging & dropping for ranking sessions, versus Excel.
					</p>
					<div class="grid h-60 place-items-center">
						<a href="https://app.zixian.dev/rank/"
							><enhanced:img
								src={rankamateLogo}
								alt="Rank-a-Mate"
								class="opacity-25 transition duration-700 ease-in-out group-hover:opacity-100"
							/></a
						>
					</div>
				</div>
			</div>
		</div>

		<div
			class="fromRightBig card card-side col-span-2 row-span-3 w-full border border-base-300 bg-base-100 shadow-xl md:col-span-1"
		>
			<div class="card-body relative">
				<div class="space-y-4">
					<h3>Django + Htmx</h3>
					<p class="text-start text-2xl">
						<span class="text-primary"
							><a href="https://app.zixian.dev/eatyourmeds/"
								><b>Eat Your Medicine!</b><TablerLink class="mx-1 mb-1 inline stroke-primary" /></a
							></span
						>
						helps me plan dose timings and display medicine info for my kid.
					</p>
				</div>
				<div class="group relative mt-10 flex">
					<img
						src={pill}
						alt="bg"
						class="brightness-25 z-1 group-hover:brightness-25 absolute top-0 rotate-[25deg] scale-[1] blur-lg"
					/><img src={pill} alt="Eat Your Meds" class="z-50 rotate-[25deg]" /><img
						src={pill}
						alt="Eat Your Meds"
						class="absolute -right-20 top-20 z-50 rotate-[50deg] scale-50"
					/><img
						src={pill}
						alt="Eat Your Meds"
						class="absolute -right-24 top-20 z-30 rotate-[50deg] scale-[0.4] blur-xl"
					/>
				</div>
				<!--
				<div class="avatar">
					<div class="mask mask-squircle w-48">
						<enhanced:img src={eatyourmedsLogo} alt="Eat Your Meds" />
					</div>
				</div>-->
			</div>
		</div>
	</div>
	<p class="mt-14 text-center text-base">Copyright © 2024 Zixian Chen. All rights reserved.</p>
</section>

<style>
	.fromLeft {
		transform: translateX(-100px);
		opacity: 0;
	}
	.fromRight {
		transform: translateX(100px);
		opacity: 0;
	}
	.fromRightBig {
		transform: translateX(100px);
		opacity: 0;
	}
	.fromBottom {
		transform: translateY(-100px);
		opacity: 0;
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
	}
</style>
