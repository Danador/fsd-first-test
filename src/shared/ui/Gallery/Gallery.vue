<template>
	<div class="grid gap-6">
		<Swiper
			:slides-per-view="'auto'"
			:modules="[Thumbs, Pagination, Navigation]"
			:pagination="{ clickable: true }"
			:thumbs="{ swiper: thumbs }"
			:navigation="{
				prevEl: prev,
				nextEl: next
			}"
			lazy
			loop
			freeMode
			observer
			:space-between="sm ? 10 : 0"
			:class="`${ swiperClass } photo-swiper lg:pb-8 rounded-2lg ring-1 ring-gray-5 sm:ring-transparent w-full grid-cols-full`"
		>
			<SwiperSlide
				v-for="(item, i) in slides"
				:key="i"
				class="bg-cover lg:rounded-2lg lg:ring-1 lg:ring-gray-4 bg-center h-full"
				:style="`background-image: url(${item})`"
			>
			</SwiperSlide>
		</Swiper>
		<div
			:class="thumbClass"
			class="w-full relative hidden sm:grid mx-auto"
		>
			<Swiper
				:modules="[Thumbs, Navigation]"
				watch-slides-progress
				:slides-per-view="'auto'"
				:space-between="24"
				:class="thumbClass"
				class="py-2 px-1 w-full"
				lazy
				loop
				@swiper="ThumbsSwiper"
			>
				<SwiperSlide
					v-for="(item, i) in slides"
					:key="i"
					class="w-auto h-[132px] rounded-2lg"
				>
					<button
						class="w-[132px] h-full outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-3 transition-all hover:ring-dark-3 ring-gray-5 cursor-pointer rounded-2lg bg-cover p-1 bg-no-repeat bg-center"
						:style="`background-image: url(${item})`"
					></button>
				</SwiperSlide>
			</Swiper>
			<button
				v-if="slides.length > 6"
				ref="prev"
				class="hidden btn lg:block transition-all hover:bg-dark-4 outline-none ring-1 ring-transparent focus:outline-none focus-visible:bg-dark-4 focus-visible:ring-dark-7 active:bg-dark-5 active:text-dark-3 disabled:opacity-0 disabled:invisible absolute -translate-y-1/2 top-1/2 left-0 z-10 p-2 rounded-lg text-white w-max bg-dark-7 rotate-180"
			>
				<Icon
					name="arrow-right"
					:size="buttonBig ? 'w-9 h-9' : 'w-7 h-7'"
				/>
			</button>
			<button
				v-if="slides.length > 6"
				ref="next"
				:class="buttonBig ? '' : ''"
				class="hidden btn lg:block transition-all hover:bg-dark-4 outline-none ring-1 ring-transparent focus:outline-none focus-visible:bg-dark-4 focus-visible:ring-dark-7 active:bg-dark-5 active:text-dark-3 disabled:opacity-0 disabled:invisible absolute -translate-y-1/2 top-1/2 right-0 z-10 p-2 rounded-lg text-white w-max bg-dark-7"
			>
				<Icon
					name="arrow-right"
					:size="buttonBig ? 'w-9 h-9' : 'w-7 h-7'"
				/>
			</button>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Thumbs, Pagination, Navigation } from 'swiper';
	import Icon from 'shared/ui/Icon/Icon.vue'
	import useMedia from '@tools/media'
	const { sm } = useMedia()

	const prev = ref(null)
	const next = ref(null)
	const thumbs = ref(null);

	const ThumbsSwiper = (swiper) => {
		thumbs.value = swiper;
	};

	const props = defineProps({
		slides: { type: Array, default: () => [] },
		swiperClass: { type: String, default: () => '' },
		thumbClass: { type: String, default: () => '' },
		buttonBig: { type: Boolean, default: () => false },
	})
</script>

<style>
.swiper-slide-thumb-active {
	@apply ring-1 ring-gray-2 transition-all;
}
.swiper-pagination {
	max-width: max-content;
	display: flex;
	align-items: center;
	position: absolute;
	@apply sm:hidden;
}
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
	@apply left-1/2 -translate-x-1/2 bottom-2.5;
}
.swiper-pagination-bullet {
	@apply bg-dark-8;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
	@apply bg-dark-4;
}
</style>
