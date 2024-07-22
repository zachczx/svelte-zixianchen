<script lang="ts">
	import { addNeumorphismInset, removeNeumorphismInset } from '$lib/Neumorphism';

	export let url: string = '';
	export let github: string = '';
	export let className: string = '';
</script>

<div class="mt-8 flex justify-center space-x-4">
	<!-- ci:external-link -->
	<a
		href={url}
		class="neumorphism flex h-12 w-12 items-center justify-center rounded-full border border-white"
		onkeydown={addNeumorphismInset}
		onmousedown={addNeumorphismInset}
		onmouseup={removeNeumorphismInset}
		onkeyup={removeNeumorphismInset}
		draggable="false"
		><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-gray-500" viewBox="0 0 24 24"
			><path
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 5H8.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C5 6.52 5 7.08 5 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V14m1-5V4m0 0h-5m5 0l-7 7" /></svg
		></a>

	<a
		href={github === '' || github === undefined ? '#' : github}
		class="neumorphism flex h-12 w-12 items-center justify-center rounded-full border border-white"
		onkeydown={addNeumorphismInset}
		onmousedown={addNeumorphismInset}
		onmouseup={removeNeumorphismInset}
		onkeyup={removeNeumorphismInset}
		draggable="false">
		<!-- tabler:brand-github-filled -->
		<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-gray-500" viewBox="0 0 24 24"
			><path
				d="M5.315 2.1c.791-.113 1.9.145 3.333.966l.272.161l.16.1l.397-.083a13.3 13.3 0 0 1 4.59-.08l.456.08l.396.083l.161-.1c1.385-.84 2.487-1.17 3.322-1.148l.164.008l.147.017l.076.014l.05.011l.144.047a1 1 0 0 1 .53.514a5.2 5.2 0 0 1 .397 2.91l-.047.267l-.046.196l.123.163c.574.795.93 1.728 1.03 2.707l.023.295L21 9.5c0 3.855-1.659 5.883-4.644 6.68l-.245.061l-.132.029l.014.161l.008.157l.004.365l-.002.213L16 21a1 1 0 0 1-.883.993L15 22H9a1 1 0 0 1-.993-.883L8 21v-.734c-1.818.26-3.03-.424-4.11-1.878l-.535-.766c-.28-.396-.455-.579-.589-.644l-.048-.019a1 1 0 0 1 .564-1.918c.642.188 1.074.568 1.57 1.239l.538.769c.76 1.079 1.36 1.459 2.609 1.191L8 17.562l-.018-.168a5.03 5.03 0 0 1-.021-.824l.017-.185l.019-.12l-.108-.024c-2.976-.71-4.703-2.573-4.875-6.139l-.01-.31L3 9.5a5.6 5.6 0 0 1 .908-3.051l.152-.222l.122-.163l-.045-.196a5.2 5.2 0 0 1 .145-2.642l.1-.282l.106-.253a1 1 0 0 1 .529-.514l.144-.047z" /></svg>
	</a>
</div>

<!-- mdi link circle -->
<!-- <a href={url}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			class="inline {className} hover:saturate-50"
			width="3rem"
			height="3rem"
			viewBox="0 0 24 24"
			><path
				d="M8.17 2.76A10.1 10.1 0 0 1 12 2c1.31 0 2.61.26 3.83.76c1.21.5 2.31 1.24 3.24 2.17s1.67 2.03 2.17 3.24c.5 1.22.76 2.52.76 3.83c0 2.65-1.05 5.2-2.93 7.07A9.97 9.97 0 0 1 12 22a10.1 10.1 0 0 1-3.83-.76a10 10 0 0 1-3.24-2.17A9.97 9.97 0 0 1 2 12c0-2.65 1.05-5.2 2.93-7.07c.93-.93 2.03-1.67 3.24-2.17M10 16h1v-2h-1c-.33 0-2-.1-2-2c0-1.83 1.54-2 2-2h1V8h-1c-1.61 0-4 1.07-4 4c0 2.94 2.39 4 4 4m3 0h1c1.61 0 4-1.06 4-4c0-2.93-2.39-4-4-4h-1v2h1c.33 0 2 .1 2 2c0 1.83-1.54 2-2 2h-1zm-4-3h6v-2H9z" /></svg
		></a> -->

<!-- mdi github circle -->
<!-- <a href={github === '' || github === undefined ? '#' : github}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			class="inline {className} hover:saturate-50"
			width="3rem"
			height="3rem"
			viewBox="0 0 24 24"
			><path
				d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg>
	</a> -->
