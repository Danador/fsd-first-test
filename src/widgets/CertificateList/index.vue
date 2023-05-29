<template>
	<!-- TODO: почему это не список? -->
	<Container
		v-if="list?.length"
		:title="title"
		:dark="dark"
	>
		<ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
			<li v-for="item in list" :key="item">
				<a
					:href="item.image"
					target="_blank"
					:class="dark ? 'hover:ring-white focus-visible:ring-white' : 'hover:ring-dark-8 focus-visible:ring-dark-8'"
					class="ring-2 sm:max-h-[300px] ring-transparent outline-none focus:outline-none aspect-square transition-all block duration-300 bg-center bg-no-repeat bg-cover"
					:style="`background-image: url(${item.image})`"
				><span class="sr-only">{{ item.title }}</span></a>
			</li>
		</ul>
	</Container>
</template>

<script setup>
	import Container from '@shared/Container/Container.vue'
	const props = defineProps({
		title: { type: String, default: () => '' },
		list: { type: Array, default: () => [] },
		dark: { type: Boolean, default: () => false }
	})

	// console.log(props.list);
</script>
