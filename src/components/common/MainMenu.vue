<template>
  <el-aside class="menu" width="80px">
    <ul>
      <li v-for="i in 7" :key="i">
        <router-link class="a" to="/imsg">
          <img src="##" alt class="menu_icon" />
        </router-link>
      </li>
    </ul>
  </el-aside>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "mainmenu",
})
export default class Home extends Vue {
  private menu = [];
}
</script>
<style lang='scss' scoped>
@import "@/assets/css/variable.scss";
.menu {
  padding-top: 50px;
  overflow: hidden;
  width: 80px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    li {
      width: 30px;
      height: 30px;
      background-color: #fff;
      margin-bottom: 50px;
      border-radius: $borderRadius;
      .a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>