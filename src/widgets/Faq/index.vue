<template>
	<!-- TODO: Вывести нормально ответ -->
	<Container
		v-if="list"
		:dark="dark"
		title="Часто задаваемые вопросы"
	>
		<p
			:class="dark ? 'text-white' : 'text-dark-8'"
			class="lg:text-center mb-6"
		>Здесь мы ответим на часто задаваемые вопросы от наших клиентов, чтобы не терять зря время!</p>
		<div class="grid gap-y-2.5 w-full">
			<button
				v-for="(item, id) in list"
				:key="item"
				@click="openFaqs(id)"
				:class="[
					'transition-all duration-300 w-full goup text-left max-w-[800px] mx-auto rounded-2lg ring-1 px-4 lg:px-5 py-4 grid grid-cols-1a items-center outline-none focus:outline-none focus-visible:ring-[3px]',
					dark ? 'text-white ring-white/25 hover:text-dark-1 focus-visible:text-light-1 focus-visible:ring-light-1' : 'text-dark-8 ring-dark-8/25 focus-visible:ring-dark-4 hover:text-dark-4'
				]">
				<span
					:class="dark ? '' : 'group-focus-visible:text-dark-4'"
					class="text-Sans-bold-base lg:text-Sans-bold-2lg transition-color duration-300"
				>{{ item.question }}</span>
				<Icon
					name="arrow-right"
					class="w-6 h-6 transition-all duration-300"
					:class="openFaq === id ? '-rotate-90' : 'rotate-90' "
				/>
				<div
					class="transition-all prose max-w-none duration-300 block"
					:class="[
						dark ? 'text-white' : 'text-dark-8',
						openFaq === id ? 'max-h-screen visible opacity-100 pt-5' : 'pt-0 max-h-0 invisible opacity-0'
					]"
					v-html="marked(item.answer)"
				></div>
			</button>
		</div>
	</Container>
</template>

<script setup>
	import { ref } from 'vue'
	import Icon from "shared/ui/Icon/Icon.vue";
	import Container from 'shared/ui/Container/Container.vue';
	import { marked } from 'marked';

	const props = defineProps({
		dark: { type: Boolean, default: () => false },
		list: { type: Array, default: () => null }
	})

	const openFaq = ref(null);
	const openFaqs = (id) => {
		if(openFaq.value === id) {
			openFaq.value = null
		} else {
			openFaq.value = id
		}
	}
</script>

<style>

</style>
