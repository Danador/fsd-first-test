<template>
	<Container
		class="!pb-6 lg:!pb-[76px]"
		containerClass="grid gap-6"
		breadcrumbTitle="Контакты"
	>
		<Heading
			class="!text-left"
			:title="list.fullData.find((i) => i.mail || i.phone) ? 'Контакты' : 'На данный момент контакты отсутсвуют'"
		/>
		<div v-if="list.fullData.find((i) => i.mail || i.phone)" class="grid lg:grid-cols-[1fr,450px] gap-6 lg:gap-x-12 lg:gap-y-6">
			<div class="grid gap-6">
				<div class="grid lg:grid-cols-a1a gap-x-[30px] xl:gap-x-12 lg:pb-6 lg:border-b lg:border-gray-5 max-w-max">
					<ul class="flex flex-col gap-6">
						<li
							v-for="item in list.fullData.slice(0,3)"
							:key="item"
							class="grid"
						>
							<span v-if="item.mail || item.phone" class="text-sm lg:text-base text-gray-3">{{ item.title }}</span>
							<a
								v-if="item.mail"
								:href="`mailto:${item.mail}`"
								class="font-bold lg:text-xl text-dark-3 lg:mb-3 hover:underline"
							>{{ item.mail }}</a>
							<a
								v-if="item.phone"
								:href="`tel:${item.phone}`"
								class="font-bold flex items-center text-dark-3 space-x-2.5 lg:text-xl hover:underline"
							>
								<Icon
									name="phone"
									size="w-7 h-7"
								/>
								<span>{{ item.phone }}</span>
							</a>
						</li>
					</ul>
					<span class="hidden h-full w-[1px] mx-auto bg-gray-5 lg:block"></span>
					<ul class="flex flex-col gap-6 mt-6 lg:mt-0">
						<li
							v-for="item in list.fullData.slice(3,6)"
							:key="item"
							class="grid"
						>
							<span v-if="item.mail || item.phone" class="text-sm lg:text-base text-gray-3">{{ item.title }}</span>
							<a
								v-if="item.mail"
								:href="`mailto:${item.mail}`"
								class="font-bold lg:text-xl lg:mb-3 text-dark-3 hover:underline"
							>{{ item.mail }}</a>
							<a
								v-if="item.phone"
								:href="`tel:${item.phone}`"
								class="font-bold flex items-center text-dark-3 space-x-2.5 lg:text-xl hover:underline"
							>
								<Icon
									name="phone"
									size="w-7 h-7"
								/>
								<span>{{ item.phone }}</span>
							</a>
						</li>
					</ul>
				</div>
				<ul v-if="addresses.find(i => i.adress)" class="flex flex-col gap-6 lg:max-w-[650px]">
					<li
						v-for="item in addresses"
						class="grid"
					>
						<span class="text-sm lg:text-base text-gray-3">{{ item.title }}</span>
						<a :href="item.link" class="font-bold lg:text-xl text-dark-3 hover:underline">{{ item.adress }}</a>
					</li>
				</ul>
			</div>
			<Form
				title="Оставить заявку"
				class="mt-6 md:mt-0"
			/>
			<iframe class="w-full max-h-[430px] aspect-video rounded-2lg overflow-hidden row-start-2 lg:col-span-2" :src="list.map"></iframe>
		</div>
	</Container>
</template>

<script setup>
	import Icon from "shared/ui/Icon/Icon.vue";
	import Breadcrumbs from "shared/ui/Breadcrumbs/Breadcrumbs.vue";
	import Form from 'shared/ui/Form/Form.vue'
	import Container from 'shared/ui/Container/Container.vue';
	import Heading from "shared/ui/Heading/Heading.vue";

	const props = defineProps({
		list: { type: Object, default: () => {} },
		addresses: { type: Array, default: () => [] }
	})
</script>

<style>

</style>
