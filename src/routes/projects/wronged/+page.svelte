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
	{#snippet header()}
		<div class="grid gap-4 xl:grid-cols-2">
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<img
					src={wrongedScreenshotMain}
					alt="Rinku app"
					class="transition-all delay-150 duration-300 ease-out hover:scale-125" />
			</div>
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<img
					src={wrongedScreenshotChat}
					alt="Rinku app"
					class="transition-all delay-150 duration-300 ease-out hover:scale-125" />
			</div>
		</div>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['go', 'templ', 'tailwind', 'stytch']} />
	{/snippet}

	{#snippet problem()}
		<p>
			Some people I worked with seemed like they would benefit from having AI help them with refining their problem
			statements or go through UX strategies.
		</p>
	{/snippet}

	{#snippet want()}
		<AlignCenterText>A chatbot that helps users with product management, UX, staff work.</AlignCenterText>
	{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Chatbot UI</li>
			<li>A simple client for LLM prompting & streaming SSE responses</li>
		</ul>
		<enhanced:img src={wrongedScreenshotMain2} alt="Wronged chat" class="border-neutral/20 mt-4 rounded-xl border" />
		<enhanced:img src={wrongedScreenshotChat2} alt="Wronged chat" class="border-neutral/20 mt-4 rounded-xl border" />
		<enhanced:img src={wrongedScreenshotChat3} alt="Wronged chat" class="border-neutral/20 mt-4 rounded-xl border" />
		<enhanced:img src={wrongedScreenshotManage} alt="Wronged chat" class="border-neutral/20 mt-4 rounded-xl border" />
	{/snippet}
	{#snippet undone()}
		<AlignCenterText>Figuring out a better product design than having multiple, specialized chatbots.</AlignCenterText>
	{/snippet}
</ProjectEntry>
