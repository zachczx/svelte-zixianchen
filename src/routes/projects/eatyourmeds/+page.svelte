<script>
	import AlignCenterText from '$lib/AlignCenterText.svelte';
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import eatYourMedsLogo from '$lib/assets/eatyourmedslogo.webp?enhanced&w=250';
</script>

<ProjectEntry id="eatyourmeds">
	{#snippet title()}
		<div class="avatar flex justify-center">
			<div class="w-48 rounded-full">
				<a href="https://eatyourmeds.zixian.dev/" aria-label="Eat Your Meds webapp"
					><enhanced:img src={eatYourMedsLogo} alt="Eat Your Meds!"></enhanced:img></a>
			</div>
		</div>
	{/snippet}
	{#snippet stack()}
		<StackComponents names={['django', 'htmx', 'nginx', 'gunicorn', 'bootstrap', 'postgresql']} />
	{/snippet}

	{#snippet problem()}<AlignCenterText
			>I wanted an easier and faster way to plan medicine dose timings and get accurate info.</AlignCenterText
		>{/snippet}

	{#snippet want()}Make it less tedious for both of us parents to record/coord medicine stuff and sync with one another.{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Basic CRUD webapp with user authentication.</li>
			<li>Sprinkled HTMX and datepicker.js for user interactions.</li>
			<li>Backend via Django</li>
		</ul>{/snippet}
	{#snippet undone()}<AlignCenterText
			>Honestly, LLMs do it better (unless they refuse to do it, which Gemini did in the past).</AlignCenterText>
	{/snippet}
</ProjectEntry>
