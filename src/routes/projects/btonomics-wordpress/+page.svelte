<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import oldBtonomicsLogo from '$lib/assets/btonomics_logo-3-300x100.webp?enhanced&w=300';
</script>

<ProjectEntry id="btonomics-old">
	{#snippet title()}
		<a href="https://old.btonomics.com" aria-label="BTOnomics Old"
			><enhanced:img src={oldBtonomicsLogo} alt="Btonomics Old Logo" class=""></enhanced:img></a>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['wordpress', 'nginx', 'mysql', 'bunny']} />
	{/snippet}

	{#snippet problem()}
		There was barely any info online to guide me through the renovation journey (choosing an ID/contractor, deciding on
		a design, buying from Taobao).
	{/snippet}

	{#snippet want()}
		Started BTOnomics as <a href="https://web.archive.org/web/20180513112335/http://pewpewpew.cc/">pewpewpew.cc</a> in 2018,
		which was a blog that documented my journey and my advice to other people in similar shoes.
	{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>WordPress was the obvious choice.</li>
			<li>Wrote organic content that other people liked as well.</li>
			<li>Tinkered with themes & plug-ins, tweaking, optimizing (stuff like Litespeed Cache, WP Rocket, Yoast).</li>
			<li>Finetuned content for SEO and Core Web Vitals, esp TTFB/LCP.</li>
		</ul>
	{/snippet}
	{#snippet undone()}
		Wordpress got too bulky and tiresome to manage and host. Not least the sprawling repository of images (not least the
		multiple resized copies of every image). I'm still keeping this Wordpress instance out of nostalgia.
	{/snippet}
</ProjectEntry>
