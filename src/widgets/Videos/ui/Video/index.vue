<template>
	<div class="relative h-full">
		<video
			ref="video"
			controls
			class="w-full h-full bg-dark-8 rounded-2lg"
			:src="src"
		></video>
	</div>
</template>

<script setup>
	import Icon from '@components/Icon/Icon.vue'
	import useMedia from '@tools/media'
	import { onMounted, ref, watch } from 'vue'

	const emit = defineEmits(['click'])

	const props = defineProps({
		index: { type: Number, default: () => null },
		indexSlide: { type: Number, default: () => null },
		src: { type: String, default: () => null }
	})

	const video = ref(null)

	const videoPlay = () => {
		props.indexSlide === props.index ? video.value.play() : video.value.pause()
	}

	watch(() => props.indexSlide, () => {
		videoPlay()
	})

	// videoPlay()
	onMounted(() => videoPlay())

	const { lg } = useMedia()
	// const video = ref(null)
</script>

<style>

</style>
