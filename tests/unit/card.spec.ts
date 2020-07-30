/*
 * @Author: your name
 * @Date: 2020-07-25 16:37:38
 * @LastEditTime: 2020-07-28 15:34:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x\tests\unit\card.jest.ts
 */ 
import { shallowMount } from '@vue/test-utils';
import card from '@/components/common/card/index.vue';

describe('Card', () => {
  it('传入卡片类型,判断有没有对应的卡片', () => {
    const dataList = {
      type: 'common',
      title: '标题',
    };
    const wrapper = shallowMount(card, {
      propsData: { dataList },
    });
    const common = wrapper.findComponent({name: dataList.type})
    expect(common.exists()).toBe(true);
  });
});