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
import { Watch, Component } from "vue-property-decorator";
import { RouteRecord } from "vue-router";
import { AppModule } from "./store/app";
import { getTheme } from "./utils/local-store";

Vue.use(Button);

@Component
export default class App extends Vue {
  name = "app";

  style = style;

  transitionName = "slide-left";

  created() {
    AppModule.SetTheme(getTheme() || "auto");
  }

  @Watch("$route")
  routeChange(to: RouteRecord, from: RouteRecord) {
    const toDepth = to.path.split("/").length;
    const fromDepth = from.path.split("/").length;
    this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--colorFrontDefault);
  margin-top: 60px;
  height: 100%;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.75s ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .child-view {
    position: absolute;
    transition: all 0.75s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
}
</style>
