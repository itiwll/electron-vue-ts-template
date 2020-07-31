<!--
 * @Author: your name
 * @Date: 2020-07-25 10:40:01
 * @LastEditTime: 2020-07-29 09:47:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\src\components\common\card\modules\common.vue
--> 
<template>
<div class="common">
  {{item.title}}
</div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
name: 'common',
})
export default class Home extends Vue {
@Prop() item!: object;

// mounted(){
//   console.log(this.item);
// }
}
</script>
<style lang='scss' scoped>
.common{
  width: 100%;
  height: 100px;
  border-radius: 15px;
  background: #607aff;
}
</style>