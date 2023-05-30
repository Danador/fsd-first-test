<template>
	<!-- TODO: Поправить отступы вывести данные -->
  <section :class="[
	dark ? 'bg-dark-8' : ''
  ]">
		<div class="container w-full px-2.5 grid gap-y-6 py-6 sm:py-8 lg:py-12 mx-auto">
			<p :class="[
			'sm:text-center font-second text-dark-8 font-bold text-2xl xl:text-5xl lg:leading-[54px]',
			dark ? 'text-white' : ''
			]">Наши партнёры</p>
			<div class="flex flex-wrap max-w-[700px] gap-6 lg:gap-y-11 justify-center mx-auto">
				<a v-for="item in partners" :key="item" href="#" :class="[
				'p-4 rounded-2xl font-bold text-xl bg-dark-1',
				dark ? 'text-white' : ''
				]">
					Logotype
				</a>
			</div>
		</div>
	</section>
</template>

<script setup>
	const props = defineProps({
		dark: { type: Boolean, default: () => false }
	})

	const partners = ["Logotype", "Logotype", "Logotype", "Logotype", "Logotype", "Logotype", "Logotype"]
</script>

<style>

</style>

