<!--
 * @Author: your name
 * @Date: 2020-07-23 14:47:53
 * @LastEditTime: 2020-07-29 09:44:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\src\components\common\Card.vue
--> 
<template>
  <div class="card">
    <headTitle v-if="item.type != 'common'" :data = "item" />
    <!-- <div class="card-content"> -->
      <components :is="componentName" :item = "item"></components>
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
  @Prop() item!: any;
  
  componentName = this.item.type;
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
