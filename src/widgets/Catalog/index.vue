<template>
	<Container
		:breadcrumbs="data.breadcrumbs"
		:title="lg ? data.title : ''"
		titleSmall
	>
		<div v-if="data.products.length" class="grid relative h-full lg:grid-cols-[320px,1fr] gap-x-4">
			<div class="lg:pr-6 lg:border-r lg:h-full lg:border-black-1/25">
				<Sidebar
					@filter="filtered()"
					:chars="characteristics"
					v-model:ids="ids"
				/>
			</div>
			<button
				@click="filterOpen.set(!$filterOpen), bodyLock($filterOpen)"
				class="flex justify-end ml-auto -mt-2 mr-0 max-w-max space-x-3 items-center lg:hidden"
			>
				<span class="font-bold font-second">Фильтр</span>
				<Icon
					class="text-dark-4"
					name="filter"
					size="w-8 h-8"
				/>
			</button>
			<Heading class="lg:hidden mt-6 mb-0" :title="data.title"/>
			<Content
				class="mt-6 lg:mt-0"
				:products="productsList"
			/>
			<button
				@click="filterOpen.set(!$filterOpen), bodyLock($filterOpen)"
				:class="[
					$filterOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
					'fixed sm:transition-all cursor-default z-[100] duration-300 inset-0 bg-black-1/50'
				]"
			></button>
		</div>
		<span v-else class="text-xl font-medium text-dark-3">В этой категории нет товаров</span>
	</Container>
	<Viewed/>
</template>

<script setup>
    import { Content, Sidebar } from '@widgets/Catalog'
	import Viewed from '@modules/Offer/views/Viewed.vue'
	import Icon from '@components/Icon/Icon.vue'
	import Container from '@components/Container/Container.vue'
	import Heading from '@components/Heading/Heading.vue'
	import { getProducts } from "@modules/Products/store/Product"
	import { ref } from 'vue'
	import { useStore } from '@nanostores/vue'
	import { bodyLock } from '@tools/helpers'
	import { filterOpen } from '@modules/Catalog/store/Catalog'
	import useMedia from '@tools/media'
	const { lg } = useMedia()
	const props = defineProps({
		data: { type: Object, default: () => {} },
		characteristics: { type: Array, default: () => [] },
		// pages: { type: Array, default: () => [] }
	})

	const $filterOpen = useStore(filterOpen)
	const products = ref([])
	const productsList = ref(props.data?.products)
	const ids = ref([])

	const filtered = async () => {
		productsList.value = ids.value.length ? await getProducts(products.value, {
			offers: {
				characteristics: ids.value
			}
		}) : props.data.products
	}
</script>

<style>

</style>
