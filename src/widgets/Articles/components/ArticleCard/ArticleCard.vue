<template>
	<component :is="tag"
		v-if="data"
		class="group relative rounded-2lg transition-all duration-300"
	>
		<div
			:style="`background-image: url('${ data?.image }')`"
			:class="data?.enable ? 'grayscale' : ''"
			class="rounded-t-2lg relative bg-center w-full h-[180px] sm:h-[280px] bg-no-repeat bg-cover"></div>
		<div
			:class="data?.enable ? 'text-gray-4 group-hover:bg-transparent group-active:bg-transparent' : ''"
			class="p-6 grid gap-y-2.5 rounded-b-2lg group-hover:bg-light-7 group-active:bg-light-6 transition-all duration-300"
		>
			<a
				:href="'/article/' + data?.slug"
				:class="data?.enable ? 'before:ring-gray-4 pointer-events-none group-hover:before:ring-gray-4' : 'before:ring-gray-5'"
				class="font-bold transition-colors duration-300 line-clamp-2 lg:line-clamp-1 group-active:text-dark-4 before:absolute before:inset-0 before:z-20 before:rounded-2lg before:transition-all outline-none focus:outline-none before:ring-1 group-hover:before:ring-light-7 focus-visible:before:ring-2 focus-visible:before:ring-dark-3 text-xl tracking-tight text-dark-7"
			>{{ data?.title }}</a>
			<span class="grid relative z-10 grid-cols-a1 text-dark-3 items-center gap-x-1">
				<span class="block bg-gray-3 rounded-full w-1 h-1"></span>
				<span class="text-sm text-gray-2">{{ data?.publication }}</span>
			</span>
			<div class="line-clamp-4 max-h-[94px] overflow-hidden hover:text-clip tracking-tight" v-html="description"></div>
		</div>
	</component>
</template>

<script setup>
	import { marked } from 'marked';
	import { ref } from 'vue';
	const props = defineProps({
		data: { type: Object, default: () => {} },
		tag: { type: String, default: () => 'li' }
	})
	const description = ref(null)
	props.data.description ? description.value = marked.parse(props.data?.description) : description = null
	// console.log(props.data);
</script>
