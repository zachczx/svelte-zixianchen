<script>
	import '../app.css';
	import '@fontsource-variable/fira-code';

	import { onNavigate } from '$app/navigation';

	// onNavigate((navigation) => {
	// 	if (!document.startViewTransition) {
	// 		viewTransition = false;
	// 		return;
	// 	}

	// 	return new Promise((resolve) => {
	// 		document.startViewTransition(async () => {
	// 			resolve();
	// 			await navigation.complete;
	// 		});
	// 	});
	// });
</script>

<slot />
