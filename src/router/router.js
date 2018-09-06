import VueRouter from 'vue-router'

// 导入路由组件
import home from '../views/home/home.vue'
import account from '../views/account/account.vue'
import bill from '../views/bill/bill.vue'
import chart from '../views/chart/chart.vue'
import expend from '../views/account/children/expend.vue'
import earn from '../views/account/children/earn.vue'


  
var router = new VueRouter({
  routes:[  //这里是数组 不是对象
    {path:'/', redirect:'/home'},
    {path:'/home',component:home},
    {path:'/account',component:account},
    {path:'/bill',component:bill},
    {path:'/chart',component:chart},
    {path:'/account/expend',component:expend},
    {path:'/account/earn',component:earn},

  ],
  linkActiveClass:'mui-active'
})




export default router