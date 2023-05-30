<template>
	<Container
		:dark="dark"
		title="Контакты и адрес"
		containerClass="grid"
	>
		<ul  class="grid lg:grid-cols-4 lg:gap-6 lg:justify-items-center lg:px-5 gap-2.5 lg:max-w-max lg:mx-auto mb-6">
			<li
				v-for="item in lists.contacts"
				:key="item"
			>
				<a
					:href="item.link"
					target="_blank"
					:class="[
						'outline-none focus:outline-none focus-visible:underline hover:underline underline-offset-2 transition-all duration-300 flex space-x-2.5 items-center',
						dark ? 'text-white' : 'text-dark-8'
					]"
				>
					<Icon
						:class="[
							'w-7 h-7',
							dark ? 'text-white' : 'text-dark-3'
						]"
						:name="item.icon"
					/>
					<span>{{ item.title }}</span>
				</a>
			</li>
			<li class="lg:col-span-4 lg:mx-auto">
				<a
					href="https://yandex.ru/maps/-/CCUZ4OD1LC"
					target="_blank"
					:class="[
						dark ? 'text-white' : 'text-dark-8',
						'grid grid-cols-a1 gap-x-2.5 outline-none focus:outline-none focus-visible:underline hover:underline underline-offset-2 items-start'
					]"
				>
					<Icon
						:class="[
							'w-7 h-7',
							dark ? 'text-white' : 'text-dark-3'
						]"
						name="map-marker"
					/>
					<span>369009, КЧР, г.Черкесск, Демиденко 159 Д.</span>
				</a>
			</li>
		</ul>
		<div class="w-full aspect-video max-h-[280px] rounded-2lg overflow-hidden">
			<iframe class="w-full h-full" :src="mapData" frameborder="0"></iframe>
		</div>
	</Container>
</template>

<script setup>
	import { lists } from 'shared/data/lists';
	import Icon from 'shared/ui/Icon/Icon.vue'
	import Container from 'shared/ui/Container/Container.vue';
	const props = defineProps({
		dark: { type: Boolean, default: () => false }
	})

	// TODO данные не в админке!
	const mapData = "https://yandex.ru/map-widget/v1/?um=constructor%3A981f2ba8018fb97f5ead24886b66d6e5c2882404faa336b0076f40230dbc5e4b&amp;source=constructor"
</script>

<style>

</style>
