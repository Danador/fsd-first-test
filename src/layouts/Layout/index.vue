<template>
    <div class="font-body overflow-x-hidden relative grid min-h-screen grid-cols-full grid-areas-layout grid-rows-a1a">
        <Header
            :menu="menu"
            :productPage="productPage"
            client:load
        />
        <main class="grid-in-main">
            <slot/>
        </main>
        <Footer :productPage="productPage"/>
        <Loader/>
    </div>
</template>
<script setup>
	import Footer from 'shared/ui/Footer/Footer.vue';
	import Header from '@widgets/Header/views/Header.vue';
	import Loader from 'shared/ui/Loader/Loader.vue'
    import lozad from 'lozad'
    import { onMounted } from 'vue'
	import { getCategory } from '@widgets/Catalog/store/Catalog'
	const props = defineProps({
		productPage: { type: Boolean, default: () => false }
	})
	const menu = await getCategory()
	onMounted(() => {
        const observer = lozad()
        observer.observe()
    })
</script>
