import Home from './components/Home.vue';
import Details from './components/Details.vue';
import RandomItem from './components/RandomItem.vue';
export default [
	{ path: '/', component: Home },
	{ path: '/Home', component: Home },
	{ path: '/Details', name: 'Details', component: Details },
	{ path: '/random', component: RandomItem }
];
