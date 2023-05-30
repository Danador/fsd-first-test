<template>
	<Container
		v-if="list.length"
		:title="title"
		class="relative"
	>
		<Swiper
			:slides-per-view="1.3"
			:space-between="10"
			watch-slides-progress
			:modules="[Navigation]"
			:breakpoints="{
				400: {
					slidesPerView: 2.05,
					spaceBetween: 24
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 24
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 24
				}
			}"
			:navigation="{
				prevEl: prev,
				nextEl: next,
			}"
			@swiper="Buys"
			class="lg:px-5 p-1 grid grid-cols-full"
		>
			<SwiperSlide
				v-for="item in list"
				:key="item"
				class="w-auto"
			>
				<ProductCard
					:data="item"
				/>
			</SwiperSlide>
		</Swiper>
		<button
			ref="prev"
			class="hidden lg:block transition-all hover:bg-dark-4 outline-none ring-1 ring-transparent focus:outline-none focus-visible:bg-dark-4 focus-visible:ring-dark-7 active:bg-dark-5 active:text-dark-3 disabled:opacity-0 disabled:invisible absolute top-1/2 left-0 z-10 p-2 rounded-lg text-white w-max bg-dark-7 rotate-180"
		>
			<Icon
				name="arrow-right"
				size="w-11 h-11"
			/>
		</button>
		<button
			ref="next"
			class="hidden lg:block transition-all hover:bg-dark-4 outline-none ring-1 ring-transparent focus:outline-none focus-visible:bg-dark-4 focus-visible:ring-dark-7 active:bg-dark-5 active:text-dark-3 disabled:opacity-0 disabled:invisible absolute top-1/2 right-0 z-10 p-2 rounded-lg text-white w-max bg-dark-7"
		>
			<Icon
				name="arrow-right"
				size="w-11 h-11"
			/>
		</button>
	</Container>
</template>

<script setup>
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Navigation } from 'swiper';
	import { ref} from "vue";
	import ProductCard from "widgets/Offer/components/ProductCard.vue"
	import Container from 'shared/ui/Container/Container.vue';
	import Icon from 'shared/ui/Icon/Icon.vue'
	const props = defineProps({
		list: { type: [Array, Object], default: () => null },
		title: { type: String, default: () => '' }
	})

	const prev = ref(null);
	const next = ref(null);

	const Buys = (swiper) => {
		swiper.value = swiper
	}
</script>
