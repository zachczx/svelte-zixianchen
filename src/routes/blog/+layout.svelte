<script>
	let ghostColor = $state('');
</script>

<svelte:head>
	<meta name="keywords" content="Zixian, blog" />
</svelte:head>

<div id="container" class="grid min-h-dvh justify-center p-6">
	<div class="lg:max-w-[1024px]">
		<div class="text-center text-4xl lg:text-6xl xl:text-8xl">
			<a
				href="/blog/"
				class="view-blog-header inline-block bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text pb-2 font-extrabold text-transparent xl:pb-4"
				>// Zixian's blog</a>
		</div>
		<div class="space-x-6 pb-10 text-center lg:pb-20">
			<a
				href="/blog"
				class="view-blog-blog font-bold"
				onmouseover={() => {
					ghostColor = 'orange';
				}}
				onfocus={() => {
					ghostColor = 'orange';
				}}
				onmouseout={() => {
					ghostColor = '';
				}}
				onblur={() => {
					ghostColor = '';
				}}>Blog Home</a>
			{#key ghostColor}<svg
					xmlns="http://www.w3.org/2000/svg"
					width="2em"
					fill={ghostColor ? ghostColor : 'currentColor'}
					height="2em"
					viewBox="0 0 24 24"
					class="icon icon-tabler icons-tabler-filled icon-tabler-ghost view-blog-nav inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M12 3a8 8 0 0 1 7.996 7.75l.004 .25l-.001 6.954l.01 .103a2.78 2.78 0 0 1 -1.468 2.618l-.163 .08c-1.053 .475 -2.283 .248 -3.129 -.593l-.137 -.146a.65 .65 0 0 0 -1.024 0a2.65 2.65 0 0 1 -4.176 0a.65 .65 0 0 0 -.512 -.25c-.2 0 -.389 .092 -.55 .296a2.78 2.78 0 0 1 -4.859 -2.005l.008 -.091l.001 -6.966l.004 -.25a8 8 0 0 1 7.996 -7.75zm2.82 10.429a1 1 0 0 0 -1.391 -.25a2.5 2.5 0 0 1 -2.858 0a1 1 0 0 0 -1.142 1.642a4.5 4.5 0 0 0 5.142 0a1 1 0 0 0 .25 -1.392zm-4.81 -4.429l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm4 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
			{/key}
			<a
				href="/"
				class="view-blog-home font-bold"
				onmouseover={() => {
					ghostColor = 'red';
				}}
				onfocus={() => {
					ghostColor = 'red';
				}}
				onmouseout={() => {
					ghostColor = '';
				}}
				onblur={() => {
					ghostColor = '';
				}}>Website</a>
		</div>
		<slot />
	</div>
	<div class="mt-auto pt-10 text-center text-xs md:text-sm">Copyright © 2024 Zixian Chen. All rights reserved.</div>
</div>

<style>
	* {
		font-family: 'Plus Jakarta Sans Variable', sans-serif;
	}
	.view-blog-header {
		view-transition-name: view-blog-header;
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
</style>
