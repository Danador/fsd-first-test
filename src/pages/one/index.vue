<template>
	<Welcome
		client:load
		:list="indexGallery ? indexGallery.images : []"
	/>
	<Catalog
		:list="catalog"
		client:load
	/>
	<Info />
	<History />
	<Trademark />
	<Mission />
	<Articles
		client:load
		more
		:articles="articles"
	/>
	<Benefits
		:list="benefitsList"
	/>
	<Order/>
	<Contacts/>
</template>
<script setup>
import Welcome from '@modules/Welcome/views/Welcome.vue'
import Catalog from '@widgets/index/Сatalog/views/Catalog.vue';
import Info from '@widgets/index/Info/Info.astro';
import History from '@widgets/index/History/History.astro';
import Trademark from '@widgets/index/Trademark/Trademark.astro';
import Mission from '@widgets/index/Mission/Mission.astro';
import { getArticles } from '@modules/Articles/store/Articles'
import { getIndexGallery } from '@modules/Welcome/store/Welcome'
import { getCategory } from '@modules/Catalog/store/Catalog'
import { getBenefits } from '@modules/Benefits/store/Benefits'

let catalog = await getCategory()
const benefitsList = await getBenefits()

let articles = await getArticles()
const indexGallery = await getIndexGallery()
</script>
