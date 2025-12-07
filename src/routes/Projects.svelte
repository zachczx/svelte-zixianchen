<script lang="ts">
	import apptitudeLogo from '$lib/assets/green-logo.webp?w=162&enhanced';
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
	import WashingMachine from '$lib/assets/washing-machine.webp';
	import CubbyLogo from '$lib/assets/cubby-logo.webp';

	let { mode = '' } = $props();

	let showBg = $state(true);
</script>

<main class="grid w-full justify-self-center text-center">
	<div class="mb-0 flex w-full items-end gap-2">
		<h3 class="mb-2 grow text-start text-4xl font-bold">Side Projects</h3>
		<label class="flex cursor-pointer items-end gap-2 pt-2 pb-2 text-sm font-medium">
			<!-- Background -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.5em"
				height="1.5em"
				class="material-symbols:visibility-off-outline hidden"
				viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="m16.1 13.3l-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.425-.2.863-.3T12 7q1.875 0 3.188 1.313T16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15l-1.45-1.4q.95-.725 1.688-1.587T20.8 11.5q-1.25-2.525-3.588-4.012T12 6q-.725 0-1.425.1T9.2 6.4L7.65 4.85q1.025-.425 2.1-.638T12 4q3.775 0 6.725 2.087T23 11.5q-.575 1.475-1.513 2.738T19.3 16.45m.5 6.15l-4.2-4.15q-.875.275-1.762.413T12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.463T4.15 7L1.4 4.2l1.4-1.4l18.4 18.4zM5.55 8.4q-.725.65-1.325 1.425T3.2 11.5q1.25 2.525 3.588 4.013T12 17q.5 0 .975-.062t.975-.138l-.9-.95q-.275.075-.525.113T12 16q-1.875 0-3.188-1.312T7.5 11.5q0-.275.038-.525t.112-.525zm4.2 4.2" /></svg>
			<input
				type="checkbox"
				class="toggle toggle-sm text-base-100 checked:text-base-100 checked:border-primary checked:bg-primary border-gray-400 bg-gray-400"
				bind:checked={showBg} />
		</label>
	</div>
	<div id="project-grid" class="grid w-full justify-items-center lg:grid-cols-2 lg:gap-4 xl:grid-cols-3">
		<a
			href="/projects/abbreviation"
			class="bg-primary/10 group flex w-full items-center justify-center overflow-hidden rounded-md"
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
			class="group grid h-full w-full content-stretch space-y-2 self-center overflow-hidden rounded-md"
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
			class="group grid h-full w-full content-stretch space-y-2 self-center overflow-hidden rounded-md"
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

		<a href="/projects/btonomics" class="grid w-full content-stretch overflow-hidden rounded-md">
			<figure
				class="group grid h-full w-full space-y-2 self-center"
				style="background:url({Home}); background-size: cover; background-position: center center;">
				<figcaption
					class="{showBg
						? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
						: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
					<div class="grid h-full">
						<h3
							class="pb-1 font-serif text-2xl font-bold text-[#38bdf8] lg:text-4xl {mode === 'dark'
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
			class="group grid w-full content-stretch overflow-hidden rounded-md"
			style="background:url({Piggy}); background-size: cover; background-position: center 50%;">
			<div
				class="{showBg
					? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
					: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
				<h3 class="text-4xl font-extrabold tracking-tighter text-[#3b82f6]">
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

		<a href="/projects/grumplr">
			<figure
				class="group grid h-full w-full space-y-2 self-center overflow-hidden rounded-md"
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

		<a href="/projects/meetrics" class="grid w-full content-stretch">
			<figure
				class="group grid h-full w-full space-y-2 self-center overflow-hidden rounded-md"
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
			class="group grid w-full content-stretch overflow-hidden rounded-md"
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
			href="/projects/cubby"
			class="group grid w-full content-stretch overflow-hidden rounded-md"
			style="background:url({WashingMachine}); background-size: cover; background-position: center 30%;">
			<figure class="group grid justify-items-center space-y-2">
				<figcaption
					class="{showBg
						? 'group-hover:bg-base-200/95 opacity-0 group-hover:opacity-100'
						: 'bg-base-200/95 opacity-100'} grid h-full w-full content-center justify-items-center">
					<img src={CubbyLogo} alt="Cubby" class="mb-2 h-28 justify-self-center hover:saturate-100" />

					<!-- h-9 and mb-2 because the svg has no margins  -->
					<div>CRUD app for my towels</div>
				</figcaption>
			</figure>
		</a>

		<a
			href="/projects/wronged"
			class="group grid w-full content-stretch overflow-hidden rounded-md"
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
</main>

<style>
	.calc-height {
		min-height: calc(100vh - 64rem);
	}
	.flip-img {
		filter: invert(0.5) sepia(1) saturate(5) hue-rotate(303deg);
	}

	#project-grid > a {
		aspect-ratio: 1;
		width: 100%;
	}
</style>
