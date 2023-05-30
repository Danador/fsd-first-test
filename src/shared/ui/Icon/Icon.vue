<template>
	<svg :class="`${ size }`">
		<use :xlink:href="`/icons/${file}.svg#${name}`"></use>
	</svg>
</template>

<script setup>

const props = defineProps({
	file: {type: String, default: () => 'all-icons'},
	name: { type: String, default: () => '' },
	size: { type: String, default: () => '' }
})
</script>

<style>

</style>
