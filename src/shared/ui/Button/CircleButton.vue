<template>
	<label>
		<input
			type="radio"
			class="sr-only peer"
			v-model="model"
			:value="value"
		>
		<span :style="{ backgroundColor: color }"
		class="rounded-full block p-2.5 peer-checked:ring-light-4 peer-checked:[&>svg]:opacity-100 group outline-none focus:outline-none hover:ring-light-4 ring-transparent transition-all duration-300 focus-visible:ring-light-4 ring-offset-[3px] ring-[2px] sm:ring-[4px]">
			<Icon
				name="checkbox"
				:class="[
					color === '#ffffff' ? 'text-dark-8' : 'text-white',
					'w-4 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-300 h-4'
				]"
			/>
		</span>
	</label>
</template>

<script setup>
	import Icon from "@components/Icon/Icon.vue"
	import { computed } from 'vue'

	const props = defineProps({
		color: { type: String, default: () => '' },
		value: { type: [Boolean, Object, Number, String] },
		modelValue: { type: [Boolean, Array, Number, String], default: () => null }
	})
	const emit = defineEmits(["update:modelValue"]);
	const model = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit("update:modelValue", value);
		},
	});
</script>

<style>

</style>
