import Home from './components/Home.vue';
import Details from './components/Details.vue';
import RandomItem from './components/RandomItem.vue';
import AnotherRandomItem from './components/AnotherRandomItem.vue';
export default [
	{ path: '/', component: Home },
	{ path: '/Home', component: Home },
	{ path: '/Details', name: 'Details', component: Details },
	{ path: '/Random', component: RandomItem },
	{ path: '/otherRandom', name: 'otherRandom', component: AnotherRandomItem }
];
