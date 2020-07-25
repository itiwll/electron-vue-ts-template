<!--
 * @Author: your name
 * @Date: 2020-07-23 14:47:53
 * @LastEditTime: 2020-07-25 10:52:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\src\components\common\Card.vue
--> 
<template>
  <div class="card">
    <headTitle v-if="dataList.type != 'common'" :data = "dataList" />
    <!-- <div class="card-content"> -->
      <components :is="componentName"></components>
    <!-- </div> -->
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import HeadTitle from './modules/headtitle.vue';
import Trip from './modules/trip.vue';
import Travel from './modules/travel.vue';
import common from './modules/common.vue';

@Component({
name: 'card',
components: {
  HeadTitle,
  Trip,
  Travel,
  common,
},
})
export default class Home extends Vue {
  @Prop() dataList!: any;
  
  componentName = this.dataList.type;
}
</script>
<style lang='scss' scoped>
.card{
  width: 300px;
  height:inherit;
  background: wheat;
  border-radius: 15px;
  .card-content{
    // background: #666;
    margin: 20px 20px;
  }
}
</style>
