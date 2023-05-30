<template>
	<Exclusive
		v-if="data.exclusive"
		:data="products"
		:benefitsList="benefitsList"
		:faqList="faqList"
	/>
	<Default
		v-else
		:data="products"
		:benefitsList="benefitsList"
		:faqList="faqList"
	/>
</template>

<script setup>
	import Default from '@widgets/Products/components/Default/Default.vue'
	import Exclusive from '@widgets/Products/components/Exclusive/Exclusive.vue'
	import { computed } from 'vue'
	import { offerId } from '@widgets/Products/store/Product'
	import { useStore } from '@nanostores/vue'
	const props = defineProps({
		data: { type: Object, default: () => {} },
		benefitsList: { type: Array, default: () => null },
		faqList: { type: Array, default: () => null }
	})

	offerId.set(props.data.offers[0].id)

	const $offerId = useStore(offerId)

	const products = computed(() => ({
		...props.data,
		imagesProduct: imagesProduct(props.data.offers, $offerId.value, props.data.images),
		charsOffer: charsOffer(props.data.offers, $offerId.value),
		articleOffer: articleOffer(props.data.offers, $offerId.value)
	}))

	const imagesProduct = (offers, offerId, images) => {
		let offerImg = offers.find(i => offerId === i.id)?.images
		return offerImg ? [
			...offerImg,
			...images
		] : images
	}

	const charsOffer = (offers, offerId) => {
		let offerChar = offers.find(i => offerId === i.id)?.characteristics
		return offerChar
	}

	const articleOffer = (offers, offerId) => {
		let offerArticle = offers.find(i => offerId === i.id)?.article
		return offerArticle
	}
</script>

<style>

</style>
