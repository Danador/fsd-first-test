<template>

</template>
<script setup>
	import Layout from "@layouts/Layout.astro";
	import FortyFourth from '@components/FortyFourth.vue'
	let title = 'Ошибка страница не найдена'

	const meta = {
		title: title,
		description: title
	}
</script>

---

---
<Layout
	meta={meta}
>
	<FortyFourth client:load/>
</Layout>
