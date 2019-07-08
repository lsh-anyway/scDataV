<template>
  <div class="dashboard" ref="dashboard">
    <grid-layout v-loading="loading"
                 :layout.sync="layout"
                 :col-num="24"
                 :row-height="30"
                 :is-draggable="edit"
                 :is-resizable="edit"
                 :is-mirrored="false"
                 :autoSize="false"
                 :vertical-compact="false"
                 :margin="[10, 10]"
                 :use-css-transforms="true"
                 @layout-updated="handleLayoutChange">
      <grid-item v-for="item in layout || []"
                 :key="item.index"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i"
                 :static="item.static">
          <component :is="item.component" v-bind="item.prop"></component>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { GridLayout, GridItem } from 'vue-grid-layout';
import { LayoutItem } from '../@types/interface.d';

@Component({
  components: {
    GridLayout,
    GridItem,
  },
})
export default class Dashboard extends Vue {
  public $refs!: {
    dashboard: HTMLElement
  }

  @Prop({
    type: Array,
    default: () => [],
  })
  public layout!: LayoutItem[];

  @Prop({
    type: Boolean,
    default: () => false,
  })
  public loading!: boolean;

  @Prop({
    type: Boolean,
    default: () => false,
  })
  public edit!: boolean;


  public mounted() {
    if (!this.edit) {
      this.resizeDashBoard();
      window.addEventListener('resize', this.resizeDashBoard);
    }
  }

  public activated() {
    if (!this.edit) {
      window.addEventListener('resize', this.resizeDashBoard);
    }
  }

  public beforeDestroy() {
    if (!this.edit) {
      window.removeEventListener('resize', this.resizeDashBoard);
    }
  }

  public deactivated() {
    if (!this.edit) {
      window.removeEventListener('resize', this.resizeDashBoard);
    }
  }

  public resizeDashBoard() {
    const ViewportWidth = document.documentElement.clientWidth;
    const ViewportHeight = document.documentElement.clientHeight;
    const scale = Math.min(ViewportWidth / 1920, ViewportHeight / 1080);

    this.$refs.dashboard.style.transform = `scale(${scale})`;
  }

  public handleLayoutChange(newLayout: LayoutItem[]) {
    console.log(newLayout);
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  width: 1920px;
  height: 1080px;
  transform-origin: left top;
  background-image: url('~@/assets/bg.png');
  background-size: 1920px 1080px;
  .vue-grid-layout{
    width: 1920px;
    height: 1080px;
  }
}
</style>
