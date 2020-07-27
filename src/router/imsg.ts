export default {
  path: '/imsg',
  name: 'Imsg',
  redirect: '/imsg/recommend',
  component: () => import(/* webpackChunkName: "layout" */ '@/components/base/Layout.vue'),
  children: [
    {
      path: '/imsg/recommend',
      name: 'Recommend',
      component: () => import(/* webpackChunkName: "layout" */ '@/views/Imsg.vue'),
    },
  ]
}