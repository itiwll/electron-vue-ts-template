<!--
 * @Author: your name
 * @Date: 2020-07-25 10:40:01
 * @LastEditTime: 2020-07-25 10:53:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\src\components\common\card\modules\common.vue
--> 
<template>
<div class="common">
  普通卡片类型
</div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
name: 'common',
})
export default class Home extends Vue {}
</script>
<style lang='scss' scoped>
.common{
  width: 100%;
  height: 100px;
  border-radius: 15px;
  background: #607aff;
}
</style>