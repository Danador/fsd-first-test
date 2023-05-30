<template>
	<section>
		<div class="grid max-w-[1920px] sm:gap-y-0 gap-y-6 mx-auto">
			<Benefit
				v-for="item in data.features"
				:key="item"
				:img="item.image"
				imgClass="lg:rounded-r-[10px]"
				left
			>
				<div class="grid gap-y-6 lg:max-w-[500px] lg:mx-auto p-4 ">
					<p class="text-2xl sm:text-5xl font-second sm:leading-[54px] font-bold">{{ item.title }}</p>
					<p>{{ item.description }}</p>
				</div>
			</Benefit>
			<Benefit
				v-if="data.colors.length"
				class="row-start-2"
				img="/images/background-2.png"
				imgClass="lg:rounded-l-[10px]"
				alt="img"
			>
				<div class="p-4 grid gap-2.5 lg:gap-6 lg:max-w-[500px] mx-auto">
					<p class="text-2xl sm:text-5xl sm:leading-[54px] font-second font-bold">Яркий контраст цветов:</p>
					<OfferColors
						class="flex gap-6"
						:list="data.colors"
						:selectOffer="data.offers[0].id"
					/>
					<p class="text-sm font-bold text-dark-8/50">Цвета товара вживую выглядят сочнее чем на фотографиях!</p>
				</div>
			</Benefit>
		</div>
	</section>
</template>

<script setup>
	import Benefit from "@partials/Index/Benefits/components/Benefit.vue";
	import OfferColors from "@partials/Product/OfferColors/OfferColors.vue";
	const props = defineProps({
		data: { type: Object, default: () => {} }
	})
</script>

<style>

</style>
