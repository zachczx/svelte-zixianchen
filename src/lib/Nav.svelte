<script lang="ts">
	/**
	 * @type {string}
	 */
	export let navCurrent: string;

	import { page } from '$app/stores';
	import { addNeumorphismInset, removeNeumorphismInset } from '$lib/Neumorphism';
</script>

<nav class="z-30 grid h-fit w-full grid-cols-2 justify-center px-4 lg:fixed lg:top-0 lg:grid-cols-3">
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
		class="navMenu hidden items-center justify-center rounded-b-3xl border-b border-b-gray-200 bg-gray-900/70 shadow backdrop-blur-md xl:flex xl:space-x-1 2xl:space-x-8">
		<a
			aria-current={navCurrent === 'about' ? 'page' : undefined}
			id="navAbout"
			href="/#about"
			class="btn btn-link text-xl font-bold text-gray-100 no-underline hover:no-underline {navCurrent === 'about'
				? 'text-[#FF725E]'
				: undefined}">About</a>
		<a
			aria-current={navCurrent === 'career' ? 'page' : undefined}
			id="navCareer"
			href="/#career"
			class="btn btn-link text-xl font-bold text-base-100 no-underline hover:no-underline {navCurrent === 'career'
				? 'text-[#FF725E]'
				: undefined}">Career</a>
		<a
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
				: undefined}">Contact</a>
	</div>
	<div class="hidden items-center justify-end space-x-6 xl:flex">
		<!-- jam icons -->
		<!-- <a href="https://www.linkedin.com/in/zixianchen/"
			><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-gray-600 lg:h-10 lg:w-10" viewBox="-2 -2 24 24"
				><g
					><path
						d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z" /><path
						d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" /></g
				></svg
			></a>
		<a href="https://github.com/zachczx?tab=repositories"
			><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-gray-600 lg:h-10 lg:w-10" viewBox="-2 -2 24 24"
				><g
					><path
						d="M8.18 15.008c.12 0 .211-.004.271-.012a.317.317 0 0 0 .18-.107c.06-.063.09-.154.09-.274l-.004-.557c-.003-.355-.004-.637-.004-.844l-.188.033a2.41 2.41 0 0 1-.455.028a3.498 3.498 0 0 1-.57-.057a1.276 1.276 0 0 1-.548-.246a1.04 1.04 0 0 1-.36-.503l-.082-.189a2.046 2.046 0 0 0-.258-.417a.989.989 0 0 0-.357-.312l-.057-.04a.602.602 0 0 1-.106-.1a.455.455 0 0 1-.074-.114c-.016-.038-.003-.07.04-.094a.533.533 0 0 1 .238-.037l.164.025c.11.021.245.087.406.196c.16.11.293.251.397.426c.126.224.277.395.455.512a.964.964 0 0 0 .536.176c.18 0 .336-.013.467-.04a1.63 1.63 0 0 0 .369-.124c.049-.365.182-.647.4-.843a5.61 5.61 0 0 1-.839-.148a3.346 3.346 0 0 1-.77-.32a2.204 2.204 0 0 1-.66-.548c-.174-.219-.317-.505-.43-.86a4.09 4.09 0 0 1-.167-1.229c0-.66.216-1.223.647-1.687c-.202-.497-.183-1.054.057-1.671c.159-.05.394-.013.705.11c.311.123.54.228.684.316c.145.087.26.16.348.22a5.814 5.814 0 0 1 1.573-.212c.54 0 1.065.07 1.573.213l.31-.197c.214-.13.465-.251.754-.36c.29-.11.511-.14.664-.09c.246.617.268 1.174.065 1.67c.432.465.648 1.027.648 1.688c0 .464-.056.875-.168 1.233c-.112.358-.257.644-.434.86a2.29 2.29 0 0 1-.664.545a3.342 3.342 0 0 1-.77.32a5.605 5.605 0 0 1-.84.147c.284.245.426.633.426 1.163v1.957c0 .093.014.168.041.226a.226.226 0 0 0 .131.119c.06.021.114.035.16.04c.047.006.113.009.2.009z" /><path
						d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" /></g
				></svg
			></a>
		<a href="/blog">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" class="h-6 w-6 fill-gray-600 lg:h-10 lg:w-10"
				><g
					><path
						d="M5.024 12.655h3.92v1.887h-3.92zm5.881 0h3.918v1.887h-3.918zM5.021 8.881h9.802v1.887H5.021zm.003-3.774h5.881v1.887H5.024zm7.841 0h1.96v1.887h-1.96z" /><path
						d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" /></g
				></svg
			></a> -->

		<a
			href="https://www.linkedin.com/in/zixianchen/"
			onkeydown={addNeumorphismInset}
			onmousedown={addNeumorphismInset}
			onmouseup={removeNeumorphismInset}
			onkeyup={removeNeumorphismInset}
			class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900/70"
			draggable="false">
			<!-- flowbite:linkedin-solid -->
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"
				><g fill="#fafafa"
					><path
						fill-rule="evenodd"
						d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606"
						clip-rule="evenodd" /><path d="M7.2 8.809H4V19.5h3.2z" /></g
				></svg>
		</a>
		<a
			href="https://github.com/zachczx?tab=repositories"
			class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900/70"
			onkeydown={addNeumorphismInset}
			onmousedown={addNeumorphismInset}
			onmouseup={removeNeumorphismInset}
			onkeyup={removeNeumorphismInset}
			draggable="false">
			<!-- tabler:brand-github-filled -->
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"
				><path
					fill="#fafafa"
					d="M5.315 2.1c.791-.113 1.9.145 3.333.966l.272.161l.16.1l.397-.083a13.3 13.3 0 0 1 4.59-.08l.456.08l.396.083l.161-.1c1.385-.84 2.487-1.17 3.322-1.148l.164.008l.147.017l.076.014l.05.011l.144.047a1 1 0 0 1 .53.514a5.2 5.2 0 0 1 .397 2.91l-.047.267l-.046.196l.123.163c.574.795.93 1.728 1.03 2.707l.023.295L21 9.5c0 3.855-1.659 5.883-4.644 6.68l-.245.061l-.132.029l.014.161l.008.157l.004.365l-.002.213L16 21a1 1 0 0 1-.883.993L15 22H9a1 1 0 0 1-.993-.883L8 21v-.734c-1.818.26-3.03-.424-4.11-1.878l-.535-.766c-.28-.396-.455-.579-.589-.644l-.048-.019a1 1 0 0 1 .564-1.918c.642.188 1.074.568 1.57 1.239l.538.769c.76 1.079 1.36 1.459 2.609 1.191L8 17.562l-.018-.168a5.03 5.03 0 0 1-.021-.824l.017-.185l.019-.12l-.108-.024c-2.976-.71-4.703-2.573-4.875-6.139l-.01-.31L3 9.5a5.6 5.6 0 0 1 .908-3.051l.152-.222l.122-.163l-.045-.196a5.2 5.2 0 0 1 .145-2.642l.1-.282l.106-.253a1 1 0 0 1 .529-.514l.144-.047z" /></svg>
		</a>
		<a
			href="/blog"
			class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900/70"
			onkeydown={addNeumorphismInset}
			onmousedown={addNeumorphismInset}
			onmouseup={removeNeumorphismInset}
			onkeyup={removeNeumorphismInset}
			draggable="false">
			<!-- material-symbols:article -->
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"
				><path
					fill="#fafafa"
					d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z" /></svg>
		</a>
	</div>
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
		height: 100%;
	}

	a[aria-current='page']::before {
		--size: 8px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: -1px;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid rgb(255, 114, 94, 1); /*#1e293b;*/
		view-transition-name: navCurrent;
	}
</style>
