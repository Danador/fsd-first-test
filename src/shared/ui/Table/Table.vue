<template>
	<div
		v-html="table"
		:class="dark ? 'dark' : 'white'"
		class="prose max-w-none prose-table:font-second lg:max-h-[500px] lg:overflow-y-auto font-bold prose-table:border-separate prose-table:border-spacing-0 prose-table:rounded-2lg pb-2.5 prose-table:overflow-hidden whitespace-nowrap overflow-x-auto"
	></div>
</template>

<script setup>
	import { ref } from 'vue'
	import { marked } from 'marked';

	const props = defineProps({
		table: { type: String, default: () => null },
		dark: { type: Boolean, default: () => false }
	})

	const table = ref(null)
	props.table ? table.value = marked.parse(props.table) : table.value = null
</script>

<style>
	.white {
		@apply prose-thead:bg-dark-7 prose-th:text-white prose-p:text-dark-7 prose-table:border prose-table:border-dark-8/25 prose-td:border prose-td:border-gray-2 prose-td:p-6 prose-td:text-dark-8 prose-th:p-6
	}
	tbody > tr:last-child > td:last-child{
		@apply rounded-br-2lg;
	}
	tbody > tr:last-child > td:first-child{
		@apply rounded-bl-2lg;
	}
	.dark {
		@apply prose-thead:bg-dark-7 prose-td:bg-dark-8 prose-table:border prose-p:text-white prose-table:border-gray-2 prose-td:border prose-td:border-gray-2 prose-td:p-6 prose-th:text-white prose-td:text-white prose-th:p-6;
	}

	.dark {
		scrollbar-color: #53B7E8 rgba(255,255,255, 0.1);
		scrollbar-width: thin;
	}

	.dark::-webkit-scrollbar {
		@apply w-2 h-2;
	}

	.dark::-webkit-scrollbar-track,
	.dark::-webkit-scrollbar-corner {
		@apply bg-dark-7 rounded-full;
	}

	.dark::-webkit-scrollbar-thumb {
		@apply hover:bg-dark-8 border-solid rounded-full bg-white;
	}
</style>
