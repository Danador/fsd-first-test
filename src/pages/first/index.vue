<template>
	<span>test span</span>
	<Layout
		:meta="meta"
	>
		<Welcome
			:list="indexGallery ? indexGallery.images : []"
		/>
		<Catalog
			:list="catalog"
		/>
		<Info/>
		<History/>
		<Trademark/>
		<Mission/>
		<Articles
			more
			:articles="articles"
		/>
		<Benefits 
			:list="benefitsList"
		/>
		<Order/>

	</Layout>
</template>
<script setup>
	import { Layout } from 'layouts/Layout';
	import { Welcome } from 'widgets/Welcome/';
	import { Catalog } from 'partials/About/Сatalog';
	import { Info } from 'partials/About/Info';
	import { History } from 'partials/About/History';
	import { Trademark } from 'partials/About/Trademark';
	import { Mission } from 'partials/About/Mission';
	import { Articles } from 'widgets/Articles';
	import { Benefits } from 'widgets/Benefits';
	import { Order } from 'partials/Index/Order';
	import { Contacts } from 'partials/Index/Contacts';
	import { articleModel } from 'widgets/Articles';
	import { welcomeModel } from 'widgets/Welcome';
	import { catalogModel } from 'widgets/Catalog';
	import { benefitsModel } from 'widgets/Benefits';

	let catalog = await catalogModel.getCategory()
	const benefitsList = await benefitsModel.getBenefits()

	let articles = await articleModel.getArticles()
	const indexGallery = await welcomeModel.getIndexGallery()

	let title = 'Главная страница'
	const meta={
		title: title,
		description: title
	}
</script>