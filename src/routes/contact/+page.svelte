<script>
	import Nav from '$lib/Nav.svelte';
	import MailSentRafiki from '$lib/svg/Mail-sent-rafiki.svelte';
	import WebsiteFooter from '$lib/WebsiteFooter.svelte';
	let navCurrent = '';
	let formStatus = $state('Submit');
	let formEl;

	/**
	 * Email check vars
	 */
	let email = $state('');
	let disabledSubmitButton = $state(false);
	const emailRegex = /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;

	/**
	 * Small func to wrap around handler in lieu of |preventDefault in svelte 4
	 * @param fn - event handler
	 */
	function preventDefault(fn) {
		return function (event) {
			event.preventDefault();
			fn.call(this, event);
		};
	}

	/**
	 * Web4Forms submission
	 * @param {object} data - form data
	 */
	const handleSubmit = async (data) => {
		formStatus = 'Submitting';
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
			//console.log(result);
			formEl.reset();
			setTimeout(() => {
				formStatus = 'Success';
			}, 1000);
			setTimeout(() => {
				formStatus = 'Submit';
			}, 3000);
		}
	};
</script>

<svelte:head>
	<title>Send Zixian a message</title>
	<meta name="description" content="Send Zixian a message." />
</svelte:head>

<div class="spectrum-background grid min-h-dvh justify-items-center">
	<Nav {navCurrent} />
	<div class="max-w-screen-2xl">
		<section class="min-w-[40rem] space-y-4 px-3 pb-2">
			<div class="flex justify-center"><MailSentRafiki class="w-96" /></div>
			<h1 class="text-4xl">Send me a message</h1>
			<form bind:this={formEl} onsubmit={preventDefault(handleSubmit)} class="w-full space-y-4">
				<input type="hidden" name="access_key" value="f29b8ecc-f01d-45b0-bb55-72005ec3975a" />
				<label class="input input-lg input-bordered flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
						<path
							d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
					</svg>
					<input type="text" class="grow" name="name" placeholder="Name" required />
				</label>
				<label
					class="input input-lg input-bordered {disabledSubmitButton ? 'input-warning' : ''} flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
						<path
							d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
						<path
							d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
					</svg>
					<input
						type="email"
						name="email"
						class="grow"
						placeholder="Email"
						bind:value={email}
						onkeydown={(evt) => {
							if (emailRegex.test(email) === false) {
								disabledSubmitButton = true;
							} else {
								disabledSubmitButton = false;
							}
						}}
						required />
				</label>
				<textarea
					name="message"
					placeholder="Message"
					class="textarea textarea-bordered textarea-lg w-full"
					required
					rows="5"></textarea>
				<div class="w-full">
					<button class="btn btn-neutral min-w-36 text-lg text-base-100" disabled={disabledSubmitButton}
						>{#if formStatus === 'Submitting'}
							<span class="loading loading-dots loading-md text-base-100"></span>
						{:else}
							Submit
						{/if}
					</button>
					<div class="ms-4 text-lime-500 {formStatus === 'Success' ? 'inline' : 'hidden'}">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-check mb-1 me-1 inline"
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg
						>Message sent successfully.
					</div>
					<div class="ms-4 text-warning {disabledSubmitButton ? 'inline' : 'hidden'}">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-exclamation-circle mb-1 me-1 inline"
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
								d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 9v4" /><path d="M12 16v.01" /></svg
						>Please enter a valid email address.
					</div>
				</div>
			</form>
		</section>
	</div>
	<WebsiteFooter />
</div>
