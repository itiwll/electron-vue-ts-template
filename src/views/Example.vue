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
      <gx-input placeholder="输入框" />
    </p>
    <p>
      <gx-input disabled placeholder="禁用的输入框" />
    </p>
    <el-row>
      <gx-button>默认按钮</gx-button>
      <gx-button type="primary">主要按钮</gx-button>
      <gx-button type="success">成功按钮</gx-button>
      <gx-button type="info">信息按钮</gx-button>
      <gx-button type="warning">警告按钮</gx-button>
      <gx-button type="danger">危险按钮</gx-button>
    </el-row>
    <br />
    <el-row>
      <gx-button plain>朴素按钮</gx-button>
      <gx-button type="primary" plain>主要按钮</gx-button>
      <gx-button type="success" plain>成功按钮</gx-button>
      <gx-button type="info" plain>信息按钮</gx-button>
      <gx-button type="warning" plain>警告按钮</gx-button>
      <gx-button type="danger" plain>危险按钮</gx-button>
    </el-row>

    <p>
      <gx-button @clickButton="login" icon="el-icon-edit">成功按钮</gx-button>
    </p>

    <h1>主要文本</h1>
    <p class="regular">常用文本</p>
    <p class="secondary">次要文本</p>
    <p class="placeholder">占位文本</p>
    <p class="disabled">禁用文本</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { AppModule } from "@/store/app";
import GxSelect from "@/components/base/GxSelect.vue";
import GxInput from "@/components/base/GxInput.vue";
import GxButton from "@/components/base/GxButton.vue";

@Component({
  components: { GxSelect, GxInput, GxButton },
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

  login() {
    // console.log(data);
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
@import "@/assets/css/function.scss";
.view-example {
  padding: 10px;
  background-color: var(--colorBackgroundBase);

  h1 {
    color: var(--colorRegular);
  }
  p.regular {
    color: lightness(var(--colorTextPrimary), var(--lightnessTextRegular));
  }
  p.secondary {
    color: lightness(var(--colorTextPrimary), var(--lightnessTextSecondary));
  }
  p.placeholder {
    color: lightness(var(--colorTextPrimary), var(--lightnessTextPlaceholder));
  }
  p.disabled {
    color: lightness(var(--colorTextPrimary), var(--lightnessTextDisabled));
  }
}
</style>
