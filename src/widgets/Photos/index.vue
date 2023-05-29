<template>
	<Container
		class="!pb-12 lg:!pb-[100px]"
		containerClass="grid gap-6"
		breadcrumbTitle="Фотогалерея"
	>
		<div class="grid lg:text-center">
			<Heading
				title="Фотогалерея"
			/>
			<span class="text-dark-8">Здесь мы размещаем все фотографии с нашего завода. Этим мы привлекаем и показываем, что наша компания действительно существует и фунционирует. На фото вы можете видеть процесс производства, сотрудников и даже заключения сделок</span>
		</div>
		<div class="grid">
			<span class="text-sm mb-2.5 text-dark-8/50 lg:hidden font-bold">Выберите категорию фотографий</span>
			<ul class="hidden lg:grid lg:grid-cols-5 lg:gap-2.5">
				<li
					v-for="item in list"
					:key="item.id"
				>
					<button
						@click="selected = item.id"
						:class="[
							selected === item.id ? 'bg-dark-3 ring-dark-3 text-white hover:text-white hover:ring-transparent' : '',
							'transition-all font-second font-bold rounded-2lg text-gray-3 hover:text-dark-3 ring-2 ring-transparent hover:ring-dark-3 py-2.5 outline-none focus:outline-none focus-visible:ring-dark-3 focus-visible:text-dark-3 focus-visible:bg-gray-5 disabled:ring-gray-5 disabled:text-gray-3 disabled:bg-gray-5 text-left lg:text-center w-full'
					]">{{ item.title }}</button>
				</li>
			</ul>
			<Select class="z-50 block lg:hidden" :options="list" v-model="selected"/>
			<template
				v-for="item in list"
				:key="item.id"
			>
				<div
					v-if="selected === item.id"
					class="grid grid-cols-2 lg:grid-cols-3 gap-2.5 mt-6"
				>
					<div
						v-for="(subitem, index) in item.images"
						:key="subitem.id"
						:style="`background-image: url(${subitem.image});`"
						class="w-full aspect-square lg:aspect-auto relative rounded-2lg max-h-[400px] lg:h-[400px] bg-center bg-no-repeat bg-cover"
					>
						<button
							@click="
								open.set('gallery_' + item.id),
								slideRecording(index)
							"
							class="absolute inset-0 z-10"
						></button>
					</div>
				</div>
			</template>
		</div>
		<template
			v-for="item in list"
			:key="item"
		>
			<Modal
				:name="'gallery_' + item.id"
			>
				<Swiper
					@swiper="SwiperInit"
					:initial-slide="indexSlide"
					:modules="[Navigation]"
					:navigation="{
						prevEl: prev,
						nextEl: next
					}"
					observer
					class="pt-14 lg:pt-0 container relative h-full max-h-[700px] w-full"
					:space-between="16"
				>
					<SwiperSlide
						v-for="subitem in item.images"
						:key="subitem"
						class="rounded-2lg bg-no-repeat bg-cover bg-center"
						:style="`background-image: url(${subitem.image})`"
					>
					</SwiperSlide>
					<button
						ref="prev"
						:class="lg ? 'p-3 left-6' : 'p-1.5 left-4'"
						class="transition-all hover:bg-dark-4 outline-none ring-1 ring-transparent focus:outline-none focus-visible:bg-dark-4 focus-visible:ring-dark-7 active:bg-dark-5 active:text-dark-3 disabled:opacity-0 disabled:invisible absolute -translate-y-1/2 top-1/2 left-0 z-10 rounded-lg text-white w-max bg-dark-7 rotate-180"
					>
						<Icon
							name="arrow-right"
							:size="lg ? 'w-9 h-9' : 'w-5 h-5'"
						/>
					</button>
					<button
						ref="next"
						:class="lg ? 'p-3 right-6' : 'p-1.5 right-4'"
						class="transition-all hover:bg-dark-4 outline-none ring-1 ring-transparent focus:outline-none focus-visible:bg-dark-4 focus-visible:ring-dark-7 active:bg-dark-5 active:text-dark-3 disabled:opacity-0 disabled:invisible absolute -translate-y-1/2 top-1/2 right-0 z-10 p-2 rounded-lg text-white w-max bg-dark-7"
					>
						<Icon
							name="arrow-right"
							:size="lg ? 'w-9 h-9' : 'w-5 h-5'"
						/>
					</button>
					<button
						@click="open.set('')"
						:class="lg ? 'p-2 top-6 right-6' : 'p-1 top-[72px] right-4'"
						class="transition-all hover:bg-dark-4 outline-none ring-1 ring-transparent focus:outline-none focus-visible:bg-dark-4 focus-visible:ring-dark-7 active:bg-dark-5 active:text-dark-3 disabled:opacity-0 disabled:invisible absolute z-10 p-2 rounded-lg text-white w-max bg-dark-7"
					>
						<Icon
							name="close"
							:size="lg ? 'w-5 h-5' : 'w-3 h-3'"
						/>
					</button>
				</Swiper>
			</Modal>
		</template>
	</Container>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Navigation } from 'swiper';
	import Modal from '@shared/Modal/views/Modal.vue'
	import Container from '@shared/Container/Container.vue'
	import Heading from '@shared/Heading/Heading.vue'
	import Icon from '@shared/Icon/Icon.vue'
	import Select from '@shared/Select/Select.vue'
	import { useStore } from '@nanostores/vue';
	import { open } from '@shared/Modal/store/Modal'
	import useMedia from '@tools/media'

	const props = defineProps({
		list: { type: Array, default: () => null }
	})

	const { lg } = useMedia()
	const prev = ref(null)
	const next = ref(null)
	const $open = useStore(open)
	const indexSlide = ref(null)

	const slideRecording = (i) => {
		indexSlide.value = i
	}
	const selected = ref(0)

	const init = async () => {
		selected.value = props.list[0].id
	}
	onMounted(async () => {
		init()
	})

	const SwiperInit = (swiper) => {
		swiper.value = swiper;
	};
</script>

<style>

</style>
