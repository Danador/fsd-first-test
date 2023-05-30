<template>
	<Container
		breadcrumbTitle="Избранное"
		:class="products.length ? '!pb-12 lg:!pb-[100px]' : ''"
	>
		<Heading
			class="mt-2.5"
			:class="products.length > 0 ? 'mb-6' : '!mb-0'"
			:title="products.length > 0 ? 'Избранное:' : 'Вы еще не добавили товары в избранное'"
		/>
		<div v-if="products.length > 0" class="grid gap-6">
			<span class="text-dark-4 text-xl font-bold">Всего товаров ({{ products.length }})</span>
			<ul class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 lg:gap-6">
				<template
					v-for="item in products"
					:key="item"
				>
					<ProductCard
						:data="item"
					/>
				</template>
			</ul>
		</div>
	</Container>
</template>

<script setup>
	import ProductCard from "@widgets/Offer/components/ProductCard.vue";
	import Heading from "@components/Heading/Heading.vue";
	import Container from "@components/Container/Container.vue";
	import { getProducts } from "@widgets/Products/store/Product"
	import { ref, onMounted } from "vue";
	const ids = ref([])
	const products = ref([])
	onMounted(async () => {
		let local = localStorage.getItem('favoriteProducts')
		ids.value = local ? JSON.parse(local) : []
		products.value = ids.value.length ? await getProducts(ids.value) : []
	})

	// const favorite = [{ title: 'Избранное', url: 'favorites'}]
</script>

<style>

</style>
