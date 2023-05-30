<template>
	<footer class="grid-in-footer bg-dark-7">
	<div
		:class="productPage  ? 'pt-6 pb-[90px] sm:pt-8 sm:pb-[97px] lg:py-12 grid gap-y-6 container mx-auto px-4 lg:px-5' : 'py-6 sm:py-8 lg:py-12 grid gap-y-6 container mx-auto px-4 lg:px-5'"
	>
		<div class="grid sm:flex sm:justify-between w-full gap-6">
			<!-- логотип -->
			<div class="flex flex-col gap-y-5 w-full sm:max-w-[260px]">
				<a href="/">
					<Icon
						file="logo"
						name="logo-white"
						size="w-40 h-10"
					/>
				</a>
				<span class="text-white/50 text-sm">Российский Производитель поликарбонатных стройматериалов</span>
			</div>
			<!-- разделы сайта -->
			<div class="sm:max-w-max flex flex-col gap-y-5 text-white">
				<p class="uppercase font-bold tracking-tight">Разделы сайта</p>
				<RouterLink
					v-for="item in lists.footer.divide" 
					:key="item" 
					class="focus-visible:underline hover:underline outline-none focus:outline-none underline-offset-2" 
					:to="item.link"
				>
					{{ item.title }}
				</RouterLink>
			</div>
			<!-- контакты -->
			<div class="sm:max-w-max sm:mr-0 sm:ml-auto lg:m-0 row-start-2 sm:row-auto flex flex-col gap-y-5 text-white">
				<p class="uppercase font-bold tracking-tight">Наши контакты</p>
				<RouterLink
					v-for="item in list.contacts" 
					:key="item"
					target="_blank"
					class="w-max focus-visible:underline hover:underline outline-none focus:outline-none underline-offset-2 text-white flex space-x-2.5 items-center" 
					:to="item.link"
				>
					<Icon
						size="w-7 h-7"
						:name="item.icon"
					/>
					<span>{{item.title}}</span>
				</RouterLink>
				<a href="https://yandex.ru/maps/-/CCUZ4OD1LC" target="_blank" class="w-max outline-none focus:outline-none focus-visible:underline underline-offset-2 hover:underline flex text-white space-x-2.5 sm:pr-15">
					<Icon
						size="w-7 h-7"
						name="map-marker"
					/>
					<span class="max-w-[170px]">369009, КЧР, г.Черкесск, Демиденко 159 Д.</span>
				</a>
			</div>
		</div>
		<div class="mx-auto w-full">
			<span class="block w-full h-[1px] bg-white/25"></span>
			<span class="text-white/50 block lg:text-center w-full mt-4">@ 2023 ООО “ЮГ-ОЙЛ-ПЛАСТ” - производитель поликарбоната <span class="hidden sm:contents">| Все права защищены.</span></span>
			<!-- сервисные страницы -->
			<div class="grid md:grid-flow-col lg:text-center gap-y-4 mt-5 sm:mt-2.5 gap-x-[5px] max-w-max lg:mx-auto text-white">
				<RouterLink
					v-for="item in lists.footer.services" 
					:key="item" 
					class="focus-visible:underline hover:underline outline-none focus:outline-none underline-offset-2" 
					:to="item.link"
				>
					{{ item.title }}
				</RouterLink>
			</div>
			<div class="grid lg:grid-cols-2 gap-4 lg:justify-items-start max-w-max lg:mx-auto gap-x-6 mt-2.5 text-white">
				<div class="relative flex gap-x-1 items-center">
					<a href="https://roibee.ru/" class="before:absolute before:inset-0">Made by</a>
					<svg id="roibee" width="85" height="21" viewBox="0 0 85 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_3011_5394)">
						<mask id="mask0_3011_5394" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="85" height="21">
						<path d="M84.4549 0H0.5V20.8528H84.4549V0Z" fill="white"/>
						</mask>
						<g mask="url(#mask0_3011_5394)">
						<path d="M18.9418 5.37343C19.2527 4.807 19.0682 4.08271 18.5298 3.75568L12.6085 0.158861C12.0702 -0.168168 11.3817 0.0259051 11.0709 0.592337C10.7601 1.15877 10.9445 1.88306 11.4829 2.21008L17.4042 5.80691C17.9426 6.13394 18.631 5.93986 18.9418 5.37343Z" fill="url(#paint0_linear_3011_5394)"/>
						<path d="M8.92638 20.4262C9.23721 20.9926 9.92562 21.1867 10.464 20.8597L16.3853 17.2628C16.9236 16.9358 17.1081 16.2115 16.7973 15.6451C16.4864 15.0786 15.798 14.8846 15.2597 15.2116L9.33839 18.8084C8.80001 19.1354 8.61556 19.8598 8.92638 20.4262Z" fill="url(#paint1_linear_3011_5394)"/>
						<path d="M0.777945 5.37344C0.467115 4.80701 0.651575 4.0827 1.18995 3.75567L7.11122 0.158861C7.64958 -0.168168 8.33801 0.0259051 8.64883 0.592337C8.95966 1.15877 8.7752 1.88306 8.23684 2.21009L2.31556 5.8069C1.77719 6.13393 1.08877 5.93987 0.777945 5.37344Z" fill="url(#paint2_linear_3011_5394)"/>
						<path d="M18.0934 3.82812C18.715 3.82812 19.2191 4.35835 19.2191 5.01241V12.206C19.2191 12.8601 18.715 13.3903 18.0934 13.3903C17.4717 13.3903 16.9678 12.8601 16.9678 12.206V5.01241C16.9678 4.35835 17.4717 3.82812 18.0934 3.82812Z" fill="url(#paint3_linear_3011_5394)"/>
						<path d="M10.6225 20.4262C10.3116 20.9926 9.62322 21.1867 9.08485 20.8597L3.16358 17.2628C2.62522 16.9358 2.44075 16.2115 2.75157 15.6451C3.06241 15.0786 3.75082 14.8846 4.2892 15.2116L10.2105 18.8084C10.7488 19.1354 10.9333 19.8598 10.6225 20.4262Z" fill="url(#paint4_linear_3011_5394)"/>
						<path d="M1.62561 3.82812C1.00396 3.82812 0.5 4.35835 0.5 5.01241V12.206C0.5 12.8601 1.00396 13.3903 1.62561 13.3903C2.24727 13.3903 2.75122 12.8601 2.75122 12.206V5.01241C2.75122 4.35835 2.24727 3.82812 1.62561 3.82812Z" fill="url(#paint5_linear_3011_5394)"/>
						<path d="M15.1277 13.0259V6.55859L9.80859 9.79224V16.2595L15.1277 13.0259Z" fill="#7A0BFF"/>
						<path d="M4.48926 13.0259V6.55859L9.80834 9.79224V16.2595L4.48926 13.0259Z" fill="#8B2AFF"/>
						<path d="M9.80834 3.3252L15.1274 6.55884L9.80834 9.79247L4.48926 6.55884L9.80834 3.3252Z" fill="#9B48FF"/>
						<path d="M31.6379 9.48054H27.6303C27.3683 9.48054 27.106 9.59895 26.9188 9.79627L24.6216 12.2169V10.5461C24.6216 9.95414 24.1722 9.48054 23.6229 9.48054C23.0735 9.48054 22.624 9.95414 22.624 10.5461V14.7559C22.624 15.19 22.8738 15.5715 23.2359 15.7294C23.3607 15.7951 23.4981 15.8083 23.6229 15.8083C23.885 15.8083 24.1472 15.7031 24.3346 15.5057L28.0423 11.5986H31.6379C32.1872 11.5986 32.6366 11.125 32.6366 10.5461C32.6366 9.95414 32.1872 9.48054 31.6379 9.48054ZM39.9301 9.48054H35.935C34.2745 9.48054 32.9262 10.9013 32.9262 12.651C32.9262 14.4007 34.2745 15.8083 35.935 15.8083H39.9301C41.5905 15.8083 42.9388 14.4007 42.9388 12.651C42.9388 10.9013 41.5905 9.48054 39.9301 9.48054ZM39.9301 13.7034H35.935C35.3732 13.7034 34.9238 13.2298 34.9238 12.651C34.9238 12.0722 35.3732 11.5986 35.935 11.5986H39.9301C40.4793 11.5986 40.9288 12.0722 40.9288 12.651C40.9288 13.2298 40.4793 13.7034 39.9301 13.7034ZM50.9438 14.0192L46.9363 9.79627C46.749 9.59895 46.4994 9.48054 46.2372 9.48054H44.2271C43.6779 9.48054 43.2284 9.95414 43.2284 10.5461C43.2284 11.125 43.6779 11.5986 44.2271 11.5986H45.8127L49.5331 15.5057C49.7205 15.7162 49.9825 15.8083 50.2323 15.8083C50.4943 15.8083 50.7441 15.7162 50.9438 15.5057C51.3308 15.0979 51.3308 14.427 50.9438 14.0192ZM46.2372 8.42811C46.7866 8.42811 47.236 7.95451 47.236 7.37568C47.236 6.79684 46.7866 6.32324 46.2372 6.32324C45.6754 6.32324 45.226 6.79684 45.226 7.37568C45.226 7.95451 45.6754 8.42811 46.2372 8.42811Z" fill="url(#paint6_linear_3011_5394)"/>
						<path d="M59.2421 9.48054H57.2446C56.9825 9.48054 56.7203 9.59895 56.5331 9.79627L54.2358 12.2169V7.37568C54.2358 6.79684 53.7864 6.32324 53.2372 6.32324C52.6877 6.32324 52.2383 6.79684 52.2383 7.37568V14.7559C52.2383 15.19 52.488 15.5715 52.8501 15.7294C52.9749 15.7951 53.1124 15.8083 53.2372 15.8083C53.4992 15.8083 53.7615 15.7031 53.9488 15.5057L57.6566 11.5986H59.2421C59.7916 11.5986 60.241 12.0722 60.241 12.651C60.241 13.2298 59.7916 13.7034 59.2421 13.7034H57.2446C56.6953 13.7034 56.2459 14.177 56.2459 14.7559C56.2459 15.3479 56.6953 15.8083 57.2446 15.8083H59.2421C60.9026 15.8083 62.2509 14.4007 62.2509 12.651C62.2509 10.9013 60.9026 9.48054 59.2421 9.48054ZM70.6289 9.48054H66.1344C65.8599 9.48054 65.6101 9.59895 65.4229 9.79627L63.4129 11.9011C63.0259 12.3221 63.0259 12.9799 63.4129 13.4008L65.4229 15.5057C65.6101 15.7162 65.8724 15.8083 66.1344 15.8083C66.3842 15.8083 66.6464 15.7162 66.8336 15.5057C67.2331 15.0979 67.2331 14.427 66.8336 14.0192L65.5477 12.651L66.5464 11.5986H70.6289C70.9036 11.5986 71.1282 11.8354 71.1282 12.1248C71.1282 12.4142 70.9036 12.651 70.6289 12.651H69.1309C68.5814 12.651 68.132 13.1246 68.132 13.7034C68.132 14.2823 68.5814 14.7559 69.1309 14.7559H70.6289C72.0148 14.7559 73.1383 13.5719 73.1383 12.1248C73.1383 10.6645 72.0148 9.48054 70.6289 9.48054ZM81.5163 9.48054H77.0218C76.7473 9.48054 76.4975 9.59895 76.3103 9.79627L74.3003 11.9011C73.9133 12.3221 73.9133 12.9799 74.3003 13.4008L76.3103 15.5057C76.4975 15.7162 76.7598 15.8083 77.0218 15.8083C77.2716 15.8083 77.5336 15.7162 77.721 15.5057C78.1205 15.0979 78.1205 14.427 77.721 14.0192L76.4351 12.651L77.4338 11.5986H81.5163C81.791 11.5986 82.0156 11.8354 82.0156 12.1248C82.0156 12.4142 81.791 12.651 81.5163 12.651H80.0181C79.4688 12.651 79.0194 13.1246 79.0194 13.7034C79.0194 14.2823 79.4688 14.7559 80.0181 14.7559H81.5163C82.902 14.7559 84.0257 13.5719 84.0257 12.1248C84.0257 10.6645 82.902 9.48054 81.5163 9.48054Z" fill="url(#paint7_linear_3011_5394)"/>
						</g>
						</g>
						<defs>
						<linearGradient id="paint0_linear_3011_5394" x1="22.8278" y1="0.150077" x2="-4.05282" y2="19.345" gradientUnits="userSpaceOnUse">
						<stop stop-color="#9B48FF"/>
						<stop offset="1" stop-color="#7A0BFF"/>
						</linearGradient>
						<linearGradient id="paint1_linear_3011_5394" x1="22.8273" y1="0.149941" x2="-4.05337" y2="19.3448" gradientUnits="userSpaceOnUse">
						<stop stop-color="#9B48FF"/>
						<stop offset="1" stop-color="#7A0BFF"/>
						</linearGradient>
						<linearGradient id="paint2_linear_3011_5394" x1="22.8275" y1="0.150065" x2="-4.05309" y2="19.3449" gradientUnits="userSpaceOnUse">
						<stop stop-color="#9B48FF"/>
						<stop offset="1" stop-color="#7A0BFF"/>
						</linearGradient>
						<linearGradient id="paint3_linear_3011_5394" x1="22.8272" y1="0.149705" x2="-4.05346" y2="19.3446" gradientUnits="userSpaceOnUse">
						<stop stop-color="#9B48FF"/>
						<stop offset="1" stop-color="#7A0BFF"/>
						</linearGradient>
						<linearGradient id="paint4_linear_3011_5394" x1="22.8278" y1="0.149941" x2="-4.05286" y2="19.3448" gradientUnits="userSpaceOnUse">
						<stop stop-color="#9B48FF"/>
						<stop offset="1" stop-color="#7A0BFF"/>
						</linearGradient>
						<linearGradient id="paint5_linear_3011_5394" x1="22.8274" y1="0.149705" x2="-4.05321" y2="19.3446" gradientUnits="userSpaceOnUse">
						<stop stop-color="#9B48FF"/>
						<stop offset="1" stop-color="#7A0BFF"/>
						</linearGradient>
						<linearGradient id="paint6_linear_3011_5394" x1="57.522" y1="3.35125" x2="40.0401" y2="31.9325" gradientUnits="userSpaceOnUse">
						<stop stop-color="#9B48FF"/>
						<stop offset="1" stop-color="#7A0BFF"/>
						</linearGradient>
						<linearGradient id="paint7_linear_3011_5394" x1="68.2041" y1="2.66791" x2="68.2041" y2="17.7709" gradientUnits="userSpaceOnUse">
						<stop stop-color="#FCFCFC"/>
						<stop offset="1" stop-color="#F8F8F8"/>
						</linearGradient>
						<clipPath id="clip0_3011_5394">
						<rect width="84" height="21" fill="white" transform="translate(0.5)"/>
						</clipPath>
						</defs>
					</svg>
				</div>
				<a href="https://vk.com/mirwaysdesign">Designed by Mirways</a>
			</div>
		</div>
	</div>
</footer>
</template>
<script setup>
	import { RouterLink } from 'vue-router'
	import { lists } from 'shared/data/lists';
	import Icon from 'shared/ui/Icon/Icon.vue';
	const props = defineProps({
		productPage: { type: Boolean, default: () => false }
	})
</script>