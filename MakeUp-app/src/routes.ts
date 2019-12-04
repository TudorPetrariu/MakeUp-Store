import Home from './components/Home.vue';
import Details from './components/Details.vue';
import RandomItem from './components/RandomItem.vue';
import Categories from './components/Categories.vue';

export default [
	{ path: '/', component: Home },
	{ path: '/Home', component: Home },
	{ path: '/Details', name: 'Details', component: Details },
	{ path: '/Categories', component: Categories },

	{ path: '/random', component: RandomItem }
];
