<template>
	<Container
		v-if="list"
		:dark="dark"
		title="Преимущества работы с нами"
	>
		<div class="grid mt-6 sm:grid-cols-[repeat(auto-fit,minmax(290px,1fr))] xl:grid-cols-4 gap-6">
			<div
				v-for="item in list"
				:key="item"
				:class="dark ? 'text-white ring-gray-3' : 'text-dark-8 ring-gray-5'"
				class="rounded-2lg ring-1 flex flex-col gap-2.5 p-6"
			>
				<Icon
					:name = item.icon
					:class="[
					'w-10 h-10',
					dark ? 'text-white' : 'text-dark-3'
					]"
				/>
				<p class="font-bold text-xl tracking-tight">{{ item.title }}</p>
			</div>
		</div>
	</Container>
</template>

<script setup>
	import Icon from "shared/ui/Icon/Icon.vue";
	import Container from 'shared/ui/Container/Container.vue';

	const props = defineProps({
		dark: { type: Boolean, default: () => false },
		list: { type: Array, default: () => [] }
	})
	// console.log(props.list);
</script>

