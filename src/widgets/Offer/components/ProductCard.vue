<template>
	<component :is="tag"
		v-if="data"
		:class="data.enable ? 'hover:ring-dark-3 group ring-dark-8/25' : 'bg-light-7 ring-dark-8/10'"
		class="h-full rounded-2lg relative w-full transition-all grid-cols-full grid grid-rows-[140px,auto] sm:grid-rows-[240px,auto] gap-2.5 ring-1"
	>
		<img
			v-for="item in data.images.slice(0,1)"
			:key="item"
			:src="item"
			:class="data.enable ? '' : 'opacity-50'"
			class="w-full object-cover rounded-t-2lg h-full"
		>
		<div class="p-2.5 sm:p-6 grid last:items-end lg:grid-rows-a1 gap-2.5">
			<span class="text-xs sm:text-sm tracking-tight text-gray-3">Артикул: {{ data.offers[0].article }}</span>
			<div class="flex flex-col">
				<component :is="data.enable ? 'a' : 'div'"
					:href="'/product/' + data?.slug"
					:class="data?.enable ? '' : 'pointer-events-none'"
					class="font-second line-clamp-3 text-sm sm:text-xl transition-all group-hover:text-gray-3 font-bold text-dark-8 before:absolute before:inset-0 outline-none focus:outline-none before:ring-1 before:ring-transparent before:focus-visible:ring-dark-3  before:focus-visible:ring-2 before:focus-visible:text-gray-3 active:text-dark-3 before:rounded-2lg"
				>{{ data?.title }}</component>
				<ul class="hidden gap-y-1 sm:grid">
					<li
						v-for="item in props.data?.offers[0].characteristics.flat()"
						:key="item"
						class="text-sm tracking-tight"
					>{{ item.type?.title }}: {{ item?.title }}</li>
				</ul>
			</div>
			<div v-if="data?.enable" class="lg:grid lg:grid-cols-1a lg:mt-3.5 gap-2.5">
				<Button
					:href="'/product/' + data?.slug"
					:small="!sm"
					class="z-20 max-w-none text-center"
					theme="dark"
				>Перейти</Button>
				<FavoriteButton
					class="absolute top-1.5 right-1.5 lg:top-0 lg:left-0 lg:relative z-20"
					:id="data.id"
				/>
			</div>
			<p v-else class="text-center font-bold text-dark-4 text-xl font-second">Нет в наличии</p>
		</div>
	</component>
</template>

<script setup>

	import Button from "@components/Button/Button.vue"
	import FavoriteButton from '@components/Button/FavoriteButton.vue'
	import useMedia from '@tools/media'
	const { sm } = useMedia()

	const props = defineProps({
		data: { type: Object, default: () => null },
		tag: { type: String, default: () => 'li' }
	})

	// console.log(props.data);
</script>
