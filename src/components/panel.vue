<template>
  <div class="panel"
       ref="panel">
    <div class="bg"></div>
    <grid-layout v-loading="loading"
                 :layout.sync="layout"
                 :col-num="24"
                 :row-height="rowHeight"
                 :is-draggable="edit"
                 :is-resizable="edit"
                 :is-mirrored="false"
                 :autoSize="false"
                 :margin="[0, 0]"
                 :vertical-compact="false"
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
        <component ref="layoutItem"
                   v-if="item.component"
                   :is="item.component"
                   v-bind="item.prop"></component>
        <div v-else
             :style="item.style">
          {{item.title}}
        </div>
      </grid-item>
      <slot></slot>
    </grid-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { GridLayout, GridItem } from 'vue-grid-layout';
import { LayoutItem } from '@/@types/interface.d';

@Component({
  components: {
    GridLayout,
    GridItem,
  },
})
export default class Panel extends Vue {
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

  public $refs: any;

  public rowHeight = 30;

  public handleLayoutChange(newLayout: LayoutItem[]) {
    console.log(newLayout);
  }

  public resize() {
    this.$nextTick(() => {
      const height = this.$refs.panel.clientHeight;
      this.rowHeight = height / 12;
      this.$refs.layoutItem && this.$refs.layoutItem.forEach((item: any) => {
        item.resize && item.resize();
      });
    });
  }

  public mounted() {
    this.resize();
  }
}
</script>

<style lang="scss" scoped>
.panel {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 12px;
  color: #fff;
  .vue-grid-layout {
    width: 100%;
    height: 100%;
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    // background: linear-gradient(#091b4d, #0f0f23);
    background: RGBA(29, 22, 52, 0.5);
    border-top: 2px solid #1f3564;
    border-bottom: 2px solid #1f3564;
    filter: blur(2px);
    opacity: 0.4;
    z-index: -1;
  }
}
</style>
