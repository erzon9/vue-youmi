import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
 

import './reset.css';
import 'amfe-flexible';

// 引入 vant 插件
import './vant';

import './mock';

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
