import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import axios from 'axios'

import filters from './filters'

console.log(filters)

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.use(VueRouter);

// require('./assets/css/index.css'); //引入全局的base文件
// require('./assets/css/index.css'); //引入全局的base文件
import "./assets/images/font-awesome-4.7.0/css/font-awesome.min.css";

import routes from './fouterConfig.js'


// console.log(routes)

const router=new VueRouter({
	mode:'history',
	routes
});

Vue.prototype.$http=axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
