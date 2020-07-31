<!--
 * @Author: your name
 * @Date: 2020-07-24 15:37:03
 * @LastEditTime: 2020-07-25 09:38:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\src\components\common\headtitle.vue
--> 
<template>
  <div class="card-head">
    <div class = "left">
      <span>图标  </span>
      <span>{{data.title}}</span>
    </div>
    <div class = "left" v-if="data.type == 'travel'">
      更多
      <i class = "el-icon-arrow-right"></i>
    </div>
    <div class = "left" v-if="data.type == 'trip'">
      <i class = "el-icon-mouse"></i>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
name: 'headtitle',
})
export default class Home extends Vue {
  @Prop() data!: object;
}
</script>
<style lang='scss' scoped>
.card-head{
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 20px;
}
</style>