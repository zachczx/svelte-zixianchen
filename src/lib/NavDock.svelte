<script lang="ts">
	interface NavDock {
		navCurrent: string;
		pathName: string;
	}
	let { navCurrent, pathName }: NavDock = $props();
</script>

<a
	href="/#header"
	class="dock group relative bg-transparent no-underline transition-all duration-200 ease-linear hover:no-underline">
	<div
		class={[
			'group relative flex items-center justify-center rounded-none border border-white/20 transition-all duration-200 ease-linear group-hover:shadow-lg group-hover:shadow-black/60',
			navCurrent === 'header' ? 'bg-accent' : 'bg-gray-50',
		]}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			class={['material-symbols:other-houses grayscale-100', navCurrent === 'header' ? 'opacity-100' : 'opacity-75']}
			><path
				fill="currentColor"
				d="M4 21v-9.375L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.575l-1.8-1.35V21zm4-6q-.425 0-.712-.288T7 14t.288-.712T8 13t.713.288T9 14t-.288.713T8 15m4 0q-.425 0-.712-.288T11 14t.288-.712T12 13t.713.288T13 14t-.288.713T12 15m4 0q-.425 0-.712-.288T15 14t.288-.712T16 13t.713.288T17 14t-.288.713T16 15" /></svg>
	</div>
	<span
		class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-xs py-0.5 font-mono text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex"
		>Home</span>
</a>

<a
	href="/#about"
	class="dock group relative bg-transparent no-underline transition-all duration-200 ease-linear hover:no-underline">
	<div
		class={[
			'group relative flex items-center justify-center rounded-none border border-white/20 transition-all duration-200 ease-linear group-hover:shadow-lg group-hover:shadow-black/60',
			navCurrent === 'about' ? 'bg-accent' : 'bg-gray-50',
		]}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			class={['material-symbols:account-box grayscale-100', navCurrent === 'about' ? 'opacity-100' : 'opacity-75']}
			><path
				fill="currentColor"
				d="M12 13q1.45 0 2.475-1.025T15.5 9.5t-1.025-2.475T12 6T9.525 7.025T8.5 9.5t1.025 2.475T12 13m-7 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14v-1.15q-1.35-1.325-3.137-2.087T12 15t-3.863.763T5 17.85z" /></svg>
	</div>
	<span
		class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-xs py-0.5 font-mono text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex"
		>About</span>
</a>

<a
	href="/projects"
	class="dock group relative bg-transparent no-underline transition-all duration-200 ease-linear hover:no-underline">
	<div
		class={[
			'group relative flex items-center justify-center rounded-none border border-white/20 transition-all duration-200 ease-linear group-hover:shadow-lg group-hover:shadow-black/60',
			navCurrent === 'projects' ? 'bg-accent' : 'bg-gray-50',
		]}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			class={['material-symbols:grid-view grayscale-100', navCurrent === 'projects' ? 'opacity-100' : 'opacity-75']}
			><path fill="currentColor" d="M3 11V3h8v8zm0 10v-8h8v8zm10-10V3h8v8zm0 10v-8h8v8z" /></svg>
	</div>
	<span
		class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-xs py-0.5 font-mono text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex">
		Projects
	</span>
</a>

<a href="/blog" class="dock group relative bg-transparent transition-all duration-200 ease-out">
	<div
		class="group relative flex items-center justify-center rounded-none border border-white/20 bg-gray-50 text-red-950 transition-all duration-200 ease-linear group-hover:shadow-lg group-hover:shadow-black/60">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			class={['material-symbols:article grayscale-100', navCurrent === 'blog' ? 'opacity-100' : 'opacity-75']}
			><path
				fill="currentColor"
				d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z" /></svg>
		<span
			class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-xs py-0.5 font-mono text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex"
			>Blog</span>
	</div>
</a>

<div class="mx-4 h-10/12 w-0.5 bg-white/30"></div>

<a
	href="/contact"
	class="dock group relative bg-transparent no-underline transition-all duration-200 ease-linear hover:no-underline">
	<div
		class={[
			'group relative flex items-center justify-center rounded-none border border-white/20 transition-all duration-200 ease-linear group-hover:shadow-lg group-hover:shadow-black/60',
			pathName === '/contact' ? 'bg-accent' : 'bg-gray-50',
		]}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			class={['material-symbols:mail grayscale-100', pathName === '/contact' ? 'opacity-100' : 'opacity-75']}
			><path
				fill="currentColor"
				d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" /></svg>
	</div>
	<span
		class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-xs py-0.5 font-mono text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex"
		>Contact</span>
</a>

<a
	href="https://www.linkedin.com/in/zixianchen/"
	class="dock group relative bg-transparent no-underline transition-all duration-200 ease-linear hover:no-underline">
	<div
		class="group relative flex items-center justify-center rounded-none border border-white/20 bg-gray-50 text-red-950 transition-all duration-200 ease-linear group-hover:shadow-lg group-hover:shadow-black/60">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="0.9em"
			height="0.9em"
			viewBox="0 0 20 20"
			class={['uiw:linkedin grayscale-100', navCurrent === 'linkedin' ? 'opacity-100' : 'opacity-75']}
			><path
				fill="currentColor"
				d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z" /></svg>
	</div>
	<span
		class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-xs py-0.5 font-mono text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex"
		>LinkedIn</span>
</a>

<a
	href="https://github.com/zachczx?tab=repositories"
	class="dock group relative bg-transparent no-underline transition-all duration-200 ease-linear hover:no-underline">
	<div
		class="group relative flex items-center justify-center rounded-none border border-white/20 bg-gray-50 text-red-950 transition-all duration-200 ease-linear group-hover:shadow-lg group-hover:shadow-black/60">
		<svg
			width="1em"
			height="1em"
			class={['grayscale-100', navCurrent === 'github' ? 'opacity-100' : 'opacity-75']}
			viewBox="0 0 98 96"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xml:space="preserve"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
			<path
				d="M48.854,0C21.839,0 0,22 0,49.217C0,70.973 13.993,89.389 33.405,95.907C35.832,96.397 36.721,94.848 36.721,93.545C36.721,92.404 36.641,88.493 36.641,84.418C23.051,87.352 20.221,78.551 20.221,78.551C18.037,72.847 14.801,71.381 14.801,71.381C10.353,68.366 15.125,68.366 15.125,68.366C20.059,68.692 22.648,73.418 22.648,73.418C27.015,80.914 34.052,78.796 36.883,77.492C37.287,74.314 38.582,72.114 39.957,70.892C29.118,69.751 17.714,65.514 17.714,46.609C17.714,41.231 19.654,36.831 22.728,33.409C22.243,32.187 20.544,27.134 23.214,20.371C23.214,20.371 27.339,19.067 36.64,25.423C40.622,24.346 44.729,23.798 48.854,23.793C52.979,23.793 57.184,24.364 61.067,25.423C70.369,19.067 74.494,20.371 74.494,20.371C77.164,27.134 75.464,32.187 74.979,33.409C78.134,36.831 79.994,41.231 79.994,46.609C79.994,65.514 68.59,69.669 57.67,70.892C59.45,72.44 60.986,75.373 60.986,80.018C60.986,86.618 60.906,91.915 60.906,93.544C60.906,94.848 61.796,96.397 64.222,95.908C83.634,89.388 97.627,70.973 97.627,49.217C97.707,22 75.788,0 48.854,0Z"
				style="fill:rgb(36,41,47);" />
		</svg>
	</div>
	<span
		class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-xs py-0.5 font-mono text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex"
		>GitHub</span>
</a>

<style>
	a {
		--font-scaler: 0.3;
		--dimensions-scaler: 0.35;
		--margin-scaler: 0.2;
	}

	.dock {
		font-size: calc(var(--font-scaler) * 6rem);
		div {
			/* filter: saturate(0.5); */
			height: calc(var(--dimensions-scaler) * 9rem);
			width: calc(var(--dimensions-scaler) * 9rem);
			flex-basis: auto;

			&:hover {
				opacity: 100%;
			}
		}
	}

	.dock:hover {
		font-size: calc(var(--font-scaler) * 9rem);
		div {
			filter: saturate(1);
			height: calc(var(--dimensions-scaler) * 13rem);
			width: calc(var(--dimensions-scaler) * 13rem);
		}
		margin-top: calc(var(--margin-scaler) * -6rem);
	}

	/* Adjacent to hover */
	.dock:hover + .dock,
	.dock:has(+ .dock:hover) {
		font-size: calc(var(--font-scaler) * 8rem);
		/* background-color: fuchsia; */
		div {
			height: calc(var(--dimensions-scaler) * 11rem);
			width: calc(var(--dimensions-scaler) * 11rem);
		}
		margin-top: calc(var(--margin-scaler) * -3.5rem);
	}

	/* Next next - beside adjacent */
	.dock:hover + .dock + .dock,
	.dock:has(+ .dock + .dock:hover) {
		font-size: calc(var(--font-scaler) * 7rem);
		div {
			height: calc(var(--dimensions-scaler) * 10rem);
			width: calc(var(--dimensions-scaler) * 10rem);
		}
		margin-top: calc(var(--margin-scaler) * -2rem);
	}

	/* Next next next */
	.dock:hover + .dock + .dock + .dock,
	.dock:has(+ .dock + .dock + .dock:hover) {
		font-size: calc(var(--font-scaler) * 6rem);
		div {
			height: calc(var(--dimensions-scaler) * 9rem);
			width: calc(var(--dimensions-scaler) * 9rem);
		}
		margin-top: calc(var(--margin-scaler) * -1rem);
	}
</style>
