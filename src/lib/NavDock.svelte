<script lang="ts">
	interface NavDock {
		navCurrent: string;
		pathName: string;
	}
	let { navCurrent, pathName }: NavDock = $props();
</script>

<a
	href="/#header"
	class="dock group relative bg-transparent no-underline transition-all duration-200 ease-out hover:no-underline">
	<div
		class="group relative flex items-center justify-center rounded-full border border-white/20 bg-gray-50 transition-all duration-200 ease-out group-hover:shadow-lg group-hover:shadow-black/60
   ">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			class="noto:house grayscale-100 group-hover:grayscale-0"
			viewBox="0 0 128 128"
			><path fill="#AB5832" d="M19.16 48.94V28.58l-1.64.1V16.14l15.82-.1v12.35H31.7v11.96z" /><path
				fill="#FFF3E1"
				d="M64.11 23.33L18.67 68.99l.35 42.21l89.75-.85l.13-45z" /><path
				fill="#5F4E47"
				d="m16.97 103.79l3.14-1.73V67.98l-2.92 1.95c-.01 0 .32 33.86-.22 33.86m90.23-33.97v32.03l3.14 1.73V71.01z" /><path
				fill="#BCAA93"
				d="M64.42 28.21L17.18 72.42V61.27l47.29-44.79l45.87 47.5v9.41z" /><path
				fill="#AB5832"
				d="m12.55 59.36l-2.77 5.11l7.43-.11s46.35-45.08 47.35-45.12c1.21-.05 45.76 45.91 45.76 45.91l6.59-.1l-49.44-53.26l-7.26-.48z" /><path
				fill="#ED6C31"
				d="M4 63.19c-.78.95-.01 1.45.62 1.45s7.89-.21 7.89-.21l50.04-48.69s1.15-1.18 1.97-1.14c.89.04 2.04 1.17 2.04 1.17l50.28 49.29s5.73.02 6.64-.21c.99-.24.49-1.18-.73-2.49c-.9-.97-51.73-51.25-52.57-52.12c-2.5-2.58-3.72-4.08-6.08-3.98c-2.37.1-3.77 1.85-6.14 4.03c-.7.66-53.63 52.5-53.96 52.9" /><path
				fill="#A6CFD5"
				d="M93.5 80.83h10.25V72.3a2.87 2.87 0 0 0-2.87-2.87H93.5zm-3.08 0v-11.4h-8a2.87 2.87 0 0 0-2.87 2.87v8.54h10.87zm0 3.24H79.55v8a2.87 2.87 0 0 0 2.87 2.87h8zm3.08 0v10.87h7.38a2.87 2.87 0 0 0 2.87-2.87v-8zm-56.75-3.24H47V72.3a2.87 2.87 0 0 0-2.87-2.87h-7.38zm-3.09 0v-11.4h-8a2.87 2.87 0 0 0-2.87 2.87v8.54h10.87zm0 3.24H22.8v8a2.87 2.87 0 0 0 2.87 2.87h8V84.07zm3.09 0v10.87h7.38A2.87 2.87 0 0 0 47 92.07v-8z" /><path
				fill="#D27857"
				d="M50.34 106.73s-.15-24.74 0-30.99c.15-6.24 6.01-11.64 12.8-11.41c8.4.29 12.72 5.01 13.03 11.1s.31 31.68.31 31.68z" /><path
				fill="#AB5932"
				d="M53.47 108.07s-.12-26.36 0-31.24c.15-6.05 4.71-9.23 10.01-8.93c6.17.35 9.22 3.63 9.46 8.4c.24 4.76.24 31.79.24 31.79z" /><path
				fill="#D27857"
				d="M69.99 86.58c-.02-4.34-.06-8.17-.12-9.34c-.16-3.15-2.4-5.6-6.75-5.75c-3.51-.12-6.4 2.62-6.48 5.85c-.03 1.19-.02 4.93 0 9.19zm-13.32 4.87c.04 5.81.09 11.16.09 11.16l13.27.04s0-5.33-.02-11.14z" /><path
				fill="#FFBA02"
				d="M70.03 88.81c-.05 1.41.52 2.55 2.19 2.55s2.28-.78 2.4-2.29c.1-1.35-.83-2.55-2.4-2.45c-1.56.11-2.15 1.2-2.19 2.19" /><path
				fill="#728037"
				d="M79.61 116.31s10.88.11 18.74-.12s13.55.12 14.72-1.06c1.17-1.17 1.15-11.14-4.3-13.84c-5.01-2.48-8.25.04-9.97.21c-2.27.23-5.08-1.18-7.14-1.22c-8.51-.18-11.49 6.51-11.49 6.51zm-65.08-.82c.91.85 7.86.88 16.25.82s15.14.02 15.14.02l1.4-8.47l-1.7-1.41s.19-4.24-5.16-5.69c-3.7-1-6.92.65-10.03.7c-3.11.06-5.98-1.35-9.44-.53c-3.22.76-5.73 2.86-6.75 7.1c-.71 2.94-.53 6.69.29 7.46" /><path
				fill="#B0B0B0"
				d="m44.92 125.17l.07-8.85h.65l-.01-9.86h34.73l-.12 9.86H81v8.62c-.01-.01-36.08.28-36.08.23" /><path
				fill="#9B9B9B"
				d="M80.99 121.3v3.63l-36.08.24l.03-3.9zm-35.37-8.82l34.65.01v3.82H45.62z" /></svg>
	</div>
	<span
		class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-full py-0.5 text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex"
		>Home</span>
</a>

<a
	href="/#about"
	class="dock group relative bg-transparent no-underline transition-all duration-200 ease-out hover:no-underline">
	<div
		class="group relative flex items-center justify-center rounded-full border border-white/20 bg-gray-50 transition-all duration-200 ease-out group-hover:shadow-lg group-hover:shadow-black/60
       ">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			class="fluent-color:scan-person-16 grayscale-100 group-hover:grayscale-0"
			viewBox="0 0 16 16"
			><g fill="none"
				><path
					fill="url(#fluentColorScanPerson160)"
					d="M3 12.5A1.5 1.5 0 0 1 4.5 11h7a1.5 1.5 0 0 1 1.5 1.5V14H3z" /><path
					fill="url(#fluentColorScanPerson161)"
					d="M3 12.5A1.5 1.5 0 0 1 4.5 11h7a1.5 1.5 0 0 1 1.5 1.5V14H3z" /><path
					fill="url(#fluentColorScanPerson162)"
					d="M10.75 6.75a2.75 2.75 0 1 0-5.5 0a2.75 2.75 0 0 0 5.5 0" /><path
					fill="url(#fluentColorScanPerson163)"
					fill-rule="evenodd"
					d="M3.5 3a.5.5 0 0 0-.5.5V5a1 1 0 0 1-2 0V3.5A2.5 2.5 0 0 1 3.5 1H5a1 1 0 0 1 0 2zM10 2a1 1 0 0 1 1-1h1.5A2.5 2.5 0 0 1 15 3.5V5a1 1 0 1 1-2 0V3.5a.5.5 0 0 0-.5-.5H11a1 1 0 0 1-1-1m-8 8a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .5.5H5a1 1 0 1 1 0 2H3.5A2.5 2.5 0 0 1 1 12.5V11a1 1 0 0 1 1-1m12 0a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 1-2.5 2.5H11a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5V11a1 1 0 0 1 1-1"
					clip-rule="evenodd" /><defs
					><linearGradient
						id="fluentColorScanPerson160"
						x1="5.378"
						x2="5.995"
						y1="11.399"
						y2="14.682"
						gradientUnits="userSpaceOnUse"
						><stop offset=".125" stop-color="#9C6CFE" /><stop offset="1" stop-color="#7A41DC" /></linearGradient
					><linearGradient
						id="fluentColorScanPerson161"
						x1="8"
						x2="8.851"
						y1="10.643"
						y2="15.941"
						gradientUnits="userSpaceOnUse"
						><stop stop-color="#885EDB" stop-opacity="0" /><stop offset="1" stop-color="#E362F8" /></linearGradient
					><linearGradient
						id="fluentColorScanPerson162"
						x1="6.558"
						x2="9.361"
						y1="4.731"
						y2="9.207"
						gradientUnits="userSpaceOnUse"
						><stop offset=".125" stop-color="#9C6CFE" /><stop offset="1" stop-color="#7A41DC" /></linearGradient
					><linearGradient
						id="fluentColorScanPerson163"
						x1=".447"
						x2="11.425"
						y1="-.172"
						y2="17.561"
						gradientUnits="userSpaceOnUse"
						><stop offset=".015" stop-color="#3DCBFF" /><stop offset="1" stop-color="#0094F0" /></linearGradient
					></defs
				></g
			></svg>
	</div>
	<span
		class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-full py-0.5 text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex"
		>About</span>
</a>

<a
	href="/projects"
	class="dock group relative bg-transparent no-underline transition-all duration-200 ease-out hover:no-underline">
	<div
		class="group relative flex items-center justify-center rounded-full border border-white/20 bg-gray-50 text-red-950 transition-all duration-200 ease-out group-hover:shadow-lg group-hover:shadow-black/60
  ">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			class="fluent-color:document-folder-16 grayscale-100 group-hover:grayscale-0"
			viewBox="0 0 16 16"
			><g fill="none"
				><path
					fill="url(#fluentColorDocumentFolder160)"
					d="M5 5.5A1.5 1.5 0 0 1 6.5 4h5A1.5 1.5 0 0 1 13 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 5 10.5z" /><path
					fill="url(#fluentColorDocumentFolder161)"
					d="M5 5.5A1.5 1.5 0 0 1 6.5 4h5A1.5 1.5 0 0 1 13 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 5 10.5z" /><path
					fill="url(#fluentColorDocumentFolder163)"
					d="M3 3.5A1.5 1.5 0 0 1 4.5 2h5A1.5 1.5 0 0 1 11 3.5v7A1.5 1.5 0 0 1 9.5 12h-5A1.5 1.5 0 0 1 3 10.5z" /><path
					fill="url(#fluentColorDocumentFolder162)"
					d="M3.5 5A1.5 1.5 0 0 0 2 6.5V12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.5a1.5 1.5 0 0 0-1.5-1.5h-1.586a.5.5 0 0 1-.353-.146L6.146 5.439A1.5 1.5 0 0 0 5.086 5z" /><defs
					><linearGradient
						id="fluentColorDocumentFolder160"
						x1="14.2"
						x2="15.247"
						y1="13.539"
						y2="5.069"
						gradientUnits="userSpaceOnUse"
						><stop stop-color="#BB45EA" /><stop offset="1" stop-color="#9C6CFE" /></linearGradient
					><linearGradient
						id="fluentColorDocumentFolder161"
						x1="13"
						x2="11"
						y1="6.769"
						y2="6.769"
						gradientUnits="userSpaceOnUse"
						><stop offset=".338" stop-color="#5750E2" stop-opacity="0" /><stop
							offset="1"
							stop-color="#5750E2" /></linearGradient
					><linearGradient
						id="fluentColorDocumentFolder162"
						x1="4.571"
						x2="4.571"
						y1="5"
						y2="17.273"
						gradientUnits="userSpaceOnUse"
						><stop offset=".241" stop-color="#FFD638" /><stop offset=".637" stop-color="#FAB500" /><stop
							offset=".985"
							stop-color="#CA6407" /></linearGradient
					><radialGradient
						id="fluentColorDocumentFolder163"
						cx="0"
						cy="0"
						r="1"
						gradientTransform="matrix(5.2 -7.66667 11.90405 8.07405 5.4 10)"
						gradientUnits="userSpaceOnUse"
						><stop offset=".228" stop-color="#2764E7" /><stop offset=".685" stop-color="#5CD1FF" /><stop
							offset="1"
							stop-color="#6CE0FF" /></radialGradient
					></defs
				></g
			></svg>
	</div>
	<span
		class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-full py-0.5 text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex">
		Projects
	</span>
</a>

<a
	href="/contact"
	class="dock group relative bg-transparent no-underline transition-all duration-200 ease-out hover:no-underline">
	<div
		class="group relative flex items-center justify-center rounded-full border border-white/20 bg-blue-50 text-red-950 transition-all duration-200 ease-out group-hover:shadow-lg group-hover:shadow-black/60
        {pathName === '/contact' ? 'ring-4 ring-white/70' : undefined}
        ">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			class="fluent-color:mail-24 grayscale-100 group-hover:grayscale-0"
			viewBox="0 0 24 24"
			><g fill="none"
				><path
					fill="#367AF2"
					d="M22 7.5v9.25a3.25 3.25 0 0 1-3.065 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V7.5l9.652 5.056a.75.75 0 0 0 .696 0z" /><path
					fill="url(#fluentColorMail240)"
					d="M22 7.5v9.25a3.25 3.25 0 0 1-3.065 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V7.5l9.652 5.056a.75.75 0 0 0 .696 0z" /><path
					fill="url(#fluentColorMail241)"
					d="M22 7.5v9.25a3.25 3.25 0 0 1-3.065 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V7.5l9.652 5.056a.75.75 0 0 0 .696 0z" /><path
					fill="url(#fluentColorMail242)"
					fill-opacity=".75"
					d="M22 7.5v9.25a3.25 3.25 0 0 1-3.065 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V7.5l9.652 5.056a.75.75 0 0 0 .696 0z" /><path
					fill="url(#fluentColorMail243)"
					fill-opacity=".7"
					d="M22 7.5v9.25a3.25 3.25 0 0 1-3.065 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V7.5l9.652 5.056a.75.75 0 0 0 .696 0z" /><path
					fill="url(#fluentColorMail244)"
					d="m2 7.86l9.652 5.056a.75.75 0 0 0 .696 0L22 7.86v-.61A3.25 3.25 0 0 0 18.75 4H5.25A3.25 3.25 0 0 0 2 7.25z" /><defs
					><linearGradient
						id="fluentColorMail240"
						x1="14.539"
						x2="20.005"
						y1="9.95"
						y2="20.515"
						gradientUnits="userSpaceOnUse"
						><stop offset=".199" stop-color="#0094F0" stop-opacity="0" /><stop
							offset=".431"
							stop-color="#0094F0" /></linearGradient
					><linearGradient
						id="fluentColorMail241"
						x1="9.143"
						x2="3.828"
						y1="8.816"
						y2="20.865"
						gradientUnits="userSpaceOnUse"
						><stop offset=".191" stop-color="#0094F0" stop-opacity="0" /><stop
							offset=".431"
							stop-color="#0094F0" /></linearGradient
					><linearGradient
						id="fluentColorMail242"
						x1="17.273"
						x2="18.143"
						y1="14.957"
						y2="21.151"
						gradientUnits="userSpaceOnUse"
						><stop stop-color="#2764E7" stop-opacity="0" /><stop offset="1" stop-color="#2764E7" /></linearGradient
					><linearGradient
						id="fluentColorMail243"
						x1="15.095"
						x2="16.681"
						y1="9.035"
						y2="21.643"
						gradientUnits="userSpaceOnUse"
						><stop offset=".533" stop-color="#FF6CE8" stop-opacity="0" /><stop
							offset="1"
							stop-color="#FF6CE8" /></linearGradient
					><linearGradient
						id="fluentColorMail244"
						x1="7.942"
						x2="13.98"
						y1="1.151"
						y2="17.089"
						gradientUnits="userSpaceOnUse"
						><stop stop-color="#6CE0FF" /><stop offset=".462" stop-color="#29C3FF" /><stop
							offset="1"
							stop-color="#4894FE" /></linearGradient
					></defs
				></g
			></svg>
	</div>
	<span
		class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-full py-0.5 text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex"
		>Contact</span>
</a>

<a
	href="https://www.linkedin.com/in/zixianchen/"
	class="dock group relative bg-transparent no-underline transition-all duration-200 ease-out hover:no-underline">
	<div
		class="group relative flex items-center justify-center rounded-full border border-white/20 bg-gray-50 text-red-950 transition-all duration-200 ease-out group-hover:shadow-lg group-hover:shadow-black/60">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="0.9em"
			height="0.9em"
			class="skill-icons:linkedin grayscale-100 group-hover:grayscale-0"
			viewBox="0 0 256 256"
			><g fill="none"
				><rect width="256" height="256" fill="#fff" rx="60" /><rect
					width="256"
					height="256"
					fill="#0A66C2"
					rx="60" /><path
					fill="#fff"
					d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4" /></g
			></svg>
	</div>
	<span
		class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-full py-0.5 text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex"
		>LinkedIn</span>
</a>

<a
	href="https://github.com/zachczx?tab=repositories"
	class="dock group relative bg-transparent no-underline transition-all duration-200 ease-out hover:no-underline">
	<div
		class="group relative flex items-center justify-center rounded-full border border-white/20 bg-gray-50 text-red-950 transition-all duration-200 ease-out group-hover:shadow-lg group-hover:shadow-black/60">
		<svg
			width="1em"
			height="1em"
			class="grayscale-100 group-hover:grayscale-0"
			viewBox="0 0 98 96"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xml:space="preserve"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
			<path
				d="M48.854,0C21.839,0 0,22 0,49.217C0,70.973 13.993,89.389 33.405,95.907C35.832,96.397 36.721,94.848 36.721,93.545C36.721,92.404 36.641,88.493 36.641,84.418C23.051,87.352 20.221,78.551 20.221,78.551C18.037,72.847 14.801,71.381 14.801,71.381C10.353,68.366 15.125,68.366 15.125,68.366C20.059,68.692 22.648,73.418 22.648,73.418C27.015,80.914 34.052,78.796 36.883,77.492C37.287,74.314 38.582,72.114 39.957,70.892C29.118,69.751 17.714,65.514 17.714,46.609C17.714,41.231 19.654,36.831 22.728,33.409C22.243,32.187 20.544,27.134 23.214,20.371C23.214,20.371 27.339,19.067 36.64,25.423C40.622,24.346 44.729,23.798 48.854,23.793C52.979,23.793 57.184,24.364 61.067,25.423C70.369,19.067 74.494,20.371 74.494,20.371C77.164,27.134 75.464,32.187 74.979,33.409C78.134,36.831 79.994,41.231 79.994,46.609C79.994,65.514 68.59,69.669 57.67,70.892C59.45,72.44 60.986,75.373 60.986,80.018C60.986,86.618 60.906,91.915 60.906,93.544C60.906,94.848 61.796,96.397 64.222,95.908C83.634,89.388 97.627,70.973 97.627,49.217C97.707,22 75.788,0 48.854,0Z"
				style="fill:rgb(36,41,47);" />
		</svg>
	</div>
	<span
		class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-full py-0.5 text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex"
		>GitHub</span>
</a>

<a href="/blog" class="dock group relative bg-transparent transition-all duration-200 ease-out">
	<div
		class="group relative flex items-center justify-center rounded-full border border-white/20 bg-gray-50 text-red-950 transition-all duration-200 ease-out group-hover:shadow-lg group-hover:shadow-black/60">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			class="fluent-color:library-16 grayscale-100 group-hover:grayscale-0"
			viewBox="0 0 16 16"
			><g fill="none"
				><path
					fill="url(#fluentColorLibrary160)"
					d="M1 3.25C1 2.56 1.56 2 2.249 2h.5c.69 0 1.249.56 1.249 1.25v9.495c0 .69-.56 1.25-1.25 1.25H2.25A1.25 1.25 0 0 1 1 12.744z" /><path
					fill="url(#fluentColorLibrary161)"
					d="M4.997 3.25c0-.69.559-1.25 1.249-1.25h.5c.689 0 1.248.56 1.248 1.25v9.495c0 .69-.56 1.25-1.249 1.25h-.5a1.25 1.25 0 0 1-1.248-1.25z" /><path
					fill="url(#fluentColorLibrary162)"
					d="M11.972 4.777a1.25 1.25 0 0 0-1.571-.713l-.582.204a1.25 1.25 0 0 0-.746 1.645l2.937 7.304c.249.62.94.933 1.571.713l.582-.204a1.25 1.25 0 0 0 .746-1.646z" /><path
					fill="url(#fluentColorLibrary163)"
					d="M1 4h3v2H1z" /><path
					fill="url(#fluentColorLibrary164)"
					d="M12.31 5.619L9.425 6.787l.742 1.846l2.889-1.165z" /><path
					fill="url(#fluentColorLibrary165)"
					d="M8 4H5v2h3z" /><defs
					><linearGradient
						id="fluentColorLibrary160"
						x1="4.468"
						x2="5.643"
						y1="3.994"
						y2="17.419"
						gradientUnits="userSpaceOnUse"
						><stop stop-color="#43E5CA" /><stop offset="1" stop-color="#2764E7" /></linearGradient
					><linearGradient
						id="fluentColorLibrary161"
						x1="4.468"
						x2="5.643"
						y1="3.994"
						y2="17.419"
						gradientUnits="userSpaceOnUse"
						><stop stop-color="#43E5CA" /><stop offset="1" stop-color="#2764E7" /></linearGradient
					><linearGradient
						id="fluentColorLibrary162"
						x1="4.468"
						x2="5.643"
						y1="3.994"
						y2="17.419"
						gradientUnits="userSpaceOnUse"
						><stop stop-color="#43E5CA" /><stop offset="1" stop-color="#2764E7" /></linearGradient
					><linearGradient
						id="fluentColorLibrary163"
						x1="5"
						x2="8.891"
						y1=".178"
						y2="1.057"
						gradientUnits="userSpaceOnUse"
						><stop stop-color="#9FF0F9" /><stop offset="1" stop-color="#6CE0FF" /></linearGradient
					><linearGradient
						id="fluentColorLibrary164"
						x1="5"
						x2="8.891"
						y1=".178"
						y2="1.057"
						gradientUnits="userSpaceOnUse"
						><stop stop-color="#9FF0F9" /><stop offset="1" stop-color="#6CE0FF" /></linearGradient
					><linearGradient
						id="fluentColorLibrary165"
						x1="5"
						x2="8.891"
						y1=".178"
						y2="1.057"
						gradientUnits="userSpaceOnUse"
						><stop stop-color="#9FF0F9" /><stop offset="1" stop-color="#6CE0FF" /></linearGradient
					></defs
				></g
			></svg>
		<span
			class="bg-neutral absolute left-1/2 hidden h-auto w-full -translate-x-1/2 justify-center rounded-full py-0.5 text-sm font-bold text-white/90 group-hover:-top-5 group-hover:flex"
			>Blog</span>
	</div>
</a>

<style>
	a {
		--font-scaler: 0.3;
		--dimensions-scaler: 0.35;
		--margin-scaler: 0.2;
	}

	.dock {
		font-size: calc(var(--font-scaler) * 6rem);
		div {
			filter: saturate(0.5);
			height: calc(var(--dimensions-scaler) * 9rem);
			width: calc(var(--dimensions-scaler) * 9rem);
			flex-basis: auto;

			&:hover {
				opacity: 100%;
			}
		}
	}

	.dock:hover {
		font-size: calc(var(--font-scaler) * 9rem);
		div {
			filter: saturate(1);
			height: calc(var(--dimensions-scaler) * 13rem);
			width: calc(var(--dimensions-scaler) * 13rem);
		}
		margin-bottom: calc(var(--margin-scaler) * -6rem);
	}

	/* Adjacent to hover */
	.dock:hover + .dock,
	.dock:has(+ .dock:hover) {
		font-size: calc(var(--font-scaler) * 8rem);
		/* background-color: fuchsia; */
		div {
			height: calc(var(--dimensions-scaler) * 11rem);
			width: calc(var(--dimensions-scaler) * 11rem);
		}
		margin-bottom: calc(var(--margin-scaler) * -3.5rem);
	}

	/* Next next - beside adjacent */
	.dock:hover + .dock + .dock,
	.dock:has(+ .dock + .dock:hover) {
		font-size: calc(var(--font-scaler) * 7rem);
		/* background-color: green; */
		div {
			height: calc(var(--dimensions-scaler) * 10rem);
			width: calc(var(--dimensions-scaler) * 10rem);
		}
		margin-bottom: calc(var(--margin-scaler) * -2rem);
	}

	/* Next next next */
	.dock:hover + .dock + .dock + .dock,
	.dock:has(+ .dock + .dock + .dock:hover) {
		font-size: calc(var(--font-scaler) * 6rem);
		/* background-color: purple; */
		div {
			height: calc(var(--dimensions-scaler) * 9rem);
			width: calc(var(--dimensions-scaler) * 9rem);
		}
		margin-bottom: calc(var(--margin-scaler) * -1rem);
	}
</style>
