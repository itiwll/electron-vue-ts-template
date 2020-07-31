<template>
  <el-select
    :class="className"
    v-bind="$attrs"
    v-on="$listeners"
    :value="$attrs.value"
    @input="v => $emit('input', v)"
  >
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </el-select>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Option, Select } from "element-ui";

Vue.use(Select);

@Component({
  name: "gx-select",
})
export default class GxSelect extends Vue {
  get className() {
    return `gx-select ${this.$attrs.class || ""}`;
  }
}

export const GxOption = Option;
</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.gx-select {
  /deep/ input {
    color: var(--colorPrimary, $colorPrimary);

    &.el-input__inner:focus {
      border-color: var(--colorPrimary, $colorPrimary);
    }
  }
}
</style>
<style lang="scss">
@import "@/assets/css/variable.scss";
.el-select-dropdown {
  background-color: var(--colorBackgroundBase, $colorBackgroundBase);
  border-color: var(--colorBorderBase, $colorBorderBase);
}
.el-select-dropdown__item {
  color: var(--colorTextPrimary, $colorTextPrimary);
  &.selected {
    color: var(--colorPrimary, $colorPrimary);
  }
}

.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: var(--colorBackgroundRegular, $colorBackgroundRegular);
}
</style>
