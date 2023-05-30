<template>
	<Container
		containerClass="grid lg:grid-cols-2 xl:grid-cols-1a gap-2.5 lg:gap-6 lg:grid-rows-a1"
		class="lg:mt-0"
	>
		<Gallery
			class="row-start-2 lg:row-start-1 lg:row-span-2 sm:!flex sm:!flex-col"
			thumbClass="lg:px-2 xl:px-16"
			swiperClass="aspect-[144/126] sm:aspect-video"
			:slides="data.imagesProduct"
		/>
		<p class="lg:max-w-[450px] font-second font-bold text-[23px] leading-7 sm:text-2xl text-dark-8 row-start-1 lg:row-start-1 lg:col-start-2">{{ data.title }}</p>
		<div class="lg:flex lg:flex-col lg:max-w-[450px] gap-y-4 row-start-3 grid lg:col-start-2 lg:row-start-2">
			<p class="text-gray-3">Артикул: {{ data.articleOffer }}</p>
			<ul class="grid gap-y-1">
				<li
					v-for="item in data.charsOffer"
					:key="item"
				>{{ item.type?.title }}: {{ item.title }}</li>
			</ul>
			<div class="flex items-center lg:hidden space-x-2.5">
				<Icon
					class="text-dark-3"
					size="w-10 h-10"
					name="box"
				/>
				<span class="font-bold">Бесплатная доставка</span>
			</div>
			<div class="grid row-start-1 lg:row-start-3 gap-y-4 gap-x-5 items-center">
				<div class="grid gap-y-3">
					<div class="grid lg:grid-cols-a1 gap-6 gap-x-4 items-start sm:items-center">
						<span class="font-bold text-xl leading-[26px]">Цвет:</span>
						<OfferColors
							class="flex gap-6 max-w-[500px] px-4 "
							:list="data.colors"
						/>
					</div>
					<p class="sm:col-span-2 sm:row-start-2 text-xs lg:text-sm text-dark-8/50">Цвета товара вживую выглядят сочнее чем на фотографиях!</p>
					<div v-if="lists.contacts.length" class="flex flex-col-reverse self-start sm:flex-row row-start-3 gap-2.5 py-1 sm:items-center">
						<Button
							:href="lists?.contacts[0]?.link"
							theme="whiteStroke"
							:small="!lg"
							class="max-w-sm text-center w-full mx-auto lg:max-w-max"
						>
							<div class="flex gap-2 items-center mx-auto max-w-max">
								<Icon
									name="phone"
									size="w-5 h-5"
								/>
								<span>Позвонить</span>
							</div>
						</Button>
						<span class="text-xs lg:text-sm text-dark-8/50">Если Вам нужен другой цвет позвоните нам</span>
					</div>
				</div>
			</div>
			<ProductButtons
				:id="data.id"
			/>
		</div>
	</Container>
</template>

<script setup>
	import Container from '@components/Container/Container.vue'
	import Gallery from "@components/Gallery/Gallery.vue";
	import Icon from "@components/Icon/Icon.vue";
	import Button from "@components/Button/Button.vue";
	import OfferColors from "@partials/Product/OfferColors/OfferColors.vue"
	import ProductButtons from '@components/ProductButtons/ProductButtons.vue'
	import { images, chars, article } from '@modules/Products/store/Product'
	import { lists } from '@data/lists';
	import useMedia from '@tools/media'
	const { lg } = useMedia()

	const props = defineProps({
		data: { type: Object, default: () => {} }
	})
</script>
