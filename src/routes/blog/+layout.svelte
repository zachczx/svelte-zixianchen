<script>
	import Particles from '$lib/magic-ui/Particles.svelte';

	let ghostColor = $state('');
	const ghostAddClassMainRight = ['translate-x-4', 'text-red-900'];
	const ghostAddClassBlogLeft = ['-translate-x-4', 'text-orange-400'];
</script>

<svelte:head>
	<meta name="keywords" content="Zixian, blog" />
</svelte:head>

<div
	class="bg-background relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-orange-50 md:shadow-xl">
	<div
		id="container"
		class="z-10 grid min-h-dvh justify-center border-l-2 border-r-2 border-l-orange-400/20 border-r-orange-400/20 bg-base-100 p-6 xl:w-[1024px]">
		<div class="lg:max-w-[1024px]">
			<div class="text-center text-4xl lg:text-6xl xl:text-8xl">
				<a
					href="/blog/"
					class="view-blog-header inline-block bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text pb-2 font-extrabold text-transparent xl:pb-4"
					>// Zixian's blog</a>
			</div>
			<div class="view-blog-description mb-6 grid content-center justify-center">
				I write about little things in web dev that I learned or tried.
			</div>
			<div class="mb-10 flex items-center justify-center text-center lg:mb-20">
				<div class="view-blog-nav border-2 border-orange-400">
					<a
						href="/blog"
						class="view-blog-blog inline-block min-w-24 border-r-2 border-r-orange-400 bg-orange-100 px-4 py-2 font-bold hover:text-orange-600"
						onmouseover={() => {
							const ghostEl = document.getElementById('ghost');
							ghostEl.classList.add(...ghostAddClassBlogLeft);
						}}
						onfocus={() => {
							const ghostEl = document.getElementById('ghost');
							ghostEl.classList.add(...ghostAddClassBlogLeft);
						}}
						onmouseout={() => {
							const ghostEl = document.getElementById('ghost');
							ghostEl.classList.remove(...ghostAddClassBlogLeft);
						}}
						onblur={() => {
							const ghostEl = document.getElementById('ghost');
							ghostEl.classList.remove(...ghostAddClassBlogLeft);
						}}>Blog</a>
					{#key ghostColor}<span class="inline-block min-w-20"
							><svg
								id="ghost"
								xmlns="http://www.w3.org/2000/svg"
								width="2em"
								fill="currentColor"
								height="2em"
								viewBox="0 0 24 24"
								class="icon icon-tabler icons-tabler-filled icon-tabler-ghost inline transition duration-500"
								><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
									d="M12 3a8 8 0 0 1 7.996 7.75l.004 .25l-.001 6.954l.01 .103a2.78 2.78 0 0 1 -1.468 2.618l-.163 .08c-1.053 .475 -2.283 .248 -3.129 -.593l-.137 -.146a.65 .65 0 0 0 -1.024 0a2.65 2.65 0 0 1 -4.176 0a.65 .65 0 0 0 -.512 -.25c-.2 0 -.389 .092 -.55 .296a2.78 2.78 0 0 1 -4.859 -2.005l.008 -.091l.001 -6.966l.004 -.25a8 8 0 0 1 7.996 -7.75zm2.82 10.429a1 1 0 0 0 -1.391 -.25a2.5 2.5 0 0 1 -2.858 0a1 1 0 0 0 -1.142 1.642a4.5 4.5 0 0 0 5.142 0a1 1 0 0 0 .25 -1.392zm-4.81 -4.429l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm4 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
						</span>{/key}
					<a
						href="/"
						class="view-blog-home inline-block min-w-24 border-l-2 border-l-orange-400 bg-orange-100 px-4 py-2 font-bold hover:text-red-900"
						onmouseover={() => {
							const ghostEl = document.getElementById('ghost');
							ghostEl.classList.add(...ghostAddClassMainRight);
						}}
						onfocus={() => {
							const ghostEl = document.getElementById('ghost');
							ghostEl.classList.add(...ghostAddClassMainRight);
						}}
						onmouseout={() => {
							// ghostColor = '';
							const ghostEl = document.getElementById('ghost');
							ghostEl.classList.remove(...ghostAddClassMainRight);
						}}
						onblur={() => {
							const ghostEl = document.getElementById('ghost');
							ghostEl.classList.remove(...ghostAddClassMainRight);
						}}>Main</a>
				</div>
			</div>
			<slot />
		</div>
		<div class="mt-auto pt-10 text-center text-xs md:text-sm">Copyright © 2024 Zixian Chen. All rights reserved.</div>
	</div>
	<Particles className="absolute inset-0" refresh={true} size="3" color="#fb923c" />
</div>

<style>
	* {
		font-family: 'Plus Jakarta Sans Variable', sans-serif;
	}
	.view-blog-header {
		view-transition-name: view-blog-header;
	}
	.view-blog-description {
		view-transition-name: view-blog-description;
	}
	.view-blog-nav {
		view-transition-name: view-blog-nav;
	}
	.view-blog-home {
		view-transition-name: view-blog-home;
	}
	.view-blog-blog {
		view-transition-name: view-blog-blog;
	}

	.animate-left {
		animation: shift-left 0.2s linear 0.1s 1 forwards;
		/* animation-name;
			animation-duration;
			animation-timing-function;
			animation-delay;
			animation-iteration-count;
			animation-direction; */
	}

	@keyframes shift-left {
		100% {
			transform: translateX(-1rem);
		}
	}

	.animate-right {
		animation: shift-right 0.2s linear 0.1s 1 forwards;
	}

	@keyframes shift-right {
		100% {
			transform: translateX(1rem);
		}
	}
</style>
