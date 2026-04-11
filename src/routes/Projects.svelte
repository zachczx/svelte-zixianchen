<script lang="ts">
	import type { Snippet } from 'svelte';
	import apptitudeLogo from '$lib/assets/green-logo.webp?w=182&enhanced';
	import Meetrics from '$lib/logos/meetrics.svg?dataurl';
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

	let showBg = $state(true);
</script>

{#snippet abbreviationTitle()}
	<h3 class="font-sans text-4xl font-extrabold text-[#0069ff] lg:flex">
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
					clip-rule="evenodd" /><path stroke="#0069ff" stroke-linecap="round" d="M20.5 20.5L17 17" /><circle
					cx="11"
					cy="11"
					r="8.5"
					stroke="#0069ff" /></g
			></svg
		>n
	</h3>
{/snippet}

{#snippet appraizeTitle()}
	<h3 class="font-sans text-4xl font-black text-[#A94A4A]">Appraize</h3>
{/snippet}

{#snippet apptitudeTitle()}
	<enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class="brightness-[0.70] saturate-150"></enhanced:img>
{/snippet}

{#snippet btonomicsTitle()}
	<h3 class="pb-1 font-serif text-2xl font-bold text-[#38bdf8] lg:text-4xl">BTOnomics</h3>
{/snippet}

{#snippet cancelninjaTitle()}
	<h3 class="text-4xl font-extrabold tracking-tighter text-[#3b82f6]">
		Cancel Ninj<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			class="-ms-1 inline rotate-45"
			viewBox="0 0 512 512"
			><path
				fill="currentColor"
				d="m395.13 313l89.869-100.857H388.08c-45.748 0-82.824-37.063-82.824-82.824l-.297-33.208l-100.857-77.147v96.917c0 45.751-37.06 82.824-82.822 82.824l-9.844.298L27.001 299.86h96.92c45.75 0 82.822 37.062 82.822 82.824l.298 20.484l100.854 89.868v-96.913c0-45.749 37.062-82.823 82.824-82.823zM256 306.669c-27.99 0-50.666-22.685-50.666-50.665c0-27.99 22.679-50.671 50.665-50.671c27.99 0 50.67 22.682 50.67 50.671c0 27.98-22.683 50.665-50.67 50.665z" /></svg>
	</h3>
{/snippet}

{#snippet grumplrTitle()}
	<h3 class="font-inter content-center pb-1 text-4xl font-bold text-[#1b510f]">Grumplr</h3>
{/snippet}

{#snippet meetricsTitle()}
	<img src={Meetrics} alt="Meetrics" class="w-44" />
{/snippet}

{#snippet rinkuTitle()}
	<img src={Rinku} alt="Rinku" class="mb-2 h-8.5 hover:saturate-100" />
{/snippet}

{#snippet cubbyTitle()}
	<img src={CubbyLogo} alt="Cubby" class="mb-2 h-28 justify-self-center hover:saturate-100" />
{/snippet}

{#snippet wrongedTitle()}
	<img src={Wronged} alt="Wronged" class="mb-2 h-10 justify-self-center hover:saturate-100" />
{/snippet}

{#snippet card(href: string, bg: string, pos: string, title: Snippet, caption: string)}
	<a
		{href}
		class="group grid w-full content-stretch overflow-hidden rounded-md"
		style="background:url({bg}); background-size: cover; background-position: {pos};">
		<figure class="grid h-full w-full content-center justify-items-center">
			<figcaption
				class="{showBg
					? 'group-hover:bg-base-200/90 opacity-0 group-hover:opacity-100'
					: 'bg-base-200/90 opacity-100'} grid h-full w-full content-center justify-items-center">
				{@render title()}
				<div class="text-base-content">{caption}</div>
			</figcaption>
		</figure>
	</a>
{/snippet}

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
				class="toggle toggle-sm text-base-100 border-gray-400 bg-gray-600 checked:border-white checked:bg-white checked:text-gray-500"
				bind:checked={showBg} />
		</label>
	</div>
	<div id="project-grid" class="grid w-full justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
		{@render card('/projects/abbreviation', Scrabble, 'center center', abbreviationTitle, 'Abbreviation/acronym search')}
		{@render card('/projects/appraize', Rank, 'center center', appraizeTitle, 'Drop & drop ranking')}
		{@render card('/projects/apptitude', Blackboard, 'center center', apptitudeTitle, 'Tech-related upskilling')}
		{@render card('/projects/btonomics', Home, 'center center', btonomicsTitle, 'Home renovation blog for budget folks')}
		{@render card('/projects/cancelninja', Piggy, 'center 50%', cancelninjaTitle, 'SaaS & Dark Pattern tracker')}
		{@render card('/projects/grumplr', Chat, 'center center', grumplrTitle, 'Reddit-lite style bulletin board')}
		{@render card('/projects/meetrics', Calculator, 'center 20%', meetricsTitle, 'Meeting cost calculator')}
		{@render card('/projects/rinku', Clips, 'center center', rinkuTitle, 'URL shortener')}
		{@render card('/projects/cubby', WashingMachine, 'center 30%', cubbyTitle, 'CRUD app for my towels')}
		{@render card('/projects/wronged', Bot, 'center 40%', wrongedTitle, 'Products, Problems, UX Chatbot')}
	</div>
</main>

<style>
	#project-grid > a {
		aspect-ratio: 1;
		width: 100%;
	}
</style>
