<template>
	<ul class="grid grid-cols-2 gap-3	 sm:grid-cols-3 sm:gap-5 max-w-max mx-auto">
		<li
			v-for="item in icons"
			:key="item"
			class="flex items-center space-x-4"
		>
			<Icon
				:class="item === 'logomin' ? 'bg-dark-8 p-2' : ''"
				:name="item"
				:size="item === 'logomin' && 'logo' ? 'w-20 h-10' : 'w-10 h-10'"
			/>
			<span class="text-lg font-medium text-dark-7">{{ item }}</span>
		</li>
	</ul>
</template>

<script setup>
	import Icon from 'shared/ui/Icon/Icon.vue'
	import { getIcons } from 'tools/helpers'
	import { onMounted, ref } from 'vue';

	const icons = ref()

	onMounted(async () => icons.value = await getIcons())
</script>

<style>

</style>
