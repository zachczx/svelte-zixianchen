<script lang="ts">
	/**
	 * @type {string}
	 */
	export let navCurrent: string;

	import { page } from '$app/stores';
</script>

<nav
	class="z-30 grid h-12 w-full grid-cols-2 justify-center border-b border-b-gray-200 bg-gray-100/50 px-4 backdrop-blur-md lg:sticky lg:top-0 lg:grid-cols-3">
	<div class="flex items-center">
		<span class="navLogo text-2xl font-extrabold text-base-content hover:drop-shadow"><a href="/">Zixian Chen</a></span>
	</div>
	<div class="navMenu hidden items-center justify-center space-x-8 lg:flex">
		<a
			aria-current={navCurrent === 'about' ? 'page' : undefined}
			id="navAbout"
			href="/#about"
			class="btn btn-link text-xl font-bold text-gray-600 no-underline hover:no-underline">About</a>
		<a
			aria-current={navCurrent === 'career' ? 'page' : undefined}
			id="navCareer"
			href="/#career"
			class="btn btn-link text-xl font-bold text-gray-600 no-underline hover:no-underline">Career</a>
		<a
			aria-current={navCurrent === 'side' || navCurrent === 'side-full' ? 'page' : undefined}
			id="navSide"
			href="/#side"
			class="btn btn-link text-xl font-bold text-gray-600 no-underline hover:no-underline">Projects</a>
		<a
			aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}
			id="navContact"
			href="/contact"
			class="btn btn-link text-xl font-bold text-gray-600 no-underline hover:no-underline">Contact</a>
	</div>
	<div class="flex items-center justify-end">
		<!-- jam icons -->
		<a href="https://www.linkedin.com/in/zixianchen/"
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
			></a>
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
		border-top: var(--size) solid #1e293b;
		view-transition-name: navCurrent;
	}
</style>
