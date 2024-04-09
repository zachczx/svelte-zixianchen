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

<div class="spectrum-background min-h-dvh">
	<slot />
</div>

<style>
	.spectrum-background {
		/* 
		https://colorhunt.co/palette/ff8787f8c4b4e5ebb2bce29e 1st one 
		https://mycolor.space/gradient3?ori=circle&hex=%23EFF8FD&hex2=%23FDF4EF&hex3=%23FDEFF8&submit=submit current one 
		*/
		background-image: radial-gradient(
			circle,
			#f3c6a5,
			#fdbdb4,
			#fbb9cb,
			#e9bbe2,
			#cac1f3,
			#adc9fc,
			#8ed0fb,
			#76d6f1,
			#6fdde2,
			#7ee1cc,
			#9ae3b4,
			#bce29e
		);
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
