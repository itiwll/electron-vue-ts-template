<!--
 * @Author: your name
 * @Date: 2020-07-29 10:03:52
 * @LastEditTime: 2020-07-30 13:59:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\src\components\base\GxButton.vue
--> 
<template>
<div>
 <el-button  v-bind="$attrs" @click="clickButton" :class="className">
   <slot></slot>
 </el-button>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Button } from "element-ui";

Vue.use(Button);

@Component({
  name: "gx-button",
})
export default class GxButton extends Vue {
  
  className = '';
  
  mounted(){
    this.getType(this.$attrs.type)
  }

  clickButton(){
    this.$emit('clickButton',this.className)
  }

  getType(type: string){
    switch(type){
      case 'login':
        this.className = 'login'
        break;
      case 'test':
        this.className = 'test'
        break;
      default: this.className = ''
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/variable.scss";
/* 覆盖 Element UI */
.el-button {
  color: var(--colorPrimary, $colorPrimary);
  background-color: var(--colorBackgroundBase, $colorBackgroundBase);
}
.el-button:hover, .el-button:focus {
  border: 1px solid var(--colorPrimary, $colorPrimary);
  color: var(--colorPrimary, $colorPrimary);
  background-color: var(--colorBackgroundBase, $colorBackgroundBase);
}
.login {
  color: red;
  background: wheat;
  font-size: 32px;
}
.test {
  color: yellow;
}
</style>