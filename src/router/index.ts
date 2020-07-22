import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// import Home from '../views/Home.vue';
// import Layout from '../views/Home.vue';
import example from './example';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "layout" */ '@/components/base/Layout.vue'),
    children: [ 
      {
        path: 'home',
        name: 'Home',
        redirect:'/home/recommend',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        children: [
          {
            path: 'recommend',
            name: 'Recommende',
            component: () => import(/* webpackChunkName: "recommend" */ '@/views/recommend.vue'),
          }
        ]
      },
      {
        path: '/imsg',
        name: 'imsg',
        redirect:'/imsg/recommend',
        component: () => import(/* webpackChunkName: "layout" */ '@/views/Imsg.vue'),
        children: [ 
          {
            path: 'recommend',
            name: 'Recommende',
            component: () => import(/* webpackChunkName: "recommend" */ '@/views/recommend.vue'),
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: { hidden: true },
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
  },
  example,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
