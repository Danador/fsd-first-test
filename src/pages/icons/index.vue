<template>
	<Layout :meta="meta">
		<section>
			<div class="container mx-auto w-full py-6 sm:py-8 lg:py-12 px-4">
				<h1 class="text-xl font-bold text-center sm:text-5xl sm:leading-[54px] my-5">{{ heading }}</h1>
				<IconList/>
			</div>
		</section>
	</Layout>
</template>
<script setup>
	import { Layout } from 'layouts/Layout';
	import IconList from "shared/ui/IconList/IconList.vue";
	const heading = 'Список используемых иконок'
	const meta = {
		title: heading,
		description: heading
	}
</script>
---

---

