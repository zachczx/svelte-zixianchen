<script>
	let sections = gsap.utils.toArray('.scroll-content');
	gsap.registerPlugin(ScrollTrigger);
	let tl = gsap.matchMedia();
	tl.add('(min-width: 1028px)', () => {
		gsap.from('.stax', {
			scrollTrigger: {
				trigger: '.stax',
				start: 'center center',
				end: '+=500',
				scrub: true,
				markers: false,
				pin: true,
			},
			// yPercent: -50,
		});
	});
</script>
