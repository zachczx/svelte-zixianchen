<script>
	import ProjectDashboardArchived from '$lib/ProjectDashboardArchived.svelte';
	import ProjectsDashboard from '$lib/ProjectsDashboard.svelte';
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=162';
	import Meetrics from '$lib/logos/meetrics.svg?dataurl';
	import Towelie from '$lib/logos/towelie-logo.svg?dataurl';
	import Rinku from '$lib/logos/rinku-logo.svg?dataurl';
	import Wronged from '$lib/logos/wronged-logo.svg?dataurl';
	import Scrabble from '$lib/assets/james-t-zevadYfX56Q-unsplash.webp';
	import Rank from '$lib/assets/sigmund-R401qwThw7w-unsplash.webp';
	import Blackboard from '$lib/assets/thomas-t-OPpCbAAKWv8-unsplash.webp';
	import Home from '$lib/assets/20180317_141704.webp';
	import Piggy from '$lib/assets/piggy2.webp';
	import Clips from '$lib/assets/tamanna-rumee-vn4dC0yFtg8-unsplash.webp';
	import Calculator from '$lib/assets/charlesdeluvio-GlavtG-umzE-unsplash.webp';
	import Bot from '$lib/assets/p1omnigames02_cute_robot_cartoon-inspired_round_face_friendly_e_2958fa92-efd2-41a0-b179-f04c25daea92.webp';
	import Chat from '$lib/assets/volodymyr-hryshchenko-V5vqWC9gyEU-unsplash.webp';
	import Towels from '$lib/assets/the-blowup-4dUC7Fine5g-unsplash.webp';
	import { gsap } from 'gsap';

	let { mode = '', desaturate = false } = $props();

	let showBg = $state(true);

	$effect(() => {
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
					gsap.from('.panel', {
						opacity: 0.05,
						scale: 0.9,
						duration: reduceMotion ? 0 : 0.2,
						stagger: {
							each: 0.1,
							from: 'random',
							grid: 'auto',
						},
					});
				}
			},
		);
	});
</script>

<svelte:head>
	<title>Zixian Chen - My Projects</title>
	<meta name="description" content="Zixian's projects." />
</svelte:head>

<main class="bg-base-200 grid h-full max-w-[1200px] grid-rows-[auto_1fr] justify-self-center text-center">
	<label class="flex cursor-pointer items-center gap-2 justify-self-end pt-2 pb-2 text-sm font-medium"
		>Show Background <svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.5em"
			height="1.5em"
			class="material-symbols:visibility-off-outline hidden"
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="m16.1 13.3l-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.425-.2.863-.3T12 7q1.875 0 3.188 1.313T16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15l-1.45-1.4q.95-.725 1.688-1.587T20.8 11.5q-1.25-2.525-3.588-4.012T12 6q-.725 0-1.425.1T9.2 6.4L7.65 4.85q1.025-.425 2.1-.638T12 4q3.775 0 6.725 2.087T23 11.5q-.575 1.475-1.513 2.738T19.3 16.45m.5 6.15l-4.2-4.15q-.875.275-1.762.413T12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.463T4.15 7L1.4 4.2l1.4-1.4l18.4 18.4zM5.55 8.4q-.725.65-1.325 1.425T3.2 11.5q1.25 2.525 3.588 4.013T12 17q.5 0 .975-.062t.975-.138l-.9-.95q-.275.075-.525.113T12 16q-1.875 0-3.188-1.312T7.5 11.5q0-.275.038-.525t.112-.525zm4.2 4.2" /></svg
		><input
			type="checkbox"
			class="toggle toggle-sm text-base-100 checked:border-success checked:bg-success checked:text-base-100 border-gray-400 bg-gray-400"
			bind:checked={showBg} /></label>
	<div class="grid h-full min-h-dvh content-stretch justify-items-center pb-20 lg:grid-cols-3 lg:gap-4">
		<a
			href="/projects/abbreviation"
			class="panel bg-primary/10 group flex w-full items-center justify-center"
			style="background:url({Scrabble}); background-size: cover; background-position: center center;">
			<figure
				class="{showBg
					? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
					: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
				<figcaption>
					<h3 class="font-sans text-4xl font-extrabold text-[#0069ff] lg:flex">
						Abbreviati<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							class="-mx-[0.2em] inline"
							viewBox="0 0 24 24"
							><g fill="none"
								><path
									fill={mode === 'dark' ? 'white' : '#0069ff'}
									fill-opacity={mode === 'dark' ? '.7' : '.25'}
									fill-rule="evenodd"
									d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14M10.087 7.38A5 5 0 0 1 12 7a.5.5 0 0 0 0-1a6 6 0 0 0-6 6a.5.5 0 0 0 1 0a5 5 0 0 1 3.087-4.62"
									clip-rule="evenodd" /><path stroke="#0069ff" stroke-linecap="round" d="M20.5 20.5L17 17" /><circle
									cx="11"
									cy="11"
									r="8.5"
									stroke="#0069ff" /></g
							></svg
						>n
					</h3>
					<div>Abbreviation/acronym search</div>
				</figcaption>
			</figure>
		</a>

		<a
			href="/projects/appraize"
			class="panel group grid h-full w-full content-stretch space-y-2 self-center"
			style="background:url({Rank}); background-size: cover; background-position: center center;">
			<figure>
				<figcaption
					class="{showBg
						? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
						: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
					<div class="grid h-full">
						<h3 class="font-sans text-4xl font-black text-[#A94A4A]">Appraize</h3>
						<div>Drop & drop ranking</div>
					</div>
				</figcaption>
			</figure>
		</a>

		<a
			href="/projects/apptitude"
			class="panel group grid h-full w-full content-stretch space-y-2 self-center"
			style="background:url({Blackboard}); background-size: cover; background-position: center center;">
			<figure>
				<figcaption
					class="{showBg
						? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
						: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
					<enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class="brightness-[0.85] saturate-150"></enhanced:img>
					<div>Tech-related upskilling</div>
				</figcaption>
			</figure>
		</a>

		<a a href="/projects/btonomics" class="panel grid w-full content-stretch">
			<figure
				class="group grid h-full w-full space-y-2 self-center"
				style="background:url({Home}); background-size: cover; background-position: center center;">
				<figcaption
					class="{showBg
						? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
						: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
					<div class="grid h-full">
						<h3
							class="pb-1 font-serif text-4xl font-bold text-[#38bdf8] {mode === 'dark'
								? 'brightness-125'
								: undefined}">
							BTOnomics
						</h3>
						<div>Home renovation blog for budget folks</div>
					</div>
				</figcaption>
			</figure>
		</a>

		<a
			href="/projects/cancelninja"
			class="panel group grid w-full content-stretch"
			style="background:url({Piggy}); background-size: cover; background-position: center 50% ;">
			<div
				class="{showBg
					? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
					: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
				<h3 class="text-4xl font-extrabold tracking-tighter">
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
				<div>SaaS & Dark Pattern tracker</div>
			</div>
		</a>

		<a href="/projects/grumplr" class="panel grid w-full content-stretch">
			<figure
				class="group grid h-full w-full space-y-2 self-center"
				style="background:url({Chat}); background-size: cover; background-position: center center;">
				<figcaption
					class="{showBg
						? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
						: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
					<h3 class="font-inter content-center pb-1 text-4xl font-bold text-[#1b510f]">Grumplr</h3>
					<div>Reddit-lite style bulletin board</div>
				</figcaption>
			</figure>
		</a>

		<a href="/projects/meetrics" class="panel grid w-full content-stretch">
			<figure
				class="group grid h-full w-full space-y-2 self-center"
				style="background:url({Calculator}); background-size: cover; background-position: center 20%;">
				<figcaption
					class="{showBg
						? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
						: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
					<img src={Meetrics} alt="Meetrics" class="w-44" />
					<div>Meeting cost calculator</div>
				</figcaption>
			</figure>
		</a>

		<a
			href="/projects/rinku"
			class="panel group grid w-full content-stretch"
			style="background:url({Clips}); background-size: cover; background-position: center center;">
			<figure class="group grid justify-items-center space-y-2">
				<figcaption
					class="{showBg
						? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
						: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
					<img src={Rinku} alt="Rinku" class="mb-2 h-8.5 hover:saturate-100" />
					<!-- h-9 and mb-2 because the svg has no margins  -->
					<div>URL shortener</div>
				</figcaption>
			</figure>
		</a>

		<a
			href="/projects/towelie"
			class="panel group grid w-full content-stretch"
			style="background:url({Towels}); background-size: cover; background-position: center 30%;">
			<figure class="group grid justify-items-center space-y-2">
				<figcaption
					class="{showBg
						? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
						: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
					<img src={Towelie} alt="Towelie" class="mb-2 h-10 justify-self-center hover:saturate-100" />

					<!-- h-9 and mb-2 because the svg has no margins  -->
					<div>CRUD app for my towels</div>
				</figcaption>
			</figure>
		</a>

		<a
			href="/projects/wronged"
			class="panel group grid w-full content-stretch"
			style="background:url({Bot}); background-size: cover; background-position: center 40%;">
			<figure class="group grid justify-items-center space-y-2">
				<figcaption
					class="{showBg
						? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
						: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
					<img src={Wronged} alt="Wronged" class="mb-2 h-10 justify-self-center hover:saturate-100" />

					<!-- h-9 and mb-2 because the svg has no margins  -->
					<div>Products, Problems, UX Chatbot</div>
				</figcaption>
			</figure>
		</a>
	</div>
	<!-- <button
		class="btn border-base-content mt-12 cursor-pointer rounded-lg lg:col-span-3 lg:mt-16"
		onclick={() => {
			showArchived = !showArchived;
		}}
		><h2 class="flex items-center gap-4 text-xl font-bold">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.3em"
				height="1.3em"
				class="material-symbols:archive-outline"
				viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="m12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14zM5 8v11h14V8zm0 13q-.825 0-1.412-.587T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.587 1.413T19 21zm.4-15h13.2l-.85-1H6.25zm6.6 7.5" /></svg>
			Show Archive
		</h2>
	</button>
	{#if showArchived}
		<div class="grid w-full gap-y-12 lg:col-span-3 lg:grid-cols-3"><ProjectDashboardArchived /></div>
	{/if} -->
</main>

<style>
	.calc-height {
		min-height: calc(100vh - 64rem);
	}
	.flip-img {
		filter: invert(0.5) sepia(1) saturate(5) hue-rotate(303deg);
	}

	main > div {
		/* width: 100%; */
		aspect-ratio: 1;
	}
</style>
