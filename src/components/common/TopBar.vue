<!--
 * @Author: your name
 * @Date: 2020-07-22 11:41:05
 * @LastEditTime: 2020-07-22 17:09:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\src\components\common\TopBar.vue
--> 
<template>
  <div class="topbar">
    <div class="back">
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-arrow-right"></i>
      <i class="el-icon-refresh"></i>
    </div>
    <div class="center-con">
      <div class="navbar">
        <span>推荐</span>
        <span>关注</span>
        <span>圈子</span>
        <span>视频</span>
        <span>好物</span>
      </div>
      <div class="search">
        <el-input placeholder="搜索" size="mini" prefix-icon="el-icon-search" >
        </el-input>
      </div>
    </div>
    <div class="back">
      <i class="el-icon-document"></i>
      <i class="el-icon-info"></i>
      <i class="el-icon-bell"></i>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue';
@Component({
// name: 
// components: {
// },
})
export default class Home extends Vue {}
</script>
<style lang='scss' scoped>
.topbar{
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}
.back{
  i{
    padding-right: 15px;
  }
  i:first-child{
    font-weight: 700;
  }
}
.center-con{
  display: flex;
  justify-content: center;
  .navbar{
    width: 100%;
    span{
      padding-right: 20px;
    }
  }
  .search{
    margin-left:100px;
    .el-input__inner{
      background-color: #0b0b0c;
    }
  }
}

</style>