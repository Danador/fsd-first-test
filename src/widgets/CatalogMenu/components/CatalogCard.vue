<template>
	<component
		:is="$attrs.href ? 'a' : 'button'"
		class="outline-none hover:text-dark-3 group focus-visible:underline active:text-dark-5 text-dark-8 focus:outline-none disabled:opacity-[0.35]"
	>
		<div class="grid grid-cols-a1 gap-x-2.5 items-center">
			<div class="w-16 h-16 bg-center bg-contain bg-no-repeat" :style="`background-image: url(${ data.image })`"></div>
			<p class="text-base lg:text-sm font-bold font-second">{{ data.title }}</p>
			<span class="w-[1px] h-9 hidden last:hidden lg:block bg-gray-5"></span>
		</div>
	</component>
</template>

<script setup>
	const props = defineProps({
		data: { type: Object, default: () => {} },
		last: { type: Boolean, default: () => false }
	})
</script>

<style>

</style>
