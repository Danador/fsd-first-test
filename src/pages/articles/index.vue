<template>
	<Container
		class="!pb-12 lg:!pb-[100px]"
		:breadcrumbTitle="title"
		containerClass="grid !mb-0 gap-6"
	>
		<Heading
			:title="title"
			class="!mb-0"
		/>
		<ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<ArticleCard
				v-for="article in articles"
				:key="article.id"
				:data="item"
			/>
		</ul>
	</Container>
</template>
<script setup>
	import Container from "@shared/Container/Container.vue";
	import ArticleCard from "@modules/Articles/components/ArticleCard/ArticleCard.vue";
	import Heading from "@shared/Heading/Heading.vue";
	import { getArticles } from '@modules/Articles/store/Articles'

	let articles = await getArticles()

	let title = 'Статьи'
</script>
