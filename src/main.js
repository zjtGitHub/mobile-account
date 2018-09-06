// 导入vue
import Vue from 'vue'

// 导入路由 安装路由
import Vuerouter from 'vue-router'
Vue.use(Vuerouter)
// 导入router。js模块
import router from './router/router.js'
import store from './store/index.js'
import './assets/lib/flexible.js'
import './assets/lib/Chart'
// 导入app根组件
import app from './App.vue'
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin) 


// 导入mui样式
import './assets/lib/mui/css/mui.min.css'

//菜单图标需要用到
import './assets/lib/mui/css/icons-extra.css'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store,
  components: { app }
})