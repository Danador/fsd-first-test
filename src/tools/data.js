import { fetchData } from "tools/api";
import { upData } from "tools/filters";

export async function getInfos() {
	let data = {
		populate: [
			'meta',
			'meta.image'
		]
	}
	let infos = await fetchData("/api/infos/", {
		urlParams: data
	})
	return upData(infos.data)
}
