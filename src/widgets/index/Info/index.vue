<template>
	<Container
		containerClass="grid md:grid-cols-2 md:gap-x-5 lg:gap-x-12"
	>
		<div class="pb-6 lg:py-14">
			<span class="text-Ubuntu-xl sm:text-Ubuntu-2xl lg:text-Ubuntu-4xl font-second font-bold"><span class="text-dark-4">Юг</span> <span class="text-dark-5">Ойл</span> <span class="text-dark-6">Пласт</span></span>
			<div class="mt-6 grid gap-y-6">
				<p class="text-dark-8">Крупнейший производитель плит и листов из полимерных материалов в России, один из трех крупнейших производителей в мире в данной категории.</p>
				<div class="grid grid-cols-a1 gap-x-1">
					<div class="w-11 h-11 p-1">
						<div class="w-full h-full p-1.5 ring-2 ring-dark-2">
							<div class="w-6 h-6 border-2 border-dashed border-dark-2"></div>
						</div>
					</div>
					<p>Площадь складских помещений <br class="hidden lg:block"> составляет более <span class="font-bold text-base text-dark-2">30 000 м<sup>2</sup></span></p>
				</div>
			</div>
		</div>
		<!-- блок с картинкой -->
		<div data-background-image="/images/about-welcome.png" class="rounded-2lg lozad bg-center bg-no-repeat w-full aspect-video sm:h-full bg-cover"></div>
	</Container>
</template>
<script setup>
	import Container from '@shared/Container/Container.vue';
</script>

