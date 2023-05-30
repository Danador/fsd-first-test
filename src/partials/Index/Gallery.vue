<template>
	<Container
		title="Рассмотрите товар со всех сторон"
	>
		<span class="block lg:text-center">Эксклюзивный товар, который послужит на долгие годы.</span>
		<Gallery
			swiperClass="aspect-square max-h-[280px] sm:max-h-[480px] sm:aspect-[2/1] mt-6"
			:swiperClass="swiperClass"
			:thumbClass="thumbClass"
			:slides="images"
		/>
	</Container>
</template>

<script setup>
	import Gallery from "@components/Gallery/Gallery.vue";
	import Container from "@components/Container/Container.vue"
	const props = defineProps ({
		images: { type: Array, default: () => [] },
		swiperClass: { type: String, default: () => '' },
		thumbClass: { type: String, default: () => '' }
	})
</script>

<style>

</style>
