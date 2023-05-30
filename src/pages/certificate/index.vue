<template>
	<Layout
		:meta="meta"
	>
		<Container
			breadcrumbTitle="Сертификаты"
			class="!pb-12 lg:!pb-[100px]"
		>
			<CertificateList
				title="Сертификаты нашей компании"
				:list="certificates"
			/>
		</Container>
	</Layout>
</template>
<script setup>
	import { Layout } from 'layouts/Layout';
	import { CertificateList, certificateModel  } from 'widgets/CertificateList';
	import Container from 'shared/ui/Container/Container.vue';;
	let certificates = await certificateModel.getCertificate()

	let title = 'Сертификаты'
	const meta = {
		title: title,
		description: `${title} югОилПласт`
	}
</script>