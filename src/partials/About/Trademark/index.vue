<template>
	<Container
		containerClass="gap-6 lg:gap-x-12 grid lg:grid-cols-2"
	>
		<div data-background-image="/images/stock.png" class="lozad bg-cover lg:h-full aspect-video lg:aspect-auto xl:aspect-auto bg-center rounded-2lg bg-no-repeat"></div>
		<div class="w-full grid gap-y-6">
			<p>Компания «Юг-Ойл-Пласт» выпускает продукцию под собственными торговыми марками:</p>
			<ul class="grid gap-y-2.5">
				<li 
					v-for="item in list" 
					:key="item" 
					class="flex gap-x-[5px] items-center"
				>
					<span class="block w-1.5 h-1.5 rounded-full bg-dark-2"></span>
					<span class="text-Sans-bold-base">{{ item }}</span>
				</li>
			</ul>
			<p>Вся продукция компании производится на высококлассном итальянском оборудовании известной марки «UNION», а поставщиками сырья являются лучшие европейские производители: <span class="font-bold">SABIC, BUYER</span> и <span class="font-bold">КазаньОргСинтез.</span></p>
		</div>
	</Container>
</template>
<script setup>
	import Container from 'shared/ui/Container/Container.vue';
	const list = ["Borrex", "Berolux", "Sotalight", "Sotalux", "Multigreen", "Сибирские теплицы"]
</script>