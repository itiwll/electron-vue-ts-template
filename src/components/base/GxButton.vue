<template>
  <el-button v-bind="$attrs" @click="clickButton" :class="className">
    <slot></slot>
  </el-button>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button } from "element-ui";

Vue.use(Button);

@Component({
  name: "gx-button",
})
export default class GxButton extends Vue {
  get className() {
    return `gx-button ${this.$attrs.class || ""}`;
  }
}
</script>
<style lang="scss">
@import "@/assets/css/mixin.scss";

/* 覆盖 Element UI */
.gx-button.el-button {
  color: var(--colorTextWithBackground);

  &.el-button--default {
    color: var(--colorTextRegular);
    background-color: var(--colorBackgroundBase);
    border-color: var(--colorBorderRegular);
    &:hover,
    &:focus {
      background-color: var(--colorPrimaryLighter);
      color: var(--colorTextWithBackground);
    }
  }

  &.el-button--primary {
    color: var(--colorTextWithBackground);
    background-color: var(--colorPrimary);
    border-color: var(--colorPrimary);
    &:hover,
    &:focus {
      background-color: var(--colorPrimaryLighter);
    }
    &.is-plain {
      color: var(--colorPrimary);
      background: transparent;
      &:hover,
      &:focus {
        background-color: var(--colorPrimaryLighter);
        color: var(--colorTextWithBackground);
      }
    }
  }

  &.el-button--success {
    @include buttonColor(Success);
  }

  &.el-button--info {
    @include buttonColor(Info);
  }

  &.el-button--warning {
    @include buttonColor(Warning);
  }
  &.el-button--danger {
    @include buttonColor(Danger);
  }
}
</style>
