<template>
	<div class="relative">
		<div
			class="relative transition-all px-4 py-3"
			:class="[
				open ? 'rounded-b-none' : '',
				disabled ? 'opacity-50' : ''
			]">
			<button
				@click="open = !open"
				:disabled="disabled"
				type="button"
				:class="[
					open ? 'after:fixed after:inset-0 after:z-[15] before:rounded-b-none before:ring-dark-8' : '',
					'before:absolute before:inset-0 before:rounded-2lg before:transition-all before:ring-1 before:ring-gray-5 hover:before:ring-dark-8 focus:outline-none outline-none text-dark-8 h-full text-left w-full'
				]"
			>{{ title }}</button>
			<Icon
				name="arrow-right"
				size="w-6 h-6"
				class="text-gray-3 absolute pointer-events-none right-4 transition-all duration-500 top-1/2 -translate-y-1/2"
				:class="open ? '-rotate-90' : 'rotate-90'"
			/>
			<transition
				enter-active-class="animate-opacity-enter-active"
				leave-active-class="animate-opacity-leave-active"
			>
				<div v-if="open" class="absolute z-20 inset-x-0 ring-1 ring-dark-8 bg-white rounded-b-2.5xl max-h-[110px] overflow-y-auto top-full p-4">
					<ul class="select overflow-y-scroll grid gap-y-2.5 pr-2 max-h-[160px]">
						<li v-for="item in options" :key="item.id" :value="item.id">
							<button
								type="button"
								:class="title === item.title ? 'text-dark-3' : 'text-dark-8'"
								class="w-full text-left text-Sans-base transition-all"
								:disabled="title === item.title"
								@click="
									model = item.id,
									title = item.title,
									open = !open
								"
							>{{ item.title }}</button>
						</li>
					</ul>
				</div>
			</transition>
		</div>
	</div>
</template>

<script setup>
	import { computed,  ref, onMounted } from 'vue'
	import Icon from '@components/Icon/Icon.vue'

	const open = ref(false)
	const emit = defineEmits(['update:modelValue'])
	const props = defineProps({
		id: { type: String, default: () => '' },
		name: { type: String, default: () => '' },
		required: { type: Boolean, default: () => false },
		disabled: { type: Boolean, default: () => false },
		modelValue: { type: [String, Number], default: () => '' },
		options: {
			type: Array,
			default: () => []
		},
	})

	const title = ref(null)

	const model = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit("update:modelValue", value);
		}
	})

	onMounted(() => {
		title.value = props.options[0].title
	})
</script>

<style scoped>

	.select::-webkit-scrollbar {
		@apply w-1 h-1;
	}

	.select::-webkit-scrollbar-track,
	.select::-webkit-scrollbar-corner {
		@apply bg-white rounded-full;
	}

	.select::-webkit-scrollbar-thumb {
		@apply border-[2px] hover:bg-dark-8 rounded-full bg-dark-8/40;
	}
</style>
