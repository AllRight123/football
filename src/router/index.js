import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import data from '@/components/Data'
import Index from '@/components/Index'
import Formation from '@/components/Formation'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import Home from '@/components/Home'
import Myself from '@/components/Myself'
import Recharge from '@/components/self/Recharge'

Vue.use(VueRouter)

const routes = [
  { path:'/', component:data,
    redirect: '/index',
    children: [
      { path: '/index', component: Index },
      { path: '/Formation', component: Formation },
      { path: '/Home', component: Home },
      { path: '/Myself', component: Myself },
      { path: '/recharge', component: Recharge },
    ]
  },
  { path: '/Regist', component: Regist },
  { path: '/login', component: Login },

]
const router = new VueRouter({
  routes
})
export default  router

