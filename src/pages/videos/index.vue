<template>
	<Layout
		:meta="videos.meta"
	>
		<Container
			class="!pb-12 lg:!pb-[100px]"
			breadcrumbTitle="Видеогалерея"
		>
			<Heading title="Видео"/>
			<p class="text-left lg:text-center text-dark-8">Здесь мы размещаем все видео-контент с полезной информацией для наших клиентов</p>
			<Videos :list="videos"/>
		</Container>
	</Layout>
</template>
<script setup>
	import { onBeforeMount, ref } from 'vue'
	import { Layout } from 'layouts/Layout';
	import { Videos, videosModel } from 'widgets/Videos'
	import Container from 'shared/ui/Container/Container.vue';
	import Heading from 'shared/ui/Heading/Heading.vue'
	import { getMedia } from 'tools/filters'

	let videos = ref([])
	onBeforeMount(async () => {
		videos.value = await videosModel.getVideos()
		videos.value.list = videos.value.list.map((i) => {
			i.video = getMedia(i.video)
			i.preview = getMedia(i.preview)
			return i
		})
	})
</script>