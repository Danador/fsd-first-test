
export function money(value) {
	if(!value) return 0
	return parseFloat(value)
		.toFixed(0)
		// .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
		.replace(/\B(?=(?:\d{3})*$)/g, ' ')
	// .replace('.', ',')
}

export function getMediaList(data){
	return data?.length ? data.map(item => {
		item.url = getUrlApi(item.url)
		return item.url
	}) : []
}

export function getUrlApi(url) {
	return url !== undefined ? import.meta.env.PUBLIC_APP_URL + url : ''
}

export function getMedia(obj) {
	if (obj?.data) {
		obj = upData(obj?.data)
	}
	return obj ? getUrlApi(obj?.url) : ''
}

export function filterChar(data){
	let types = data.reduce((result, item) => result.find(v => v.type.id == item.type.id) ? result : [...result, item], [])
	.map(i => ({
	  id: i.type.id,
	  title: i.type.title
	}))
	types = types.map(i => {
		i.chars = []
	  data.forEach(d => {
		if(d.type.id === i.id) {
		  i.chars.push(d)
		}
	  })
	  return i
	})
	return types
}

export function upData(data) {
	if(!data) return
	let blackList = ["createdAt", "updatedAt", "publishedAt"]
	const pre = (item) => {
		if(import.meta.env.DEV) {
			blackList.forEach(i => {
				delete item?.attributes[i]
			})
		}
		return {
			id: item?.id,
			...item?.attributes,
		}
	}

	if(Array.isArray(data)) {
		return data
		.map(item => {
			return pre(item)
		})
	} else if(typeof data === 'object') {
		return pre(data)
	}
}

export function hourCost(price, trainings) {
	return Math.round(price / trainings)
}

export function isoToDate(value) {
	const arr = value.split('-')
	const months = {
		'01': 'Января',
		'02': 'Февраля',
		'03': 'Марта',
		'04': 'Апреля',
		'05': 'Мая',
		'06': 'Июня',
		'07': 'Июля',
		'08': 'Августа',
		'09': 'Сентября',
		'10': 'Октября',
		'11': 'Ноября',
		'12': 'Декабря',
	}
	const day = arr[2]
	const month = months[arr[1]]
	const year = arr[0]
	return `${day} ${month} ${year} г.`
}

export function toPhone(value) {
	let cleaned = ('' + value).replace(/\D/g, '');
	let match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

	if (match) {
		return `+${match[1]}(${match[2]})-${match[3]}-${match[4]}-${match[5]}`
	} else {
		return ''
	}
}

export function toPrice(value) {
	return `${Math.round(Number(value))} ₽`
}

export function toFormPhone(value) {
	const arr = value.split('')
	return value.replace(/[^\d]/g, '')
}

export function toDate(value) {
	return new Date( Date.parse(value) ).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function toDateAndTime(value) {
	return new Date( Date.parse(value) ).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
}

export function toDay(value) {
	return new Date( Date.parse(value) ).toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' })
}

export function toTime(value) {
	return new Date( Date.parse(value) ).toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' })
}

export function ended(date) {
	return new Date(date).getTime() < Date.now()
}

export function appointmentsNames(val, date) {
	if(val === 'canceled') {
		return 'Отменено'
	} else if(val === 'booked') {
		if(new Date(date).getTime() < Date.now()) {
			return 'Завершена'
		} else {
			return 'Забронировано'
		}
	}

}

export function address(s, h, b) {
	return `${s} ${h ? h : ''} ${b ? b : ''}`
}

export function toFormDate(value) {
	if(value.length > 10 && value.includes('T')) {
		let date = new Date( Date.parse(value) )
		date = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().substring(0, 10)

		return date && date
	} else {
		return value
	}
}

export function durationTime(from, to) {
	let result = new Date( Date.parse(to) ).getTime() - new Date( Date.parse(from) ).getTime()
	return result / 1000 / 60
}

export function formateDate(val) {
	if (val) {
		const arr = val.split('-')
		return arr[2] + '.' + arr[1] + '.' + arr[0]
	} else {
		return '---'
	}
}

export function age(val) {
	if (val) {
		const date = new Date()
		const arr = val.split('-')
		return date.getFullYear() - +arr[0]
	} else {
		return '---'
	}
}

export function fullName(fname, lname) {
	if (fname && lname) {
		return fname + ' ' + lname
	}
	return fname || lname || 'Неподтверждённый пользователь'
}

export function initials(fname, lname) {
	if (fname && lname) {
		return fname[0] + ' ' + lname[0]
	}
	return fname && fname[0] || ''
}

export function visibleCols(arr, obj) {
	let result = {}
	arr.forEach(i => {
		result[i.type] = obj[i.type] || ''
	})
	return result
}

export function roles(role) {
	let data = [
		{
			id: 'ROLE_USER',
			color: 'bg-dodger-blue/30'
		},
		{
			id: "ROLE_ADMIN",
			color: 'bg-dodger-blue/30',
		},
		{
			id: "ROLE_FRANCHISE",
			color: 'bg-cornflower-blue/30',
		},
		{
			id: "ROLE_FRANCHISE_DASHBOARD",
			color: 'bg-pistachio/30',
		},
		{
			id: "ROLE_TRAINER",
			color: 'bg-candlelight/30',
		},
		{
			id: "ROLE_TRAINER_DASHBOARD",
			color: 'bg-dodger-blue/30',
		},
		{
			id: "ROLE_WORKPLACE_SCHEDULE",
			color: 'bg-cornflower-blue/30',
		},
		{
			id: "ROLE_SERVICE_SCHEDULE",
			color: 'bg-pistachio/30',
		},
		{
			id: "ROLE_EMPLOYEE_SCHEDULE",
			color: 'bg-pistachio/30',
		}
	]
	let obj = data.find(i => i.id === role)
	return obj !== undefined ? obj : false
}

export function colorsTypes(id) {
	let data = [
		{
			id: 1,
			color: 'bg-dodger-blue/30'
		},
		{
			id: 2,
			color: 'bg-malibu/30'
		}
	]
	let obj = data.find(i => i.id === id)
	return obj !== undefined ? obj : false
}

export function status(status, operation) {
	let obj = {}
	if(status !== 'processing' && operation) {
		if(operation === 'deposit') {
			if(status === 'success') {
				obj.icon = 'arrow-right'
			} else {
				obj.icon = 'info'
			}
		} else if(operation === 'refund') {
			obj.icon = 'backward'
		} else {
			obj.icon = 'close'
		}
	} else if(status !== 'processing') {
		if(status === 'in') {
			obj.icon = 'arrow-right'
		} else if(status === 'out') {
			obj.icon = 'arrow-left'
		} else if(status === 'fail') {
			obj.icon = 'info'
		} else if(status === 'failed') {
			obj.icon = 'close'
		}
	}

	if(status === 'success' || status === 'in' || status === 'out') {
		if(operation && operation === 'refund') {
			obj.color = 'text-picton-blue'
		} else {
			obj.color = 'text-green'
		}
	} else if(status === 'fail' || status === 'failed') {
		obj.color = 'text-red'
	} else if(status === 'processing') {
		obj.color = 'text-yellow'
		obj.animation = true
		obj.icon = 'loader'
	} else {
		obj.color = 'text-black'
	}

	obj.status = status
	return obj
}
