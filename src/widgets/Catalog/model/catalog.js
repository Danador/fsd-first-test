import { atom } from 'nanostores'
import { fetchData } from "tools/api";
import { upData, getMedia, getMediaList } from "tools/filters";

export const filterOpen = atom(false)
let categoriesList = []
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
		let obj = categoriesList.find(item => item.id === el.parent.id)
		obj && getParents(obj)
	}
	getParents(el)
	return ids.reverse()
}

export const slugs = (arr) => {
	let slugList = []
	arr.forEach(item => {
		let slug = categoriesList.find(i => i.id === item)
		slug !== undefined && slugList.push(slug.slug)
	})
	return slugList.join('/')
}

function productFormatted(array) {
	return upData(array)
	.map((product) => {
		if(product.images) {
			product.images = getMediaList(upData(product.images.data))
		}
		if(product.description) {
			product.description.preview = getMedia(product.description.preview)
		}
		// console.log(product.features === undefined);
		if(product.features) {
			product.features = product.features.map((i) => {
				i.image = getMedia(i.image)
				return i
			})
		}
		if(product.category) {
			product.category = upData(product.category.data)
		}
		if (product.offers?.length) {
			const colors = []
			product.offers = product.offers.map((offer) => {
				offer.images = getMediaList(upData(offer.images.data))
				offer.characteristics = upData(offer.characteristics.data).map((char) => {
					char.type = upData(char.type.data)
					if (char.colorDynamic?.length) {
						char.colorDynamic = char?.colorDynamic.map((i) => {
							return i.color
						})
						char.color = char.colorDynamic[0]
						delete char.colorDynamic
					} else {
						delete char.colorDynamic
					}
					return char
				})
				offer.characteristics.filter((char) => char.color).forEach((color) => {
					colors.push({
						id: offer.id,
						value: color.color.color
					})
				})
				return offer;
			});
			product.colors = colors
		}
		if(product.docs) {
			product.docs = product.docs.map((doc) => {
				doc.document = getMedia(upData(doc.document.data))
				return doc
			})
		}
		if(product.certificates?.length) {
			product.certificates = product.certificates.map((i) => {
				i.image = getMedia(i.image)
				return i
			})
			// console.log(product.certificates);
		}
		if(product.buys?.data?.length) {
			product.buys = productFormatted(product.buys.data)
		}
		// console.log(product.buys);
		return product;
	});
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
		subcategories.filters = {
			id: {
				$in: ids,
			},
		};
	}
	if (options) {
		subcategories.filters = {
			...subcategories.filters,
			...options,
		};
	}
	const categories = await fetchData("/api/categories", {
		urlParams: subcategories,
	});
	categoriesList.push(categories)

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
