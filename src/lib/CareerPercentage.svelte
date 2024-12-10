<script>
	let { percentage, className, currentPercentageBar } = $props();
	import CircularProgressBar from '$lib/magic-ui/AnimatedCircularProgressBar.svelte';
	import { spring, tweened } from 'svelte/motion';
	// try out with spring or tweened to see the difference
	let value = spring(0, {
		stiffness: 0.03,
		damping: 0.9,
	});

	$effect(() => {
		if (
			currentPercentageBar === 'currentPercentageBar' ||
			currentPercentageBar === 'percentMonthsComms' ||
			currentPercentageBar === 'percentMonthsPolicy'
		) {
			setTimeout(async () => {
				value.set(percentage);
				await new Promise((r) => setTimeout(r, 1800));
			}, 500);
		}
	});
</script>

<div class={className}>
	{#key $value}
		<CircularProgressBar
			max={100}
			min={0}
			value={$value}
			gaugePrimaryColor="rgb(232, 33, 5)"
			gaugeSecondaryColor="rgba(0, 50, 100, 0.1)" />
	{/key}
</div>
