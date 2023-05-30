<template>
	<Layout
		:meta="meta"
	>
		<PageNotFound client:load/>
	</Layout>
</template>
<script setup>
	import { Layout } from 'layouts/Layout';
	import PageNotFound from 'widgets/PageNotFound'
	let title = 'Ошибка страница не найдена'

	const meta = {
		title: title,
		description: title
	}
</script>
