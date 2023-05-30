import { atom } from 'nanostores'
import { fetchData } from "@tools/api";
import { upData, getMedia } from "@tools/filters";
import { productFormatted } from '@widgets/Products/store/Product';
import clone from 'node-clone-js'

export const filterOpen = atom(false)

// export const child = (id) => {
// 	let ids = []
// 	categories.forEach(item => {
// 		if(item.parent.id === id) ids.push(item.id)
// 	})
// 	const getChilds = (id) => {
// 		let obj = categories.find(item => item.parent.id === id)

// 		if(obj) {
// 			ids.push(obj.id)
// 			getChilds(obj.id)
// 		}
// 	}
// 	if(ids?.length > 0) ids.forEach(i => getChilds(i))
// 	return ids
// }

export const parent = (el) => {
	let ids = []
	const getParents = (el) => {
		if(el.parent) {
			ids.push(el.parent)
		}
		let obj = categories.find(item => item.id === el.parent.id)
		obj && getParents(obj)
	}
	getParents(el)
	return ids.reverse()
}

export const slugs = (arr) => {
	let slugList = []
	arr.forEach(item => {
		let slug = categories.find(i => i.id === item)
		slug !== undefined && slugList.push(slug.slug)
	})
	return slugList.join('/')
}

export async function getCategory(ids, options) {
	let subcategories = {
		populate: [
			'products',
			'products.images',
			'products.offers',
			'products.offers.characteristics',
			'products.offers.characteristics.type',
			'products.offers.images',
			'products.certificates',
			'parent',
			'parent.image',
			'image',
			'meta',
			'meta.image'
		],
	}
	if (ids?.length) {
		chars.filters = {
			id: {
				$in: ids,
			},
		};
	}
	if (options) {
		chars.filters = {
			...chars.filters,
			...options,
		};
	}
	const categories = await fetchData("/api/categories", {
		urlParams: subcategories,
	});

	// const catBread = catalogBreadCrumbs(await fetchData("/api/categories", {
	// 	urlParams: {
	// 		populate: [
	// 			'parent'
	// 		],
	// 	}
	// }))

	// console.log(catBread);

	if(!categories.data) return
	const categoriesupData = upData(categories.data).map((item) => {
		if (item.image) {
			item.image = getMedia(upData(item.image.data))
		}
		if (item.products.data) {
			item.products = productFormatted(item.products.data)
		} else {
			delete item.products
		}

		if (item.parent?.data) {
			item.parent = upData(item.parent.data)
			item.parent.img = upData(item.parent.img.data)
		} else {
			delete item.parent;
		}

		item.url = `/catalog/${item.slug}`

		item.breadcrumbs = [
			{
				title: item.title,
				url: item.url
			}
		]

		return item
	})

	return categoriesupData
}

// export function catalogBreadCrumbs(arr) {
// 	return upData(arr.data)
// 		.map(i => {
// 			i.parent = i.parent.data ? upData(i.parent.data) : false

// 			return i
// 		})
// 		.map((item, index, currentArr) => {
// 			let slugList = []

// 			const getSlug = (i) => {
// 				slugList.push(i)
// 				let parent = currentArr.find(c => c.id === i.parent?.id)
// 				if(parent) {
// 					getSlug(parent)
// 				}
// 			}

// 			getSlug(item)
// 			item.slugListIds = slugList.map(i => i.id).reverse()
// 			item.slug = slugList.map(i => i.slug).reverse().join('/')
// 			item.url = `/catalog/${item.slug}`
// 			return item;
// 		}).map((item, index, currentArr) => {
// 			item.breadcrumbs = item.slugListIds.map((i) => {
// 				let cat = currentArr.find(c => c.id == i)
// 				return {
// 					title: cat.title,
// 					url: cat.url
// 				}
// 			})
// 			return {
// 				id: item.id,
// 				url: item.url,
// 				breadcrumbs: item.breadcrumbs
// 			}
// 		})
// }
