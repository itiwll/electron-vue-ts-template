<template>
  <div>
    <Top-bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopBar from '@/components/common/TopBar.vue'; // @ is an alias to /src

@Component({
  components: {
    TopBar,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>

</style>