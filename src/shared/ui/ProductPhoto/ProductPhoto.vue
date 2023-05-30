<template>
	<ul class="grid grid-cols-2 lg:grid-cols-12 gap-2.5 max-h-max">
		<li
			v-for="item in images?.length ? images.slice(0,7) : []"
			:key="item"
			:data-background-image="item"
			class="lozad photo w-full aspect-square odd:last:aspect-video rounded-2lg odd:last:col-span-2 lg:odd:last:aspect-square lg:odd:last:col-auto bg-no-repeat bg-center bg-cover"
		></li>
	</ul>
</template>

<script setup>
	const props = defineProps({
		images: { type: Array, default: () => [] }
	})
</script>

<style scoped>
	.photo:nth-child(n+1):nth-child(-n+4) {
		@apply lg:col-span-3;
	}
	.photo:nth-child(n+5):nth-child(-n+7) {
		@apply lg:col-span-4;
	}
</style>
