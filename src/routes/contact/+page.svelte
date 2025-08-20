<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import WebsiteFooter from '$lib/WebsiteFooter.svelte';
	let navCurrent = '';
	let formStatus = $state('Submit');
	let formEl = $state() as HTMLFormElement;

	/**
	 * Email check vars
	 */
	let email = $state('');
	let disabledSubmitButton = $state(false);
	const emailRegex = /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;

	function preventDefault(fn: (event: SubmitEvent) => void) {
		return function (event: SubmitEvent) {
			event.preventDefault();
			fn(event);
		};
	}

	/**
	 * Web4Forms submission
	 */
	const handleSubmit = async (event: SubmitEvent) => {
		formStatus = 'Submitting';
		const form = event.currentTarget as HTMLFormElement;
		const formData = new FormData(form);

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
	<title>Zixian Chen - Message Me</title>
	<meta name="description" content="Send Zixian a message." />
</svelte:head>

<div class="bg-base-200 grid min-h-dvh grid-rows-[1fr_auto] content-center justify-items-center">
	<Nav {navCurrent} />
	<div class="flex max-w-(--breakpoint-2xl) items-center">
		<section class="space-y-4 px-3 pb-2 xl:grid xl:min-w-[40rem]">
			<div class="rounded-3xl p-4 xl:min-w-[35rem]">
				<h1 class="mb-12 text-4xl font-bold lg:text-6xl">Tell Me Something</h1>
				<form bind:this={formEl} onsubmit={preventDefault(handleSubmit)} class="grid w-full gap-y-4">
					<input type="hidden" name="access_key" value="f29b8ecc-f01d-45b0-bb55-72005ec3975a" />
					<label class="input input-lg input-bordered flex w-full items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
							<path
								d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
						</svg>
						<input type="text" class="grow" name="name" placeholder="Name" required />
					</label>
					<label
						class="input input-lg input-bordered w-full {disabledSubmitButton
							? 'input-warning'
							: ''} flex items-center gap-2">
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
							onkeydown={() => {
								if (emailRegex.test(email) === false) {
									disabledSubmitButton = true;
								} else {
									disabledSubmitButton = false;
								}
							}}
							onkeyup={() => {
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
						<button class="btn btn-neutral btn-lg text-base-100 w-full text-lg" disabled={disabledSubmitButton}
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
								class="icon icon-tabler icons-tabler-outline icon-tabler-check me-1 mb-1 inline"
								><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg
							>Message sent successfully.
						</div>
						<div class="text-warning ms-4 {disabledSubmitButton ? 'inline' : 'hidden'}">
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
								class="icon icon-tabler icons-tabler-outline icon-tabler-exclamation-circle me-1 mb-1 inline"
								><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
									d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 9v4" /><path d="M12 16v.01" /></svg
							>Please enter a valid email address.
						</div>
					</div>
				</form>
			</div>
		</section>
	</div>
	<WebsiteFooter />
</div>
