<template>
  <label
		class="grid grid-cols-a1 max-w-max cursor-pointer items-center group gap-x-2.5"
	>
		<input class="sr-only peer" v-model="model" :value="value" :type="type">
		<span class="flex items-center justify-center peer-checked:peer-hover:bg-dark-8 peer-hover:bg-dark-1 w-5 h-5 ring-1 text-transparent peer-checked:text-white ring-dark-8/50 peer-checked:ring-dark-8 peer-checked:bg-dark-8 transition-all duration-300">
			<Icon
				name="checkbox"
				size="w-4 h-4"
			/>
		</span>
		<span class="peer-hover:text-dark-3 peer-checked:peer-hover:text-dark-8 transition-all duration font-bold">{{ text }}</span>
	</label>
</template>

<script setup>
	import Icon from 'shared/ui/Icon/Icon.vue'
	import { computed } from "vue";
	const props = defineProps({
		inputClass: { type: String, default: () => '' },
		text: { type: String, default: () => '' },
		type: { type: String, default: () => '' },
		value: { type: [Boolean, Object, Number, String] },
		modelValue: { type: [Boolean, Array], default: () => null }
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
