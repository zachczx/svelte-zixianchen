<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import WebsiteFooter from '$lib/WebsiteFooter.svelte';
	import UserIcon from '~icons/heroicons/user-16-solid';
	import EnvelopeIcon from '~icons/heroicons/envelope-16-solid';
	import CheckIcon from '~icons/tabler/check';
	import ExclamationCircleIcon from '~icons/tabler/exclamation-circle';
	let navCurrent = '';
	let formStatus = $state('Submit');
	let formEl = $state() as HTMLFormElement;

	/**
	 * Email check vars
	 */
	let email = $state('');
	const emailRegex = /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
	let disabledSubmitButton = $derived(email !== '' && !emailRegex.test(email));

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
						<UserIcon class="h-4 w-4 opacity-70" />
						<input type="text" class="grow" name="name" placeholder="Name" required />
					</label>
					<label
						class="input input-lg input-bordered w-full {disabledSubmitButton
							? 'input-warning'
							: ''} flex items-center gap-2">
						<EnvelopeIcon class="h-4 w-4 opacity-70" />
						<input
							type="email"
							name="email"
							class="grow"
							placeholder="Email"
							bind:value={email}
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
							<CheckIcon class="me-1 mb-1 inline" />Message sent successfully.
						</div>
						<div class="text-warning ms-4 {disabledSubmitButton ? 'inline' : 'hidden'}">
							<ExclamationCircleIcon class="me-1 mb-1 inline" />Please enter a valid email address.
						</div>
					</div>
				</form>
			</div>
		</section>
	</div>
	<WebsiteFooter />
</div>
