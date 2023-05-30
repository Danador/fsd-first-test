<template>
	<Container
		title="Фотографии товара"
		titleClass="!mb-0"
		containerClass="grid gap-6"
		:dark="dark"
	>
		<ProductPhoto
			:dark="dark"
			:images="images"
		/>
	</Container>
</template>

<script setup>
	import Container from '@components/Container/Container.vue'
	import ProductPhoto from '@components/ProductPhoto/ProductPhoto.vue'
	const props = defineProps({
		images: { type: Array, default: () => [] },
		dark: { type: Boolean, default: () => false }
	})
</script>

<style>

</style>
