import { fetchData } from "tools/api";
import { upData, getMedia } from "tools/filters";

export async function getCertificate() {
	let dataApi = {
		populate: [
			'certificates.image'
		],
	};
	let { data } = await fetchData("/api/certificate", {
		urlParams: dataApi,
	});

	return upData(data).certificates
	.map((i) => {
		i.image = getMedia(upData(i.image.data))
		return i
	})
}
