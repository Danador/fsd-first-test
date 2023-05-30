import { atom } from 'nanostores';
import { fetchData } from "@tools/api";
import { upData, getMediaList, getMedia, filterChar } from "@tools/filters";

export const offerId = atom(null)
export const productId = atom(null)
export const favoritesIds = atom([])
export const article = atom(null)
export const images = atom(null)
export const chars = atom(null)

export async function getProducts(ids, options) {
	let dataApi = {
		populate: [
			'category',
			'images',
			'certificates',
			'certificates.image',
			'description',
			'description.list',
			'description.preview',
			'docs',
			'docs.document',
			'features',
			'features.image',
			'offers',
			'offers.images',
			'offers.characteristics',
			'offers.characteristics.type',
			'offers.characteristics.color',
			'buys',
			'buys.images',
			'buys.offers',
			'buys.offers.images',
			'buys.offers.characteristics',
			'buys.offers.characteristics.type',
			'buys.offers.characteristics.color',
			'meta',
			'meta.image'
		]
	};
	if (ids?.length) {
		dataApi.filters = {
			id: {
				$in: ids,
			},
		};
	}

	if (options) {
		dataApi.filters = {
			...dataApi.filters,
			...options,
		};
	}

	let products = await fetchData("/api/products", {
		urlParams: dataApi,
	});
	// console.log(products.data[0]);
	let catalog = await fetchData("/api/categories")
	products = productFormatted(products.data)
		.filter(i => i.offers.length)
		.map((i) => {
			i.breadcrumbs = []
			let parent = catalog?.data.find(c => upData(c).id === i.category.id)

			if(parent) {
				i.breadcrumbs.push({
					title: upData(parent).title,
					url: `/catalog/${upData(parent).slug}/`
				})
			}
			i.breadcrumbs.push({
				title: i.title,
				url: `/product/${i.slug}/`
			})
			return i
		})
	return products?.length ? products : []
}

export async function getChar(ids, options) {
	let chars = {
		populate: ["type"],
	};
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
	const characteristics = await fetchData("/api/chars", {
		urlParams: chars,
	});

	// console.log(characteristics);
	return filterChar(
		upData(characteristics.data)
			.map((characteristic) => {
				characteristic.type = upData(characteristic.type.data);
				return characteristic;
			}
	));
}

export function productFormatted(array) {
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
