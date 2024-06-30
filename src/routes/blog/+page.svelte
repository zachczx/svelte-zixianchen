<script>
	let { data } = $props();

	/**
	 * @function changeDateFormat - change dates from dd-mm-yyy to dd mmm yyy
	 * @param {Date} date - from .md file in date format
	 */
	function changeDateFormat(date) {
		let objectDate = new Date(date);

		let day = objectDate.getDate();

		let month = objectDate.getMonth();
		const monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const adjustedMonth = monthsList[month];

		let year = objectDate.getFullYear();

		return `${day} ${adjustedMonth} ${year}`;
	}
</script>

<svelte:head><title>Zixian's Blog</title></svelte:head>
<div class="space-y-8">
	{#each data.posts as post}
		<div class="items-end">
			<h2 class="text-2xl text-green-600 underline hover:text-orange-600">
				<a href="/blog/{post.slug}">{post.title}</a>
			</h2>
			<div>{changeDateFormat(post.date)}</div>
		</div>
	{/each}
</div>
