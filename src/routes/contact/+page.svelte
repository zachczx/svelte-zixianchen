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

<div class="bg-base-200 grid min-h-dvh grid-rows-[1fr_auto] content-center justify-items-center">
	<Nav {navCurrent} />
	<div class="flex max-w-(--breakpoint-2xl) items-center">
		<section class="space-y-4 px-3 pb-2 xl:grid xl:min-w-[40rem]">
			<!-- <div class="flex justify-center"><MailSentRafiki class="w-96" /></div> -->
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

<style>
	.bg-colored-pattern-orange {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1053%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(243%2c 244%2c 246%2c 1)'%3e%3c/rect%3e%3ccircle r='88.92990503850157' cx='990.67' cy='72.92' stroke='rgba(253%2c 186%2c 116%2c 1)' stroke-width='1.18' stroke-dasharray='2%2c 2'%3e%3c/circle%3e%3ccircle r='46.666666666666664' cx='1360.34' cy='328.5' fill='rgba(253%2c 186%2c 116%2c 1)'%3e%3c/circle%3e%3crect width='132' height='132' clip-path='url(%26quot%3b%23SvgjsClipPath1054%26quot%3b)' x='891.77' y='251.49' fill='url(%26quot%3b%23SvgjsPattern1055%26quot%3b)' transform='rotate(131.61%2c 957.77%2c 317.49)'%3e%3c/rect%3e%3crect width='261.24' height='261.24' clip-path='url(%26quot%3b%23SvgjsClipPath1056%26quot%3b)' x='224.11' y='410.94' fill='url(%26quot%3b%23SvgjsPattern1057%26quot%3b)' transform='rotate(49.79%2c 354.73%2c 541.56)'%3e%3c/rect%3e%3crect width='276' height='276' clip-path='url(%26quot%3b%23SvgjsClipPath1058%26quot%3b)' x='1197.05' y='109.04' fill='url(%26quot%3b%23SvgjsPattern1059%26quot%3b)' transform='rotate(355.94%2c 1335.05%2c 247.04)'%3e%3c/rect%3e%3crect width='108.8' height='108.8' clip-path='url(%26quot%3b%23SvgjsClipPath1060%26quot%3b)' x='551.56' y='220.75' fill='url(%26quot%3b%23SvgjsPattern1061%26quot%3b)' transform='rotate(18.38%2c 605.96%2c 275.15)'%3e%3c/rect%3e%3ccircle r='46.666666666666664' cx='847.78' cy='467.43' stroke='rgba(253%2c 186%2c 116%2c 1)' stroke-width='1.21' stroke-dasharray='4%2c 4'%3e%3c/circle%3e%3cpath d='M1410.63 73.48L1422.6 78.03 1420.79 90.71 1432.76 95.26 1430.95 107.94 1442.92 112.49 1441.11 125.16M1403.74 77.55L1415.71 82.1 1413.9 94.77 1425.87 99.32 1424.06 112 1436.03 116.55 1434.22 129.23' stroke='rgba(253%2c 186%2c 116%2c 1)' stroke-width='1.18'%3e%3c/path%3e%3cpath d='M919.95 131.27a5.6 5.6 0 1 0-11.03 1.92 5.6 5.6 0 1 0 11.03-1.92zM904.19 134.02a5.6 5.6 0 1 0-11.04 1.92 5.6 5.6 0 1 0 11.04-1.92zM888.42 136.76a5.6 5.6 0 1 0-11.03 1.93 5.6 5.6 0 1 0 11.03-1.93zM872.66 139.51a5.6 5.6 0 1 0-11.03 1.93 5.6 5.6 0 1 0 11.03-1.93zM948.73 110.01a5.6 5.6 0 1 0-11.04 1.92 5.6 5.6 0 1 0 11.04-1.92zM932.96 112.76a5.6 5.6 0 1 0-11.03 1.92 5.6 5.6 0 1 0 11.03-1.92zM917.2 115.51a5.6 5.6 0 1 0-11.03 1.92 5.6 5.6 0 1 0 11.03-1.92zM901.44 118.25a5.6 5.6 0 1 0-11.03 1.93 5.6 5.6 0 1 0 11.03-1.93zM977.5 88.75a5.6 5.6 0 1 0-11.03 1.92 5.6 5.6 0 1 0 11.03-1.92zM961.74 91.5a5.6 5.6 0 1 0-11.03 1.92 5.6 5.6 0 1 0 11.03-1.92zM945.98 94.25a5.6 5.6 0 1 0-11.04 1.92 5.6 5.6 0 1 0 11.04-1.92zM930.22 97a5.6 5.6 0 1 0-11.04 1.92 5.6 5.6 0 1 0 11.04-1.92z' fill='rgba(253%2c 186%2c 116%2c 1)'%3e%3c/path%3e%3cpath d='M1113.3400000000001 204.82 L1240.47 249.21L1259.9206839494025 143.99931605059766z' fill='rgba(253%2c 186%2c 116%2c 1)'%3e%3c/path%3e%3cpath d='M270.85 178.57L276.95 167.31 289.28 170.79 295.37 159.52 307.7 163 313.8 151.74 326.12 155.22M273.97 185.94L280.07 174.68 292.39 178.16 298.49 166.89 310.81 170.37 316.91 159.11 329.24 162.58' stroke='rgba(253%2c 186%2c 116%2c 1)' stroke-width='2.28' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3cpath d='M117.57 34.4a5.6 5.6 0 1 0 4.49-10.26 5.6 5.6 0 1 0-4.49 10.26zM123.99 19.74a5.6 5.6 0 1 0 4.49-10.26 5.6 5.6 0 1 0-4.49 10.26zM130.4 5.09a5.6 5.6 0 1 0 4.49-10.27 5.6 5.6 0 1 0-4.49 10.27zM136.81-9.57a5.6 5.6 0 1 0 4.49-10.26 5.6 5.6 0 1 0-4.49 10.26zM119.4 70.13a5.6 5.6 0 1 0 4.49-10.26 5.6 5.6 0 1 0-4.49 10.26zM125.82 55.47a5.6 5.6 0 1 0 4.49-10.26 5.6 5.6 0 1 0-4.49 10.26zM132.23 40.82a5.6 5.6 0 1 0 4.49-10.26 5.6 5.6 0 1 0-4.49 10.26zM138.64 26.16a5.6 5.6 0 1 0 4.49-10.26 5.6 5.6 0 1 0-4.49 10.26zM121.24 105.86a5.6 5.6 0 1 0 4.49-10.26 5.6 5.6 0 1 0-4.49 10.26zM127.65 91.2a5.6 5.6 0 1 0 4.49-10.26 5.6 5.6 0 1 0-4.49 10.26zM134.06 76.55a5.6 5.6 0 1 0 4.49-10.26 5.6 5.6 0 1 0-4.49 10.26zM140.48 61.89a5.6 5.6 0 1 0 4.49-10.26 5.6 5.6 0 1 0-4.49 10.26z' fill='rgba(253%2c 186%2c 116%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1053'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='132' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1055'%3e%3crect width='132' height='3' x='0' y='0' fill='rgba(253%2c 186%2c 116%2c 1)'%3e%3c/rect%3e%3crect width='132' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1054'%3e%3ccircle r='33' cx='957.77' cy='317.49'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6.22' height='6.22' patternUnits='userSpaceOnUse' id='SvgjsPattern1057'%3e%3cpath d='M0 6.22L3.11 0L6.22 6.22' stroke='rgba(253%2c 186%2c 116%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1056'%3e%3ccircle r='65.31' cx='354.73' cy='541.56'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='11.5' height='11.5' patternUnits='userSpaceOnUse' id='SvgjsPattern1059'%3e%3cpath d='M5.75 1L5.75 10.5M1 5.75L10.5 5.75' stroke='rgba(253%2c 186%2c 116%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1058'%3e%3ccircle r='69' cx='1335.05' cy='247.04'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='10.88' height='10.88' patternUnits='userSpaceOnUse' id='SvgjsPattern1061'%3e%3cpath d='M5.44 1L5.44 9.88M1 5.44L9.88 5.44' stroke='rgba(253%2c 186%2c 116%2c 1)' fill='none' stroke-width='3.08'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1060'%3e%3ccircle r='27.2' cx='605.96' cy='275.15'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
	}
</style>
