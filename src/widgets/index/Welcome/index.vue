<template>
	<section
		class="relative h-[calc(100vh-var(--size))] [--size:110px] lg:[--size:96px] max-w-[1920px] mx-auto"
	>
		<Swiper
			class="w-full h-full"
			:slides-per-view="1"
			:modules="modules"
			lazy
			loop
			:pagination="{
				clickable: true,
				dynamicBullets: true
			}"
			:navigation="{
				prevEl: prev,
				nextEl: next
			}"
			:autoplay="{
				delay: 3000,
				disableOnInteraction: false,
				waitForTransition: false,
			}"
			@swiper="WelcomeSwiper"
		>
			<SwiperSlide v-for="item in list" :key="item.id">
				<div class="relative w-full h-full">
					<div class="bg-dark-8/[0.65] absolute inset-0 z-[10]"></div>
					<div
						:style="`background-image: url('${item}')`"
						class="bg-no-repeat aspect-[160/231] w-full h-full bg-center bg-cover"
					></div>
				</div>
			</SwiperSlide>
			<div class="grid grid-flow-col z-10 bottom-[29px] left-1/2 -translate-x-1/2 gap-x-[120px] items-center absolute">
				<button
					ref="prev"
					class="transition-all rounded-md ring-1 ring-transparent hover:bg-white hover:text-dark-8 outline-none focus:outline-none focus-visible:ring-dark-3 focus-visible:bg-white focus-visible:text-dark-8 active:text-dark-8 active:bg-light-5 disabled:bg-gray-5 disabled:text-gray-3 p-1 text-white rotate-180"
				>
					<Icon
						name="arrow-right"
						size="w-4 h-4"
					/>
				</button>
				<button
					ref="next"
					class="transition-all rounded-md ring-1 ring-transparent hover:bg-white hover:text-dark-8 outline-none focus:outline-none focus-visible:ring-dark-3 focus-visible:bg-white focus-visible:text-dark-8 active:text-dark-8 active:bg-light-5 disabled:bg-gray-5 disabled:text-gray-3 p-1 text-white"
				>
					<Icon
						name="arrow-right"
						size="w-4 h-4"
					/>
				</button>
			</div>
		</Swiper>
		<div class="absolute inset-0 container mx-auto w-full h-full flex items-center justify-center px-2.5">
			<div class="grid z-[5] gap-y-6 text-center max-w-[700px] text-white">
				<span class="text-Ubuntu-xl leading-8 sm:text-Ubuntu-3xl lg:text-Ubuntu-4xl font-second">Прочный поликарбонат с технологией Borrex</span>
				<p class="text-Sans-sm sm:text-Sans-bold-base">Отличная замена для хрупкого и ненадежного стекла, подвергающегося неблагоприятному воздействию осадков и других внешних факторов.</p>
				<div class="grid gap-y-2.5 sm:grid-cols-2 gap-x-2.5 w-full sm:w-auto sm:mx-auto">
					<Button
						class="w-full max-w-xs mx-auto sm:max-w-max"
						theme="dark"
						:big="lg"
						:small="!sm"
						href="/catalog/"
					> Перейти в каталог </Button>
					<Button
						class="w-full max-w-xs mx-auto sm:max-w-max"
						@click="open.set('welcome')"
						theme="stroke"
						:big="lg"
						:small="!sm"
					>
						Связаться с нами
					</Button>
				</div>
			</div>
		</div>
		<Modal name="welcome">
			<Form
				title="Связаться с нами"
				modal
			/>
		</Modal>
	</section>
</template>

<script setup>
	import { Pagination, Navigation, Autoplay } from "swiper";
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { ref, onMounted } from 'vue'
	import Button from "@shared/Button/Button.vue";
	import Icon from "@shared/Icon/Icon.vue"
	import Modal from "@shared/Modal/views/Modal.vue";
	import { open } from "@shared/Modal/store/Modal";
	import useMedia from '@tools/media'
	const { lg, sm } = useMedia()

	const props = defineProps({
		list: { type: Array, default: () => [] }
	})

	const modules = [Pagination, Navigation, Autoplay];
	const prev = ref(null)
	const next = ref(null)

	const WelcomeSwiper = (swiper) => {
		swiper.value = swiper;
	};
</script>

<style>
.swiper-horizontal >
.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
	@apply gap-6 lg:gap-2.5 bottom-9;
}
.swiper-pagination-bullet {
	@apply bg-gray-3;
}
.swiper-pagination-bullet-active {
	@apply bg-white;
}
</style>
