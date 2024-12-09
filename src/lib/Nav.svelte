<script lang="ts">
	/**
	 * @type {string}
	 */
	export let navCurrent: string;

	import { page } from '$app/stores';
	import { addNeumorphismInset, removeNeumorphismInset } from '$lib/Neumorphism';
</script>

<nav class="z-30 grid h-fit w-full grid-cols-2 justify-center px-4 lg:fixed lg:top-4 lg:grid-cols-3">
	<div class="navbar-start col-span-2 -mx-4 w-full xl:hidden">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-circle btn-ghost">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
				</svg>
			</div>
			<button tabindex="0" class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
				<li><a href="/#about">About</a></li>
				<li><a href="/#career">Career</a></li>
				<li><a href="/#projects">Projects</a></li>
				<li><a href="/contact">Contact</a></li>
			</button>
		</div>
		<span class="navLogo font-serif text-2xl font-extrabold text-base-content hover:drop-shadow"
			><a href="/">Zixian Chen</a></span>
	</div>

	<div class="hidden items-center lg:opacity-0 xl:flex">
		<span class="navLogo font-serif text-2xl font-extrabold text-base-content hover:drop-shadow"
			><a href="/">Zixian Chen</a></span>
	</div>
	<div
		class="navMenu hidden h-16 w-fit min-w-[40rem] items-center justify-center justify-self-center rounded-2xl border border-b-gray-100 bg-black/70 shadow backdrop-blur-md transition-all duration-500 ease-out lg:relative lg:flex">
		<!-- <a
			aria-current={navCurrent === 'about' ? 'page' : undefined}
			id="navAbout"
			href="/#about"
			class="btn btn-link text-xl font-bold text-gray-100 no-underline transition-all duration-500 ease-out hover:no-underline {navCurrent ===
			'about'
				? 'text-[#FF725E]'
				: undefined}">About</a> -->
		<a
			aria-current={navCurrent === 'about' ? 'page' : undefined}
			id="navAbout"
			href="/#about"
			class="dock group btn btn-link font-bold text-white no-underline transition-all duration-500 ease-out hover:no-underline">
			<div
				class="relative flex items-center justify-center rounded-xl border border-white/70 bg-red-300 text-red-950 transition-all duration-500 ease-out group-hover:bg-pink-700 group-hover:text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="hugeicons:user-account"
					viewBox="0 0 24 24"
					><g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						color="currentColor"
						><path d="M14 9h4m-4 3.5h3" /><rect width="20" height="18" x="2" y="3" rx="5" /><path
							d="M5 16c1.208-2.581 5.712-2.75 7 0m-1.5-7a2 2 0 1 1-4 0a2 2 0 0 1 4 0" /></g
					></svg>
			</div>
			<div
				class="absolute left-1/2 hidden h-auto w-full -translate-x-1/2 rounded text-base font-bold text-red-950 group-hover:-top-6 group-hover:flex">
				<div class="text-center text-white">About</div>
			</div>
		</a>
		<a
			aria-current={navCurrent === 'career' ? 'page' : undefined}
			id="navCareer"
			href="/#career"
			class="dock group btn btn-link relative font-bold text-white no-underline transition-all duration-500 ease-out hover:no-underline {navCurrent ===
			'career'
				? 'text-[#FF725E]'
				: undefined}">
			<div
				class="relative flex items-center justify-center rounded-xl border border-white/70 bg-red-300 text-red-950 transition-all duration-500 ease-out group-hover:bg-pink-700 group-hover:text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="hugeicons:archive-02"
					viewBox="0 0 24 24"
					><g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						color="currentColor"
						><path
							d="M2 16c0-2.339 0-3.508.536-4.362a3.5 3.5 0 0 1 1.102-1.101C4.492 10 5.66 10 8 10h8c2.339 0 3.508 0 4.362.537a3.5 3.5 0 0 1 1.102 1.1C22 12.493 22 13.662 22 16s0 3.508-.537 4.362a3.5 3.5 0 0 1-1.1 1.102C19.507 22 18.338 22 16 22H8c-2.339 0-3.508 0-4.362-.537a3.5 3.5 0 0 1-1.102-1.1C2 19.507 2 18.338 2 16m18-6c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C18.1 6 17.4 6 16 6H8c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C4 7.9 4 8.6 4 10m14-4c0-1.886 0-2.828-.586-3.414S15.886 2 14 2h-4c-1.886 0-2.828 0-3.414.586S6 4.114 6 6" /><path
							d="M15 14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2" /></g
					></svg>
			</div>
			<div
				class="absolute left-1/2 hidden h-auto w-full -translate-x-1/2 rounded text-base font-bold text-red-950 group-hover:-top-6 group-hover:flex">
				<div class="text-center text-white">Career</div>
			</div>
		</a>
		<a
			aria-current={navCurrent === 'projects' || navCurrent === 'side-full' ? 'page' : undefined}
			id="navSide"
			href="/#projects"
			class="dock group btn btn-link relative font-bold text-white no-underline transition-all duration-500 ease-out hover:no-underline">
			<div
				class="relative flex items-center justify-center rounded-xl border border-white/70 bg-red-300 text-red-950 transition-all duration-500 ease-out group-hover:bg-pink-700 group-hover:text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="hugeicons:repository"
					viewBox="0 0 24 24"
					><g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						color="currentColor"
						><path
							d="M6 19.623c-.69-.195-1.232-.491-1.682-.941C3 17.364 3 15.242 3 11s0-6.364 1.318-7.682S7.758 2 12 2s6.364 0 7.682 1.318S21 6.758 21 11s0 6.364-1.318 7.682c-.45.45-.993.746-1.682.941" /><path
							d="M12 20.193c-.414 0-.748.32-1.414.958c-.647.619-.97.929-1.242.831a.5.5 0 0 1-.096-.046C9 21.779 9 21.31 9 20.376v-3.125c0-1.532 0-2.299.44-2.775C9.878 14 10.585 14 12 14s2.121 0 2.56.476s.44 1.243.44 2.775v3.125c0 .935 0 1.403-.248 1.56a.5.5 0 0 1-.096.046c-.272.098-.595-.212-1.242-.831c-.666-.639-1-.958-1.414-.958M8 10h8M8 6h4" /></g
					></svg>
			</div>
			<div
				class="absolute left-1/2 hidden h-auto w-full -translate-x-1/2 rounded text-base font-bold text-red-950 group-hover:-top-6 group-hover:flex">
				<div class="text-center text-white">Projects</div>
			</div>
		</a>
		<!-- <a
			aria-current={navCurrent === 'projects' || navCurrent === 'side-full' ? 'page' : undefined}
			id="navSide"
			href="/#projects"
			class="btn btn-link text-xl font-bold text-gray-100 no-underline hover:no-underline {navCurrent === 'side'
				? 'text-[#FF725E]'
				: undefined}">Projects</a>
		<a
			aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}
			id="navContact"
			href="/contact"
			class="btn btn-link text-xl font-bold text-gray-100 no-underline hover:no-underline {$page.url.pathname ===
			'/contact'
				? 'text-[#FF725E]'
				: undefined}">Contact</a> -->
		<a
			aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}
			id="navContact"
			href="/contact"
			class="dock group btn btn-link relative font-bold text-white no-underline transition-all duration-500 ease-out hover:no-underline">
			<div
				class="relative flex items-center justify-center rounded-xl border border-white/70 bg-red-300 text-red-950 transition-all duration-500 ease-out group-hover:bg-pink-700 group-hover:text-white">
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="hugeicons:mail-open" viewBox="0 0 24 24"
					><g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						color="currentColor"
						><path
							d="m5 7l-1.218.813c-.874.582-1.311.873-1.548 1.317c-.237.445-.235.967-.231 2.01c.004 1.258.016 2.538.048 3.834c.077 3.075.115 4.612 1.246 5.742c1.13 1.13 2.688 1.17 5.804 1.248a116 116 0 0 0 5.799 0c3.116-.078 4.674-.117 5.804-1.248c1.13-1.13 1.169-2.667 1.246-5.742c.032-1.296.044-2.576.048-3.833c.003-1.044.005-1.566-.232-2.01c-.236-.445-.673-.736-1.547-1.318L19 7" /><path
							d="m2 10l6.913 4.148C10.417 15.05 11.169 15.5 12 15.5s1.583-.45 3.087-1.353L22 10" /><path
							d="M5 12V6c0-1.886 0-2.828.586-3.414S7.114 2 9 2h6c1.886 0 2.828 0 3.414.586S19 4.114 19 6v6m-9-2h4m-4-4h4" /></g
					></svg>
			</div>
			<div
				class="absolute left-1/2 hidden h-auto w-full -translate-x-1/2 rounded text-base font-bold text-red-950 group-hover:-top-6 group-hover:flex">
				<div class="text-center text-white">Contact</div>
			</div>
		</a>

		<a
			href="https://www.linkedin.com/in/zixianchen/"
			class="dock group btn btn-link relative font-bold text-white no-underline transition-all duration-500 ease-out hover:no-underline">
			<div
				class="relative flex items-center justify-center rounded-xl border border-white/70 bg-red-300 text-red-950 transition-all duration-500 ease-out group-hover:bg-pink-700 group-hover:text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="akar-icons:linkedin-v2-fill"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						fill-rule="evenodd"
						d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.57 2.57 0 0 1-1.82.748a2.6 2.6 0 0 1-1.818-.747A2.55 2.55 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.58 2.58 0 0 1 4.571 2c.682 0 1.336.269 1.819.747s.753 1.126.753 1.803"
						clip-rule="evenodd" /></svg>
			</div>
			<div
				class="absolute -top-6 left-1/2 hidden h-auto w-fit -translate-x-1/2 rounded text-base font-bold text-red-950 group-hover:-bottom-16 group-hover:flex">
				<div class="text-center text-white">LinkedIn</div>
			</div>
		</a>

		<a
			href="https://github.com/zachczx?tab=repositories"
			class="dock group btn btn-link relative font-bold text-white no-underline transition-all duration-500 ease-out hover:no-underline">
			<div
				class="relative flex items-center justify-center rounded-xl border border-white/70 bg-red-300 text-red-950 transition-all duration-500 ease-out group-hover:bg-pink-700 group-hover:text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="akar-icons:github-fill"
					viewBox="0 0 24 24"
					><g fill="none"
						><g clip-path="url(#akarIconsGithubFill0)"
							><path
								fill="currentColor"
								fill-rule="evenodd"
								d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12"
								clip-rule="evenodd" /></g
						><defs><clipPath id="akarIconsGithubFill0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g
					></svg>
			</div>
			<div
				class="absolute -top-6 left-1/2 hidden h-auto w-fit -translate-x-1/2 rounded text-base font-bold text-red-950 group-hover:-bottom-16 group-hover:flex">
				<div class="text-center text-white">GitHub</div>
			</div>
		</a>

		<a
			href="/blog"
			class="dock group btn btn-link relative font-bold text-white no-underline transition-all duration-500 ease-out hover:no-underline">
			<div
				class="relative flex items-center justify-center rounded-xl border border-white/70 bg-red-300 text-red-950 transition-all duration-500 ease-out group-hover:bg-pink-700 group-hover:text-white">
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="hugeicons:book-04" viewBox="0 0 24 24"
					><g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						color="currentColor"
						><path d="M7.5 4.945H16a1.5 1.5 0 0 1 1.5 1.5v1.5m-2.5 5H9m3 4H9" /><path
							d="M18.497 2H6.307c-.496 0-1.005.073-1.406.368c-1.274.935-2.256 3.02-.273 4.903c.556.528 1.334.72 2.099.72h11.557c.793 0 2.216.113 2.216 2.536v7.454c0 2.22-1.79 4.019-3.997 4.019h-9.03c-2.204 0-3.807-1.557-3.933-3.929L3.506 5.166" /></g
					></svg>
				<div
					class="absolute -top-6 left-1/2 hidden h-auto w-fit -translate-x-1/2 rounded text-base font-bold text-red-950 group-hover:-bottom-16 group-hover:flex">
					<div class="text-center text-white">Blog</div>
				</div>
			</div>
		</a>
	</div>
	<div class="hidden items-center justify-end space-x-6 xl:flex"></div>
</nav>

<style>
	.navLogo {
		view-transition-name: navLogo;
	}
	#navAbout {
		view-transition-name: navAbout;
	}
	#navCareer {
		view-transition-name: navCareer;
	}
	#navSide {
		view-transition-name: navSide;
	}
	#navContact {
		view-transition-name: navContact;
	}

	.navMenu {
		view-transition-name: navMenu;
	}

	.navMenu > a {
		position: relative;
		/* height: 100%; */
	}

	/* a[aria-current='page']::before {
		--size: 8px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: -1px;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid rgb(255, 114, 94, 1); #1e293b;
		view-transition-name: navCurrent;
	} */

	nav {
		--font-scaler: 0.3;
		--dimensions-scaler: 0.3;
		--margin-scaler: 0.4;
	}

	.dock {
		font-size: calc(var(--font-scaler) * 6rem);
		div {
			height: calc(var(--dimensions-scaler) * 9rem);
			width: calc(var(--dimensions-scaler) * 9rem);
		}
	}

	.dock:hover {
		font-size: calc(var(--font-scaler) * 9rem);
		div {
			height: calc(var(--dimensions-scaler) * 13rem);
			width: calc(var(--dimensions-scaler) * 13rem);
		}
		margin-bottom: calc(var(--margin-scaler) * -5rem);
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
		margin-bottom: calc(var(--margin-scaler) * -3rem);
	}

	/* Next next - beside adjacent */
	.dock:hover + .dock + .dock,
	.dock:has(+ .dock + .dock:hover) {
		font-size: calc(var(--font-scaler) * 7rem);
		/* background-color: green; */
		div {
			height: calc(var(--dimensions-scaler) * 10rem);
			width: calc(var(--dimensions-scaler) * 10rem);
		}
		margin-bottom: calc(var(--margin-scaler) * -2rem);
	}

	/* Next next next */
	.dock:hover + .dock + .dock + .dock,
	.dock:has(+ .dock + .dock + .dock:hover) {
		font-size: calc(var(--font-scaler) * 6rem);
		/* background-color: purple; */
		div {
			height: calc(var(--dimensions-scaler) * 9rem);
			width: calc(var(--dimensions-scaler) * 9rem);
		}
		margin-bottom: calc(var(--margin-scaler) * -1rem);
	}
</style>
