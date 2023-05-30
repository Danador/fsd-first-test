<template>
    <Layout class="root">
        <LayoutContent class="content">
            <form @submit.prevent class="form">
                <input 
                    v-model="formData.login" 
                    placeholder="Логин" 
                    type="text">
                <input 
                    v-model="formData.password" 
                    placeholder="Пароль" 
                    type="password"
                >
                <RouterLink to="/profile">
                    <button 
                        class="auth_btn"
                        :class="checkData ? '' : 'disabled'"
                    >Авторизоваться</button>
                </RouterLink>
            </form>
        </LayoutContent>
    </Layout>
</template>
<script setup lang="ts">
    import {RouterLink} from 'vue-router';
    import { computed, reactive } from 'vue';
    import { Layout, LayoutContent } from 'ant-design-vue';
    const test = {
        login: '1111',
        password: '1111'
    }
    const formData = reactive({
        login: '',
        password: ''
    })
    const checkData = computed(() => JSON.stringify(test) === JSON.stringify(formData))
</script>
<style>
    .form{
        display: flex;
        flex-direction: column;
        max-width: 50%;
        gap: 20px;
    }
    input{
        transition: all 1s ease-out;
        border-radius: 8px;
        padding: 10px;
    }
    input:focus::placeholder{
        opacity: 0;
    }
    .auth_btn{
        appearance: none;
        padding: 10px;
        background: blue;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        font-size: 18px;
        margin: 0 auto;
    }
    .disabled {
        opacity: 50%;
        pointer-events: none;
        cursor: default;
    }
</style>