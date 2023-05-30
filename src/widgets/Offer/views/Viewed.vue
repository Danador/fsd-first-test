<template>
	<Container
		v-if="products.length"
		title="Ранее просмотренные товары"
		class="relative !pb-12 lg:!pb-[100px]"
	>
		<Swiper
			:slides-per-view="1.7"
			:space-between="10"
			watch-slides-progress
			:modules="[Navigation]"
			:breakpoints="{
				640: {
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
			@swiper="initSwiper"
			class="grid grid-cols-full"
		>
			<SwiperSlide
				v-for="item in products"
				:key="item"
				class="w-auto p-0.5"
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
	import { ref, onMounted } from "vue";
	import { getProducts } from "@widgets/Products/store/Product"
	import ProductCard from "@widgets/Offer/components/ProductCard.vue"
	import Container from '@components/Container/Container.vue'
	import Icon from '@components/Icon/Icon.vue'

	const ids = ref([])
	const products = ref([])
	const swiper = ref(null)
	const prev = ref(null);
	const next = ref(null);

	const initSwiper = (products) => swiper.value = products.value;

	onMounted(async () => {
		let session = sessionStorage.getItem('looked')
		ids.value = session ? JSON.parse(session) : []
		products.value = ids.value.length ? await getProducts(ids.value) : []
	})
</script>
