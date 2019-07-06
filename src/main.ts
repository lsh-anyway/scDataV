import Vue from 'vue';
import VCharts from 'v-charts';
import 'normalize.css';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import './utils/index';
import './components/index';
import './plugins/element';
import './plugins/axios';
import './styles/base.scss';

Vue.config.productionTip = false;
Vue.use(VCharts);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
