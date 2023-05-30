<template>
    <Header
        :menu="menu"
        :productPage="productPage"
    />
    <main class="grid-in-main">
        <slot/>
    </main>
    <Footer :productPage="productPage"/>
    <Loader/>
</template>
<script setup>
    import Footer from '@components/Footer/Footer.astro';
    import Header from '@modules/Header/views/Header.vue';
    import Loader from '@components/Loader/Loader.vue'
    import { getCategory } from '@modules/Catalog/store/Catalog'
    import { getUrlSite } from '@tools/helpers'
    import { getMedia } from '@tools/filters'
    const props = definneProps({
        productPage: { type: Boolean, default: () => false }
    })
    const menu = await getCategory()
    import lozad from 'lozad'
	const observer = lozad();
	observer.observe();
</script>
