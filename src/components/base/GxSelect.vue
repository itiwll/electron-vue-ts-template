<template>
  <el-select
    :class="className"
    v-bind="$attrs"
    v-on="$listeners"
    :value="currentValue"
    @input="input"
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
  currentValue = "";

  get className() {
    return `gx-select ${this.$attrs.class || ""}`;
  }

  input(v: string) {
    this.currentValue = v;
    this.$emit("input", v);
  }
}

export const GxOption = Option;
</script>
<style lang="scss">
@import "@/assets/css/variable.scss";
.el-select-dropdown,
.el-select-dropdown.is-multiple {
  background-color: var(--colorBackgroundBase);
  border-color: var(--colorBorderRegular);
  .el-select-group__title {
    color: var(--colorTextPrimary);
  }
  .el-select-group__wrap:not(:last-of-type)::after {
    background-color: var(--colorBorderRegular);
  }
  .el-select-dropdown__empty {
    color: var(--colorInfo);
  }

  .el-select-dropdown__item {
    color: var(--colorTextPrimary);
    background-color: var(--colorBackgroundBase);
    &.selected,
    &:hover,
    &.selected:hover {
      color: var(--colorPrimary);
      background-color: var(--colorBackgroundRegular);
    }

    &.is-disabled {
      color: var(--colorTextDisabled);
      background-color: var(--colorBackgroundDisabled);
      &:hover {
        color: var(--colorTextDisabled);
        background-color: var(--colorBackgroundDisabled);
      }
    }
  }
}
</style>
