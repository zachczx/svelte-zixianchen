<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import Wronged from '$lib/logos/wronged-logo.svg?dataurl';

	import wrongedScreenshotMain from '$lib/screenshots/wronged-main.webp';
	import wrongedScreenshotMain2 from '$lib/screenshots/wronged-main2.webp?enhanced';
	import wrongedScreenshotChat from '$lib/screenshots/wronged-chat.webp';
	import wrongedScreenshotChat2 from '$lib/screenshots/wronged-chat2.webp?enhanced';
	import wrongedScreenshotChat3 from '$lib/screenshots/wronged-chat3.webp?enhanced';
	import wrongedScreenshotManage from '$lib/screenshots/wronged-manage.webp?enhanced';
	import AlignCenterText from '$lib/AlignCenterText.svelte';
</script>

<ProjectEntry id="wronged">
	{#snippet title()}
		<img src={Wronged} alt="Wronged" class="h-20" />
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['go', 'templ', 'tailwind', 'stytch']} />
	{/snippet}

	{#snippet problem()}
		Colleagues struggled with refining problem statements and working through UX strategies. Needed a lower-friction way
		to help them think through product decisions.
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={wrongedScreenshotMain} alt="Wronged" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={wrongedScreenshotChat} alt="Wronged" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={wrongedScreenshotMain2} alt="Wronged" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={wrongedScreenshotChat2} alt="Wronged" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={wrongedScreenshotChat3} alt="Wronged" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={wrongedScreenshotManage} alt="Wronged" class="border-neutral/20 mt-4 rounded-xl border" />
		</div>
	{/snippet}

	{#snippet built()}
		<p class="mb-4">
			Domain-specific chatbots (product management, UX strategy, problem statements, "ask the boss" persona) using
			OpenRouter APIs. Wrote detailed system prompts to shape each chatbot's reasoning approach and output style.
		</p>
		<p>
			Built own Go client for API integration instead of using wrapper libraries. Used HTMX for dynamic chat
			updates—server-side rendering with targeted DOM swaps instead of client-side JavaScript frameworks.
		</p>
	{/snippet}
</ProjectEntry>
