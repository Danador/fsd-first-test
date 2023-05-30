<template>
	<div
		class="fixed transition-all delay-300 duration-300 bg-white inset-0 flex items-center justify-center z-[1000]"
		:class="mediaInited ? 'pointer-events-none scale-150 opacity-0' : ''"
	>
		<Icon
			file="logo"
			name="logo"
			size="w-[164px] h-[42px]"
			class="animate-pulse"
		/>
	</div>
</template>

<script setup>
	import useMedia from 'tools/media'
	import Icon from 'shared/ui/Icon/Icon.vue';

	const { mediaInited } = useMedia()
</script>
