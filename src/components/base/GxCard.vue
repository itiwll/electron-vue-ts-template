<template>
  <el-card v-bind="$attrs" v-on="$listeners" :class="className">
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </el-card>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Card } from "element-ui";

Vue.use(Card);

@Component({
  name: "gx-card",
})
export default class GxCard extends Vue {
  get className() {
    return `gx-card ${this.$attrs.class || ""}`;
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.gx-card {
  border-radius: $borderRadius;
}
</style>