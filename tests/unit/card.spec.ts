/*
 * @Author: your name
 * @Date: 2020-07-25 16:37:38
 * @LastEditTime: 2020-07-25 17:10:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\tests\unit\card.jest.ts
 */ 
import { shallowMount } from '@vue/test-utils';
import card from '@/components/common/card/index.vue';

describe('card.vue', () => {
  it('传入卡片类型,返回动态控制卡片类型的变量', () => {
    const dataList = {
      type: 'common',
      title: '标题',
    };
    const wrapper = shallowMount(card, {
      propsData: { dataList },
    });
    expect(wrapper.vm.$data.componentName).toBe(dataList.type);
  });
});