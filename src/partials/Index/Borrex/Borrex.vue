<template>
  	<section
		ref="block"
		:class="[
		'relative transition-all',
		top ? 'text-white bg-dark-8' : 'text-dark-8'
	]">
		<div :class="[
			'mx-auto transition-all container py-6 sm:py-8 lg:py-12 grid gap-6 sm:text-center px-4'
		]">
			<span
				:class="top ? 'text-white' : 'text-dark-3'"
				class="font-second sm:hidden transition-all font-bold text-2xl">BOR<span :class="top ? 'text-white' : 'text-dark-7'">REX</span>
			</span>
			<Benefit
				img="/images/black.jpg"
				rounded
			>
				<div class="grid text-left">
					<p class="font-second text-Ubuntu-4xl sm:block hidden">Borrex</p>
					<span class="mx-auto text-left mt-2.5 lg:mt-0 font-bold lg:text-Sans-bold-xl">Технология совершенства. Используйте лучшее качество, которое послужит на долгие годы!</span>
				</div>
			</Benefit>
			<Benefit
				left
				img="/images/chip.jpg"
				rounded
				class="transition-all"
				:class="top ? '' : 'opacity-0 invisible'"
			>
				<p class="font-second font-bold text-white lg:text-Ubuntu-xl">С Borrex Ваш пластик будет служить <br> Вам целую вечность и даже больше.</p>
			</Benefit>
		</div>
	</section>
</template>

<script setup>
	import Benefit from '@partials/Index/Benefits/components/Benefit.vue'
	import { ref, onMounted } from 'vue'
	const top = ref(false)
	const block = ref(null);

	const handleScroll = () => {
		if (block.value) {
			const topPos = block.value.getBoundingClientRect().bottom;
			top.value = topPos/1.1 <= window.innerHeight && topPos >= 0;
		}
    };

	onMounted(() => {
    	window.addEventListener("scroll", handleScroll);
    });

</script>

<style>

</style>
