<template>
	<component :is="tag"
		:class="data?.enable ? 'bg-gray-5 opacity-50 text-gray-3 hover:bg-gray-5' : 'hover:bg-dark-3'"
		class="group relative transition-all w-full flex flex-col min-h-[190px] max-h-[190px] sm:min-h-[350px] xl:min-h-[400px] justify-between rounded-2lg bg-dark-2 text-white"
	>
		<a
			:href="data?.url"
			:class="data?.enable ? 'pointer-events-none focus-visible:ring-transparent' : ''"
			class="p-6 group before:transition-all before:rounded-2lg font-second focus-visible:before:ring-dark-7 focus-visible:before:ring-2 before:ring-1 before:ring-transparent outline-none focus:outline-none active:before:bg-dark-4 before:absolute before:z-10 before:inset-0 w-full h-max"
		>
			<span class="group-focus:underline text-Ubuntu-base relative pointer-events-none z-20 sm:text-Ubuntu-2xl font-second">{{ data?.title }}</span>
		</a>
		<div
			class="w-full h-full rounded-b-2lg relative pointer-events-none z-20 bg-contain bg-no-repeat bg-right-bottom"
			:style="`background-image: url('${data?.image}')`"
		>
		</div>
	</component>
</template>

<script setup>
	import { ref } from 'vue'
	import Button from '@shared/Button/Button.vue'
	const props = defineProps({
		data: { type: Object, default: () => {} },
		tag: { type: String, default: () => 'li' }
	})

	// console.log(props.data);
</script>

<style>

</style>
