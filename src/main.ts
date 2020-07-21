import Vue from 'vue';
import Element from 'element-ui'
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from "./lang";
import './registerServiceWorker';
import '@/assets/css/global.scss';

Vue.use(Element)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
