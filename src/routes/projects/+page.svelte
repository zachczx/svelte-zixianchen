<script>
	import ProjectDashboardArchived from '$lib/ProjectDashboardArchived.svelte';
	import ProjectsDashboard from '$lib/ProjectsDashboard.svelte';
</script>

<svelte:head>
	<title>Zixian Chen - My Projects</title>
	<meta name="description" content="Zixian's projects." />
</svelte:head>

<main class="grid h-full content-start justify-items-center gap-y-12 pt-2 text-center lg:grid-cols-3">
	<ProjectsDashboard />

	<div class="grid w-full gap-y-12 lg:col-span-3 lg:grid-cols-3"><ProjectDashboardArchived /></div>
</main>

<style>
</style>
