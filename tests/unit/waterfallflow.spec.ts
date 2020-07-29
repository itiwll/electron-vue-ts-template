/*
 * @Author: your name
 * @Date: 2020-07-28 16:18:43
 * @LastEditTime: 2020-07-28 16:44:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\tests\unit\waterfallflow.spec.ts
 */ 
import { shallowMount } from '@vue/test-utils';
import waterfallflow from '@/components/common/WaterfallFlow.vue';

describe('waterfallflow',() =>{
  it('传入显示的列数后,判断是不是显示传入的列数',() =>{
    const wraper = shallowMount(waterfallflow,{
      propsData:{
        col:5,
      }
    });
    expect(wraper.vm.$props.col).toBe(5) 
  })
  it('传入右边距后,判断右边距是不是传入的值',() =>{
    const wraper = shallowMount(waterfallflow,{
      propsData:{
        waterfallImgRight:10,
      }
    });
    expect(wraper.vm.$props.waterfallImgRight).toBe(10) 
  })
  it('传入下边距后,判断下边距是不是传入的值',() =>{
    const wraper = shallowMount(waterfallflow,{
      propsData:{
        waterfallImgBottom:5,
      }
    });
    expect(wraper.vm.$props.waterfallImgBottom).toBe(5) 
  })
  it('不传入显示的列数后,判断是不是显示两列',() =>{
    const wraper = shallowMount(waterfallflow);
    expect(wraper.vm.$props.col).toBe(2) 
  })
  it('不传入右边距后,判断右边距是不是默认为10',() =>{
    const wraper = shallowMount(waterfallflow);
    expect(wraper.vm.$props.waterfallImgRight).toBe(10) 
  })
  it('不传入下边距后,判断下边距是不是默认为10',() =>{
    const wraper = shallowMount(waterfallflow);
    expect(wraper.vm.$props.waterfallImgBottom).toBe(10) 
  })
})