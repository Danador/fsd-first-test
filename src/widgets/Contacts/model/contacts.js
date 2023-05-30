import { fetchData } from "@tools/api";
import { upData } from "@tools/filters";

export async function getContacts() {
	let dataApi = {
		populate: [
			"officeAddress",
			'manufacturingAddress'
		],
	};
	let contacts = await fetchData("/api/contact", {
		urlParams: dataApi,
	});
	// console.log(contacts);
	return upData(contacts.data);
}
