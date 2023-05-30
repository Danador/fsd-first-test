<template>
	<div
		:class="videoClass"
		class="aspect-video relative object-cover bg-no-repeat bg-center rounded-2lg"
		:style="`background-image: url('${preview}')`"
	>
		<button
			class="absolute transition-all rounded-2lg p-2.5 top-1/2 left-1/2 text-white bg-dark-3 hover:opacity-80 -translate-y-1/2 -translate-x-1/2 z-20"
			@click="emit('click')"
		>
			<Icon
				name="treangle"
				size="w-10 h-10"
			/>
		</button>
	</div>
</template>

<script setup>
	import Icon from '@components/Icon/Icon.vue'

	const emit = defineEmits(['click'])

	const props = defineProps({
		preview: { type: String, default: () => null },
		showBtn: { type: Boolean, default: () => true },
		iconSize: { type: String, default: () => '' },
		videoClass: { type: String, default: () => '' }
	})
</script>

<style>

</style>
