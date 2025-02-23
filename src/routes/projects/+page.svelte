<script>
	import apptitudeLogo from '$lib/assets/green-logo.webp?enhanced&w=450';
	import rankamateLogo from '$lib/assets/rankamate-logo.webp?enhanced&w=200';
	import eatYourMedsLogo from '$lib/assets/eatyourmedslogo.webp?enhanced&w=250';
	import oldBtonomicsLogo from '$lib/assets/btonomics_logo-3-300x100.webp?enhanced&w=300';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount, tick } from 'svelte';
	import StackUsed from '$lib/StackUsed.svelte';
	import Sveltekit from '$lib/logos/Sveltekit.svg?dataurl';
	import Greensock from '$lib/logos/Greensock.svg?dataurl';
	import Tailwind from '$lib/logos/Tailwind.svg?dataurl';
	import TailwindSmall from '$lib/logos/tailwindcss-small.svg?dataurl';
	import Cloudflare from '$lib/logos/Cloudflare.svg?dataurl';
	import Drizzle from '$lib/logos/Drizzle.svg?dataurl';
	import DrizzlePng from '$lib/logos/Drizzle.png?enhanced&w=40';
	import Svelte from '$lib/logos/Svelte.svg';
	import Sortable from '$lib/logos/Sortablejs.png?enhanced&w=40';
	import Nginx from '$lib/logos/Nginx.svg?dataurl';
	import Coolify from '$lib/logos/Coolify.svg?dataurl';
	import Nodejs from '$lib/logos/Nodejs.svg?dataurl';
	import Postgresql from '$lib/logos/Postgresql.svg?dataurl';
	import Turso from '$lib/logos/Turso.svg?dataurl';
	import Htmx from '$lib/logos/Htmx.svg?dataurl';
	import Django from '$lib/logos/Django.svg?dataurl';
	import Bootstrap from '$lib/logos/Bootstrap.svg?dataurl';
	import Gunicorn from '$lib/logos/Gunicorn.svg?dataurl';
	import Wordpress from '$lib/logos/Wordpress.svg?dataurl';
	import ApacheHttp from '$lib/logos/Apache-http.svg?dataurl';
	import Mysql from '$lib/logos/Mysql.svg?dataurl';
	import Bunny from '$lib/logos/Bunny.svg?dataurl';
	import Astro from '$lib/logos/Astro.svg?dataurl';
	import CloudflarePages from '$lib/logos/Cloudflare-pages.svg?dataurl';
	import Pagefind from '$lib/logos/Pagefind.svg?dataurl';
	import Pocketbase from '$lib/logos/pocketbase.svg?dataurl';
	import Meetrics from '$lib/logos/meetrics.svg?dataurl';

	import ExitLinks from '$lib/ExitLinks.svelte';
	import Golang from '$lib/logos/Golang.svg?dataurl';
	import Sqlite from '$lib/logos/sqlite.svg?dataurl';
	import Templ from '$lib/logos/templ.svg?dataurl';
	import Abbreviation from '$lib/waves/Abbreviation.svelte';
	import Appraize from '$lib/waves/Appraize.svelte';
	import Apptitude from '$lib/waves/Apptitude.svelte';
	import Btonomics from '$lib/waves/Btonomics.svelte';
	import Btonomicsold from '$lib/waves/Btonomicsold.svelte';
	import Eatyourmeds from '$lib/waves/Eatyourmeds.svelte';
	import Rankamate from '$lib/waves/Rankamate.svelte';
	import Cancelninja from '$lib/waves/Cancelninja.svelte';
	import Stytch from '$lib/logos/Stytch.svelte';

	import Projects from '$lib/assets/allison-saeng-g45iYq7eQR4-unsplash.jpg?enhanced&w=1920px;1080px;768px;640px;400px';
	import Junkyard from '$lib/assets/sohrab-zia-WXdMkkkZWg4-unsplash.jpg?enhanced&w=1920px;1080px;768px;640px;400px';
	import ProjectEntry from '$lib/ProjectEntry.svelte';
</script>

<ProjectEntry id="abbreviation">
	{#snippet title()}
		<a href="https://abbreviation.zixian.dev" class="block"
			><h3 class="text-center text-5xl font-bold tracking-tighter text-[#0069ff] lg:text-7xl">
				Abbreviati<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="-mx-[0.2em] inline"
					viewBox="0 0 24 24"
					><g fill="none"
						><path
							fill="#0069ff"
							fill-opacity=".25"
							fill-rule="evenodd"
							d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14M10.087 7.38A5 5 0 0 1 12 7a.5.5 0 0 0 0-1a6 6 0 0 0-6 6a.5.5 0 0 0 1 0a5 5 0 0 1 3.087-4.62"
							clip-rule="evenodd" /><path stroke="#0069ff" stroke-linecap="round" d="M20.5 20.5L17 17" /><circle
							cx="11"
							cy="11"
							r="8.5"
							stroke="#0069ff" /></g
					></svg
				>n
			</h3></a>
	{/snippet}
	{#snippet stack()}
		<div class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md">
			<img src={Golang} class="h-10 scale-125" alt="Go" title="Go" />
		</div>
		<div class="flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
			<img src={Htmx} class="h-6" alt="Htmx" title="Htmx" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" title="Tailwind" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Sqlite} class="h-10 grow" alt="Sqlite" />
		</div>
		<div class="flex items-center justify-center rounded-3xl bg-white/70 p-2 shadow-md lg:p-5 lg:backdrop-blur-md">
			<img src={Templ} class="h-4 lg:h-6" alt="Templ" title="Templ" />
		</div>
	{/snippet}

	{#snippet problem()}
		Newer employees in large organizations waste time looking up acronyms and abbreviations. Or they feel lost while
		they familiarize themselves to their new workplace. They can ask a colleague, but that can feel like you're
		bothering others.
	{/snippet}

	{#snippet want()}
		I wanted to build a lightweight search app for abbreviations. There were already a few JS side projects by
		individual civil servants, but I wanted to make a faster one with Go.
	{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>A search app and database of abbreviations & acronyms in Go.</li>
			<li>Focused on being minimal, fast, and usable.</li>
			<li>Uses full-text search and fuzzy matching (Jaro-Winkler and Metaphone [Phonetic]).</li>
			<li>Experimented with Levenshtein, Jaccard, Aho Corasick, Jaccard, Beider-Morse, Soundex.</li>
			<li>Implemented backend admin features for identifying duplicate entries.</li>
			<li>
				Interesting to learn Go, Docker, Makefile, Templ and tooling outside of JS meta frameworks (Air, Tailwind,
				Esbuild, Prettier).
			</li>
		</ul>
	{/snippet}
	{#snippet undone()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Users say a tagging feature will be useful, but is too much work for now.</li>
			<li>
				Semantic-based search would be fun to implement (e.g., searching CEO of ministry should ideally return
				Minister/PS)
			</li>
			<li>If this scales way bigger (or maybe just for fun) - trying Minhash and Bloom filters</li>
			<li>
				Adding Valkey makes it slower than just using SQLite, but I'd love to continue trying ways to cache expensive
				results/queries.
			</li>
		</ul>
	{/snippet}
</ProjectEntry>

<ProjectEntry id="appraize">
	{#snippet title()}
		<a href="https://appraize.zixian.dev/"
			><h3 class="text-center font-sans text-5xl font-black tracking-tighter text-[#A94A4A] lg:text-7xl">
				Appraize
			</h3></a>
	{/snippet}
	{#snippet stack()}
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Sveltekit} class="h-8" alt="Sveltekit" title="Sveltekit" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<enhanced:img src={Sortable} class="" alt="SortableJS" title="SortableJS"></enhanced:img>
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<enhanced:img src={DrizzlePng} class="rounded-xl" alt="Drizzle" title="Drizzle"></enhanced:img>
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={TailwindSmall} class="h-8" alt="Tailwind" title="Tailwind" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Coolify} class="h-8" alt="Coolify" title="Coolify" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Postgresql} class="h-8" alt="PostgreSQL" title="PostgreSQL" />
		</div>
	{/snippet}

	{#snippet problem()}How might we speed up ranking sessions, which need manual selection to form a numbered list "1, 2,
		3..." on Excel. Every change to the list required manual reordering.{/snippet}

	{#snippet want()}Speed up ranking sessions via drag & drop.{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Drag & drop of officers and additional info</li>
			<li>Sessions, with dashboard, filters, & charts</li>
			<li>CRUD - Create, Read, Update, Delete - sessions & entries</li>
			<li>Permission setting to manage other users' access</li>
			<li>QOL stuff - auto sort, auto save progress, CSV upload for bulk adding</li>
			<li>Typical form actions, validation</li>
		</ul>
	{/snippet}
	{#snippet undone()}Responsive design. It can't go below ~1200px width without looking awful.{/snippet}
</ProjectEntry>

<ProjectEntry id="apptitude">
	{#snippet title()}<a href="https://titude.app/" aria-label="Apptitude webapp"
			><enhanced:img src={apptitudeLogo} alt="Apptitude Logo" class=""></enhanced:img></a
		>{/snippet}
	{#snippet stack()}<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Sveltekit} class="h-8" alt="Sveltekit" title="Sveltekit" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" title="Tailwind" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Greensock} class="h-8" alt="Gsap" title="Gsap" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Pagefind} class="h-8" alt="Pagefind" title="Pagefind" />
		</div>{/snippet}

	{#snippet problem()}How might I help my non-technical teammates access to vast repositories of free-to-access
		knowledge to gain tech-related competencies?{/snippet}

	{#snippet want()}Display lists of tech resources from Youtube, blogs, tutorials, courses, sorted by tech competency.{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Static Website</li>
			<li>Used JS objects to store/read info</li>
			<li>I felt CMS, DB, markdown files were unnecessary overhead</li>
		</ul>
	{/snippet}
	{#snippet undone()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Adding and making learning plans the front and center to learning</li>
			<li>Tailoring suggested resources based on said learning plan.</li>
		</ul>
	{/snippet}
</ProjectEntry>

<ProjectEntry id="btonomics">
	{#snippet title()}
		<a href="https://btonomics.com"
			><h3 class="pb-4 pt-6 text-center font-serif text-5xl font-bold text-[#38bdf8] lg:text-7xl">BTOnomics</h3></a
		>{/snippet}
	{#snippet stack()}<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Astro} class="h-10 scale-125" alt="Astro" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" title="Tailwind" />
		</div>
		<div class="flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
			<img src={Pagefind} class="h-6" alt="Pagefind" title="Pagefind" />
		</div>{/snippet}

	{#snippet problem()}I lost interest in Wordpress and shared hosting. PHP, plugins/themes, huge MySQL database felt too
		legacy. Wordpress still felt bloated on a VPS, compared to what I felt was achievable with e.g. Astro, Hugo, Gatsby,
		Eleventy.
	{/snippet}

	{#snippet want()}
		I wanted to rebuild BTOnomics with AstroJS. I saw all the praises and wanted to try it out. I'm happy with Astro.
		It's indeed good for content-first sites. It's fast. I also like native markdown support, view transitions, shipping
		HTML/CSS first.
	{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Migrated to AstroJS as a static site.</li>
			<li>Used ChatGPT to convert WordPress html/shortcode to markdown.</li>
			<li>Recently did some rewriting to convert to Astro 5's Content Layer API.</li>
			<li>In the process I added QOL stuff like tag filtering</li>
		</ul>
	{/snippet}

	{#snippet undone()}Didn't recreate Wordpress' social features, especially comments. But I don't want/need it, neither
		does the blog.{/snippet}
</ProjectEntry>

<ProjectEntry id="cancelninja">
	{#snippet title()}
		<h3 class="text-5xl font-extrabold tracking-tighter text-base-content lg:text-7xl">
			Cancel Ninj<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				class="-ms-1 inline rotate-45 group-hover:text-[#3b82f6]"
				viewBox="0 0 512 512"
				><path
					fill="currentColor"
					d="m395.13 313l89.869-100.857H388.08c-45.748 0-82.824-37.063-82.824-82.824l-.297-33.208l-100.857-77.147v96.917c0 45.751-37.06 82.824-82.822 82.824l-9.844.298L27.001 299.86h96.92c45.75 0 82.822 37.062 82.822 82.824l.298 20.484l100.854 89.868v-96.913c0-45.749 37.062-82.823 82.824-82.823zM256 306.669c-27.99 0-50.666-22.685-50.666-50.665c0-27.99 22.679-50.671 50.665-50.671c27.99 0 50.67 22.682 50.67 50.671c0 27.98-22.683 50.665-50.67 50.665z" /></svg>
		</h3>
	{/snippet}

	{#snippet stack()}
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Sveltekit} class="h-8" alt="Sveltekit" title="Sveltekit" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={TailwindSmall} class="h-8" alt="Tailwind" title="Tailwind" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Pocketbase} class="h-8" alt="Pocketbase" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Coolify} class="h-8" alt="Coolify" title="Coolify" />
		</div>
	{/snippet}

	{#snippet problem()}How might I stop getting tricked into paying for subscriptions I don't want.{/snippet}

	{#snippet want()}Subscription tracker that alerts me about known dark patterns and companies' dirty tricks.{/snippet}

	{#snippet built()}CRUD webapp, with authentication, user stuff, and calendar view.{/snippet}

	{#snippet undone()}Probably OCR or natural language processing for greater automation.{/snippet}
</ProjectEntry>

<ProjectEntry id="grumplr">
	{#snippet title()}
		<a href="https://grumplr.com" class="group inline-block">
			<h3 class="font-inter text-5xl font-bold tracking-tighter text-[#1b510f] lg:text-7xl">Grumplr</h3>
		</a>
	{/snippet}
	{#snippet stack()}
		<div class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md">
			<img src={Golang} class="h-10 scale-125" alt="Go" title="Go" />
		</div>
		<div class="flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
			<img src={Htmx} class="h-6" alt="Htmx" title="Htmx" />
		</div>

		<div class="flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
			<img src={Templ} class="h-6" alt="Templ" title="Templ" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Postgresql} class="h-8" alt="PostgreSQL" title="PostgreSQL" />
		</div>
		<div>
			<div
				class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
				<Stytch class="h-8" />
			</div>
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" title="Tailwind" />
		</div>
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

<ProjectEntry id="meetrics">
	{#snippet title()}
		<a href="https://meetrics.zixian.dev" class="group inline-block">
			<img src={Meetrics} alt="Meetrics" class="h-16" />
		</a>
	{/snippet}
	{#snippet stack()}
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Sveltekit} class="h-8" alt="Sveltekit" title="Sveltekit" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={TailwindSmall} class="h-10 grow" alt="Tailwind" title="Tailwind" />
		</div>
	{/snippet}

	{#snippet problem()}<p>
			Meetings can be redundant and too long, because people don't have a quantifiable figure for the meeting's costs.
		</p>
		<p>Everyone would be careful with setting up meetings if they realized each one costs at least $1,000!</p>
	{/snippet}

	{#snippet want()}
		A meeting cost calculator based on number of attendees and their seniority.
	{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Several input fields tied to reactive variables for easy calculation</li>
			<li>This could've been built with any stack tbh</li>
		</ul>
	{/snippet}
	{#snippet undone()}
		<li>Integration with a HR system to fetch employee ranks, but it's overly complex and unrealistic.</li>
	{/snippet}
</ProjectEntry>

<div class="relative min-h-[30vh]">
	<div class="absolute left-1/2 top-10 z-[1] -translate-x-1/2 text-center text-black/90">
		<h2 class="lg:pt-10">The Junkyard</h2>
		<p class="mt-4 text-xl">Projects of the past that I don't work on now.</p>
	</div>
	<enhanced:img
		src={Junkyard}
		alt="Junkyard"
		class="trigger-splash lg:brightness-25 max-h-[30rem] w-full object-cover object-center opacity-[0.2] lg:max-h-[40rem] lg:opacity-100 xl:max-h-[80dvh]"
		sizes="(min-width:1920px) 1920px, (min-width:1080px) 1080px, (min-width:768px) 768px, (min-width:640px) 640px, (min-width:400px) 400px" />
</div>

<ProjectEntry id="btonomics-old">
	{#snippet title()}
		<a href="https://old.btonomics.com" aria-label="BTOnomics Old"
			><enhanced:img src={oldBtonomicsLogo} alt="Btonomics Old Logo" class=""></enhanced:img></a>
	{/snippet}

	{#snippet stack()}<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Wordpress} class="h-8" alt="Wordpress" title="Wordpress" />
		</div>
		<div class="flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
			<img src={Nginx} class="h-6" alt="Nginx" title="Nginx" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Mysql} class="h-8" alt="MySQL" title="MySQL" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Bunny} class="h-8" alt="BunnyCDN" title="BunnyCDN" />
		</div>
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
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Django} class="h-8" alt="Django" title="Django" />
		</div>
		<div class="flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
			<img src={Htmx} class="h-6" alt="Htmx" title="Htmx" />
		</div>
		<div class="flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
			<img src={Nginx} class="h-6" alt="Nginx" title="Nginx" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Gunicorn} class="h-8" alt="Gunicorn" title="Gunicorn" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Bootstrap} class="h-8" alt="Bootstrap" title="Bootstrap" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Postgresql} class="h-8" alt="PostgreSQL" title="PostgreSQL" />
		</div>
	{/snippet}

	{#snippet problem()}I wanted an easier and faster way to plan medicine dose timings and get accurate info.{/snippet}

	{#snippet want()}Make it less tedious for both of us parents to record/coord medicine stuff and sync with one another.{/snippet}

	{#snippet built()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Basic CRUD webapp with user authentication.</li>
			<li>Sprinkled HTMX and datepicker.js for user interactions.</li>
			<li>Backend via Django</li>
		</ul>{/snippet}
	{#snippet undone()}Honestly, LLMs do it better (unless they refuse to do it, which Gemini did in the past).{/snippet}
</ProjectEntry>

<ProjectEntry id="rankamate">
	{#snippet title()}<a href="https://rankamate.zixian.dev/" aria-label="Rank-a-Mate webapp"
			><enhanced:img src={rankamateLogo} alt="Rank-a-Mate"></enhanced:img></a
		>{/snippet}
	{#snippet stack()}<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Django} class="h-8" alt="Django" title="Django" />
		</div>
		<div class="flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
			<img src={Htmx} class="h-6" alt="Htmx" title="Htmx" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<enhanced:img src={Sortable} class="" alt="SortableJS" title="SortableJS"></enhanced:img>
		</div>
		<div class="flex items-center justify-center rounded-3xl bg-white/70 p-5 shadow-md backdrop-blur-md">
			<img src={Nginx} class="h-6" alt="Nginx" title="Nginx" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Gunicorn} class="h-8" alt="Gunicorn" title="Gunicorn" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Bootstrap} class="h-8" alt="Bootstrap" title="Bootstrap" />
		</div>
		<div
			class="flex items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-4 shadow-md backdrop-blur-md">
			<img src={Postgresql} class="h-8" alt="PostgreSQL" title="PostgreSQL" />
		</div>{/snippet}

	{#snippet problem()}Rank-a-Mate was my first stab at making a drag & drop tool for ranking sessions in lieu of Excel.{/snippet}

	{#snippet want()}
		Same problem statement - How might we speed up ranking sessions, which need manual selection to form a numbered list
		"1, 2, 3..." on Excel. Every change to the list required manual reordering.
	{/snippet}

	{#snippet built()}Speed up ranking sessions via drag & drop.{/snippet}
	{#snippet undone()}
		<ul class="ms-6 list-outside list-disc space-y-2">
			<li>Basic CRUD webapp with drag & drop of officers and session-based workflow</li>
			<li>Allowed addition of supplementary info (grades, dept)</li>
			<li>Sliders to adjust quotas for each grade</li>
			<li>Backend DB via Django</li>
		</ul>
	{/snippet}
</ProjectEntry>

<style>
</style>
