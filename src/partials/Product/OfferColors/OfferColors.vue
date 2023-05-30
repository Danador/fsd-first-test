<template>
	<div class="flex flex-wrap gap-4">
		<CircleButton
			v-for="item in list"
			:key="item"
			:color="item.value"
			:value="item.id"
			v-model="selectOffer"
		/>
	</div>
</template>
<script setup>
	import { useStore } from "@nanostores/vue";
	import { offerId } from "@modules/Products/store/Product"
	import { watch, ref } from "vue";
	import CircleButton from "@components/Button/CircleButton.vue";

	const props = defineProps({
		list: { type: Array, default: () => [] }
	})

	const $offerId = useStore(offerId)

	const selectOffer = ref($offerId.value)

	watch(selectOffer, () => {
		if (selectOffer.value !== $offerId.value) {
			offerId.set(selectOffer.value)
		}
	})
</script>
