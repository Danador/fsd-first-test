import Routing from './index.vue';

export const routes = [
    {path: '/', component: () => import('./authorization')},
    {path: '/profile', component: () => import('./profile')},
    {path: '/tasks', component: () => import('./tasks-list')},
    {path: '/tasks:id', component: () => import('./task-details')}
];

export {Routing}