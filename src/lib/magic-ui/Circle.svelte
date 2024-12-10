<script lang="ts">
	import { cn } from '$lib/utils';

	let className: any = '';
	export { className as class };
</script>

<div
	class={cn(
		'shadowtransition-all z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 bg-red-400 p-3 duration-200',
		className,
	)}>
	<slot></slot>
</div>
