<template>
	<Breadcrumbs
		class="mt-12 container mx-auto px-4 lg:px-5"
		:links="data.breadcrumbs"
	/>
	<OfferInfo
		:data="data"
	/>
	<BuyProducts
		title="С этим товаром покупают"
		:list="data.buys"
	/>
	<OfferDescription
		:data="data.description"
	/>
	<Container>
		<div class="w-full grid gap-y-6 lg:grid-cols-2 justify-start">
			<Heading
				class="block !text-left lg:mt-auto max-w-[420px] !mb-0"
				title="Borrex"
			/>
			<span class="text-left mt-2.5 lg:mt-0 max-w-[420px] lg:text-2xl font-bold text-dark-8 lg:row-start-2">Технология совершенства. Используйте лучшее качество, которое послужит на долгие годы!</span>
			<img src="/images/black.jpg" class="w-full aspect-[16/10] sm:aspect-[48/25] sm:max-h-[500px] rounded-2lg row-start-2 lg:row-start-1 lg:row-span-2 lg:col-start-2">
		</div>
	</Container>
	<OfferDocuments
		:list="data.docs"
	/>
	<CertificateList
		title="Сертификаты"
		:list="data.certificates"
	/>
	<ProductsPhoto
		:images="data.images"
	/>
	<Faq
		:list="faqList"
	/>
	<Benefits
		:list="benefitsList"
	/>
	<Viewed/>
	<Modal
		name="offer"
	>
		<Form center title="Оставьте заявку" modal/>
	</Modal>
</template>

<script setup>
	import { onBeforeMount, watch } from 'vue'

	//partials
	import OfferInfo from "@partials/Product/OfferInfo/OfferInfo.vue";
	import OfferDescription from "@partials/Product/OfferDescription/OfferDescription.vue";
	import OfferTable from "@partials/Product/OfferTable/OfferTable.vue";
	import OfferDocuments from "@partials/Product/OfferDocuments/OfferDocuments.vue";
	import ProductsPhoto from '@partials/Product/ProductsPhoto/ProductsPhoto.vue'
	import CertificateList from '@widgets/CertificateList/views/CertificateList.vue';
	import Benefits from "@widgets/Benefits/views/Benefits.vue";
	import Container from '@components/Container/Container.vue'
	import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs.vue';
	import BuyProducts from '@components/BuyProducts/BuyProducts.vue';
	import Heading from '@components/Heading/Heading.vue';

	//components
	import Faq from "@widgets/Faq/views/Faq.vue"
	import Modal from '@components/Modal/views/Modal.vue';
	import Form from '@components/Form/Form.vue';

	//module
	import Viewed from "@widgets/Offer/views/Viewed.vue";

	//tools
	import { setLooked } from '@tools/helpers'
	import { productId } from '@widgets/Products/store/Product';

	const props = defineProps({
		data: {
			type: Object,
			default: () => {}
		},
		benefitsList: { type: Array, default: () => null },
		faqList: { type: Array, default: () => null },
	})

	// console.log(props.data);

	onBeforeMount(() => {
		setLooked('looked', props.data.id)
		productId.set(props.data.id)
	})
</script>

<style>

</style>
