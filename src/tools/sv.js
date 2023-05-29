const plugin = require('tailwindcss/plugin')
let spacings
const getValue = (str) => {
	let value
	if(str.includes('rem')) {
		value = Number(str.replace('rem', '')) * 16
	} else if(str.includes('px')) {
		value = Number(str.replace('px', ''))
	} else {
		value = Number(str)
	}

	if(isNaN(value)) return ''
	return value
}
const svProperty = (key, min, max, value) => {
	let obj = {}
	obj[`--sv-${key}-start`] = `${min}`
	obj[`--sv-${key}-end`] = `${max}`
	if(Array.isArray(value)) {
		value.forEach(p => {
			obj[p] = getFormulas(key)
		})
	} else {
		obj[value] = getFormulas(key)
	}
	return obj
}

const inset = {
	l: {
		property: '-left'
	},
	t: {
		property: '-top'
	},
	r: {
		property: '-right'
	},
	b: {
		property: '-bottom'
	},
	x: {
		property: ['-left', '-right']
	},
	y: {
		property: ['-top', '-bottom']
	},
}

const aliases = {
	h: {
		property: 'height'
	},
	w: {
		property: 'width'
	},
	'max-w': {
		property: 'max-width'
	},
	p : {
		property: 'padding',
		...inset
	},
	m : {
		property: 'margin',
		...inset
	},
	'scroll-p' : {
		property: 'padding',
		...inset
	},
	'scroll-m' : {
		property: 'margin',
		...inset
	},
	gap: {
		property: 'gap',
	},
	'gap-x': {
		property: 'columnGap'
	},
	'gap-y': {
		property: 'rowGap'
	},
	'inset': {
		property: ['top', 'right', 'bottom', 'left']
	},
	'inset-x': {
		property: ['left', 'right']
	},
	'inset-y': {
		property: ['top', 'bottom']
	},
    'top': {
		property: ['top']
	},
    'right': {
		property: ['right']
	},
    'bottom': {
		property: ['bottom']
	},
    'left': {
		property: ['left']
	},
}

const createSpacings = (obj) => {
	let filtered = Object.keys(obj).filter(s => obj[s].includes('px') || obj[s].includes('rem'))
	let result = {}
	filtered.forEach(s => {
		let from = getValue(obj[s])
		filtered.forEach(e => {
			let to = getValue(obj[e])
			if(s === e) return
			if(from > to) return
			result[`${s}-${e}`] = {
				min: from,
				max: to
			}
		})
	})

	return result
}

const createAliases = () => {
	let result = {}
	const recursive = (alias, obj) => {
		Object.keys(obj).filter(key => key !== 'property')
		.forEach(key => {
			result[alias + key] = {}
			Object.keys(spacings).forEach(s => {
				result[alias + key] = {
					property: Array.isArray(obj[key].property) ? obj[key].property.map(e => obj.property + e) : obj.property + obj[key].property
				}
			})
		})
	}
	Object.keys(aliases).forEach(alias => {
		let data = aliases[alias]
		result[alias] = {}
		Object.keys(spacings).forEach(s => {
			result[alias] = {
				property: data.property
			}
		})
		recursive(alias, data)
	})

	return result
}

const getFormulas = (prefix) => `calc((var(--sv-${prefix}-start) * 1px) + ((var(--sv-${prefix}-end) - var(--sv-${prefix}-start)) * ((100vw - (var(--sv-bp-start) * 1px)) / (var(--sv-bp-end) - var(--sv-bp-start)))))`
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px, base) => `${round(px / base)}em`

const stringToObject = (str) => {
	let value = str.split(',')
	if(value.length === 2) {
		if(!getValue(value[0]) || !getValue(value[1])) return
		if(getValue(value[0]) > getValue(value[1])) return
		let obj = {
			min: `${getValue(value[0])}`,
			max: `${getValue(value[1])}`
		}

		return obj
	} else if(value.length === 3) {
		let obj = {
			key: value[0],
			min: `${getValue(value[1])}`,
			max: `${getValue(value[2])}`
		}

		return obj
	}
}

const getFonts = (themeFonts) => {
	let fonts = Object.assign({}, themeFonts)
	let fontsList = {}
	Object.keys(fonts).forEach(font => {
		let value = fonts[font]
		if(Array.isArray(value)) {
			fontsList[font] = {
				fontSize: getValue(value[0]),
			}
			if(typeof value[1] == 'string') {
				fontsList[font].lineHeight = em(getValue(value[1]), fontsList[font].fontSize)
			} else {
				fontsList[font] = {
					...fontsList[font],
					...value[1]
				}
				if(fontsList[font].lineHeight) {
					let lh = Number(fontsList[font].lineHeight)
					if(isNaN(lh)) {
						fontsList[font].lineHeight = em(getValue(fontsList[font].lineHeight), fontsList[font].fontSize)
					}
				}
				if(fontsList[font].letterSpacing) {
					fontsList[font].letterSpacing = em(getValue(fontsList[font].letterSpacing), fontsList[font].fontSize)
				}
			}
		} else {
			fontsList[font] = {
				fontSize: getValue(value),
			}
		}
	})

	let result = {}
	Object.keys(fontsList).forEach(start => {
		let options = Object.assign({}, fontsList[start])
		delete options.fontSize
		Object.keys(fontsList).forEach(end => {
			if(start === end) return
			if(fontsList[start].fontSize > fontsList[end].fontSize) return
			result[`${start}-${end}`] = {
				min: fontsList[start].fontSize,
				max: fontsList[end].fontSize,
				options: options
			}
		})
	})

	return result
}

const getRanges = (themeScreens, min) => {
	// Copy screens
	let screens = Object.assign({}, themeScreens)
	let minValue = Object.values(screens).includes(min)
	// Create range object
	let range = {}

	// Adding min size
	if(!minValue) {
		range.min = min
	}

	// Deleting unprocessed values
	Object.keys(screens).forEach(screen => {
		let value = screens[screen]
		if(Array.isArray(value)) return
		if(typeof value === 'object') {
			if(value.min && value.max) {
				range[screen] = value
			} else if(value.min) {
				range[screen] = value.min
			} else if(value.max) {
				range[screen] = value.max
			}
		} else if(typeof value === 'string') {
			range[screen] = value
		}
	})

	let ranges = {}

	Object.keys(range).forEach(start => {
		if(typeof range[start] === 'object') return
		if(!getValue(range[start])) return
		Object.keys(range).forEach(end => {
			if(typeof range[end] === 'object') return
			if(start === end) return
			if(!getValue(range[end])) return
			if(getValue(range[start]) > getValue(range[end])) return
			ranges[`${start}-${end}`] = {
				min: getValue(range[start]),
				max: getValue(range[end])
			}
		})
	})

	Object.keys(range).forEach(r => {
		if(typeof range[r] === 'object') {
			ranges[r] = {
				min: getValue(range[r].min),
				max: getValue(range[r].max)
			}
		}
	})
	return ranges
}

module.exports = plugin.withOptions(({ min = '320px' } = {}) => {
	return function({ addUtilities,  addVariant, e, theme, variants, matchUtilities }) {
		const ranges = getRanges(theme('screens'), min)
		spacings = createSpacings(theme('spacing'))
		const spacingValues = createAliases()
		const fonts = getFonts(theme('fontSize'))
		matchUtilities({
			'sv-bp': (value) => {
				let data
				if(typeof value === 'string') {
					data = stringToObject(value)
				} else {
					data = value
				}
				if(data.min && data.max) {
					return {
						'--sv-bp-start': `${data.min}`,
						'--sv-bp-end': `${data.max}`
					}
				}
			},
		}, { values: ranges })
		matchUtilities({
			'sv-text': (value) => {
				let obj
				let data
				if(typeof value === 'string' && value.includes(',')) {
					data = stringToObject(value)
				} else {
					data = value
				}
				if(data.min && data.max) {
					obj = {
						...svProperty('text', data.min, data.max, 'fontSize'),
						...data.options
					}

					return obj
				}
			},
		}, { values: fonts })
		matchUtilities({
			'sv-cv': (value) => {
				let obj
				let data
				if(typeof value === 'string' && value.includes(',')) {
					data = stringToObject(value)
				} else {
					data = value
				}
				if(data.min && data.max) {
					obj = svProperty(data.key, data.min, data.max, `--sv-cv-${data.key}`)

					return obj
				}
			},
		}, { values: {} })
		Object.keys(spacingValues).forEach(key => {
			let val = {}
			val[`sv-${key}`] = (value) => {
				let data
				if(typeof value === 'string' && value.includes(',')) {
					data = stringToObject(value)
				} else {
					data = value
				}
				if(data?.min && data?.max) {
					return svProperty(key, data.min, data.max, spacingValues[key].property)
				}
			}
			matchUtilities(val, { values: spacings })
		})
	}
}, () => {
	return {
		theme: {},
	}
})
