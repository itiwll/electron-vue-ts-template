<!--
 * @Author: your name
 * @Date: 2020-07-27 09:04:06
 * @LastEditTime: 2020-07-28 16:37:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\src\components\common\waterfallFlow.vue
--> 
<template>
<div ref="box" class="box">
  <slot ></slot>
</div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
name: 'waterfallflow',
})
export default class Home extends Vue {
  @Prop({type: Number,default: 2})
    readonly col!: number; // 显示列数 默认2列

  @Prop({type: Number,default: 10})
    readonly waterfallImgRight!: number; // 右边距 默认10px

  @Prop({type: Number,default: 10})
    readonly waterfallImgBottom!: number; // 下边距 默认10px

  waterfallList: any[] = []; // 存放计算好的数据

  waterfallminindex = 0; // 最小高度索引
  
  waterfallDeviationHeight: any[]= []; // 存放瀑布流各个列的高度
  
  // 计算获取最小高度索引
  get minheightindex(){
    return this.waterfallminindex
  }

  // 计算获取每一项的宽度
  get waterfallImgWidth(){
    const boxWidth = (this.$refs.box as HTMLElement).offsetWidth;
    return boxWidth/this.col - this.waterfallImgRight + (this.waterfallImgRight / this.col);
  }
  
  mounted(){
    this.getitemheight()
  }
  
  // 获取每一项得高度和盒子得宽度
  getitemheight(){
    this.$nextTick(() =>{
      const itemlist = (this.$refs.box as any).children;
      itemlist.forEach(async (item: Element,index: number) =>{
      let itemdata: object;
      if(index < this.col){
        itemdata = {
          top: 0,
          left: index * (this.waterfallImgWidth + this.waterfallImgRight),
        }
        this.getminheight();
        this.waterfallDeviationHeight.push(item.clientHeight);
      }else{
        itemdata = {
          top: this.getminheight() + this.waterfallImgBottom,// '最小高度+自身高度',
          left: this.minheightindex * (this.waterfallImgWidth + this.waterfallImgRight), // 最小高度得索引*自身的宽度+边距
        }
        this.waterfallDeviationHeight[this.minheightindex] += (item.clientHeight + this.waterfallImgBottom);
      }
      await this.waterfallList.push(itemdata);
      itemlist[index].style.width = `${this.waterfallImgWidth}px`;
      itemlist[index].style.position = 'absolute';
      itemlist[index].style.left = `${this.waterfallList[index].left}px`;
      itemlist[index].style.top = `${this.waterfallList[index].top}px`;
    })
    });
  }

  // 获取最小高度
  getminheight(){
    const minheight = Math.min(...this.waterfallDeviationHeight);
    this.getminheightindex(minheight);
    return minheight;
  }

  // 获取最小高度得索引
  getminheightindex(minheight: number){
    this.waterfallminindex = this.waterfallDeviationHeight.indexOf(minheight);
    // console.log(this.waterfallDeviationHeight)
    // console.log(this.waterfallminindex)
  }
}
</script>
<style lang='scss' scoped>
.box{
  width: 100%;
  position: relative;
}
</style>
