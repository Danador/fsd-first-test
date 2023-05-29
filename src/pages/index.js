import Routing from './index.vue';

export const routes = [
    {path: '/', component: () => import('./one')},
    {path: '/404/', component: () => import('./404')},
	{path: '/articles/', component: () => import('./articles')},
	{path: '/certificate/', component: () => import('./certificate')},
	{path: '/gallery/', component: () => import('./gallery')},
	{path: '/icons/', component: () => import('./icons')}
];
console.log(routes);
console.log(Routing);

export {Routing}
