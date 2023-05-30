<template>
	<Breadcrumbs
		class="mt-12 container mx-auto px-4 lg:px-5"
		:links="data.breadcrumbs"
	/>
	<Presentation
		:data="data"
	/>
	<OfferDescription
		:data="data.description"
	/>
	<BuyProducts
		title="С этим товаром покупают"
		:list="data.buys"
	/>
	<BenefitsBorrex
		:data="data"
	/>
	<Gallery
		thumbClass="lg:px-20"
		buttonBig
		:images="data.imagesProduct"
	/>
	<Borrex/>
	<ProductsPhoto
		dark
		:images="data.images"
	/>
	<Faq
		dark
		:list="faqList"
	/>
	<Benefits
		:list="benefitsList"
		dark
	/>
	<OfferDocuments
		dark
		:list="data.docs"
	/>
	<CertificateList
		title="Сертификаты"
		dark
		:list="data.certificates"
	/>
	<Order dark/>
	<Contacts
		dark
	/>
	<Modal
		name="offer"
	>
		<Form center title="Оставьте заявку" modal/>
	</Modal>
</template>

<script setup>
	import { onBeforeMount } from 'vue'
	// partials
	import Presentation from "@partials/Index/Presentation.vue";
	import OfferDescription from "@partials/Product/OfferDescription/OfferDescription.vue";
	import BenefitsBorrex from "@partials/Index/Benefits/views/BenefitsBorrex.vue";
	import OfferDocuments from "@partials/Product/OfferDocuments/OfferDocuments.vue"
	import Borrex from "@partials/Index/Borrex/Borrex.vue";
	import ProductsPhoto from '@partials/Product/ProductsPhoto/ProductsPhoto.vue'
	import Order from "@partials/Index/Order.vue";
	import Gallery from '@partials/Index/Gallery.vue';
	import CertificateList from '@widgets/CertificateList/views/CertificateList.vue';
	import Contacts from '@partials/Index/Contacts.vue'
	import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs.vue';
	import BuyProducts from '@components/BuyProducts/BuyProducts.vue';

	// components
	import OfferTable from "@partials/Product/OfferTable/OfferTable.vue";
	import Faq from "@widgets/Faq/views/Faq.vue"
	import Benefits from "@widgets/Benefits/views/Benefits.vue";
	import Modal from '@components/Modal/views/Modal.vue';
	import Form from '@components/Form/Form.vue';

	//tools
	import { setLooked } from "@tools/helpers"
	import { useStore } from '@nanostores/vue';

	//store
	import { productId, offerId  } from '@widgets/Products/store/Product';

	const props = defineProps({
		data: {
			type: Object,
			default: () => {}
		},
		benefitsList: { type: Array, default: () => null },
		faqList: { type: Array, default: () => null }
	})

	onBeforeMount(() => {
		setLooked('looked', props.data.id)
		productId.set(props.data.id)
	})
</script>

<style>

</style>
