import { ref, onMounted, computed, reactive } from "vue";

export default function() {
	const media = reactive({
		sm: false,
		md: false,
		lg: false,
		xl: false,
		mouse: false,
	})

	const sm = computed(() => media.sm)
	const md = computed(() => media.md)
	const lg = computed(() => media.lg)
	const xl = computed(() => media.xl)
	const mouse = computed(() => media.mouse)
	const mediaInited = ref(false)

	const sizes = {
		sm: "(min-width: 640px)",
		md: "(min-width: 768px)",
		lg: "(min-width: 1024px)",
		xl: "(min-width: 1280px)",
		mouse: "(hover: hover)"
	}

	const checkSize = (size) => {
		const val = ref(false)
		const m = window.matchMedia(size)

		try {
			m.addEventListener("change", function () {
				val.value = m.matches
			});
		} catch (e1) {
			try {
				m.addListener((e) => {
					val.value = m.matches
				});
			} catch (e2) {
				console.error(e2)
			}
		}

		val.value = m.matches

		return val
	}

	onMounted(() => {
		Object.keys(sizes).forEach(size => {
			media[size] = checkSize(sizes[size])
		})
		mediaInited.value = true
	})

	return {
		sm,
		md,
		lg,
		xl,
		mouse,
		mediaInited
	}
}
