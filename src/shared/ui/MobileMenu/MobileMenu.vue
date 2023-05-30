<template>
	<div
		class="fixed inset-0 z-[51] transition-all duration-300"
		:class="$openMenu ? 'bg-dark-8/50' : 'pointer-events-none'"
	>
		<div
			:class="[
				$openMenu ? 'translate-x-0' : '-translate-x-full',
				'absolute h-full lg:hidden text-white rounded-r-2lg flex flex-col justify-between space-y-6 left-0 transition-all duration-300 top-0 px-4 pt-2.5 pb-6 bg-dark-4 w-full max-w-[80%] sm:max-w-[50%] z-[51]'
			]"
		>
			<div class="flex items-center text-white justify-between">
				<a href="/">
					<Icon
						file="logo"
						name="logo-white"
						size="w-32 h-8"
					/>
				</a>
				<button
					@click="
						openMenu.set(!$openMenu),
						bodyLock($openMenu)
					"
				>
					<Icon
						size="w-8 h-8"
						name="close"
					/>
				</button>
			</div>
			<ul class="grid gap-y-5">
				<li
					v-for="item in mobileList"
					:key="item"
				>
					<a :href=item.link class="font-second text-right font-bold text-xl flex gap-x-2.5 items-center">
						<Icon
							size="w-6 h-6"
							:name="item.icon"
						/>
						<span>{{ item.title }}</span>
					</a>
				</li>
			</ul>
			<ul v-if="contacts.length" class="bg-white rounded-2lg text-dark-3 grid grid-cols-4 justify-items-center gap-x-6 px-[18px] py-3.5 ">
				<li
					v-for="item in contacts"
					:key="item"
				>
					<a :href="item.link">
						<Icon size="w-7 h-7" :name="item.icon"/>
					</a>
				</li>
			</ul>
			<div v-else class="w-full bg-transparent"></div>
		</div>
		<button @click="openMenu.set(!$openMenu), bodyLock($openMenu)" :class="$openMenu ? 'absolute cursor-default inset-0' : 'lg:hidden'"></button>
	</div>
</template>

<script setup>
	import vOut from '@tools/out'
	import Icon from '@components/Icon/Icon.vue';
	import { onMounted, ref } from 'vue'
	import { openMenu, toggleMenu } from '@widgets/Header/store/Header';
	import { lists } from '@data/lists';
	import { bodyLock } from '@tools/helpers'
	import { useStore } from '@nanostores/vue';
	const $openMenu = useStore(openMenu)

	const mobileList = [
		{
			title: "Продукция",
			link: "/catalog/",
			icon: "catalog"
		},
		{
			title: "Избранное",
			link: "/favorites/",
			icon: "favorites"
		},
		{
			title: "О компании",
			link: "/",
			icon: "info"
		},
		{
			title: "Статьи",
			link: "/articles/",
			icon: "articles"
		},
		{
			title: "Фотогалерея",
			link: "/gallery/",
			icon: "gallery"
		},
		{
			title: "Видеогалерея",
			link: "/videos/",
			icon: "videos"
		},
		{
			title: "Сертификаты",
			link: "/certificate/",
			icon: "star"
		},
		{
			title: "Контакты",
			link: "/contacts/",
			icon: "phone"
		}
	]

	const contacts = ref(lists.contacts)
	const close = () => {
		$openMenu.value ? bodyLock($openMenu) : ''
	}
</script>

<style>

</style>
