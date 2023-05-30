<template>
	<!-- <pre>{{ menu }}</pre> -->
	<div
		:class="[
			$catalogOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
			'absolute transition-al top-[113px] lg:top-[98px] z-50 duration-500 inset-x-0 bg-white h-[calc(100vh-116px)] lg:h-auto'
		]"
	>
		<div class="container mx-auto">
			<p v-if="!lg" class="font-bold text-2xl px-6">Каталог</p>
			<ul class="h-full overflow-y-auto max-h-[calc(100vh-160px)] lg:max-h-[500px] mx-auto flex flex-col gap-3 lg:grid lg:grid-flow-col lg:max-w-max px-4 lg:px-5 py-1">
				<template
					v-for="item in menu"
					:key="item"
				>
					<!-- <pre>{{ item }}</pre> -->
					<CatalogCard
						:data="item"
						:href="item.url"
					/>
					<!-- :class="openCategory === item.id && lg ? 'underline text-dark-3' : ''"
					@click="openCategory === item.id && !lg ? '' : openCategories(item.id)" -->
				</template>
			</ul>
			<!-- <template
				v-for="item in menu"
				:key="item"
			>
				<transition
					mode="out-in"
					:enter-active-class="lg ? 'animate-opacity-enter-active' : 'animate-slide-enter-active'"
					:leave-active-class="lg ? 'animate-opacity-leave-active' : 'animate-slide-enter-leave'"
				>
					<div
						v-if="openCategory === item.id"
						class="absolute left-0 top-0 h-full lg:h-auto lg:top-full bg-white w-full"
					>
						<div class="container mx-auto">
							<button
								v-if="!lg"
								@click="openCategory = null"
								class="flex space-x-1"
							>
								<Icon
									name="arrow-left"
									class="text-dark-3"
									size="w-5 h-5"
								/>
								<p class="text-sm font-bold">Каталог</p>
							</button>
							<ul class="grid lg:grid-cols-3 gap-3 max-h-[calc(100vh-24px)] lg:max-h-[500px] overflow-y-auto px-5 py-3 mx-auto w-full">
								<template
									v-for="subitem in item.childs"
									:key="subitem.id"
								>
									<li>
										<CatalogCard
											:data="subitem"
											:href="`/catalog/${ subitem.slug }`"
										/>
									</li>
								</template>
							</ul>
						</div>
					</div>
				</transition>
			</template> -->
		</div>
	</div>
	<button
		@click="catalogOpen.set(!$catalogOpen), openCategory = null"
		:class="[
			$catalogOpen ? 'block' : 'hidden',
			'fixed inset-0 z-[-2] cursor-default'
		]"
	></button>
</template>

<script setup>
	import { CatalogCard } from 'features/CatalogMenu'
	import { useStore } from '@nanostores/vue';
	import { headerModel } from 'widgets/Header'
	import { ref } from 'vue';
	import useMedia from 'tools/media'

	const props = defineProps({
		menu: { type: Array, default: () => [] }
	})

	const { lg } = useMedia()
	const $catalogOpen = useStore(headerModel.catalogOpen)
	const openCategory = ref(null)

	const openCategories = (id) => {
		if (openCategory.value === id) {
			openCategory.value = null
		} else {
			openCategory.value = id
		}
	}
</script>
