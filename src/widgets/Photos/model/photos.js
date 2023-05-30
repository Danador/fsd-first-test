import { fetchData } from "tools/api";
import { upData, getUrlApi } from "tools/filters";

export async function getPhotos() {
	let dataApi = {
		populate: [
			'list',
			'list.images',
			'meta',
			'meta.image'
		]
	}
	let { data } = await fetchData("/api/photo/", {
		urlParams: dataApi,
	});
	data = upData(data)
	data.list = data.list.map((i) => {
		i.images =  upData(i.images.data).map(image => {
			image = getUrlApi(image.url)
			return {image}
		})
		// console.log(i);
		return i
	})
	return data
}
