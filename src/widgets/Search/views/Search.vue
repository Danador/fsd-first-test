<template>
	<Container
		breadcrumbTitle="Поиск"
		containerClass="!mb-0"
		class="!pb-6 lg:!pb-[76px] overflow-hidden"
	>
		<Heading
			class="!text-left !mb-0 mt-3"
			:title="`Результаты поиска по запросу: ${request}`"
		/>
		<p class="font-bold font-second text-2xl leading-7 sm:text-3xl lg:text-5xl lg:leading-[54px]"></p>
		<template
			v-for="item in swiperList"
			:key="item"
		>
			<Result
				v-bind="item"
			/>
		</template>
	</Container>
</template>

<script setup>
	import Container from '@components/Container/Container.vue'
	import Result from '@widgets/Search/components/Result/Result.vue'
	import Heading from '@components/Heading/Heading.vue'
	import { ref, onBeforeMount, watch, computed } from "vue"
	import { getProducts } from "@widgets/Products/store/Product"
	import { getArticles } from '@widgets/Articles/store/Articles'
	const ids = []
	const request = ref('')
	const products = ref([])
	const articles = ref([])
	const getResults = async (request) => {
		products.value = request ? await getProducts(ids, {
			title: {
				$containsi: request
			}
		}) : []
		articles.value = request ? await getArticles(ids, {
			title: {
				$containsi: request
			}
		}) : []
	}
	const swiperList = computed(() => [
		{
			title: 'Продуктов',
			type: 'product',
			list: products.value,
			params: {
				'slides-per-view': 'auto',
				'breakpoints': {
					320: {
						'spaceBetween': 10
					},
					1024: {
						'spaceBetween': 24
					}
				},
				'class': 'lg:grid lg:grid-cols-4 lg:gap-6'
			}
		},
		{
			title: 'Статей',
			type: 'article',
			list: articles.value,
			params: {
				'slides-per-view': 'auto',
				'breakpoints': {
					320: {
						'spaceBetween': 10
					},
					1024: {
						'spaceBetween': 24
					}
				},
				'class': 'lg:grid lg:grid-cols-3 lg:gap-6'
			}
		}
	])
	onBeforeMount(() => {
		let url = window.location;
		url = new URL(url);
		request.value = url.searchParams.get("request")

		if(request.value) {
			getResults(request.value)
		}
	})
</script>

<style>

</style>
