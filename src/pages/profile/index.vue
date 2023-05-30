<template>
    <Layout class="root">
        <LayoutContent class="content">
            <ul class="wrapper">
                <li 
                    v-for="item in list"
                    :key="item"
                    class="task_res"
                >
                    <span class="task_res_title">{{ item.title }}</span>
                    <span class="task_res_value">{{ item.value }}</span>
                </li>
            </ul>
            <RouterLink to="/tasks">
                <button class="complete_task">К задачам</button>
            </RouterLink>
        </LayoutContent>
    </Layout>
</template>
<script setup lang="ts">
    import { Layout, LayoutContent } from 'ant-design-vue';
    import {RouterLink} from 'vue-router';
    const list = [
        {
            title: 'Выполнено задач',
            value: 35
        },
        {
            title: 'Осталось задач',
            value: 88
        },
        {
            title: 'Брожено задач',
            value: 15
        }
    ]
</script>
<style>
    .wrapper{
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        max-width: max-content;
    }
    .task_res:first-child{
        border-radius: 8px 0 0 8px;
    }
    .task_res:last-child{
        border-radius: 0 8px 8px 0;
    }
    .task_res{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 16px 10px;
        background: black;
        color: white;
    }
    .task_res_title{
        font-weight: 500;
        font-size: 18px;
    }
    .task_res_value{
        font-weight: 700;
        font-size: 18px;
    }
    .complete_task{
        appearance: none;
        padding: 10px;
        border-radius: 8px;
        background: blue;
        color: white;
        font-weight: 500;
        font-size: 18px;
        margin: 0 auto;
    }
    .content{
        flex-direction: column;
    }
</style>