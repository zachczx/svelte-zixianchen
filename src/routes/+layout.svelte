<script>
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) {
			viewTransition = false;
			return;
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="spectrum-background flex min-h-dvh justify-center">
	<div class="max-w-screen-2xl">
		<slot />
	</div>
</div>

<style>
	.spectrum-background {
		/* 
			https://www.schemecolor.com/pastel-green-yellow-and-red.php
			https://mycolor.space/gradient3?ori=circle&hex=%23E0FFCC&hex2=%23FFF8B8&hex3=%23CAF2C2&submit=submit
		
		background-image: radial-gradient(
			circle,
			#e0ffcc,
			#e5fec8,
			#ebfdc3,
			#f1fbbf,
			#f7fabc,
			#f5f9bb,
			#f3f8ba,
			#f1f7b9,
			#e7f6ba,
			#ddf5bd,
			#d3f4bf,
			#caf2c2
		);*/
		background-image: linear-gradient(to bottom, #fefefe, #ffe8ff, #ffcece, #ffca78, #d2de32);
	}
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
