<template>
	<Container
		title="Заказать"
		titleClass="!mb-0"
		:dark="dark"
		containerClass="grid text-center gap-y-4"
	>
		<span
			:class="dark ? 'text-white' : 'text-dark-8'"
			class="text-left lg:text-center"
		>Оставьте заявку, заполнив данные ниже и мы обязательно с Вами свяжемся!</span>
		<Form
			:center="lg ? true : false"
			class="max-w-[600px] mx-auto text-left"
			:dark="dark"
		/>
	</Container>
</template>

<script setup>
	import Form from '@components/Form/Form.vue'
	import Container from '@components/Container/Container.vue'
	import useMedia from '@tools/media'
	const { lg } = useMedia()
	const props = defineProps({
		dark: { type: Boolean, default: () => false }
	})
</script>

<style>

</style>
