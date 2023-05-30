<template>
	<Container
		class="h-full lg:h-[calc(100vh-98px)] overflow-hidden"
		containerClass="relative"
	>
		<div class="grid lg:grid-cols-2 pt-9 gap-y-8 items-center justify-center overflow-y-hidden">
			<div
				class="grid gap-6 lg:-mt-[280px] justify-items-center"
			>
				<h1 class="text-Ubuntu-xl md:text-Ubuntu-2xl lg:text-Ubuntu-4xl font-second text-center lg:text-left">Упс! Страница <br> не найдена</h1>
				<img class="lozad lg:hidden mx-auto w-[170px] object-contain h-[260px]" src="/images/404.png" alt="404">
				<Button
					href="/"
					theme="dark"
					left
					iconName="arrow-left"
					iconSize="w-7 h-7"
				>
					{{ sm ? 'Вернуться в каталог' : 'В каталог' }}
				</Button>
			</div>
			<img class="lozad hidden lg:block w-[500px] mx-auto object-contain -translate-y-20 h-[800px]" src="/images/404.png" alt="404">
		</div>
		<img class="lozad w-20 h-[79px] absolute blur translate-x-1/2 md:translate-x-0 top-0 lg:top-3 right-0 lg:left-60 rotate-[112deg]" src="/images/404.png" alt="404">
		<img class="lozad w-[130px] h-[190px] absolute -translate-x-[80%] bottom-0 md:-translate-x-1/2 blur-[3.5px] lg:top-1/2 lg:left-48 rotate-[30deg]" src="/images/404.png" alt="404">
	</Container>
</template>
<script setup>
	import Container from "@components/Container/Container.vue"
	import Button from "@components/Button/Button.vue";
	import useMedia from '@tools/media'
	const { sm } = useMedia()
</script>
