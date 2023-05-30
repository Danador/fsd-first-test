<template>
	<button
		@click="addFavorite(id)"
		class="p-2.5 rounded-2lg transition-all duration-300 outline-none focus:outline-none text-dark-3 before:absolute before:inset-[3px] before:transition-all before:duration-300 before:ring-1 before:ring-transparent before:rounded-md ring-2 ring-transparent ring-inset lg:hover:bg-dark-3 lg:hover:text-white focus-visible:text-dark-3 focus-visible:before:ring-dark-7 focus-visible:ring-dark-3 active:text-dark-3"
	>
		<Icon
			:name="change ? 'favorites' : 'favorites-stroke'"
			size="w-6 h-6"
		/>
	</button>
</template>

<script setup>
	import {onMounted, computed} from 'vue'
	import Icon from 'shared/ui/Icon/Icon.vue'
	// import { useStore } from '@nanostores/vue'
	// import { favoritesIds } from 'widgets/Products/store/Product';
	// import { addFavorite } from 'tools/helpers'

	// const props = defineProps({
	// 	id: {type: Number, default: () => null}
	// })

	// const $favoritesIds = useStore(favoritesIds)
	// const change = computed(() => {
	// 	return $favoritesIds.value.includes(props.id)
	// })
	// onMounted(() => {
	// 	addFavorite()
	// })

</script>

<style>

</style>
