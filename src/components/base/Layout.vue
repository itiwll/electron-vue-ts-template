<!--
 * @Author: your name
 * @Date: 2020-07-22 11:20:15
 * @LastEditTime: 2020-07-22 16:22:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\src\components\base\Layout.vue
--> 
<template>
    <el-container class="layout">
      <el-aside width="80px">
        <Main-menu />
      </el-aside>
      <el-container class="container">
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/common/MainMenu.vue';

@Component({
name: 'layout',
components: {
  MainMenu,
},
})
export default class Home extends Vue {}
</script>
<style lang='scss'>
  .layout{
    background-color: #014dec;
    height: 100%;
  }
 .el-header{
    background-color: #ffffff;
    color: #333;
    // text-align: center;
    line-height: 60px;
    border-radius: 15px 0 0 0;
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    overflow: hidden;
  }
  
  .el-main {
    background-color:#efeef1;
    color: #333;
    text-align: center;
    border-radius: 15px 0 0 15px;
    padding: 0;
  }
</style>