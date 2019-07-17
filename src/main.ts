import Vue from 'vue';
import 'normalize.css';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import api from './api/index';
import './utils/index';
import './components/index';
import './plugins/axios';
import './plugins/element';
import './styles/base.scss';
import './mock/chart';

Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
