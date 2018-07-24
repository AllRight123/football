// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'
import 'iview/dist/styles/iview.css'

Vue.use(Vant);
Vue.use(VueAxios,axios)
Vue.use(VueRouter);
//axios，默认请求是json ，改成表单提交
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
      config.data = Qs.stringify(config.data);
    }
    return config;
  }, error =>
    Promise.reject(error),
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
