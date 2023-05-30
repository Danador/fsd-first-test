<template>
	<ul class="grid grid-flow-col items-center mx-auto max-w-max gap-x-2.5">
		<li class="flex items-center">
			<a @click="pagePrev()" href="" class="text-dark-4 ring-1 ring-transparent focus-visible:ring-dark-8 hover:text-dark-2 transition-all focus:outline outline-none">
				<Icon
					name="arrow-left"
					size="w-6 h-6"
				/>
			</a>
		</li>
		<li v-for="item in pages" :key="item">
			<a
				:class="[
					'text-sm p-1 font-medium hover:text-dark-6 transition-all'
				]"
				:href="item"
			>{{ item }}</a>
		</li>
		<li class="flex items-center">
			<a @click="pageNext()" href="" class="text-dark-4 ring-1 ring-transparent focus-visible:ring-dark-8 hover:text-dark-2 transition-all focus:outline outline-none rotate-180">
				<Icon
					name="arrow-left"
					size="w-6 h-6"
				/>
			</a>
		</li>
	</ul>
</template>

<script setup>
	import Icon from "@components/Icon/Icon.vue"
	import { ref } from 'vue'
	const props = defineProps({
		pages: { type: Array, default: () => [] }
	})
	// page === 1 ? 'text-dark-4 underline underline-offset-1' : '',
	// page = ref(1)
	// const pageNext = () => {
	// 	page.value + 1
	// }
	// const pagePrev = () => {
	// 	page.value - 1
	// }
</script>

<style>

</style>
