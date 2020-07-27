<!--
 * @Author: your name
 * @Date: 2020-07-25 08:58:05
 * @LastEditTime: 2020-07-25 10:51:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\src\components\common\card\modules\travel.vue
--> 
<template>
<div class="travel">
 <div class="travel-left">
   左边
 </div>
<div class="travel-right">
  <div class="travel-right-top">
    右上
  </div>
  <div class="travel-right-bottom">
    右下
  </div>
 </div>
</div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
name: 'trave',
})
export default class Home extends Vue {}
</script>
<style lang='scss' scoped>
.travel{
  display: flex;
  padding: 20px;
  justify-content: space-between;
  .travel-left{
    height: 150px;
    width: 50%;
    margin-right: 15px;
    background: #d1d9e0;
    border-radius: 15px;
  }
  .travel-right{ 
    height:150px;
    width: 50%;
    .travel-right-top{
      width: 100%;
      height: 70px;
      background: #d0e2fd;
      border-radius: 15px;
      margin-bottom: 10px;
    }
    .travel-right-bottom{
      width: 100%;
      height: 70px;
      background: #dedcff;
      border-radius: 15px;
      // margin-bottom: 10px;
    }
  }
}
</style>