<template>
	<div
		:class="[
			'sm:w-[340px] h-max items-center justify-items-center text-center mx-auto grid grid-rows-1a1 gap-12',
			dark ? 'text-white' : 'text-dark-8'
		]"
	>
		<p class="text-Ubuntu-2xl lg:text-Ubuntu-4xl font-second">Отлично! Вы успешно заполнили заявку.</p>
		<div :class="[
			'rounded-full ring-2 p-2 w-max',
			dark ? 'text-dark-1 ring-dark-1' : 'text-dark-3 ring-dark-3'
		]">
			<Icon size="w-[190px] h-[190px]" name="checkbox"/>
		</div>
		<span>Теперь Вам осталось только ждать от нас звонка или письма на почту</span>
	</div>
</template>

<script setup>
	import Icon from  'shared/ui/Icon/Icon.vue'
	const props = defineProps({
		dark: { type: Boolean, default: () => false }
	})
</script>

<style>

</style>
