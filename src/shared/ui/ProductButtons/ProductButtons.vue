<template>
	<div class="fixed bottom-0 inset-x-0 bg-white border-t border-gray-5 z-50 lg:border-none lg:bg-transparent lg:static">
		<div class="grid grid-cols-1a container py-2.5 px-4 lg:p-0 lg:flex mx-auto items-center space-x-2.5">
			<Button
				theme="white"
				:small="!lg"
				class="lg:w-[190px]"
				@click="open.set('offer')"
			>
				Заказать
			</Button>
			<Button
				theme="whiteStroke"
				left
				iconSize="w-5 h-5"
				@click="addFavorite($productId)"
				class="lg:w-[190px] hidden lg:grid"
				:class="change ? '!ring-dark-3' : ''"
				:iconName="change ? 'favorites' : 'favorites-stroke'"
			>
				{{ change ? 'В избранном' : 'В избранное' }}
			</Button>
			<FavoriteButton
				:id="id"
				class="relative lg:hidden"
			/>
		</div>
	</div>
</template>

<script setup>
	import FavoriteButton from '@components/Button/FavoriteButton.vue'
	import Button from '@components/Button/Button.vue';
	import { onMounted, computed } from 'vue';
	import { useStore } from "@nanostores/vue";
	import { addFavorite } from '@tools/helpers'
	import { open } from '@components/Modal/store/Modal'
	import { favoritesIds, productId } from '@widgets/Products/store/Product';
	import useMedia from '@tools/media'
	const { lg } = useMedia()

	const props = defineProps({
		id: { type: Number, required: true }
	})

	const $favoritesIds = useStore(favoritesIds)
	const $productId = useStore(productId)
	const change = computed(() => {
		// console.log($favoritesIds.value.includes($productId.value));
		return $favoritesIds.value.includes($productId.value)
	})

	onMounted(() => {
		addFavorite()
	})
</script>
