<template>
	<div class="hidden lg:block">
		<ul class="text-xs text-dark-8/50 flex">
			<li class="flex items-center space-x-1">
				<a class="hover:underline" href="/">Главная</a>
				<Icon
					v-if="title"
					name="arrow-right"
					size="w-3 h-3"
				/>
			</li>
			<template v-if="links?.length">
				<li
					v-for="item in links"
					:key="item"
					class="after:ml-1 group last:pointer-events-none ml-1 flex items-center space-x-1"
				>
					<Icon
						name="arrow-right"
						size="w-3 h-3"
					/>
					<a
						class="group-last:hover:no-underline hover:underline"
						:href="item.url"
					>{{ item.title }}</a>
				</li>
			</template>
			<li
				v-else
				class="after:ml-1 ml-1 after:content-['—'] last:after:content-['']"
			>
				<span class="last:pointer-events-none last:hover:no-underline hover:underline">{{ title }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import Icon from 'shared/ui/Icon/Icon.vue'
	import Container from 'shared/ui/Container/Container.vue';
	import useMedia from 'tools/media'
	const { lg } = useMedia()
	const props = defineProps({
		links: { type: Array, default: () => [] },
		title: { type: String, default: () => '' }
	})
</script>

<style>

</style>
