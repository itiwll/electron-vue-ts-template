<template>
  <el-input class="gx-input" v-bind="$attrs" v-on="$listeners">
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </el-input>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Input } from "element-ui";
import { Model } from "vue-property-decorator";

Vue.use(Input);

@Component({
  name: "gx-input",
})
export default class GxInput extends Vue {
  //  currentValue = "";
  // input(v: string) {
  //   this.currentValue = v;
  //   this.$emit("input", v);
  // }
  @Model("value")
  value: string | undefined;
}
</script>
<style lang="scss">
@import "@/assets/css/variable.scss";
/* 覆盖 Element UI */
input.el-input__inner {
  color: var(--colorPrimary, $colorPrimary);
  background-color: var(--colorBackgroundBase, $colorBackgroundBase);
  &:focus {
    border-color: var(--colorPrimary, $colorPrimary);
  }
}
</style>
