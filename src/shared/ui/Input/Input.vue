<template>
	<label class="relative grid">
		<input
			:name="name"
			:id="id"
			:type="type"
			:inputmode="type === 'tel' ? 'tel' : false"
			:minlength="minlength"
			:maxlength="type === 'tel' ? 17 : maxlength"
			v-model="model"
			:disabled="disabled"
			:placeholder="placeholder"
			autocomplete="off"
			:required="required"
			:class="[
				'peer bg-transparent z-[2] w-full outline-none text-Sans-base focus-visible:invalid:ring-red-500 focus:outline-none placeholder-transparent peer px-5 pt-7 pb-3 ring-inset ring-1 rounded-2lg appearance-none h-14 transition-all',
				dark ? 'ring-gray-3 text-white hover:ring-white focus-visible:ring-white disabled:ring-gray-2' : 'ring-gray-4 text-dark-8 hover:ring-dark-8 focus-visible:ring-dark-8 disabled:ring-dark-8/50',
				{ 'pointer-events-none opacity-50' : disabled }
			]"
		>
		<span :class="[
			'absolute font-medium text-xs peer-focus-visible:invalid:text-red-500 transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-7 top-2 peer-focus:top-2 peer-focus:text-xs peer-focus:translate-y-0 peer-placeholder-shown:-translate-y-1/2 inset-x-5',
			dark ? 'text-white/50 peer-hover:text-white peer-focus-visible:text-white peer-disabled:text-gray-2' : 'text-dark-8/50 peer-hover:text-dark-8 peer-focus-visible:text-dark-8 peer-disabled:text-dark-8/50'
		]">{{ placeholder }}<span v-if="required" class="text-red-500 font-medium"> *</span></span>
	</label>
</template>

<script setup>
	import { computed } from 'vue'
	import { phoneMask } from '@tools/validation'

	const props = defineProps({
		type: { type: String, default: () => 'text' },
		id: { type: String, default: () => '' },
		name: { type: String, default: () => '' },
		placeholder: { type: String, default: () => '' },
		dark: { type: Boolean, default: () => false },
		disabled: { type: Boolean, default: () => false },
		maxlength: { type: [String, Number], default: () => '' },
		minlength: { type: [String, Number], default: () => '' },
		required: { type: Boolean, default: () => false },
		modelValue: { type: [String, Number], default: () => '' },
	})

	const emit = defineEmits(['update:modelValue'])

	const model = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit("update:modelValue", props.type === 'tel' ? phoneMask(value) : value);
		}
	})
</script>

<style>

</style>
