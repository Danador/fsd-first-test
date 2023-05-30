<template>
	<Container
		containerClass="grid gap-y-6 gap-x-12 lg:grid-cols-2"
	>
		<span class="text-Ubuntu-xl sm:text-Ubuntu-2xl lg:text-Ubuntu-4xl font-second">Будучи <span class="text-dark-3">основанной в 2005г.,</span> к настоящему моменту компания насчитывает:</span>
		<ul class="grid lg:grid-cols-2 text-white rounded-lg lg:overflow-hidden">
			<li
				v-for="item in information" 
				:key="item" 
				:class="`w-full flex flex-col space-y-2.5 first:rounded-t-2lg last:rounded-b-2lg first:lg:rounded-none last:lg:rounded-none row p-6 h-full ${ item.class }`"
			>
				<span class="text-Ubuntu-2lg lg:text-Ubuntu-xl font-second grid grid-rows-1a">{{ item.title }}</span>
				<p class="text-Sans-sm sm:text-Sans-base">{{} item.description }}</p>
			</li>
		</ul>
	</Container>
</template>
<script setup>
	import Container from 'shared/ui/Container/Container.vue';
	const information = [
		{
			title: "20 линий",
			description: "по производству сотового поликарбоната",
			class: "bg-dark-1"
		},
		{
			title: "7 линий",
			description: "комплектующих",
			class: "bg-dark-2"
		},
		{
			title: "4 линии",
			description: "по монолитному поликарбонату",
			class: "bg-dark-3"
		},
		{
			title: "5 линий",
			description: "по производству полипропиленовых листов",
			class: "bg-dark-4"
		},
	]
</script>