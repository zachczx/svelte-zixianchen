<script lang="ts">
	// Scroll down to see the original Component
	import { cn } from '$lib/utils';
	import AnimatedBeam from './AnimatedBeam.svelte';
	import Circle from './Circle.svelte';
	let containerRef;
	// Circles
	let div1Ref;
	let div2Ref;
	let div3Ref;
	let div4Ref;
	// let div5Ref;
	// let div6Ref;
	let div7Ref;
	let className: any = '';
	export { className as class };
</script>

<div
	bind:this={containerRef}
	class={cn(
		'relative col-span-2 flex w-full max-w-[400px] items-center justify-center overflow-hidden rounded-lg',
		className,
	)}>
	<!--  Gradient Line -->
	<!-- <div class="absolute right-5 top-0 h-px w-1/2 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent">
	</div> -->
	<!-- Main Component  -->

	<div class="flex h-full w-full max-w-lg flex-row items-center justify-between gap-10">
		<div class="flex flex-col justify-center gap-2 text-white">
			<!-- Div 1 -->
			<Circle class="bg-[#0078d7]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					bind:this={div1Ref}
					width="40"
					height="40"
					class="ri:code-s-slash-line"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="m24 12l-5.657 5.657l-1.414-1.414L21.172 12l-4.243-4.243l1.414-1.414zM2.828 12l4.243 4.243l-1.414 1.414L0 12l5.657-5.657L7.07 7.757zm6.96 9H7.66l6.552-18h2.128z" /></svg>
			</Circle>
			<!-- Div 2 -->
			<Circle class="bg-purple-600">
				<svg xmlns="http://www.w3.org/2000/svg" bind:this={div2Ref} width="40" height="40" viewBox="0 0 48 48"
					><g fill="none" stroke="currentColor" stroke-width="4"
						><path stroke-linecap="round" stroke-linejoin="round" d="M19 32h10v9H19z" /><rect
							width="38"
							height="24"
							x="5"
							y="8"
							rx="2" /><path stroke-linecap="round" stroke-linejoin="round" d="M22 27h4M14 41h20" /></g
					></svg>
			</Circle>
			<!-- Div 3 -->
			<Circle class="bg-[#A4C639]">
				<svg xmlns="http://www.w3.org/2000/svg" bind:this={div3Ref} width="40" height="40" viewBox="0 0 56 56"
					><path
						fill="currentColor"
						d="M42.172 19.581v20.637a3.434 3.434 0 0 1-3.253 3.437l-.189.005h-2.283v7.04a3.17 3.17 0 0 1-3.01 3.188l-.183.005a3.17 3.17 0 0 1-3.187-3.01l-.005-.183l-.001-7.04h-4.253v7.04a3.17 3.17 0 0 1-3.01 3.188l-.183.005a3.17 3.17 0 0 1-3.187-3.01l-.005-.183v-7.04H17.14a3.434 3.434 0 0 1-3.437-3.252l-.005-.19V19.581zm-32.855-.547a3.173 3.173 0 0 1 3.188 3.01l.005.182v13.299a3.174 3.174 0 0 1-3.193 3.192a3.173 3.173 0 0 1-3.187-3.01l-.005-.182V22.226a3.174 3.174 0 0 1 3.192-3.192m37.236 0a3.173 3.173 0 0 1 3.187 3.01l.005.182v13.299a3.174 3.174 0 0 1-3.192 3.192a3.173 3.173 0 0 1-3.188-3.01l-.005-.182V22.226a3.174 3.174 0 0 1 3.193-3.192M36.774 2.279q.113 0 .215.058a.44.44 0 0 1 .211.54l-.035.076l-2.249 4.063c4.231 2.202 7.12 6.341 7.251 11.114l.005.327H13.698c.005-4.802 2.8-8.999 6.969-11.288l.286-.153l-2.249-4.063a.44.44 0 0 1 .176-.616a.444.444 0 0 1 .568.105l.048.071l2.279 4.107a15.2 15.2 0 0 1 6.16-1.29c2.048 0 3.997.4 5.757 1.119l.403.171l2.278-4.107a.45.45 0 0 1 .401-.234m-15.41 8.59c-.65 0-1.188.538-1.188 1.188s.538 1.188 1.188 1.188s1.188-.538 1.188-1.188s-.538-1.188-1.188-1.188m13.142 0c-.65 0-1.188.538-1.188 1.188s.538 1.188 1.188 1.188s1.188-.538 1.188-1.188s-.538-1.188-1.188-1.188" /></svg>
			</Circle>
			<!-- Div 4 -->
			<Circle class="bg-black/80">
				<svg xmlns="http://www.w3.org/2000/svg" bind:this={div4Ref} width="40" height="40" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M2.67 5.3v.61l-.71.3V5.6zm0 5.94v.62l-.71.29v-.59zm0 6.03v.62l-.71.29v-.59zM2.6 7.29v.55l-.57.26v-.54zm0 1.99v.54l-.57.26v-.54zm0 4.03v.53l-.57.26v-.54zm0 2.02v.54l-.57.26v-.53zm1.9-9.69v.72l-1 .37V6zm0 6.02v.71l-1 .37v-.71zm0 6.04v.71l-1 .4v-.71zm-.07-9.98v.66l-.79.3V8zm0 2.01v.64l-.78.3V10zm0 4.01v.64l-.78.31v-.66zm0 2.02v.65l-.78.31v-.66zm1.88-9.67v.85l-1.26.49v-.84zm0 6.02v.85l-1.26.49v-.84zm0 5.97v.85l-1.26.5v-.85zm-.06-9.9v.76l-1.06.4v-.73zm0 2v.75l-1.06.42v-.75zm0 4.01v.75l-1.06.43v-.75zm0 1.95v.76l-1.06.42v-.75zm2.04-10.1v1.12l-1.57.62V6.67zm0 6.02v1.13l-1.57.61v-1.12zm0 5.97v1.12l-1.57.62v-1.11zm-.09-9.9v1.03l-1.31.53V8.66zm0 2v1.02l-1.31.53v-1.03zm0 4.02v1.03l-1.31.52v-1.03zm0 1.95v1.02l-1.31.52v-1.01zm2.14-10.25v1.47L8.61 8V6.56zm0 6.02v1.46l-1.73.7v-1.47zm0 5.97v1.46l-1.73.7v-1.46zm-.08-9.79v1.23l-1.48.59V8.64zm0 1.92v1.23l-1.48.58v-1.22zm0 4.09v1.25l-1.48.57v-1.23zm0 1.94v1.25l-1.48.59V16.6zm2.19-10.88v2l-1.86.77V6c.64-.35 1.26-.65 1.86-.88m0 2.21v1.73l-1.86.78V8.1zm0 1.95v1.76l-1.86.78v-1.76zm0 1.97V13l-1.86.77V12zm0 1.96V15l-1.86.78V14zm0 2v1.75l-1.86.8V16zm0 1.96v1.87c-.73.28-1.35.55-1.86.8v-1.88zm9.59-11.99v14.05c-1.19-.79-2.67-1.18-4.45-1.18c-1.47 0-3.12.3-4.94.91v-1.9c.97-.37 2.03-.64 3.19-.8v-4.57c-.98.12-2.04.46-3.19 1.02V11.4c.99-.46 2.06-.77 3.19-.94V6c-1.02.18-2.08.53-3.19 1V5.03C14.27 4.34 15.86 4 17.41 4c1.68 0 3.22.39 4.63 1.18m-1.89 1.23c-.76-.41-1.65-.59-2.73-.59c-.13 0-.25.01-.37.02v4.54l.41-.01c.91 0 1.81.13 2.69.43zm0 5.69c-.81-.36-1.72-.54-2.71-.54c-.13 0-.26.01-.39.02v4.58h.41c.99 0 1.89.12 2.69.37z" /></svg>
			</Circle>
		</div>

		<div class="flex flex-col justify-center">
			<!-- Div 7 -->
			<Circle class="h-32 w-32  bg-red-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					bind:this={div7Ref}
					width="60"
					height="60"
					class="noto:nerd-face h-20 w-20"
					viewBox="0 0 128 128"
					><defs
						><path
							id="notoNerdFace0"
							fill="#35220B"
							d="M90.02 41.94c-4.19 0-8 3.54-8 9.42s3.81 9.42 8 9.42s8-3.54 8-9.42s-3.81-9.42-8-9.42" /><path
							id="notoNerdFace1"
							fill="#896024"
							d="M89.63 45.87c-1.03-.72-2.58-.49-3.58.95c-1 1.45-.67 2.97.36 3.69s2.58.49 3.58-.95c1.01-1.45.68-2.97-.36-3.69" /></defs
					><radialGradient
						id="notoNerdFace2"
						cx="63.6"
						cy="-2088.9"
						r="56.96"
						gradientTransform="matrix(1 0 0 -1 0 -2026)"
						gradientUnits="userSpaceOnUse"
						><stop offset=".5" stop-color="#FDE030" /><stop offset=".919" stop-color="#F7C02B" /><stop
							offset="1"
							stop-color="#F4A223" /></radialGradient
					><path
						fill="url(#notoNerdFace2)"
						d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4c11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5" /><path
						fill="#35220B"
						d="M102.07 71.62c-1.33-2.46-4.14-3.53-7.14-2.6c-8.96 2.8-20.47 4.42-31.59 4.43c-11.12-.01-22.63-1.63-31.59-4.43c-2.99-.93-5.81.14-7.14 2.6c-1.36 2.52-.37 5.42.77 7.94c6.42 14.1 20.57 22.54 37.87 22.59h.16c17.3-.05 31.45-8.49 37.87-22.59c1.16-2.52 2.15-5.43.79-7.94m-38.65 29.27h-.16zm.07-26.19h-.3zm0 0h-.3zm-.07 26.19h-.16z" /><path
						fill="none"
						d="M78.22 97.17c9.37-3.29 16.75-9.76 20.8-18.66c1.26-2.77 1.51-4.48.85-5.71c-.76-1.42-2.35-1.98-4.19-1.4c-9.14 2.86-20.84 4.52-32.16 4.55h-.35c-11.31-.03-23.01-1.68-32.16-4.55c-.48-.15-.95-.23-1.38-.23c-1.24 0-2.24.58-2.81 1.62c-.67 1.24-.41 2.94.85 5.71c3.98 8.73 11.17 15.12 20.29 18.47c4.3-3.41 9.37-5.22 15.46-5.22c6.11.01 10.66 1.95 14.8 5.42" /><path
						fill="#ED7770"
						d="M79.35 98.14c-.37-.34-.75-.65-1.13-.97c-4.15-3.47-8.69-5.41-14.8-5.41c-6.09 0-11.16 1.8-15.46 5.22c-.39.31-.78.61-1.16.94c-.31.35-.57.68-.8 1c5.21 2.07 11.03 3.2 17.27 3.22h.16c5.96-.02 11.54-1.05 16.57-2.95c-.18-.34-.39-.68-.65-1.05" /><path
						fill="#FFF"
						d="M94.93 69.02c-8.96 2.8-20.47 4.42-31.59 4.43c-11.12-.01-22.63-1.63-31.59-4.43c-2.99-.93-5.81.14-7.14 2.6c-.21.39-.35.79-.45 1.2c.33.17.71.34 1.16.52c12.1 6.17 25.16 8.93 38.8 8.93c13.09 0 25.64-2.55 37.33-8.21c.47-.2.86-.39 1.21-.57c-.09-.64-.27-1.26-.6-1.87c-1.32-2.46-4.13-3.54-7.13-2.6" /><path
						fill="#EB8F00"
						d="M62.84 75.06c8.17.14 14.82-1.1 22.9-2.64c2.02-.39 4.03-.84 6.02-1.37l1.49-.41c.45-.12.79-.2 1.19-.23c.76-.07 1.5.04 2.14.31c1.27.53 3.08 2.13 3.53 3.41c1.19 3.4-.74 9.34-.26 8.35c.02-.03 1.23-2.07 1.24-2.1c.81-1.95 1.87-4.16 1.61-6.83c-.27-2.69-2.3-5.16-4.83-6.09a7.86 7.86 0 0 0-3.82-.41c-.61.07-1.26.25-1.77.42l-1.41.46c-1.89.58-3.81 1.1-5.75 1.56c-7.76 1.81-14.16 2.76-22.18 2.96h-.24c-8.02-.19-14.03-1.15-21.79-2.96c-1.94-.46-3.86-.98-5.75-1.56l-1.41-.46c-.52-.17-1.16-.35-1.77-.42c-1.24-.17-2.58-.06-3.82.41c-2.53.93-4.31 3.39-4.67 6.07c-.58 4.38 3.39 9.09 3.41 9.12c.48.99-2.01-5.14-.82-8.54c.45-1.28 2.1-2.86 3.36-3.39c.64-.27 1.37-.39 2.14-.31c.4.03.73.11 1.19.23l1.49.41c2 .53 4.01.98 6.02 1.37c8.07 1.53 14.16 2.77 22.33 2.64" /><path
						fill="#35220B"
						d="M125.75 33.33s-1.03-1.78-20.16-3.56c-25.47-2.37-34.61 4.71-36.33 6.31l-.18-.01c-1.91-.12-3.72-.24-5.72-.24h-.09c-.98.01-2.93.11-4.59.21c-1.84-1.69-11.04-8.62-36.28-6.27c-19.12 1.78-20.15 3.56-20.15 3.56l-.12 7.22s2.85.81 4.7 3.1c1.84 2.26 2.7 14.92 5.69 20.87c4.63 9.24 27.65 6.9 27.65 6.9s9.39.74 13.97-7.17c4.15-7.15 5.69-17.17 5.94-19c.95-.55 2.19-.98 3.77-1c1.77.02 3.12.56 4.11 1.2c.33 2.26 1.9 11.88 5.91 18.79c4.58 7.9 13.97 7.17 13.97 7.17s23.02 2.34 27.65-6.9c2.99-5.96 3.85-18.61 5.69-20.87c1.84-2.29 4.7-3.1 4.7-3.1zm-73.4 19.92c-1.82 8.44-4.11 14.19-19.72 13.3c-10.05-.57-17.04-.55-18.65-15.21c-.99-9.11.11-12.55.86-13.65c.74-1.09 3.43-4.25 18.98-3.7s17.78 4.04 18.69 5.62c.04.06.07.13.11.2l.66 2.18c.37 2.17.29 5.65-.93 11.26m61.67-1.91c-1.6 14.66-8.59 14.64-18.64 15.21c-15.61.89-17.9-4.86-19.72-13.3c-1.83-8.42-1.09-12.07-.17-13.64c.91-1.58 3.14-5.08 18.69-5.62c15.56-.55 18.24 2.61 18.98 3.7c.74 1.1 1.85 4.54.86 13.65" /><use
						href="#notoNerdFace0" /><use href="#notoNerdFace1" /><use href="#notoNerdFace0" /><use
						href="#notoNerdFace1" /><path
						fill="#35220B"
						d="M37.67 41.94c-4.19 0-8 3.54-8 9.42s3.81 9.42 8 9.42s8-3.54 8-9.42s-3.81-9.42-8-9.42" /><path
						fill="#896024"
						d="M37.28 45.87c-1.03-.72-2.58-.49-3.58.95c-1 1.45-.67 2.97.36 3.69s2.58.49 3.58-.95c1-1.45.67-2.97-.36-3.69" /></svg>
			</Circle>
		</div>
	</div>

	<AnimatedBeam bind:containerRef bind:fromRef={div1Ref} bind:toRef={div7Ref} />
	<AnimatedBeam bind:containerRef bind:fromRef={div2Ref} bind:toRef={div7Ref} />
	<AnimatedBeam bind:containerRef bind:fromRef={div3Ref} bind:toRef={div7Ref} />
	<AnimatedBeam bind:containerRef bind:fromRef={div4Ref} bind:toRef={div7Ref} />
</div>
