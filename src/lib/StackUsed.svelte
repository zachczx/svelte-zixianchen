<script lang="ts">
	/** @type {string} */
	export let framework: string = '';

	/** @type {string} */
	export let library: string;

	/** @type {string} */
	export let host: string;

	export let className: string;
</script>

<div class="grid content-around gap-y-2 rounded-2xl px-4 py-8 text-base {className}">
	{#if framework}
		<div class="flex items-center">
			<div class="me-4">
				<svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" class="" viewBox="0 0 24 24"
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
					></svg>
			</div>
			<div class="grow">{framework}</div>
		</div>
	{/if}
	{#if library}
		<div class="flex items-center">
			<div class="me-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.3em"
					height="1.3em"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-library"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path
						d="M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1" /><path
						d="M11 7h5" /><path d="M11 10h6" /><path d="M11 13h3" /></svg>
			</div>
			<div class="grow">{library}</div>
		</div>
	{/if}
	{#if host}
		<div class="flex items-center">
			<div class="me-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.3em"
					height="1.3em"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-cpu"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path
						d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path d="M14 3v2" /><path
						d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path d="M10 21v-2" /></svg>
			</div>
			<div class="grow">{host}</div>
		</div>
	{/if}
</div>
