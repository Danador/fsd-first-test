<template>
  	<Container
		v-if="list?.length"
		title="Документы"
		:dark="dark"
	>
		<ul class="w-full grid grid-cols-5 gap-2.5 mt-5">
			<li
				v-for="item in list"
				:key="item"
			>
				<a
					:href="item.document"
					:class="dark ?
					'text-white bg-dark-7 hover:bg-dark-6 focus-visible:ring-white focus-visible:ring-2 focus-visible:bg-dark-6 active:bg-dark-8 active:text-dark-5' : 'bg-light-7 text-dark-7 hover:bg-light-6 focus-visible:bg-light-6 focus-visible:ring-dark-7 active:text-dark-5 active:bg-light-6'"
					class="py-4 px-6 grid gap-y-2.5 z-10 relative outline-none rounded-2lg ring-1 ring-transparent disabled:bg-gray-6 disabled:text-gray-3 transition-all focus:outline-none"
				>
					<Icon
						name="docs"
						size="w-10 h-10"
					/>
					<span class="font-bold text-xl">{{ item.title }}</span>
				</a>
			</li>
		</ul>
	</Container>
</template>

<script setup>
	import Icon from "@components/Icon/Icon.vue";
	import Container from '@components/Container/Container.vue'
	const props = defineProps({
		dark: { type: Boolean, default: () => false },
		list: { type: Array, default: () =>  []}
	})
</script>
