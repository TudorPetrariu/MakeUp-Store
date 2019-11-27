import Home from './components/Home.vue';
import Details from './components/Details.vue';
import Categories from './components/Categories.vue';

export default [
	{ path: '/', component: Home },
	{ path: '/Home', component: Home },
	{ path: '/Details/:Pid', name: 'Details', component: Details },
	{ path: '/categories', component: Categories }
];
