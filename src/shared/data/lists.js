import { contactsModel } from "widgets/Contacts";
import { getInfos } from "tools/data"
import { phoneMask } from "tools/helpers";

const contacts = await contactsModel.getContacts()
const infos = await getInfos()

const list = [
	{
		title: "Продукция",
		link: "/catalog/"
	},
	{
		title: "О компании",
		link: "/"
	},
	{
		title: "Статьи",
		link: "/articles/"
	},
	{
		title: "Контакты",
		link: "/contacts/"
	},
	{
		title: "Фотогалерея",
		link: "/gallery/"
	},
	{
		title: "Видеогалерея",
		link: "/videos/"
	},
	{
		title: "Сертификаты",
		link: "/certificate/"
	},
]

export const lists = {
	header: [...list],
	contacts: [
		{
			title: phoneMask(contacts?.companyPhone),
			icon: "phone",
			link: contacts?.companyPhone ? `tel:${contacts?.companyPhone}` : ''
		},
		{
			title: contacts?.managementMail,
			icon: "mail",
			link: contacts?.managementMail ? `mailto:${contacts?.managementMail}` : ''
		},
		{
			title: contacts?.telegram,
			icon: "telegram",
			link: contacts?.telegram ? `https://tlgg.ru/${contacts?.telegram}` : ''
		},
		{
			title: phoneMask(contacts?.whatsapp),
			icon: "whatsapp",
			link: contacts?.whatsapp ? `https://api.whatsapp.com/send?phone=${contacts?.whatsapp}&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C` : ''
		}
	].filter(i => i.link),
	footer: {
		divide: [
			...list,
		],
		docs: [
			{
				title: "Прайс-лист",
				link: "#"
			},
			{
				title: "Условия сотрудничества",
				link: "#"
			},
			{
				title: "Сертификаты",
				link: "/certificate/"
			},
			{
				title: 'Юридическая информация',
				link: "#"
			}
		],
		services: [
			{
				title: infos ? infos[0]?.title : '',
				link: infos ? infos[0]?.slug : ''
			},
			{
				title: infos ? infos[1]?.title : '',
				link: infos ? infos[1]?.slug : ''
			}
		]
	}
}
