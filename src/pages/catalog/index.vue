<template>
    <Layout
        :meta="meta"
    >
        <Container
            containerClass="grid gap-6"
            class="!pb-12 lg:!pb-[100px]"
            :breadcrumbs="breadcrumbs"
        >
            <div class="sm:text-center grid gap-5">
                <Heading class="!mb-0" title="Продукция нашей компании:"/>
                <p class="hidden lg:block">Снизу отображены все категории продукции, которую мы производим:</p>
            </div>
            <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CatalogCard
                    v-for="item in catalog.filter((i) => !i.parent)"
                    :key="item.id"
                    class="aspect-square"
                    :data="item"
                />
            </ul>
        </Container>
    </Layout>
</template>
<script setup>
    import { Layout } from 'layouts/Layout';
    import { getCategory } from 'widgets/Catalog';
    import { CatalogCard } from 'partials/About/Сatalog';
    import Container from 'shared/ui/Container/Container.vue';;
    import Heading from 'shared/ui/Heading/Heading.vue';

    let catalog =  await getCategory()

    let title = 'Продукция'
    const meta = {
        title: title,
        description: title
    }

    const breadcrumbs = [
        {
            title: 'Каталог',
            url: '/catalog/'
        }
    ]
</script>

