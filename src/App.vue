<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Button } from "element-ui";
import style from "@/assets/css/variable.scss";
import { Watch } from "vue-property-decorator";
import { RouteRecord } from "vue-router";

Vue.use(Button);

export default class App extends Vue {
  name = "app";

  style = style;

  transitionName = "slide-left";

  @Watch("$route")
  routeChange(to: RouteRecord, from: RouteRecord) {
    const toDepth = to.path.split("/").length;
    const fromDepth = from.path.split("/").length;
    this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
  }
}
</script>

<style lang="scss" scoped>
#app{
  height: 100%;
}
</style>
