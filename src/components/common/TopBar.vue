<template>
  <div class="topbar">
    <div class="back">
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-arrow-right"></i>
      <i class="el-icon-refresh"></i>
    </div>
    <div class="center-con">
      <div class="navbar">
        <span>推荐</span>
        <span>关注</span>
        <span>圈子</span>
        <span>视频</span>
        <span>好物</span>
      </div>
      <div class="search">
        <el-input placeholder="搜索" size="mini" prefix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <div class="back">
      <i class="el-icon-document"></i>
      <i class="el-icon-info"></i>
      <i class="el-icon-bell"></i>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "top-bar",
})
export default class Home extends Vue {}
</script>
<style lang='scss' scoped>
@import "@/assets/css/variable.scss";
.topbar {
  height: 60px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colorBackgroundBase);
  .back {
    i {
      padding-right: 15px;
    }
    i:first-child {
      font-weight: 700;
    }
  }
  .center-con {
    display: flex;
    justify-content: center;
    .navbar {
      width: 100%;
      span {
        padding-right: 20px;
      }
    }
    .search {
      margin-left: 100px;
    }
  }
}
</style>