<template>
  <el-container class="layout">
    <main-menu />
    <el-container class="container">
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang='ts'>
import MainMenu from "@/components/common/MainMenu.vue";
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  name: "layout",
  components: {
    MainMenu,
  },
})
export default class Home extends Vue {}
</script>
<style lang='scss' scope>
@import "@/assets/css/variable.scss";
.layout {
  background-color: var(--colorPrimary);
  height: 100%;
  .el-header {
    background-color: var(--colorBackgroundBase);
    line-height: 60px;
    border-radius: 15px 0 0 0;
  }

  .el-main {
    background-color: var(--colorBackgroundRegular);
    text-align: center;
    border-radius: $borderRadius 0 0 $borderRadius;
    padding: 0;
  }
}
</style>