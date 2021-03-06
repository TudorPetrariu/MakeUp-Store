import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import './styles/styles.css';
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({
	routes: Routes,
	mode: 'history'
});
Vue.config.productionTip = false;

Vue.filter('to-uppercase', function(value: string) {
	if (value) return value.toUpperCase();
});
Vue.filter('replace', function(value: string) {
	if (value) return value.replace(/_/g, '-');
});

new Vue({
	render: (h) => h(App),
	router
}).$mount('#app');
