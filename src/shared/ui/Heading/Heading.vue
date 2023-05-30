<template>
	<p
		v-html="title"
		class="font-bold font-second text-left"
		:class="[
			dark ? 'text-white' : 'text-dark-8',
			titleSmall ? 'text-Ubuntu-2lg text-dark-8 my-5' : 'text-Ubuntu-xl mb-6 sm:text-Ubuntu-3xl lg:text-Ubuntu-4xl lg:text-center'
		]"
	></p>
</template>

<script setup>
	const props = defineProps({
		title: { type: String, required: true },
		dark: { type: Boolean, default: () => false },
		titleSmall: { type: Boolean, default: () => false }
	})
</script>

<style>

</style>
