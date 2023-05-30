<template>
    <Layout class="root">
        <LayoutContent class="content">
            <div class="wrapper">
                <p class="wrapper_title">Ваш результат</p>
                <ul class="wrapper_list">
                    <li 
                        v-for="item in list"
                        :key="item"
                        class="list_task_res"
                    >
                        <span class="task_res_title">{{ item.title }}</span>
                        <span class="task_res_value">{{ item.value }}</span>
                    </li>
                </ul>
                <RouterLink to="/tasks">
                    <button class="wrapper_tasks_btn">К задачам</button>
                </RouterLink>
                </div>
        </LayoutContent>
    </Layout>
</template>
<script setup lang="ts">
    import { computed, onMounted } from 'vue';
    import { Layout, LayoutContent } from 'ant-design-vue';
    import {taskModel} from 'entities/task';
    import { useStore } from 'vuex';
    import {RouterLink} from 'vue-router';
    const store = useStore()
    const closedTask = computed(() => store.getters[taskModel.getters.filteredTasks].filter((i) => i.completed).length)
    const openedTask = computed(() => store.getters[taskModel.getters.filteredTasks].filter((i) => !i.completed).length)
    const getTasksListAsync = () => store.dispatch(taskModel.actions.getTasksListAsync);
    onMounted(getTasksListAsync)
    const list = [
        {
            title: 'Выполнено задач',
            value: closedTask
        },
        {
            title: 'Осталось задач',
            value: openedTask
        }
    ]
</script>
<style>
    .wrapper{
        max-width: max-content;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .wrapper_title{
        font-size: 24px;
        text-align: center;
        
    }
    .wrapper_list{
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        max-width: max-content;
    }
    .list_task_res:first-child{
        border-radius: 8px 0 0 8px;
    }
    .list_task_res:last-child{
        border-radius: 0 8px 8px 0;
    }
    .list_task_res{
        width: 100%;
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
    a{
        width: max-content;
        margin: 0 auto;
    }
    .wrapper_tasks_btn{
        border: none;
        appearance: none;
        padding: 10px;
        border-radius: 8px;
        background: blue;
        color: white;
        font-weight: 500;
        font-size: 18px;
    }
    .content{
        flex-direction: column;
    }
</style>