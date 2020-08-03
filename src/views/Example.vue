<template>
  <div class="view-example">
    <h1>示例页面</h1>
    <p>页面组件主要包括布局和子组件</p>
    <p>UI 组件不含业务数据，只包含交互功能</p>
    <p>当前主题:{{ theme }}</p>
    <h1>文本</h1>
    <p class="primary">主要文本</p>
    <p class="regular">常用文本</p>
    <p class="secondary">次要文本</p>
    <p class="placeholder">占位文本</p>
    <p class="disabled">禁用文本</p>
    <h1>GxInput</h1>
    <p>
      <gx-input placeholder="输入框" maxlength="10" show-word-limit></gx-input>
    </p>
    <p>
      <gx-input disabled placeholder="禁用的输入框" />
    </p>
    <p>
      <gx-input maxlength="10" show-word-limit type="textarea" :rows="2" placeholder="文本域"></gx-input>
    </p>
    <p>
      <gx-input type="textarea" :rows="2" placeholder="禁用的文本域" disabled></gx-input>
    </p>
    <h1>GxButton</h1>
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
    <h1>GxSelect</h1>
    <gx-select :value="theme" @change="setTheme">
      <el-option
        v-for="item in themeList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </gx-select>
    <gx-select disabled placeholder="禁用的选择器">
      <el-option
        v-for="item in themeList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </gx-select>
    <gx-select placeholder="禁用选项的选择器" clearable>
      <el-option
        v-for="item in [{ value: '禁用的选项', label:'禁用的', disabled: true}, { value: '启用的选项', label:'启用的'}]"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </gx-select>
    <gx-select placeholder="分组选项">
      <el-option-group v-for="group in selectGroupOptions" :key="group.label" :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-option-group>
    </gx-select>
    <gx-select filterable placeholder="可搜索" loading>
      <gx-option
        v-for="item in themeList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </gx-select>
    <gx-select multiple placeholder="多选">
      <gx-option
        v-for="item in themeList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </gx-select>
    <h1>GxTag</h1>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { AppModule } from "@/store/app";
import GxSelect, { GxOption } from "@/components/base/GxSelect.vue";
import GxInput from "@/components/base/GxInput.vue";
import GxButton from "@/components/base/GxButton.vue";

@Component({
  components: { GxOption, GxSelect, GxInput, GxButton },
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

  selectGroupOptions = [
    {
      label: "热门城市",
      options: [
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Beijing",
          label: "北京",
        },
      ],
    },
    {
      label: "城市名",
      options: [
        {
          value: "Chengdu",
          label: "成都",
        },
        {
          value: "Shenzhen",
          label: "深圳",
        },
        {
          value: "Guangzhou",
          label: "广州",
        },
        {
          value: "Dalian",
          label: "大连",
        },
      ],
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
  text-align: left;
  padding: 10px;
  background-color: var(--colorBackgroundBase);
  padding: $gutter * 4 $gutter * 8;

  h1 {
    color: var(--colorTextPrimary);
  }
  p.regular {
    color: var(--colorTextRegular);
  }
  p.secondary {
    color: var(--colorTextSecondary);
  }
  p.placeholder {
    color: var(--colorTextPlaceholder);
  }
  p.disabled {
    color: var(--colorTextDisabled);
  }

  .gx-select + .gx-select {
    margin-left: $gutter;
  }
}
</style>
