export default {
  path: '/',
  name: 'Home',
  redirect: '/home',
  component: () => import(/* webpackChunkName: "layout" */ '@/components/base/Layout.vue'),
  children: [
    {
      path: 'home',
      name: 'Home',
      // redirect:'/home/recommend',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      // children: [
      //   {
      //     path: 'recommend',
      //     name: 'Recommende',
      //     component: () => import(/* webpackChunkName: "recommend" */ '@/views/recommend.vue'),
      //   }
      // ]
    },
  ]
}
