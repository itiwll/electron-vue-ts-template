<template>
  <div class="view-example">
    <h2>示例页面组件</h2>
    <p class>页面组件主要包括布局和子组件</p>
    <code>123</code>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Example extends Vue {

}
</script>
