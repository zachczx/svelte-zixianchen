<script>
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=158';
	import Meetrics from '$lib/logos/meetrics.svg?dataurl';
	import Rinku from '$lib/logos/rinku-logo.svg?dataurl';
	import Wronged from '$lib/logos/wronged-logo.svg?dataurl';

	let { mode = '', desaturate = false } = $props();
</script>

<div
	class="flex items-center {desaturate
		? 'brightness-200 saturate-0 hover:brightness-100 hover:saturate-100'
		: undefined}">
	<figure class="grid content-center justify-items-center space-y-2">
		<figcaption>
			<a href="/projects/abbreviation"
				><h3
					class="font-sans text-4xl font-extrabold {mode === 'dark'
						? 'text-[#0069ff] brightness-125'
						: 'text-[#0069ff]'} lg:flex">
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
			</a>
		</figcaption>
	</figure>
</div>

<figure
	class="grid content-center space-y-2 self-center {desaturate
		? 'brightness-200 saturate-0 hover:brightness-100 hover:saturate-100'
		: undefined}">
	<figcaption>
		<a href="/projects/appraize">
			<h3 class="font-sans text-4xl font-black text-[#A94A4A] {mode === 'dark' ? 'brightness-125' : undefined}">
				Appraize
			</h3>
			<div>Drop & drop ranking</div></a>
	</figcaption>
</figure>

<figure class={desaturate ? 'brightness-200 saturate-0 hover:brightness-100 hover:saturate-100' : undefined}>
	<figcaption>
		<a href="/projects/apptitude"
			><enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class="brightness-[0.85] saturate-150"></enhanced:img>
			<div>Tech-related upskilling</div></a>
	</figcaption>
</figure>

<div class={desaturate ? 'brightness-200 saturate-0 hover:brightness-100 hover:saturate-100' : undefined}>
	<figure class="grid space-y-2">
		<figcaption>
			<a href="/projects/btonomics"
				><h3 class="pb-1 font-serif text-4xl font-bold text-[#38bdf8] {mode === 'dark' ? 'brightness-125' : undefined}">
					BTOnomics
				</h3>
				<div>Home renovation blog for budget folks</div></a>
		</figcaption>
	</figure>
</div>

<a href="/projects/cancelninja" class="group grid content-center"
	><h3
		class="text-4xl font-extrabold tracking-tighter {mode === 'dark' ? 'text-neutral-content' : 'text-base-content'}">
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
</a>

<div
	class="flex items-center {desaturate
		? 'brightness-200 saturate-0 hover:brightness-100 hover:saturate-100'
		: undefined}">
	<figure class="grid space-y-2">
		<figcaption>
			<a href="/projects/grumplr"
				><h3
					class="font-inter content-center pb-1 text-4xl font-bold {mode === 'dark'
						? 'text-green-400'
						: 'text-[#1b510f]'}">
					Grumplr
				</h3>
				<div>Reddit-lite style bulletin board</div></a>
		</figcaption>
	</figure>
</div>

<div class={desaturate ? 'brightness-200 saturate-0 hover:brightness-100 hover:saturate-100' : undefined}>
	<figure class="grid space-y-2">
		<figcaption>
			<a href="/projects/meetrics"
				><img src={Meetrics} alt="Meetrics" class="w-48" />
				<div>Meeting cost calculator</div></a>
		</figcaption>
	</figure>
</div>

<div class={desaturate ? 'group saturate-0 hover:brightness-100 hover:saturate-100' : undefined}>
	<figure class="grid space-y-2">
		<figcaption>
			<a href="/projects/rinku">
				{#if desaturate}
					<!-- this is to brighten the svg, if not contrast is very poor -->
					<img
						src={Rinku}
						alt="Rinku"
						class="mb-2 h-9 brightness-[300%] hue-rotate-230 group-hover:hue-rotate-0 group-hover:saturate-100" />
				{:else}
					<img src={Rinku} alt="Rinku" class="mb-2 h-9 hover:saturate-100" />
				{/if}
				<!-- h-9 and mb-2 because the svg has no margins  -->
				<div>URL shortener</div></a>
		</figcaption>
	</figure>
</div>

<div class={desaturate ? 'group saturate-0 hover:brightness-100 hover:saturate-100' : undefined}>
	<figure class="grid space-y-2">
		<figcaption>
			<a href="/projects/wronged">
				{#if desaturate}
					<!-- this is to brighten the svg, if not contrast is very poor -->
					<img src={Wronged} alt="Wronged" class="mb-2 h-10 invert" />
				{:else}
					<img src={Wronged} alt="Wronged" class="mb-2 h-10 hover:saturate-100" />
				{/if}
				<!-- h-9 and mb-2 because the svg has no margins  -->
				<div>Chatbot</div></a>
		</figcaption>
	</figure>
</div>
