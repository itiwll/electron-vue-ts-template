<!--
 * @Author: your name
 * @Date: 2020-07-23 11:38:57
 * @LastEditTime: 2020-07-28 10:39:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\src\components\base\HomeContainer.vue
--> 
<template>
  <div class="home-container">
    <div class="home-container-left">
      <div class="home-container-left-header">
        首页左边头部组件
      </div>
        <Waterfall-flow :col="6">
          <Card v-for="(item,index) in dataList" :key="index" :dataList="dataList[index]"></Card>
        </Waterfall-flow>
      </div>
    <div class="home-container-right">
      首页右边内容组件
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/common/card/index.vue';
import WaterfallFlow from '@/components/common/WaterfallFlow.vue';

@Component({
name:'HomeContainer',
components: {
  Card,
  WaterfallFlow,
},
})
export default class Home extends Vue {
  dataList: object[] = [
    {
      type: 'common',
      title: '标题',
    },
    {
      type: 'trip',
      title: '出行服务',
      data:{
        origin: '人间',
        destination: '天堂'
      }
    },
    {
      type: 'travel',
      title: '周末去哪玩',
      data:[
        {
          type: 0,
          des: '佛山往哪里',
          price: '99',
        },
        {
          type: 1,
          des: '4折享好店',
        },
        {
          type: 2,
          des: '已减100元',
          price: '99元起',
        },
      ]
    },
    {
      type: 'common',
      title: '标题',
    },
    {
      type: 'trip',
      title: '出行服务',
      data:{
        origin: '人间',
        destination: '天堂'
      }
    },
    {
      type: 'travel',
      title: '周末去哪玩',
      data:[
        {
          type: 0,
          des: '佛山往哪里',
          price: '99',
        },
        {
          type: 1,
          des: '4折享好店',
        },
        {
          type: 2,
          des: '已减100元',
          price: '99元起',
        },
        {
          type: 0,
          des: '佛山往哪里',
          price: '99',
        },
        {
          type: 1,
          des: '4折享好店',
        },
        {
          type: 2,
          des: '已减100元',
          price: '99元起',
        },
      ]
    },
    {
      type: 'common',
      title: '标题',
    },
    {
      type: 'trip',
      title: '出行服务',
      data:{
        origin: '人间',
        destination: '天堂'
      }
    },
    {
      type: 'travel',
      title: '周末去哪玩',
      data:[
        {
          type: 0,
          des: '佛山往哪里',
          price: '99',
        },
        {
          type: 1,
          des: '4折享好店',
        },
        {
          type: 2,
          des: '已减100元',
          price: '99元起',
        },
      ]
    },
    {
      type: 'common',
      title: '标题',
    },
    {
      type: 'trip',
      title: '出行服务',
      data:{
        origin: '人间',
        destination: '天堂'
      }
    },
    {
      type: 'travel',
      title: '周末去哪玩',
      data:[
        {
          type: 0,
          des: '佛山往哪里',
          price: '99',
        },
        {
          type: 1,
          des: '4折享好店',
        },
        {
          type: 2,
          des: '已减100元',
          price: '99元起',
        },
      ]
    }
  ]
}
</script>
<style lang='scss' scoped>
.home-container{
  margin-top: 20px;
  display:flex;
  .home-container-left{
    width: 1050px;
    height: 100%;
    margin:0 20px;
    .home-container-left-header{
      margin-bottom: 20px;
      width: 100%;
      height: 150px;
      background: #fff;
      border-radius: 15px;
    }
    .home-container-left-content{
      width:100%;
      height: 100%;
      display: flex;
      flex-wrap:wrap;
    }
  }
}
</style>
