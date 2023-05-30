<template>
	<div :class="[
		$filterOpen ? 'translate-x-0 sm:translate-x-full lg:translate-x-0' : 'translate-x-full sm:translate-x-[200%] lg:translate-x-0',
		'bg-white fixed grid top-0 sm:max-w-1/2 lg:max-w-none grid-rows-a1a lg:block lg:sticky gap-y-5 inset-0 lg:w-auto z-[150] transition-all duration-300 h-full p-4 lg:z-0 lg:top-[64px] lg:h-max'
	]">
		<div class="flex lg:hidden justify-between items-center">
			<button
				@click="сlearFilter"
				:disabled="!filter?.length"
				class="text-dark-8/50 disabled:text-transparent lg:hidden"
			>Очистить</button>
			<p class="lg:text-lg font-bold">Фильтр</p>
			<button
				@click="filterOpen.set(!$filterOpen), bodyLock($filterOpen)"
				class="text-dark-3"
			>
				<Icon
					name="close"
					size="w-8 h-8"
				/>
			</button>
		</div>
		<ul class="max-h-full overflow-y-auto overflow-x-hidden pr-4 lg:pr-0 lg:overflow-visible lg:max-h-[none] flex flex-col lg:grid lg:gap-y-2">
			<li
				v-for="(item, i) in chars"
				:key="item"
				:class="[
					'transition-all duration-300 py-3',
				]">
				<button
					@click="setId(i)"
					class="grid grid-cols-1a w-full text-left text-dark-8 lg:hover:text-dark-5 hover:font-bold outline-none focus:outline-none lg:focus-visible:text-dark-5 lg:focus-visible:font-bold lg:focus-visible:border-b-2 lg:focus-visible:border-dark-3 transition-all items-center"
				>
					<span class="text-dark-8">{{ item.title }}</span>
					<Icon
						name="arrow-right"
						class="w-6 h-6 transition-all"
						:class="opener.includes(i) ? '-rotate-90' : 'rotate-90' "
					/>
				</button>
				<ul
					class="transition-all grid gap-y-2.5 duration-300"
					:class="opener.includes(i) ? 'max-h-screen py-2.5 visible opacity-100' : 'max-h-0 invisible opacity-0'"
				>
					<li
						v-for="subitem in item.chars"
						:key="subitem"
						class="px-2.5 w-full h-full"
					>
						<Checkbox
							inputClass="checkbox"
							type="checkbox"
							:value="subitem.id"
							:text="subitem.title"
							v-model="filter"
						/>
					</li>
				</ul>
			</li>
		</ul>
		<div class="grid gap-2.5 lg:mt-2.5">
			<Button
				small
				theme="dark"
				@click="setFilterId"
				:disabled="!filter?.length"
			>
				Применить
			</Button>
			<Button
				small
				theme="whiteStroke"
				class="hidden lg:grid"
				@click="сlearFilter"
				:disabled="!filter?.length"
			>
				Сбросить
			</Button>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, ref, watch } from 'vue'
	import Icon from "@components/Icon/Icon.vue"
	import Button from '@components/Button/Button.vue'
	import Checkbox from "@components/Checkbox/Checkbox.vue"
	import { getChar } from '@widgets/Products/store/Product'
	import { useStore } from '@nanostores/vue';
	import { filterOpen } from '@widgets/Catalog/store/Catalog'
	import { bodyLock } from '@tools/helpers'

	const props = defineProps({
		chars: { type: Array, default: () => [] },
		ids: { type: Array, default: () => [] }
	})

	const emit = defineEmits(['update:ids', 'filter'])

	const $filterOpen = useStore(filterOpen)

	const opener = ref([]);
	const active = ref(false)
	const filter = ref([]);

	const setId = (index) => {
		if (opener.value.includes(index)) {
			opener.value = opener.value.filter(i => i !== index)
		} else {
			opener.value.push(index)
		}
	}

	const setFilterId = () => {
		emit('update:ids', filter.value)
		emit('filter')
	}

	const сlearFilter = () => {
		filter.value = []
		emit('update:ids', filter.value)
		emit('filter')
	}
</script>

<script>
import media from "@tools/media"
	export default {
		mixins: [media]
	}
</script>


<style>

</style>
