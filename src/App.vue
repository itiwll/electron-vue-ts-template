<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button type="primary">el-button</el-button>
      <p>主题色为 {{style.colorPrimary}}</p>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Button } from 'element-ui';
import style from '@/assets/css/variable.scss';
import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(Button);

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  name = 'app';

  style = style;
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
