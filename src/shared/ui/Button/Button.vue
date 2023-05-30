<template>
	<component
		:is="$attrs.href ? 'a' : 'button'"
		:type="type"
		class="rounded-2lg font-second text-Ubuntu-base before:absolute before:inset-1 before:transition-all before:duration-300 before:ring-2 before:ring-transparent relative ring-2 ring-inset before:rounded-md items-center outline-none focus:outline-none transition-all duration-300"
		:class="[
			{ 'block max-w-max' : $attrs.href },
			{
				dark: 'bg-dark-3 disabled:hover:ring-transparent ring-transparent text-white hover:bg-white hover:text-dark-2 hover:ring-dark-2 focus-visible:before:ring-dark-7 focus-visible:text-dark-3 focus-visible:bg-white focus-visible:ring-dark-3 active:text-light-5 active:bg-dark-3 active:ring-dark-3 disabled:bg-gray-5 disabled:text-gray-3',
				stroke: 'ring-white text-white disabled:hover:ring-white bg-transparent hover:bg-white hover:text-dark-3 focus-visible:text-dark-3 focus-visible:bg-white focus-visible:ring-dark-3 active:bg-light-7 active:text-dark-3 disabled:bg-white disabled:text-gray-4',
				white: 'bg-dark-8 ring-transparent disabled:hover:ring-transparent text-white hover:bg-transparent hover:text-dark-8 hover:ring-dark-8 focus-visible:text-dark-8 focus-visible:before:ring-dark-8 focus-visible:bg-white focus-visible:ring-dark-3 active:text-dark-6 active:bg-transparent active:ring-dark-6 disabled:bg-transparent disabled:ring-gray-4 disabled:text-gray-4',
				whiteStroke: 'bg-white text-dark-2 ring-dark-3 disabled:hover:ring-dark-2 hover:bg-dark-3 hover:text-white hover:ring-dark-3 focus-visible:before:ring-dark-7 focus-visible:text-dark-3 focus-visible:ring-dark-3 active:bg-dark-3 active:text-light-5 disabled:bg-gray-5 disabled:text-gray-3 disabled:ring-transparent'
			}[theme ? theme : 'transparent'],
			{ 'before:absolute before:inset-0' : fullLink },
			{ 'grid-cols-a1 grid gap-x-2' : left },
			{ 'grid-cols-1a grid gap-x-2' : right },
			big ? 'px-7 py-3' : small ? 'px-6 py-2 text-Ubuntu-sm' : 'px-7 py-2.5'
		]"
	>
		<Icon
			v-if="left"
			:class="[
				$attrs.iconClass,
				iconName ? '' : 'hidden'
			]"
			:name="iconName"
			:size="iconSize"
		/>
		<span><slot /></span>
		<Icon
			v-if="right"
			:class="[
				$attrs.iconClass,
				iconName ? '' : 'hidden'
			]"
			:name="iconName"
			:size="iconSize"
		/>
	</component>
</template>

<script setup>
	import Icon from "shared/ui/Icon/Icon.vue"

	const props = defineProps({
		theme: { type: String, default: () => '' },
		fullLink: { type: Boolean, default: () => false },
		big: { type: Boolean, default: () => false },
		small: { type: Boolean, default: () => false },
		left: { type: Boolean, default: () => false },
		right: { type: Boolean, default: () => false },
		iconName: { type: String, default: () => '' },
		iconClass: { type: String, default: () => '' },
		iconSize: { type: String, default: () => '' },
		type: { type: String, default: () => null }
	})
</script>

<style>
</style>
