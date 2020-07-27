import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const moduleFiles = require.context('../router', false, /^(?!.*(?:index|test)\.ts).*\.ts$/);
const modules = moduleFiles.keys().map(path => moduleFiles(path).default);
const routes: Array<RouteConfig> = modules
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
