<template>
  <gx-card class="card">
    <headTitle v-if="item.type != 'common'" :data="item" />
    <!-- <div class="card-content"> -->
    <components :is="componentName" :item="item"></components>
    <!-- </div> -->
  </gx-card>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import GxCard from "@/components/base/GxCard.vue";
import HeadTitle from "./modules/headtitle.vue";
import Trip from "./modules/trip.vue";
import Travel from "./modules/travel.vue";
import common from "./modules/common.vue";

@Component({
  name: "home-card",
  components: {
    HeadTitle,
    Trip,
    Travel,
    common,
    GxCard,
  },
})
export default class Home extends Vue {
  @Prop() item!: any;

  componentName = this.item.type;
}
</script>
<style lang='scss' scoped>
.card {
  width: 300px;
  & > .el-card__body {
    padding: 0;
  }
}
</style>
