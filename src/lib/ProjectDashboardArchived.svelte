<script>
	import rankamateLogo from '$lib/assets/rankamate-logo.webp?enhanced&w=90';
	import eatYourMedsLogo from '$lib/assets/eatyourmedslogo.webp?enhanced&w=250';
	import btonomicsOldLogo from '$lib/assets/btonomics_logo-3-300x100.webp?enhanced&w=150';
</script>

<figure class="content-center justify-items-center space-y-2 self-center lg:grid">
	<div class="avatar flex justify-center">
		<div class="w-20 rounded-full">
			<a href="/projects/eatyourmeds" aria-label="eatyourmeds link" class="group"
				><enhanced:img src={eatYourMedsLogo} alt="Eat Your Meds!" class="saturate-[0.1] group-hover:saturate-100"
				></enhanced:img>
			</a>
		</div>
	</div>
	<figcaption class="text-center italic">Medicine dose tracker</figcaption>
</figure>

<figure class="grid content-center justify-items-center space-y-2 self-center">
	<figcaption class="text-center">
		<a href="/projects/rankamate" class="group grid justify-items-center"
			><enhanced:img src={rankamateLogo} alt="Rank-a-Mate" class=" saturate-[0.1] group-hover:saturate-100"
			></enhanced:img>
			<div class="italic">Drag & drop ranking v0.1</div>
		</a>
	</figcaption>
</figure>

<figure class="grid content-center justify-items-center space-y-2 self-center">
	<figcaption class="text-center">
		<a href="/projects/btonomics-wordpress" class="group grid justify-items-center"
			><enhanced:img
				src={btonomicsOldLogo}
				alt="BTOnomics on Wordpress"
				class="mb-2 saturate-[0.1] group-hover:saturate-100"></enhanced:img>
			<div class="italic">BTOnomics on Wordpress</div>
		</a>
	</figcaption>
</figure>
