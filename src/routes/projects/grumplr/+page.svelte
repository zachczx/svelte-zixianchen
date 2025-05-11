<script>
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import grumplrScreenshotMain from '$lib/screenshots/grumplr-main.webp?enhanced';
	import grumplrScreenshotPost from '$lib/screenshots/grumplr-post.webp?enhanced';
	import grumplrScreenshotMainFiltered from '$lib/screenshots/grumplr-main-filtered.webp?enhanced';
	import grumplrScreenshotLivePost from '$lib/screenshots/grumplr-live-post.webp?enhanced';
	import grumplrScreenshotTagLag from '$lib/screenshots/grumplr-live-post.webp?enhanced';
	import grumplrScreenshotProfile from '$lib/screenshots/grumplr-profile.webp?enhanced';
</script>

<ProjectEntry id="grumplr">
	{#snippet title()}
		<h3 class="font-inter text-5xl font-bold tracking-tighter text-[#1b510f] lg:text-7xl">Grumplr</h3>
	{/snippet}

	{#snippet header()}
		<div class="grid gap-4 xl:grid-cols-2">
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<enhanced:img
					src={grumplrScreenshotMain}
					alt="Grumplr app"
					class="border-neutral/20 rounded-xl border transition-all delay-75 duration-300 ease-out hover:scale-125" />
			</div>
			<div class="border-neutral/20 overflow-hidden rounded-xl border">
				<enhanced:img
					src={grumplrScreenshotPost}
					alt="Grumplr app"
					class="border-neutral/20 rounded-xl border transition-all delay-75 duration-300 ease-out hover:scale-125" />
			</div>
		</div>
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['go', 'htmx', 'templ', 'postgresql', 'keycloak', 'tailwind']} />
	{/snippet}

	{#snippet problem()}
		I'm reinventing the wheel to learn building a bulletin board with Go, writing SQL, vanilla JS. I also wanted to try
		using authentication SaaS and implementing magic link logins.
	{/snippet}

	{#snippet screenshots()}
		<div class="grid grid-cols-1 gap-4">
			<enhanced:img src={grumplrScreenshotMainFiltered} alt="Grumplr app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={grumplrScreenshotLivePost} alt="Grumplr app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={grumplrScreenshotTagLag} alt="Grumplr app" class="border-neutral/20 rounded-xl border" />
			<enhanced:img src={grumplrScreenshotProfile} alt="Grumplr app" class="border-neutral/20 rounded-xl border" />
		</div>
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
