<template>
	<section>
		<div class="container mx-auto w-full py-6 sm:py-8 lg:py-12 px-4">
			<h1 class="text-xl font-bold text-center sm:text-5xl sm:leading-[54px] my-5">{{heading}}</h1>
			<IconList client:only/>
		</div>
	</section>
</template>
<script setup>
	import IconList from "@shared/IconList/IconList.vue";
	const heading = 'Список используемых иконок'
</script>

