<template>
  <el-input
    :class="className"
    v-bind="$attrs"
    v-on="$listeners"
    :value="currentValue"
    @input="input"
  >
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </el-input>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Input } from "element-ui";

Vue.use(Input);

@Component({
  name: "gx-input",
})
export default class GxInput extends Vue {
  currentValue = "";

  get className() {
    return `gx-input ${this.$attrs.class || ""}`;
  }

  input(v: string) {
    this.currentValue = v;
    this.$emit("input", v);
  }
}
</script>
<style lang="scss">
@import "@/assets/css/variable.scss";
/* 覆盖 Element UI */
input.el-input__inner,
textarea.el-textarea__inner {
  color: var(--colorTextPrimary);
  background-color: var(--colorBackgroundBase);
  &:focus {
    // color: var(--colorPrimary);
    border-color: var(--colorPrimary);
  }
}

@mixin color($type) {
  .el-#{$type} {
    .el-#{$type}__inner {
      color: var(--colorTextPrimary);
      background-color: var(--colorBackgroundBase);
      &:focus {
        // color: var(--colorPrimary);
        border-color: var(--colorPrimary);
      }
    }
    .el-input__count {
      color: var(--colorTextRegular);
      background-color: transparent;
      @if $type== input {
        .el-#{$type}__count-inner {
          background-color: transparent;
        }
      }
    }
  }

  .el-#{$type}.is-disabled .el-#{$type}__inner {
    color: var(--colorTextDisabled);
    background-color: var(--colorBackgroundDisabled);
    &:focus {
      // color: var(--colorPrimary);
      border-color: var(--colorPrimary);
    }
  }
}

@include color(input);
@include color(textarea);
</style>