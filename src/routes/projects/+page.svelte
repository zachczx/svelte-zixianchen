<script>
	import Junkyard from '$lib/assets/sohrab-zia-WXdMkkkZWg4-unsplash.jpg?enhanced&w=1920px;1080px;768px;640px;400px';
	import ProjectDashboardArchived from '$lib/ProjectDashboardArchived.svelte';
	import ProjectsDashboard from '$lib/ProjectsDashboard.svelte';
</script>

<main class="grid content-start justify-items-center gap-y-12 pt-2 text-center lg:grid-cols-3">
	<ProjectsDashboard />

	<div class="grid w-full gap-y-12 lg:col-span-3 lg:grid-cols-3"><ProjectDashboardArchived /></div>
</main>

<style>
</style>
