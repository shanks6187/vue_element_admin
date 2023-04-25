import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import login from '@/components/login'
import home from '@/components/home/home'

//异步加载 预加载 也可以叫做按需加载
const product = ()=>import('@/components/product')
const list = ()=>import('@/components/product/list')
const category = ()=>import('@/components/product/category')
const order = ()=>import('@/components/order')
const olist = ()=>import('@/components/order/list')
const oadmin = ()=>import('@/components/order/admin')
const advert = ()=>import('@/components/advert')



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layoutt',
      component: layout,
      children:[
        {
          path:'/',
          name:'home',
          component:home
        },
        {
          path:'/product',
          name:'product',
          component:product,
          children:[
            {
              path:'list', //访问路径 /product/list
              name:'list',
              component:list
            },
            {
              path:'category',
              name:'category',
              component:category
            },
          ]
        },
        {
          path:'/order',
          name:'order',
          component:order,
          children:[
            {
              path:'olist',
              name:'olist',
              component:olist
            },
            {
              path:'oadmin',
              name:'oadmin',
              component:oadmin
            },
          ]
        },
        {
          path:'/advert',
          name:'advert',
          component:advert
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
