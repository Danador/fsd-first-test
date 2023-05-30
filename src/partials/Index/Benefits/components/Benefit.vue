<template>
	<div class="w-full transition-all grid gap-6 lg:gap-0 lg:grid-cols-2 items-center">
		<div class="grid gap-4 row-start-2 sm:row-start-1">
			<slot/>
		</div>
		<img
			:src="img"
			:class="[
				imgClass,
				'w-full aspect-[16/10] sm:aspect-[48/25] object-cover sm:max-h-[500px]',
				left ? 'lg:col-start-1 lg:row-start-1' : '',
				rounded ? 'rounded-2lg' : ''
			]"
		/>
	</div>
</template>

<script setup>
	const props = defineProps({
		alt: { type: String, default: () => '' },
		img: { type: String, default: () => '' },
		imgClass: { type: String, default: () => '' },
		left: { type: Boolean, default: () => false },
		rounded: { type: Boolean, default: () => false }
	})
</script>
