<template>
	<div>
		<ul class="w-full grid grid-cols-2 xl:!grid-cols-3 gap-2.5 lg:gap-6">
			<template v-for="item in products" :key="item.id">
				<ProductCard
					:data="item"
				/>
			</template>
		</ul>
		<!-- <Pagination
			class="mt-10"
			:pages="pages"
		/> -->
	</div>
</template>

<script setup>
	const props = defineProps({
		products: { type: Array, default: () => [] }
	})
</script>

<style>

</style>
