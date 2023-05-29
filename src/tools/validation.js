export function phoneMask (inputValue) {
	if (!inputValue) return ''
	const numsStr = inputValue.replace(/\D/g, '').toString().split('')

	numsStr[0] === '7' || numsStr[0] === '8' ? numsStr[0] = '7' : numsStr.unshift('7')

	const x = numsStr
		.join('')
		.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)

	return numsStr.length ? `+${x[1]}${x[2] && '(' + x[2]}${x[3] && ')-' + x[3]}${x[4] && '-' + x[4]}${x[5] && '-' + x[5]}` : ''
}
