import { fetchData } from "@tools/api";
import { upData, getMediaList } from "@tools/filters";

export async function getIndexGallery() {
	let dataApi = {
		populate: [
			'images'
		],
	};
	let gallery = await fetchData("/api/gallery/", {
		urlParams: dataApi,
	});
	if (!gallery.data) return
	gallery = upData(gallery.data);
	gallery.images = getMediaList(upData(gallery.images.data))
	// console.log(gallery)
	return gallery;
}
