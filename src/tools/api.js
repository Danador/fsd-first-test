import * as qs from 'qs'
const tokenApp = import.meta.env.APP_PRODUCTS_KEY
const appUrl = import.meta.env.PUBLIC_APP_URL

export async function fetchData(url, options) {
	try {
		let opt = {
			// headers: {
			// 	'Authorization': 'bearer ' + tokenApp
			// },
			...options?.opt
		}

		let fetchUrl = appUrl + `${url}${options?.urlParams ? '?' + qs.stringify(options.urlParams, {
			encodeValuesOnly: true,
		}) : '' }`

		// console.log(fetchUrl);

		let response = await fetch(fetchUrl, opt)
		// console.log(response);
		return await (response).json()
	} catch(error) {
		// console.log('Error : ', error);
		return error
	}
}
