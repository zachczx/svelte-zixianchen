<script>
	import Nav from '$lib/Nav.svelte';
	import MailSentRafiki from '$lib/svg/Mail-sent-rafiki.svelte';
	let navCurrent = '';
	let formStatus = $state('Submit');

	const handleSubmit = async (data) => {
		formStatus = 'Submitting...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: json,
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			formStatus = result.message || 'Success';
		}
	};
</script>

<div class="spectrum-background grid min-h-dvh justify-items-center">
	<Nav {navCurrent} />
	<div class="max-w-screen-2xl">
		<section class="min-w-[40rem] space-y-4 px-3 pb-2">
			<div class="flex justify-center"><MailSentRafiki class="-mt-14 w-96" /></div>
			<h1 class="text-4xl">Send me a message</h1>
			<form onsubmit={handleSubmit} class="w-full space-y-4">
				<input type="hidden" name="access_key" value="f29b8ecc-f01d-45b0-bb55-72005ec3975a" />
				<label class="input input-lg input-bordered flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
						<path
							d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
					</svg>
					<input type="text" class="grow" name="name" placeholder="Name" required />
				</label>
				<label class="input input-lg input-bordered flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
						<path
							d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
						<path
							d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
					</svg>
					<input type="text" name="email" class="grow" placeholder="Email" required />
				</label>
				<textarea
					name="message"
					placeholder="Message"
					class="textarea textarea-bordered textarea-lg w-full"
					required
					rows="3"></textarea>
				<button class="btn btn-neutral text-lg text-base-100">{formStatus}</button>
			</form>
		</section>
		<p class="mt-24 text-center text-base">Copyright © 2024 Zixian Chen. All rights reserved.</p>
		<p class="text-center text-base">
			Communication illustrations by <a href="https://www.freepik.com/">Freepik</a> and
			<a href="https://storyset.com/communication">Storyset</a>.
		</p>
	</div>
</div>
