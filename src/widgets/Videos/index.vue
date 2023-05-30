<template>
	<ul v-if="list" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-2.5 gap-y-6 mt-6">
		<li
			v-for="(item, index) in list.list"
			:key="item"
			class="relative grid gap-y-1"
		>
			<PreviewVideo
				:preview="item.preview"
				@click="
					open.set('video'),
					slideRecording(index)
				"
				videoClass="lg:max-h-[160px]"
			/>
			<span class="font-second font-bold text-dark-8">{{ item.title }}</span>
		</li>
	</ul>
	<Modal
		v-if="list"
		name="video"
	>
		<Swiper
			@swiper="SwiperInit"
			:initial-slide="indexSlide"
			:modules="[Navigation]"
			:space-between="16"
			:navigation="{
				prevEl: prev,
				nextEl: next
			}"
			class="pt-14 lg:pt-0 container relative h-full max-h-[700px] w-full"
		>
			<SwiperSlide
				v-for="(item, index) in list.list"
				:key="item"
				class="w-auto"
			>
				<Video
					:index="index"
					:indexSlide="indexSlide"
					:src="item.video"
				/>
			</SwiperSlide>
			<button
				@click="indexSlide--"
				ref="prev"
				:class="lg ? 'p-3 left-6' : 'p-1.5 left-4'"
				class="transition-all hover:bg-dark-4 outline-none ring-1 ring-transparent focus:outline-none focus-visible:bg-dark-4 focus-visible:ring-dark-7 active:bg-dark-5 active:text-dark-3 disabled:opacity-0 disabled:invisible absolute -translate-y-1/2 top-1/2 left-0 z-10 rounded-lg text-white w-max bg-dark-7 rotate-180"
			>
				<Icon
					name="arrow-right"
					:size="lg ? 'w-9 h-9' : 'w-5 h-5'"
				/>
			</button>
			<button
				@click="indexSlide++"
				ref="next"
				:class="lg ? 'p-3 right-6' : 'p-1.5 right-4'"
				class="transition-all hover:bg-dark-4 outline-none ring-1 ring-transparent focus:outline-none focus-visible:bg-dark-4 focus-visible:ring-dark-7 active:bg-dark-5 active:text-dark-3 disabled:opacity-0 disabled:invisible absolute -translate-y-1/2 top-1/2 right-0 z-10 p-2 rounded-lg text-white w-max bg-dark-7"
			>
				<Icon
					name="arrow-right"
					:size="lg ? 'w-9 h-9' : 'w-5 h-5'"
				/>
			</button>
			<button
				@click="open.set('')"
				:class="lg ? 'p-2 top-6 right-6' : 'p-1 top-[72px] right-4'"
				class="transition-all hover:bg-dark-4 outline-none ring-1 ring-transparent focus:outline-none focus-visible:bg-dark-4 focus-visible:ring-dark-7 active:bg-dark-5 active:text-dark-3 disabled:opacity-0 disabled:invisible absolute z-10 p-2 rounded-lg text-white w-max bg-dark-7"
			>
				<Icon
					name="close"
					:size="lg ? 'w-5 h-5' : 'w-3 h-3'"
				/>
			</button>
		</Swiper>
	</Modal>
</template>

<script setup>
	import Icon from 'shared/ui/Icon/Icon.vue'
	import Modal from 'shared/ui/Modal/views/Modal.vue'
	import PreviewVideo from '@widgets/Videos/components/PreviewVideo.vue'
	import Video from '@widgets/Videos/components/Video.vue'
	import { ref } from 'vue'
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Navigation } from 'swiper';
	import { useStore } from '@nanostores/vue';
	import { open } from 'shared/ui/Modal/store/Modal'
	import useMedia from '@tools/media'

	const props  = defineProps({
		list: { type: Object, default: () => {} }
	})

	const $open = useStore(open)
	const { lg } = useMedia()
	const prev = ref(null)
	const next = ref(null)
	const indexSlide = ref(null)

	const slideRecording = (i) => {
		indexSlide.value = i
	}

	const SwiperInit = (swiper) => {
		swiper.value = swiper;
	};
</script>

<style>

</style>
