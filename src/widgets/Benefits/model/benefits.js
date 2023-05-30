import { fetchData } from "tools/api";
import { upData } from "tools/filters";

export async function getBenefits() {
	let benefits = await fetchData("/api/benefits");
	return upData(benefits.data)
}
