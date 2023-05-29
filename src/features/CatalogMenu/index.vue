<template>
	<!-- <pre>{{ menu }}</pre> -->
	<div
		:class="[
			$catalogOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
			'absolute transition-al top-[113px] lg:top-[98px] z-50 duration-500 inset-x-0 bg-white h-[calc(100vh-116px)] lg:h-auto'
		]"
	>
		<div class="container mx-auto">
			<p v-if="!lg" class="font-bold text-2xl px-6">Каталог</p>
			<ul class="h-full overflow-y-auto max-h-[calc(100vh-160px)] lg:max-h-[500px] mx-auto flex flex-col gap-3 lg:grid lg:grid-flow-col lg:max-w-max px-4 lg:px-5 py-1">
				<template
					v-for="item in menu"
					:key="item"
				>
					<CatalogCard
						:data="item"
						:href="item.url"
					/>
				</template>
			</ul>
		</div>
	</div>
	<button
		@click="catalogOpen.set(!$catalogOpen), openCategory = null"
		:class="[
			$catalogOpen ? 'block' : 'hidden',
			'fixed inset-0 z-[-2] cursor-default'
		]"
	></button>
</template>

<script setup>
	import CatalogCard from '@modules/CatalogMenu/components/CatalogCard.vue'
	import { useStore } from '@nanostores/vue';
	import { catalogOpen } from '@modules/Header/store/Header'
	import { ref } from 'vue';
	import useMedia from '@tools/media'

	const props = defineProps({
		menu: { type: Array, default: () => [] }
	})

	const { lg } = useMedia()
	const $catalogOpen = useStore(catalogOpen)
	const openCategory = ref(null)

	const openCategories = (id) => {
		if (openCategory.value === id) {
			openCategory.value = null
		} else {
			openCategory.value = id
		}
	}
</script>
