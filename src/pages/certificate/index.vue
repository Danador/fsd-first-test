<template>
	<Container
		:breadcrumbTitle="title"
		class="!pb-12 lg:!pb-[100px]"
	>
		<CertificateList
			:title="`${title} нашей компании`"
			:list="certificates"
		/>
	</Container>
</template>
<script setup>
	import CertificateList from '@modules/CertificateList/views/CertificateList.vue';
	import Container from '@shared/Container/Container.vue';
	import { getCertificate } from '@modules/CertificateList/store/CertificateList';
	let certificates = await getCertificate()

	let title = 'Сертификаты'
</script>

