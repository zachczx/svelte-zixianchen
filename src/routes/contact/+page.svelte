<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import WebsiteFooter from '$lib/WebsiteFooter.svelte';
	import UserIcon from '~icons/heroicons/user-16-solid';
	import EnvelopeIcon from '~icons/heroicons/envelope-16-solid';
	import CheckIcon from '~icons/tabler/check';
	import ExclamationCircleIcon from '~icons/tabler/exclamation-circle';
	let navCurrent = '';
	type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
	type Web3FormsResponse = {
		success?: boolean;
		message?: string;
	};

	let formStatus = $state<FormStatus>('idle');
	let formMessage = $state('');
	let formEl = $state() as HTMLFormElement;
	let isSubmitting = $derived(formStatus === 'submitting');

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
		const form = event.currentTarget as HTMLFormElement;

		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		formStatus = 'submitting';
		formMessage = '';

		try {
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
			const result = (await response.json()) as Web3FormsResponse;

			if (!response.ok || !result.success) {
				throw new Error(result.message ?? 'Message could not be sent.');
			}

			formEl.reset();
			formStatus = 'success';
			formMessage = 'Message sent successfully.';
			setTimeout(() => {
				if (formStatus === 'success') {
					formStatus = 'idle';
					formMessage = '';
				}
			}, 4000);
		} catch {
			formStatus = 'error';
			formMessage = 'Something went wrong. Please try again or email me directly.';
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
				<p class="text-base-content/65 -mt-8 mb-10 max-w-xl leading-relaxed">Send a note, question, or project lead.</p>
				<form bind:this={formEl} onsubmit={preventDefault(handleSubmit)} class="grid w-full gap-y-4">
					<input type="hidden" name="access_key" value="f29b8ecc-f01d-45b0-bb55-72005ec3975a" />
					<label class="input input-lg input-bordered flex w-full items-center gap-2">
						<UserIcon class="h-4 w-4 opacity-70" />
						<input type="text" class="grow" name="name" placeholder="Name" aria-label="Name" required />
					</label>
					<label class="input input-lg input-bordered flex w-full items-center gap-2">
						<EnvelopeIcon class="h-4 w-4 opacity-70" />
						<input type="email" name="email" class="grow" placeholder="Email" aria-label="Email" required />
					</label>
					<textarea
						name="message"
						placeholder="Message"
						aria-label="Message"
						class="textarea textarea-bordered textarea-lg w-full"
						required
						rows="5"></textarea>
					<div class="w-full">
						<button
							class="btn btn-neutral btn-lg text-base-100 w-full text-lg"
							disabled={isSubmitting}
							aria-busy={isSubmitting}
							>{#if isSubmitting}
								<span class="loading loading-dots loading-md text-base-100"></span>
								Sending...
							{:else}
								Send message
							{/if}
						</button>
						{#if formMessage}
							<p
								aria-live="polite"
								class={['ms-1 mt-3 text-sm', formStatus === 'success' ? 'text-lime-600' : 'text-warning']}>
								{#if formStatus === 'success'}
									<CheckIcon class="me-1 mb-1 inline" />
								{:else}
									<ExclamationCircleIcon class="me-1 mb-1 inline" />
								{/if}
								{formMessage}
							</p>
						{/if}
					</div>
				</form>
			</div>
		</section>
	</div>
	<WebsiteFooter />
</div>
