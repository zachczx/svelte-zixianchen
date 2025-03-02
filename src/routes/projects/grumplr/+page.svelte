<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
</script>

<ProjectEntry id="grumplr">
	{#snippet title()}
		<h3 class="font-inter text-5xl font-bold tracking-tighter text-[#1b510f] lg:text-7xl">Grumplr</h3>
	{/snippet}
	{#snippet stack()}
		<StackComponents names={['go', 'htmx', 'templ', 'postgresql', 'keycloak', 'tailwind']} />
	{/snippet}

	{#snippet problem()}
		I'm reinventing the wheel to learn building a bulletin board with Go, writing SQL, vanilla JS. I also wanted to try
		using authentication SaaS and implementing magic link logins.
	{/snippet}

	{#snippet want()}
		Bulletin board stuff - posts (commenting, replies, liking, upvoting, attachments, tagging), user actions
		(authentication, authorisation, settings and customizations, anonymous mode), misc (filtering, full text search,
		simple word matching, image optimization, thumbnail generation), live chat.
	{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>I built what I wrote planned, using Go's stdlib as much as possible.</li>
			<li>
				Posting: Threaded discussions, 2-level deep threads (posts > comments > replies), Options to like and upvote
				posts, File attachments to share media, Tags to organize content
			</li>
			<li>Live Chat: Near real-time updates using Server Sent Events (in lieu of websockets)</li>
			<li>
				Users: User accounts with authentication and authorization, Profile and settings for customization,
				Incognition/guest mode
			</li>
			<li>Search: Full text search, Content filtering by word matching</li>
			<li>Misc: Image uploads, thumbnails, compression, Brotli and Gzip compression</li>
		</ul>
	{/snippet}
	{#snippet undone()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Polls</li>
			<li>Moderation tools</li>
			<li>Admin UI and tools</li>
		</ul>
	{/snippet}
</ProjectEntry>
