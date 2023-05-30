<template>
	<Layout
		:title="title"
		:meta="photos.meta"
	>
		<Photos
			:list="photos.list"
			client:load
		/>
	</Layout>
</template>
<script setup>
	import { Layout } from 'layouts/Layout';
	import { Photos, photosModel } from "widgets/Photos";
	let photos = await photosModel.getPhotos()
	let title ="Фотографии нашей компании"

	// const meta = {
	// 	title: title,
	// 	description: title
	// }
</script>