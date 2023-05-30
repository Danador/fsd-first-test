<template>
	<div :class="[
		modal ? 'z-[2] relative bg-white sm:w-[450px] rounded-2.5xl p-4 lg:p-6' : 'h-full',
		'w-full relative grid items-center'
	]">
		<transition
			enter-active-class="animate-opacity-enter-active"
			leave-active-class="animate-opacity-leave-active"
			mode="out-in"
		>
			<form
				v-if="!sended"
				@submit.prevent="send()"
				class="grid gap-y-5"
			>
				<fieldset v-if="modal" class="grid grid-cols-1a gap-x-2.5 items-center">
					<span :class="[
						'text-Ubuntu-xl',
						dark ? 'text-white' : ' text-dark-3',
						{ 'text-center' : titleCenter }
					]">{{ title }}</span>
					<button
						type="button"
						@click="open.set('')"
						class="text-dark-2"
					>
						<Icon
							name="close"
							size="w-7 h-7"
						/>
					</button>
				</fieldset>
				<fieldset class="grid gap-y-2.5">
					<template
						v-for="item in formList"
						:key="item"
					>
						<Input
							v-if="item.id !== 'message'"
							:id="item.id"
							:name="item.id"
							:type="item.type"
							:required="item.required"
							v-model="formData[item.id]"
							:placeholder="item.placeholder"
							:dark="dark"
						/>
						<Textarea
							v-else
							v-model="formData[item.id]"
							:dark="dark"
							:name="item.id"
							placeholder="Напишите сообщение"
						/>
					</template>
					<fieldset class="flex flex-col space-y-2.5">
						<Button
							type="submit"
							:class="
								center ? 'mx-auto' : '',
								modal ? '' : 'sm:w-auto sm:max-w-max'
							"
							:small="!lg"
							class="w-full"
							theme="dark"
						>
						Отправить
						</Button>
						<span :class="[
							center ? 'text-center mx-auto' : 'text-left',
							dark ? 'text-white' : 'text-dark-8',
							'text-xs block max-w-[450px]'
						]"> Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a class="text-dark-4" href="/privacy-policy">политикой конфиденциальности</a></span>
					</fieldset>
				</fieldset>
			</form>
			<Success :dark="dark" v-else/>
		</transition>
	</div>
</template>

<script setup>

	//components
	import Input from '@components/Input/Input.vue'
	import Textarea from '@components/Textarea/Textarea.vue'
	import Icon from '@components/Icon/Icon.vue'
	import Button from '@components/Button/Button.vue'
	import Success from './Success/Success.vue'

	//variables
	import { ref, reactive, watch } from 'vue'
	import { useStore } from '@nanostores/vue';
	import { open } from '@components/Modal/store/Modal'
	import { sendForm } from './Form'
	import useMedia from '@tools/media'
	const { lg } = useMedia()

	const props = defineProps({
		dark: { type: Boolean, default: () => false },
		title: { type: String, default: () => '' },
		titleCenter: { type: Boolean, default: () => false },
		center: { type: Boolean, default: () => false },
		modal: { type: Boolean, default: () => false }
	})

	const formList = [
		{
			type: "text",
			id: "name",
			required: true,
			placeholder: "Ваше имя"
		},
		{
			type: "email",
			id: "email",
			placeholder: "Ваша электронная почта"
		},
		{
			type: "tel",
			id: "phone",
			required: true,
			placeholder: "Ваш номер телефона"
		},
		{
			id: "message",
			placeholder: "Сообщение"
		}
	]

	const $open = useStore(open)

	let formData = reactive({})

	const sended = ref(false)

	const send = async () => {
		sended.value = await sendForm(formData)
		setTimeout(() => {
			sended.value = false
			formData = reactive({})
		}, 5000);
	}
</script>

<style>
</style>
