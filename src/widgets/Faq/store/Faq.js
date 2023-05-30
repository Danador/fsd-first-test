import { fetchData } from "@tools/api";
import { upData } from "@tools/filters";

export async function getFaqs() {
	let faqs = await fetchData("/api/faqs/");
	return upData(faqs.data);
}
