<template>
	<Container
		class="pb-12 lg:pb-20"
		containerClass="grid lg:grid-cols-1a gap-6 grid-cols-full"
	>
		<Breadcrumbs
			class="col-span-2"
			:links="breadcrumbs"
		/>
		<div class="prose max-w-none mx-auto">
			<div class="w-full max-h-[450px] aspect-video lozad bg-no-repeat bg-center bg-cover rounded-2lg" :data-background-image="`${ data.image }`"></div>
			<Heading class="!text-left mt-6" :title="data.title"/>
			<div v-html="data.description"></div>
		</div>
		<div class="flex flex-col gap-6 max-w-[412px]">
			<p class="font-second text-2xl text-dark-8 font-bold">Читайте также</p>
			<ul class="grid gap-6 lg:gap-2.5">
				<li
					v-for="item in list.slice(0,3)"
					:key="item"
					class="grid gap-y-2.5 relative p-6 rounded-2lg ring-1 transition-all hover:ring-dark-3 group hover:bg-light-7 ring-gray-5"
				>
					<a :href="'/article/' + item.slug" class="font-second text-dark-8 font-bold before:absolute before:inset-0 transition-colors group-hover:text-dark-3 text-xl">{{ item.title }}</a>
					<div class="flex items-center space-x-1 text-gray-2/50 text-sm">
						<span class="w-1 h-1 block rounded-full bg-gray-2/50"></span>
						<span>{{ item.publication }}</span>
					</div>
					<div v-html="description = marked.parse(item.description)" class="prose-h1:text-xs prose max-w-none max-h-[80px] line-clamp-4">
					</div>
				</li>
			</ul>
		</div>
	</Container>
</template>

<script setup>
	import Heading from '@components/Heading/Heading.vue';
	import Container from '@components/Container/Container.vue'
	import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs.vue';
	import { marked } from 'marked';
	import { ref } from 'vue';
	const props = defineProps({
		data: { type: Object, default: () => {} },
		breadcrumbs: { type: Array, default: () => [] },
		list: { type: Array, default: () => [] },
	})
	const description = ref(null)
	props.data.description = marked(props.data.description)
	// console.log(props.data);
</script>

<style>

</style>
