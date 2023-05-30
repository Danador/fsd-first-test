<template>
	<!-- TODO: Картинка вылазит за пределы блока и нет ссылки -->
	<Container
		containerClass="grid gap-6"
		v-if="data"
	>
		<p class="font-bold font-second text-2xl leading-7 sm:text-3xl lg:text-5xl lg:leading-[54px]">{{ data?.title }}</p>
		<div class="grid lg:grid-cols-2 gap-6 items-center">
			<ul class="flex flex-col space-y-6 list-outside pl-5 list-disc marker:text-light-1">
				<li
					class="font-bold text-dark-8 text-sm sm:text-lg lg:text-2xl"
					v-for="item in data?.list" :key="item"
				>{{ item.title }}</li>
			</ul>
			<img class="aspect-video row-start-1 rounded-2lg lg:row-auto w-full max-w-[920px] lg:max-h-[500px] object-cover ml-auto mr-0" :src="data?.preview">
		</div>
		<p v-text="data?.description" class="w-full block gap-6 sm:columns-2 lg:columns-3"></p>
	</Container>
</template>

<script setup>
	import Container from '@components/Container/Container.vue'
	const props = defineProps({
		data: { type: Object, default: null }
	})
	// console.log(props.data);
</script>
