<template>
	<Container
		containerClass="grid grid-cols-2 gap-6 lg:gap-x-12 text-dark-8"
	>
		<p class="font-second row-start-1 col-start-1 font-bold col-span-2 lg:col-auto text-2xl md:text-3xl lg:text-5xl lg:leading-[54px]">{{ data?.title }}</p>
		<ul v-if="data.charsOffer.length" class="flex gap-6 col-start-1 col-span-2 lg:col-auto flex-wrap">
			<li
				v-for="item in data.charsOffer"
				:key="item"
			>
				<p class="font-second font-bold text-base md:text-lg lg:text-xl">{{ item.title }}</p>
				<p v-if="item.type">{{ item.type.title }}</p>
			</li>
		</ul>
		<div class="flex items-center col-span-2 lg:hidden space-x-2.5">
			<Icon
				class="text-dark-3"
				size="w-10 h-10"
				name="box"
			/>
			<span class="font-bold">Бесплатная доставка</span>
		</div>
		<p class="col-start-1 col-span-2 row-start-[8] lg:row-start-auto lg:col-auto text-gray-3">Артикул: {{ data.articleOffer }}</p>
		<ProductButtons
			:id="data.id"
		/>
		<img
			class="object-cover col-span-2 rounded-2lg row-start-2 lg:col-start-2 lg:row-start-1 row-span-6"
			:src="data.images[0]"
			:alt="data.title"
		>
	</Container>
</template>

<script setup>
	import ProductButtons from '@components/ProductButtons/ProductButtons.vue';
	import Container from '@components/Container/Container.vue'
	import Icon from '@components/Icon/Icon.vue';

	const props = defineProps({
		data: { type: Object, default: () => {} },
		article: { type: String, default: () => '' },
		chars: { type: Array, default: () => [] }
	})

	// console.log(props.article);
</script>

<style>

</style>
