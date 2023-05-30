<template v-if="list.length">
<!-- {{ list }} -->
	<div :class="[ list.length ? 'py-6 lg:py-12 gap-6 grid ' : '']">
		<p v-if="list.length" class="text-dark-4 font-bold font-second text-xl">Найдено {{ title }} ({{ list.length }})</p>
		<component :is="lg ? 'ul' : Swiper"
			v-bind="params"
			freemode
			class="w-full h-auto p-1 -m-1 overflow-visible"
			@swiper="SwiperInit"
		>
			<component :is="lg ? 'li' : SwiperSlide"
				v-for="item in list"
				:key="item"
				class="w-auto h-full"
			>
				<ProductCard
					v-if="type === 'product'"
					class="max-w-[170px] sm:w-[290px] sm:max-w-none lg:w-auto"
					tag="div"
					:data="item"
				/>
				<ArticleCard
					v-else-if="type === 'article'"
					class="max-w-[280px] lg:max-w-none"
					tag="div"
					:data="item"
				/>
			</component>
		</component>
	</div>
</template>

<script setup>
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import ProductCard from '@widgets/Offer/components/ProductCard.vue'
	import ArticleCard from '@widgets/Articles/components/ArticleCard/ArticleCard.vue'
	import useMedia from '@tools/media'
	const { lg } = useMedia()
	const props = defineProps({
		title: { type: String, default: () => '' },
		params: { type: Object, default: () => {} },
		list: { type: Array, default: () => [] },
		type: { type: String, default: () => '' }
	})

	// console.log(props.list);
	const SwiperInit = (swiper) => {
		swiper.value = swiper;
	};
</script>

<style>

</style>
