<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import { page } from '$app/stores';

	let { data, children } = $props();
</script>

<Nav navCurrent="projects" />
<div class="grid content-start lg:grid-cols-[auto_1fr]">
	<aside
		class="sticky left-0 top-0 z-[2] hidden h-full content-start border-2 border-red-300/10 bg-red-100 px-1 py-4 text-base-content/70 lg:grid">
		<a href="/projects"
			><h4 class="flex items-center gap-4 px-2 py-2 font-bold">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.3em"
					height="1.3em"
					class="material-symbols:dashboard-2-outline"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M15 20v-7h7v7zm-4-9V4h11v7zm-9 9v-7h11v7zm0-9V4h7v7zm11-2h7V6h-7zm-9 9h7v-3H4zm13 0h3v-3h-3zM4 9h3V6H4zm3 0" /></svg>
				All Projects
			</h4></a>
		<h4 class="mt-8 flex items-center gap-4 px-2 py-2 font-bold">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.3em"
				height="1.3em"
				class="material-symbols:progress-activity"
				viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2q.425 0 .713.288T13 3t-.288.713T12 4Q8.675 4 6.337 6.338T4 12t2.338 5.663T12 20t5.663-2.337T20 12q0-.425.288-.712T21 11t.713.288T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22" /></svg
			>Ongoing
		</h4>
		<ul class="ms-4 border-l-4 border-l-pink-600/30 ps-0.5 font-medium">
			<a href="/projects/abbreviation"
				><li
					class="my-0.5 rounded-lg px-8 py-2 hover:bg-pink-600 hover:text-white/90 {data.slug === 'abbreviation'
						? 'bg-pink-600 text-white/90'
						: undefined}">
					Abbreviation
				</li></a>
			<a href="/projects/appraize"
				><li
					class="my-0.5 rounded-lg px-8 py-2 hover:bg-pink-600 hover:text-white/90 {data.slug === 'appraize'
						? 'bg-pink-600 text-white/90'
						: undefined}">
					Appraize
				</li></a>
			<a href="/projects/apptitude"
				><li
					class="my-0.5 rounded-lg px-8 py-2 hover:bg-pink-600 hover:text-white/90 {data.slug === 'apptitude'
						? 'bg-pink-600 text-white/90'
						: undefined}">
					Apptitude
				</li></a>
			<a href="/projects/btonomics"
				><li
					class="my-0.5 rounded-lg px-8 py-2 hover:bg-pink-600 hover:text-white/90 {data.slug === 'btonomics'
						? 'bg-pink-600 text-white/90'
						: undefined}">
					BTOnomics
				</li></a>
			<a href="/projects/cancelninja"
				><li
					class="my-0.5 rounded-lg px-8 py-2 hover:bg-pink-600 hover:text-white/90 {data.slug === 'cancelninja'
						? 'bg-pink-600 text-white/90'
						: undefined}">
					Cancel Ninja
				</li></a>
			<a href="/projects/grumplr"
				><li
					class="my-0.5 rounded-lg px-8 py-2 hover:bg-pink-600 hover:text-white/90 {data.slug === 'grumplr'
						? 'bg-pink-600 text-white/90'
						: undefined}">
					Grumplr
				</li></a>
			<a href="/projects/meetrics"
				><li
					class="my-0.5 rounded-lg px-8 py-2 hover:bg-pink-600 hover:text-white/90 {data.slug === 'meetrics'
						? 'bg-pink-600 text-white/90'
						: undefined}">
					Meetrics
				</li></a>
		</ul>
		<h4 class="mt-8 flex items-center gap-4 px-2 py-2 font-bold">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.3em"
				height="1.3em"
				class="material-symbols:archive-outline"
				viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="m12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14zM5 8v11h14V8zm0 13q-.825 0-1.412-.587T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.587 1.413T19 21zm.4-15h13.2l-.85-1H6.25zm6.6 7.5" /></svg
			>Archived
		</h4>
		<ul class="ms-4 border-l-4 border-l-pink-600/30 ps-0.5 font-medium">
			<a href="/projects/btonomics-wordpress"
				><li
					class="my-0.5 rounded-lg px-8 py-2 hover:bg-pink-600 hover:text-white/90 {data.slug === 'btonomics-wordpress'
						? 'bg-pink-600 text-white/90'
						: undefined}">
					BTOnomics Wordpress
				</li></a>
			<a href="/projects/eatyourmeds"
				><li
					class="my-0.5 rounded-lg px-8 py-2 hover:bg-pink-600 hover:text-white/90 {data.slug === 'eatyourmeds'
						? 'bg-pink-600 text-white/90'
						: undefined}">
					Eat Your Medicine!
				</li></a>
			<a href="/projects/rankamate"
				><li
					class="my-0.5 rounded-lg px-8 py-2 hover:bg-pink-600 hover:text-white/90 {data.slug === 'rankamate'
						? 'bg-pink-600 text-white/90'
						: undefined}">
					Rank-a-Mate
				</li></a>
		</ul>
	</aside>
	<section id="projects" class="lg:ps-1.5">
		{@render children()}
	</section>
</div>
