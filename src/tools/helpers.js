import { favoritesIds } from '@modules/Products/store/Product';

export function getUrlSite(url) {
	return url !== undefined ? (import.meta.env.APP_URL || 'http://localhost:3000') + url : ''
}

export function bodyLock(data){
	const lockPaddingValue = `${window.innerWidth - document.body.offsetWidth}px`;
	if (data) {
		document.body.classList.add('overflow-hidden')
		document.body.classList.remove('overflow-y-scroll')
		document.body.style.setProperty('padding-right', lockPaddingValue);
	} else {
		document.body.classList.remove('overflow-hidden')
		document.body.classList.add('overflow-y-scroll')
		document.body.style.setProperty('padding-right', 0);
	}
}

export function setStorage(name, id){
	let arr = localStorage.getItem(name)
	if(arr) {
		arr = JSON.parse(arr)
	} else {
		arr = []
	}

	if (arr.includes(id)) {
		arr = arr.filter(i => i !== id)
	} else {
		arr.push(id)
	}

	localStorage.setItem(name, JSON.stringify(arr));
}

export function setLooked(name, id){
	let arr = sessionStorage.getItem(name)
	if(arr) {
		arr = JSON.parse(arr)
	} else {
		arr = []
	}

	if (arr.includes(id)) {
		arr = arr.filter(i => i !== id)
	} else {
		arr.push(id)
	}

	sessionStorage.setItem(name, JSON.stringify(arr));
}

export function phoneMask (inputValue) {
	if (!inputValue) return ''
	const numsStr = inputValue.replace(/\D/g, '').toString().split('')

	numsStr[0] === '7' || numsStr[0] === '8' ? numsStr[0] = '7' : numsStr.unshift('7')

	const x = numsStr
		.join('')
		.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)

	return numsStr.length ? `+${x[1]}${x[2] && '(' + x[2]}${x[3] && ')-' + x[3]}${x[4] && '-' + x[4]}${x[5] && '-' + x[5]}` : ''
}

export async function getIcons() {
	try {
		const response = await fetch('/icons/all-icons.svg');
		const xmlText = await response.text();
		const parser = new DOMParser();
		const xmlDoc = parser.parseFromString(xmlText, 'image/svg+xml');
		const symbolEls = xmlDoc.getElementsByTagName('symbol');
		const iconsIds = [];
		Object.values(symbolEls).map((i) => {
			i.hasAttribute('id') ? iconsIds.push(i.getAttribute('id')) : ''
		})
		return iconsIds;
	} catch (error) {
		console.error(error);
		return null;
	}
}

export function addFavorite(id) {
	if(id) {
		setStorage('favoriteProducts', id)
	}
	let ids = localStorage.getItem('favoriteProducts')
	if(ids) {
		ids = JSON.parse(ids)
		if(Array.isArray(ids)) {
			favoritesIds.set(ids)
		}
	}
}
