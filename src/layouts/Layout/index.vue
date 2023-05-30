<template>
   <Header
        :menu="menu"
        :productPage="productPage"
        client:load
    />
    <main class="grid-in-main">
        <slot/>
    </main>
    <Footer 
        :productPage="productPage"
    />
    <Loader/>
</template>
<script setup>
	import Footer from 'shared/ui/Footer/Footer.vue';
	import { Header } from 'widgets/Header/';
	import Loader from 'shared/ui/Loader/Loader.vue'
    import lozad from 'lozad'
    import { onMounted } from 'vue'
    import { getCategory } from 'widgets/Catalog';
	const props = defineProps({
		productPage: { type: Boolean, default: () => false }
	})
	const menu = await getCategory()
	onMounted(() => {
        const observer = lozad()
        observer.observe()
    })
</script>
