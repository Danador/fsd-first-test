<template>
	<section
		class="py-6 lg:py-12"
		:class="dark ? 'bg-dark-8' : 'bg-white'"
	>
		<div
			:class="
				containerClass,
				breadcrumbs.length || breadcrumbTitle ? 'mb-6' : ''
			"
			class="mx-auto container px-4 lg:px-5"
		>
			<Breadcrumbs
				v-if="breadcrumbs.length || breadcrumbTitle"
				:class="title ? 'mb-2.5' : ''"
				:title="breadcrumbTitle"
				:links="breadcrumbs"
			/>
			<Heading
				v-if="title"
				:title="title"
				:class="titleClass"
				:titleSmall="titleSmall"
				:dark="dark"
			/>
			<slot/>
		</div>
	</section>
</template>

<script setup>
	import Heading from '@shared/Heading/Heading.vue'
	import Breadcrumbs from '@shared/Breadcrumbs/Breadcrumbs.vue';
	const props = defineProps({
		title: { type: String, default: () => '' },
		titleSmall: { type: Boolean, default: () => false },
		titleClass: { type: String, default: () => '' },
		dark: { type: Boolean, default: () => false },
		containerClass: { type: String, default: () => '' },
		breadcrumbs: { type: Array, default: () => []  },
		breadcrumbTitle: { type: String, default: () => '' },
	})
</script>

<style>

</style>
