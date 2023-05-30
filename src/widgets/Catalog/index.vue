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
    import { Content, Sidebar } from 'widgets/Catalog'
	import Icon from 'shared/ui/Icon/Icon.vue'
	import Container from 'shared/ui/Container/Container.vue';
	import Heading from 'shared/ui/Heading/Heading.vue'
	import { fetchData } from "tools/api";
	import { upData, getMediaList, getMedia, filterChar } from "tools/filters";
	import { ref } from 'vue'
	import { useStore } from '@nanostores/vue'
	import { bodyLock } from 'tools/helpers'
	import { catalogModel } from 'widgets/Catalog';
	import useMedia from 'tools/media'
	const { lg } = useMedia()
	const props = defineProps({
		data: { type: Object, default: () => {} },
		characteristics: { type: Array, default: () => [] },
		// pages: { type: Array, default: () => [] }
	})

	const $filterOpen = useStore(catalogModel.filterOpen)
	const products = ref([])
	const productsList = ref(props.data?.products)
	const ids = ref([])
	function productFormatted(array) {
		return upData(array)
		.map((product) => {
			if(product.images) {
				product.images = getMediaList(upData(product.images.data))
			}
			if(product.description) {
				product.description.preview = getMedia(product.description.preview)
			}
			// console.log(product.features === undefined);
			if(product.features) {
				product.features = product.features.map((i) => {
					i.image = getMedia(i.image)
					return i
				})
			}
			if(product.category) {
				product.category = upData(product.category.data)
			}
			if (product.offers?.length) {
				const colors = []
				product.offers = product.offers.map((offer) => {
					offer.images = getMediaList(upData(offer.images.data))
					offer.characteristics = upData(offer.characteristics.data).map((char) => {
						char.type = upData(char.type.data)
						if (char.colorDynamic?.length) {
							char.colorDynamic = char?.colorDynamic.map((i) => {
								return i.color
							})
							char.color = char.colorDynamic[0]
							delete char.colorDynamic
						} else {
							delete char.colorDynamic
						}
						return char
					})
					offer.characteristics.filter((char) => char.color).forEach((color) => {
						colors.push({
							id: offer.id,
							value: color.color.color
						})
					})
					return offer;
				});
				product.colors = colors
			}
			if(product.docs) {
				product.docs = product.docs.map((doc) => {
					doc.document = getMedia(upData(doc.document.data))
					return doc
				})
			}
			if(product.certificates?.length) {
				product.certificates = product.certificates.map((i) => {
					i.image = getMedia(i.image)
					return i
				})
				// console.log(product.certificates);
			}
			if(product.buys?.data?.length) {
				product.buys = productFormatted(product.buys.data)
			}
			// console.log(product.buys);
			return product;
		});
	}

	async function getProducts(ids, options) {
		let dataApi = {
			populate: [
				'category',
				'images',
				'certificates',
				'certificates.image',
				'description',
				'description.list',
				'description.preview',
				'docs',
				'docs.document',
				'features',
				'features.image',
				'offers',
				'offers.images',
				'offers.characteristics',
				'offers.characteristics.type',
				'offers.characteristics.color',
				'buys',
				'buys.images',
				'buys.offers',
				'buys.offers.images',
				'buys.offers.characteristics',
				'buys.offers.characteristics.type',
				'buys.offers.characteristics.color',
				'meta',
				'meta.image'
			]
		};
		if (ids?.length) {
			dataApi.filters = {
				id: {
					$in: ids,
				},
			};
		}

		if (options) {
			dataApi.filters = {
				...dataApi.filters,
				...options,
			};
		}

		let products = await fetchData("/api/products", {
			urlParams: dataApi,
		});
		// console.log(products.data[0]);
		let catalog = await fetchData("/api/categories")
		products = productFormatted(products.data)
			.filter(i => i.offers.length)
			.map((i) => {
				i.breadcrumbs = []
				let parent = catalog?.data.find(c => upData(c).id === i.category.id)

				if(parent) {
					i.breadcrumbs.push({
						title: upData(parent).title,
						url: `/catalog/${upData(parent).slug}/`
					})
				}
				i.breadcrumbs.push({
					title: i.title,
					url: `/product/${i.slug}/`
				})
				return i
			})
		return products?.length ? products : []
	}

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
