<template>
	<div
		v-if="articles.length"
		:class="[
			page ? '' : 'container mx-auto px-4 py-6 w-full sm:py-8 lg:py-12 overflow-hidden'
		]"
	>
		<!-- <p
			v-text="title ? title : 'Статьи'"
			class="mb-6 sm:text-center font-second text-dark-8 font-bold text-2xl lg:text-5xl lg:leading-[54px]"
		></p> -->
		<Heading
			:title="title ? title : 'Статьи'"
		/>
		<component :is="lg ? 'ul' : Swiper"
			class="lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] overflow-visible w-full lg:grid lg:gap-6"
			:breakpoints="{
				320: {
					slidesPerView: 1.1,
					spaceBetween: 10
				},
				440: {
					slidesPerView: 1.5
				}
			}"
			lazy
			:space-between="10"
			@swiper="ArticleSwiper"
		>
			<component
				:is="lg ? 'li' : SwiperSlide"
				v-for="item in page ? articles.slice(0,3) : articles"
				:key="item"
			>
				<ArticleCard
					tag="div"
					:data="item"
				/>
			</component>
		</component>
		<template v-if="more">
			<Button
				href="/articles/"
				class="w-full max-w-none sm:!w-auto text-center sm:!max-w-max mt-10 mx-auto"
				theme="dark"
				:small="!lg"
			>
				Еще статьи
			</Button>
		</template>
	</div>
</template>

<script setup>
	import { ArticleCard } from './ui/ArticleCard'
	import Button from 'shared/ui/Button/Button.vue'
	import Heading from 'shared/ui/Heading/Heading.vue';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import useMedia from 'tools/media'
	const { lg } = useMedia()
	const props = defineProps({
		title: { type: String, default: () => '' },
		more: { type: Boolean, default: () => false },
		page: { type: Boolean, default: () => false },
		articles: { type: Array, default: () => [] }
	})
	const ArticleSwiper = (swiper) => {
		swiper.value = swiper
	}
</script>

<style>

</style>
