
import { fetchData } from "@tools/api";
import { upData, getMedia } from "@tools/filters";

async function getArticles(ids, options) {
	let dataApi = {
		populate: [
			'image',
			'meta',
			'meta.image'
		],
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
	const articles = await fetchData("/api/articles/", {
		urlParams: dataApi,
	});
	if (!articles.data) return
	const articlesupData = articles.data.map((article) => {
		article = upData(article);
		article.image = getMedia(upData(article.image.data));
		// console.log(article)
		return article;
	});
	// console.log(upData(articles.data));
	// console.log(articles)
	// console.log(articlesupData);
	return articlesupData;
}

export const articles = await getArticles()