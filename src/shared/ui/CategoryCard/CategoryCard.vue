<template>
	<div class="relative max-w-[630px] p-6 bg-dark-3">
		<div class="grid grid-cols-1a max-w-max mx-auto px-6 text-white gap-x-2.5 items-center">
			<p class="font-bold text-2xl">{{ title }}</p>
			<Button
				:href="url"
				stroke
				fullLink
				class="max-w-max peer z-[2] before:z-[2]"
			>
				Перейти
			</Button>
		</div>
	</div>
</template>

<script setup>
	import Button from 'shared/ui/Button/Button.vue'
	const props = defineProps({
		title: { type: String, default: () => '' },
		url: { type: String, default: () => '' }
	})
</script>
