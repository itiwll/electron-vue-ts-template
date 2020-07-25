<template>
  <div>
    <Top-bar />
    <Home-container />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopBar from '@/components/common/TopBar.vue';
import HomeContainer from '@/components/base/HomeContainer.vue';

@Component({
  components: {
    TopBar,
    HomeContainer,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>

</style>