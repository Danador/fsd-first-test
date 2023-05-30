<template>
	<Layout
		:meta="meta"
	>
		<Contacts
			:addresses="addresses"
			:list="list"
		/>
</Layout>
</template>
<script setup>
	import { Layout } from '@layouts/Layout';
	import { Contacts, contactsModel } from '@widgets/Contacts'
	import { phoneMask } from "@tools/helpers";

	const contacts = await contactsModel.getContacts()

	const addresses = [
		{
			title: 'Адрес офиса:',
			adress: contacts?.officeAddress.adress,
			link: contacts?.officeAddress.link
		},
		{
			title: 'Адрес производства:',
			adress: contacts?.manufacturingAddress.adress,
			link: contacts?.manufacturingAddress.link
		}
	]

	const list = {
		map: contacts?.map,
		fullData: [
			{
				title: 'Отдел продаж:',
				mail: contacts?.salesTeamMail
			},
			{
				title: 'По сотовому пропилену:',
				mail: contacts?.cellularPropyleneMail,
				phone: phoneMask(contacts?.cellularPropylenePhone)
			},
			{
				title: 'Руководитель:',
				mail: contacts?.managerMail
			},
			{
				title: 'Бесплатный номер:',
				phone: phoneMask(contacts?.salesTeamPhone)
			},
			{
				title: 'Руководство:',
				mail: contacts?.managementMail
			},
			{
				title: 'Менеджер по закупкам:',
				mail: contacts?.purchasingManagerMail
			}
		]
	}

	const meta = {
		title: 'Контакты ЮгОил',
		description: 'Контакты по которым вы можете обратиться',
	}
</script>