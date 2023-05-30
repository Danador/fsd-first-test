import Routing from './index.vue';

export const routes = [
    {path: '/1', component: () => import('./authorization')},
    {path: '/', component: () => import('./profile')},
    {path: '/tasks', component: () => import('./tasks-list')},
    {path: '/tasks:id', component: () => import('./task-details')}
];

export {Routing}