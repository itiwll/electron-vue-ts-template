<template>
  <div class="view-example">
    <h2>示例页面组件</h2>
    <p class>页面组件主要包括布局和子组件</p>
    <gx-select :value="theme" @change="setTheme">
      <el-option
        v-for="item in themeList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </gx-select>
    <p>{{ theme }}</p>
    <p>
      <gx-input />
      <gx-button @clickButton="login" icon="el-icon-edit">成功按钮</gx-button>
    </p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { AppModule } from "@/store/app";
import GxSelect from "@/components/base/gx-select.vue";
import GxInput from "@/components/base/gx-input.vue";
import GxButton from "@/components/base/GxButton.vue";

@Component({
  components: { GxSelect, GxInput, GxButton},
})
export default class Example extends Vue {
  themeList = [
    { label: "自动", value: "auto" },
    {
      label: "暗色",
      value: "dark",
    },
    {
      label: "亮色",
      value: "light",
    },
  ];

  get theme() {
    return AppModule.theme;
  }

  /**
   * @description: 设置皮肤
   * @param {string} theme auto|light|dark
   */

  setTheme(theme: string) {
    AppModule.SetTheme(theme);
  }

  login(){
    // console.log(data);
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.view-example {
  padding: 10px;
  background-color: var(--colorBackgroundBase, $colorBackgroundBase);
}
</style>
