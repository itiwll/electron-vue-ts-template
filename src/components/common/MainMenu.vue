<!--
 * @Author: your name
 * @Date: 2020-07-22 11:40:10
 * @LastEditTime: 2020-07-23 11:25:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\src\components\common\MainMenu.vue
--> 
<template>
<div class="menu">
  <ul>
    <li v-for="i in 7" :key="i">
      <router-link class="a" to="/imsg">
      <img src="##" alt="" class="menu_icon">
      </router-link>
    </li>
  </ul>
</div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue';
@Component({
name: 'mainmenu',
// components: {
// },
})
export default class Home extends Vue {
  private menu = [

  ]
}
</script>
<style lang='scss' scoped>
.menu{
  padding-top: 50px;
}
ul{
  list-style: none;
  display: flex;
  flex-direction:column;
  align-items: center;
  padding:0;
  li{
  width: 30px;
  height: 30px;
  background-color: pink;
  margin-bottom: 50px;
  border-radius: 8px;
  .a{
    display: block;
    width: 100%;
    height: 100%;
  }
  }
}
</style>