export default {
  path: '/example',
  name: 'Example View',
  component: () => import(/* webpackChunkName: "example" */ '@/views/Example.vue'),
};
