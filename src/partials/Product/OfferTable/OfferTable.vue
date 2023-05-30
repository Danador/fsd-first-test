<template>
	<Container
		v-if="table"
		title="Таблица размеров и цены за товар"
		:dark="dark"
	>
		<Table
			:table="table"
			:dark="dark"
		/>
	</Container>
</template>

<script setup>
	import Table from "@components/Table/Table.vue";
	import Container from '@components/Container/Container.vue'
	const props = defineProps ({
		dark: { type: Boolean, default: () => false },
		table: { type: String, default: () => '' },
		title: { type: String, default: () => '' }
	})
</script>
