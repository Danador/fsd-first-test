<template>
	<header
		:class="productPage ? '' : 'border-b border-gray-5'"
		class="transition-all duration-300 grid-in-header sticky z-[100] bg-dark-4 lg:bg-white top-0 lg:-top-9 lg:hover:top-0"
	>
		<div
			:class="productPage && lg ? 'pb-0' : 'pb-2.5'"
			class="w-full z-50 px-4 relative lg:px-0 py-2.5 bg-dark-4 lg:bg-white container grid gap-y-2.5 mx-auto"
		>
			<!-- разделы сайта -->
			<nav class="max-w-max hidden lg:block mx-auto">
				<ul class="px-2.5 grid grid-flow-col gap-x-6 max-w-max mx-auto">
					<li
						v-for="item in lists.header"
						:key="item"
					>
						<a
							:href="item.link"
							class="transition-all duration-300 text-dark-8 text-Ubuntu-base font-second outline-none focus:outline-none hover:text-dark-3 focus-visible:underline underline-offset-[3px] active:text-dark-4 disabled:text-silver"
						>{{ item.title }}</a>
					</li>
				</ul>
			</nav>
			<!-- активная панель -->
			<div class="items-center relative flex justify-between lg:grid lg:grid-cols-a1a gap-x-[15px] lg:px-4">
				<!-- логотип и каталог -->
				<div class="hidden lg:flex space-x-10 items-center">
					<a href="/" class="focus:outline-none outline-none hover:animate-pulse transition-all duration-300 focus-visible:animate-pulse">
						<Icon
							class="w-40 h-10"
							file="logo"
							name="logo"
						/>
					</a>
					<Button
						left
						theme="dark"
						:iconName="$catalogOpen ? 'close' : 'catalog'"
						iconSize="w-[18px] h-[18px]"
						:class="[
							$catalogOpen ? 'opacity-80' : ''
						]"
						@click="catalogOpen.set(!$catalogOpen)"
					>Каталог</Button>
				</div>
				<a class="text white lg:hidden" href="/">
					<Icon
						file="logo"
						name="logomin"
						size="w-[127px] h-8"
					/>
				</a>
				<!-- поиск -->
				<form class="lg:relative" action="/search/" method="get">
					<label class="lg:relative hidden lg:flex lg:overflow-visible items-center justify-center">
						<input
							class=" lg:focus-visible:ring-dark-2 transition-all duration-300 items-center w-full p-2.5 rounded-2lg bg-white lg:outline-dark-3 focus-visible:outline-dark-2 outline-2 outline  text-Sans-base lg:pl-9 placeholder:text-Sans-base placeholder:text-dark-8/25"
							placeholder="Поиск в каталоге..."
							type="search"
							name="request"
							v-model="search"
						>
						<button
							:disabled="lg && !search.length"
							class="lg:absolute lg:block hidden lg:top-2.5 lg:left-2.5 lg:translate-y-0.5 outline-none focus:outline-none"
						>
							<Icon
								class="w-5 h-5 text-white lg:text-dark-8"
								name="search"
							/>
						</button>
					</label>
					<fieldset
						:class="[
							search !== '' ? '' : 'opacity-0 invisible',
							'absolute hidden lg:grid max-h-[200px] transition-all ring-1 ring-dark-3 duration-300 top-12 p-2.5 gap-y-2.5 rounded-2lg inset-x-0 bg-white w-full z-50'
						]"
					>
					<div class="overflow-y-auto w-full pr-2.5 h-full">
						<transition
							enter-active-class="animate-opacity-enter-active"
							leave-active-class="animate-opacity-leave-active"
							mode="out-in"
						>
							<ul
								v-if="categoryList?.length"
								class="grid gap-1"
							>
								<li
									v-for="item in categoryList"
									:key="item"
								>
									<a
										:href="'/product/' + item.slug"
										class="w-full p-1 truncate flex outline-none transition-all duration-300 focus:outline-none rounded ring-1 ring-transparent hover:bg-light-6 hover:text-dark-8 focus-visible:text-dark-4 focus-visible:ring-dark-4 active:bg-light-4 active:text-dark-4 disabled:text-gray-4 space-x-1 items-center"
									>
										<Icon
											name="search"
											size="w-4 h-4"
										/>
										<span>{{ item.title }}</span>
									</a>
								</li>
							</ul>
							<p v-else-if="search">Ничего не найдено</p>
						</transition>
					</div>
					</fieldset>
				</form>
				<div class="flex lg:space-x-3.5 items-center">
					<!-- избранное -->
					<Button
						theme="whiteStroke"
						href="/favorites/"
						left
						iconName="favorites-stroke"
						iconSize="w-5 h-5"
						class="hidden lg:grid"
					>
						Избранное
					</Button>
					<!-- номер телефона -->
					<a href="tel:84955097452" class="hidden text-dark-8 outline-none focus:outline-none focus-visible:text-dark-3 lg:flex space-x-1.5 items-center text-Sans-bold-base">
						<Icon
							class="w-5 h-5"
							name="phone"
						/>
						<span>8 (495) 509-74-52</span>
					</a>
					<button
						@click="openMenu.set(!$openMenu), bodyLock($openMenu)"
						class="lg:hidden text-white"
					>
						<Icon
							name="burger"
							size="w-8 h-8"
						/>
					</button>
				</div>
			</div>
			<!-- Полоски должны быть до края экрана -->
			<div
				v-if="productPage && lg"
				class="hidden lg:block py-4 border-y border-gray-5 bg-white -mx-[100%]"
			>
				<div class="conatiner container mx-auto	 px-5 flex justify-end space-x-2.5 w-full">
					<div class="flex items-center space-x-2.5">
						<Icon
							class="text-dark-3"
							size="w-10 h-10"
							name="box"
						/>
						<span class="font-bold">Бесплатная доставка</span>
					</div>
					<span class="w-0.5 bg-gray-5"></span>
					<Button
						theme="white"
						class="lg:w-[165px]"
						small
						@click="open.set('offer')"
					>
						Заказать
					</Button>
					<Button
						small
						theme="whiteStroke"
						left
						iconSize="w-5 h-5"
						@click="addFavorite(productId.get())"
						class="hidden lg:grid lg:w-[165px]"
						:class="change ? '!ring-dark-3' : ''"
						:iconName="change ? 'favorites' : 'favorites-stroke'"
					>
						<span v-text="change ? 'В избранном' : 'В избранное'"></span>
					</Button>
				</div>
			</div>
		</div>
		<div class="'absolute z-10 lg:hidden top-11 inset-x-0 bg-white py-2.5 border-b border-gray-5 lg:border-none'">
			<div class="grid container px-4 lg:px-5 mx-auto grid-cols-a1 gap-x-2.5 items-center">
				<button @click="catalogOpen.set(!$catalogOpen), bodyLock($catalogOpen)">
					<Icon
						class="w-[30px] h-[30px] text-dark-4"
						:name="$catalogOpen ? 'close' : 'cubies'"
					/>
				</button>
				<form action="/search/" method="get">
					<label class="relative lg:hidden flex overflow-visible items-center justify-center">
						<input
							class="focus-visible:outline-dark-2 transition-all duration-300 items-center w-full p-2.5 rounded-2lg bg-white outline-dark-3 outline outline-1 -outline-offset-1 focus:outline-none pl-9 placeholder:text-dark-8/25"
							placeholder="Поиск в каталоге..."
							type="search"
							name="request"
							v-model="search"
						>
						<button
							:disabled="lg && !search.length"
							class="absolute block lg:hidden top-2.5 left-2.5 translate-y-0.5 outline-none focus:outline-none"
						>
							<Icon
								class="w-5 h-5 text-dark-8"
								name="search"
							/>
						</button>
					</label>
				</form>
			</div>
		</div>
		<CatalogMenu
			:menu="menu"
		/>
		<MobileMenu/>
	</header>
</template>

<script setup>
	import { lists } from '@data/lists'
	import Button from 'shared/ui/Button/Button.vue';
	import Icon from 'shared/ui/Icon/Icon.vue';
	import CatalogMenu from '@widgets/CatalogMenu/views/CatalogMenu.vue';
	import MobileMenu from 'shared/ui/MobileMenu/MobileMenu.vue';
	import { ref, watch, computed, onMounted } from "vue"
	import { catalogOpen, openMenu } from '@widgets/Header/store/Header'
	import { useStore } from '@nanostores/vue';
	import { getProducts } from "@widgets/Products/store/Product"
	import { bodyLock, addFavorite } from '@tools/helpers'
	import { open } from 'shared/ui/Modal/store/Modal'
	import { productId, favoritesIds } from '@widgets/Products/store/Product';
	import useMedia from '@tools/media'

	const props = defineProps({
		productPage: { type: Boolean, default: () => false },
		menu: { type: Array, default: () => [] }
	})

	const { lg } = useMedia()
	const productsId = []
	const $catalogOpen = useStore(catalogOpen)
	const $openMenu = useStore(openMenu)
	const search = ref('')
	const categoryList = ref([])
	const noTop = ref(null)
	const $favoritesIds = useStore(favoritesIds)
	let change = computed(() => {
		return $favoritesIds.value.includes(productId.get())
	})

	watch(search, async () => {
		categoryList.value = search.value ? await getProducts(productsId, {
			$or: [
				{
					title: {
						$containsi: search.value
					}
				},
				{
					offers: {
						article: {
							$containsi: search.value
						}
					}
				}
			]
		}) : []
	})
</script>

<script>
	import media from "@tools/media"
	export default {
		mixins: [media]
	}
</script>

<style scoped>
	input[type=text]::-ms-clear {  display: none; width : 0; height: 0; }
	input[type=text]::-ms-reveal {  display: none; width : 0; height: 0; }
	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration { display: none; }
</style>
