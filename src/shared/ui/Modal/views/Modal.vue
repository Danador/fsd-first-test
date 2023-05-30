<template>
	<transition name="fade">
		<div
			v-if="$open === name"
			class="fixed z-[100] p-4 w-screen overflow-y-auto inset-0 h-full bg-dark-7/50"
		>
			<div class="flex w-full h-full justify-center items-center">
				<slot />
			</div>
			<button @click="open.set('')" class="absolute inset-0 cursor-default"></button>
		</div>
	</transition>
</template>

<script setup>
	import { useStore } from '@nanostores/vue';
	import { open } from 'shared/ui/Modal/store/Modal'
	const props = defineProps({
		name: { type: String, default: () => '' }
	})
	const $open = useStore(open)
</script>

<style>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
