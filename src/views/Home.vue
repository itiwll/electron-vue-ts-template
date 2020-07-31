<template>
  <div class="home-view">
    <top-bar class="header" />
    <div class="body">
      <div class="container-left">
        <GxCard class="top-card">首页左边头部组件内容</GxCard>
        <waterfall-flow :col="3">
          <home-card v-for="(item,index) in dataList" :key="index" :item="dataList[index]"></home-card>
        </waterfall-flow>
      </div>
    </div>
    <div class="container-right">首页右边内容组件</div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import HomeCard from "@/components/home/HomeCard/index.vue";
import GxCard from "@/components/base/GxCard.vue";
import TopBar from "@/components/common/TopBar.vue";
import WaterfallFlow from "@/components/common/WaterfallFlow.vue";

@Component({
  name: "HomeContainer",
  components: {
    HomeCard,
    WaterfallFlow,
    TopBar,
    GxCard,
  },
})
export default class Home extends Vue {
  dataList: object[] = [
    {
      type: "common",
      title: "标题",
    },
    {
      type: "trip",
      title: "出行服务",
      data: {
        origin: "人间",
        destination: "天堂",
      },
    },
    {
      type: "travel",
      title: "周末去哪玩",
      data: [
        {
          type: 0,
          des: "佛山往哪里",
          price: "99",
        },
        {
          type: 1,
          des: "4折享好店",
        },
        {
          type: 2,
          des: "已减100元",
          price: "99元起",
        },
      ],
    },
    {
      type: "common",
      title: "标题",
    },
    {
      type: "trip",
      title: "出行服务",
      data: {
        origin: "人间",
        destination: "天堂",
      },
    },
    {
      type: "travel",
      title: "周末去哪玩",
      data: [
        {
          type: 0,
          des: "佛山往哪里",
          price: "99",
        },
        {
          type: 1,
          des: "4折享好店",
        },
        {
          type: 2,
          des: "已减100元",
          price: "99元起",
        },
        {
          type: 0,
          des: "佛山往哪里",
          price: "99",
        },
        {
          type: 1,
          des: "4折享好店",
        },
        {
          type: 2,
          des: "已减100元",
          price: "99元起",
        },
      ],
    },
    {
      type: "common",
      title: "标题",
    },
    {
      type: "trip",
      title: "出行服务",
      data: {
        origin: "人间",
        destination: "天堂",
      },
    },
    {
      type: "travel",
      title: "周末去哪玩",
      data: [
        {
          type: 0,
          des: "佛山往哪里",
          price: "99",
        },
        {
          type: 1,
          des: "4折享好店",
        },
        {
          type: 2,
          des: "已减100元",
          price: "99元起",
        },
      ],
    },
    {
      type: "common",
      title: "标题",
    },
    {
      type: "trip",
      title: "出行服务",
      data: {
        origin: "人间",
        destination: "天堂",
      },
    },
    {
      type: "travel",
      title: "周末去哪玩",
      data: [
        {
          type: 0,
          des: "佛山往哪里",
          price: "99",
        },
        {
          type: 1,
          des: "4折享好店",
        },
        {
          type: 2,
          des: "已减100元",
          price: "99元起",
        },
      ],
    },
  ];
}
</script>
<style lang='scss' scoped>
.home-view {
  .header {
    margin-bottom: 20px;
  }
  .top-card {
    margin-bottom: 20px;
    width: 100%;
    height: 150px;
  }
  .body {
    display: flex;
    .container-left {
      width: 1050px;
      height: 100%;
      margin: 0 20px;
    }
  }
}
</style>
