const url = import.meta.env.PUBLIC_APP_URL

export async function sendForm(formData) {
	let response
	try {
		response = await (await fetch(url + '/api/requests', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({data: formData})
		})).json()
		return response
	} catch (e) {
		return response
	}
}
