<tamplate>
	<Layout
		:meta="meta"
	>
		<Container
			class="!pb-12 lg:!pb-[100px]"
			breadcrumbTitle="Статьи"
			containerClass="grid !mb-0 gap-6"
		>
			<Heading
				title="Статьи"
				class="!mb-0"
			/>
			<ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{ articles.map((item) => (
					<ArticleCard
						data={item}
					/>
				)) }
			</ul>
		</Container>
	</Layout>
</tamplate>
<script setup>
	import Layout from "layouts/Layout/Layout.vue";
	import Breadcrumbs from "@components/Breadcrumbs/Breadcrumbs.vue";
	import Container from "@components/Container/Container.vue";
	import ArticleCard from "@modules/Articles/components/ArticleCard/ArticleCard.vue";
	import Heading from "@components/Heading/Heading.vue";
	import articles from './module/api'

	let title = 'Статьи'
	const meta = {
		title: title,
		description: title
	}
</script>
