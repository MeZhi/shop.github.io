import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store/index'
import {Button} from 'mint-ui'

import './mock/mockServer'//加载mockServer
import loading from './common/imgs/loading.gif'
import './fiters/index.js' //加载过滤器

Vue.config.productionTip = false

//注册全局标签
Vue.component(Button.name,Button) //<mt-button>
/* eslint-disable no-new */
Vue.use(VueLazyload,{
  loading
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
