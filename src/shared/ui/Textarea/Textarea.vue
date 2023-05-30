<template>
	<fieldset class="grid grid-rows-1a h-[180px]">
		<label :class="[
			dark ? 'ring-gray-3 text-white hover:ring-white focus-visible:ring-white disabled:ring-gray-2' : 'ring-gray-4 text-dark-8 hover:ring-dark-8 focus-visible:ring-dark-8 disabled:ring-dark-8/50',
			model.length > 0 ? 'pt-6' : 'pt-8',
			'px-5 relative grid pb-3 rounded-2lg transition-all ring-1 group'
		]">
			<textarea
				v-model="model"
				:maxlength="max"
				:name="name"
				placeholder="placeholder"
				:class="[
					'h-full resize-none placeholder-transparent peer pr-3 bg-transparent z-[2] w-full outline-none focus:outline-none'
				]"
			></textarea>
			<span :class="[
				'absolute font-medium peer-placeholder-shown:text-base z-10 pt-2 w-ful block transition-all pointer-events-none text-xs top-0 inset-x-5',
				dark ? 'text-white/50 peer-placeholder-shown:text-white/50 peer-focus-visible:text-white peer-hover:text-white' : 'text-dark-8/50 bg-white peer-placeholder-shown:text-dark-8/50 peer-hover:text-dark-8 peer-focus-visible:text-dark-8 peer-disabled:text-dark-8/50'
			]">{{ placeholder }}</span>
		</label>
		<span
			:class="[
				dark ? 'text-gray-3' : 'text-dark-7',
				'text-right'
			]"
		>{{ modelValue.length }}/{{ max }}</span>
	</fieldset>
</template>

<script setup>
	import { computed } from 'vue'

	const props = defineProps({
		dark: { type: Boolean, default: () => false },
		max: { type: Number, default: () => 300 },
		name: { type: String, default: () => '' },
		placeholder: { type: String, default: () => '' },
		modelValue: { type: [String, Number], default: () => '' }
	})

	const emit = defineEmits(['update:modelValue'])

	const model = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit("update:modelValue", value);
		}
	})
</script>

<style>

</style>
