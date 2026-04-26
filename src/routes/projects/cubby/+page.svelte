<script>
	import AlignCenterText from '$lib/AlignCenterText.svelte';
	import ProjectEntry from '$lib/ProjectEntry.svelte';
	import StackComponents from '$lib/StackComponents.svelte';
	import dashboard from '$lib/screenshots/cubby/dashboard.png?enhanced&w=400';
	import calendar from '$lib/screenshots/cubby/calendar.png?enhanced&w=400';
	import tracker from '$lib/screenshots/cubby/tracker.png?enhanced&w=400';
	import trackerStats from '$lib/screenshots/cubby/tracker2.png?enhanced&w=400';
	import quota from '$lib/screenshots/cubby/quota.png?enhanced&w=400';
	import recap from '$lib/screenshots/cubby/recap.png?enhanced&w=400';
	import market from '$lib/screenshots/cubby/market.png?enhanced&w=400';
	import marketPrices from '$lib/screenshots/cubby/market-prices.png?enhanced&w=400';
	import gym from '$lib/screenshots/cubby/gym.png?enhanced&w=400';
	import gymExercises from '$lib/screenshots/cubby/gym-exercises.png?enhanced&w=400';
	import gymWorkout from '$lib/screenshots/cubby/gym-workout.png?enhanced&w=400';
	import stopwatch from '$lib/screenshots/cubby/stopwatch.png?enhanced&w=400';
	import stopwatch2 from '$lib/screenshots/cubby/stopwatch2.png?enhanced&w=400';
	import meals from '$lib/screenshots/cubby/meals.png?enhanced&w=400';
	import expiry from '$lib/screenshots/cubby/expiry.png?enhanced&w=400';
	import travel from '$lib/screenshots/cubby/travel.png?enhanced&w=400';
	import travelNewTrip from '$lib/screenshots/cubby/travel-new-trip.png?enhanced&w=400';
	import travelCountries from '$lib/screenshots/cubby/travel-countries.png?enhanced&w=400';
	import CubbyLogo from '$lib/assets/cubby-logo.webp';
</script>

<ProjectEntry id="cubby">
	{#snippet title()}
		<img src={CubbyLogo} alt="Cubby" class="my-4 h-30" />
	{/snippet}

	{#snippet stack()}
		<StackComponents names={['go', 'sveltekit', 'postgresql']} />
	{/snippet}

	{#snippet screenshots()}
		<div class="grid gap-4 lg:grid-cols-2">
			<figure>
				<enhanced:img src={dashboard} alt="Cubby dashboard" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Pinned tasks with due dates and streaks</figcaption>
			</figure>
			<figure>
				<enhanced:img src={tracker} alt="Cubby tracker overview" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Track anything with frequency and streaks</figcaption>
			</figure>
			<figure>
				<enhanced:img src={trackerStats} alt="Cubby tracker stats" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Trend charts and streak history</figcaption>
			</figure>
			<figure>
				<enhanced:img src={quota} alt="Cubby quota tracking" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Weekly quotas with progress tracking</figcaption>
			</figure>
			<figure>
				<enhanced:img src={calendar} alt="Cubby calendar" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Unified weekly view across all features</figcaption>
			</figure>
			<figure>
				<enhanced:img src={recap} alt="Cubby monthly recap" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Monthly activity summary</figcaption>
			</figure>
			<figure>
				<enhanced:img src={market} alt="Cubby market prices" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Price tracking with receipt scanning</figcaption>
			</figure>
			<figure>
				<enhanced:img src={marketPrices} alt="Cubby price history" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Price history across stores</figcaption>
			</figure>
			<figure>
				<enhanced:img src={gym} alt="Cubby gym workouts" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Workout log with exercise sets</figcaption>
			</figure>
			<figure>
				<enhanced:img src={gymWorkout} alt="Cubby workout detail" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Set tracking with PRs and dropsets</figcaption>
			</figure>
			<figure>
				<enhanced:img src={gymExercises} alt="Cubby exercise database" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Exercise database with muscle group filters</figcaption>
			</figure>
			<figure>
				<enhanced:img src={stopwatch} alt="Cubby timer" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Timer with voice announcements</figcaption>
			</figure>
			<figure>
				<enhanced:img src={stopwatch2} alt="Cubby multi timer" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Multi-segment timer profiles</figcaption>
			</figure>
			<figure>
				<enhanced:img src={meals} alt="Cubby meals" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Meal logging with place tracking</figcaption>
			</figure>
			<figure>
				<enhanced:img src={expiry} alt="Cubby expiry tracker" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Expiry date tracking for perishables</figcaption>
			</figure>
			<figure>
				<enhanced:img src={travel} alt="Cubby travel planner" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Trip planner with flights, stays, and activities</figcaption>
			</figure>
			<figure>
				<enhanced:img src={travelNewTrip} alt="Cubby new trip" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Create trips with multi-destination support</figcaption>
			</figure>
			<figure>
				<enhanced:img src={travelCountries} alt="Cubby explore countries" class="border-neutral/20 rounded-xl border-2 shadow-md" />
				<figcaption class="text-neutral/50 mt-3 text-center text-sm font-medium">Browse and explore countries</figcaption>
			</figure>
		</div>
	{/snippet}

	{#snippet problem()}
		<AlignCenterText
			>Started because I couldn't remember when I last changed the towels. I wanted to track that, and then cleaning
			sprays, and then other irregular home tasks. Eventually gym workouts crept in, then grocery prices, then meals
			and expiry dates. I also had a separate travel app called Roamichi for trip planning and flight tracking, so I
			folded that in too. It kept growing because I kept finding things I wanted to track.</AlignCenterText>
	{/snippet}

	{#snippet built()}
		<AlignCenterText
			>It started as a simple task tracker and grew into something I use for basically everything at home. Recurring
			tasks have streak tracking and overdue detection, the gym module logs workouts with PR tracking and cardio
			support, and the market feature compares grocery prices by scanning receipts with Gemini's vision API to extract
			items, prices, and stores from photos. There's also weekly quotas, meal logging, and expiry date tracking for
			perishables. The travel side (absorbed from Roamichi) manages trips with flights, stays, and activities, parses
			confirmation emails into structured bookings using LLMs, and includes a country info service for things like
			health advisories, power outlets, and local greetings. Background workers handle push notifications and know
			about vacation mode, so bills still come through but regular tasks pause. The whole thing is family-shared, built
			with a Go API and PostgreSQL, and runs as a web app plus Android via Capacitor.</AlignCenterText>
	{/snippet}
</ProjectEntry>
