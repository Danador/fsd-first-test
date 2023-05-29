<template>
	<Container
		title="Наша продукция:"
		class="overflow-hidden"
	>
		<component :is="lg ? 'ul' : Swiper"
			class="lg:grid w-full h-full lg:grid-cols-3 lg:gap-6 overflow-visible"
			:breakpoints="{
				320: {
					slidesPerView: 1.2,
					spaceBetween: 10
				},
				640: {
					slidesPerView: 'auto',
					spaceBetween: 25
				}
			}"
			:autoplay="{
				delay: 3000,
				disableOnInteraction: false,
				waitForTransition: false,
			}"
			@swiper="CategorySwiper"
		>
			<component :is="lg ? 'li' : SwiperSlide"
				class="rounded-2lg w-full"
				v-for="item in list"
				:key="item"
			>
				<CatalogCard
					:data="item"
					tag="div"
					class="w-full h-full aspect-video lg:aspect-auto"
				/>
			</component>
		</component>
	</Container>
</template>

<script setup>
	import CatalogCard from "@partials/About/Сatalog/components/CatalogCard/CatalogCard.vue";
	import Container from '@shared/Container/Container.vue'
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import useMedia from '@tools/media'

	const props = defineProps({
		list: { type: Array, default: () => null }
	})

	// console.log(props.list);

	const { lg } = useMedia()

	const CategorySwiper = (swiper) => {
		swiper.value = swiper;
	};
</script>

<style>

</style>
