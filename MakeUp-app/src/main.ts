import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import './styles/styles.css';

Vue.use(VueResource);
Vue.config.productionTip = false;

Vue.filter('to-uppercase', function(value: string) {
	return value.toUpperCase();
});

new Vue({
	render: (h) => h(App)
}).$mount('#app');
