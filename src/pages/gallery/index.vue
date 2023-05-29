<template>
	<Photos
		:list="photos.list"
	/>
</template>
<script setup>
	import Photos from "@modules/Photos/views/Photos.vue";
	import { getPhotos } from '@modules/Photos/store/Photos'
	let photos = await getPhotos()
	let title ="Фотографии нашей компании"
</script>
