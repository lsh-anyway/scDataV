<template>
  <grid-layout :layout="layout"
               :col-num="48"
               :row-height="rowHeight"
               :is-draggable="edit"
               :is-resizable="edit"
               :vertical-compact="false"
               :margin="margin"
               :use-css-transforms="true"
               :autoSize="false"
               :style="layoutStyle"
               @layout-updated="handleLayoutChange">
    <grid-item v-for="item in layout"
               :key="item.i"
               :x="item.x"
               :y="item.y"
               :w="item.w"
               :h="item.h"
               :i="item.i"
               :static="false"
               :class="{active: activeIndex === item.i}"
               @resize="resizeEvent"
               @move="moveEvent"
               @resized="handleResize">
      <component v-if="item.component"
                 class="layout-item"
                 :ref="`layoutItem${item.i}`"
                 :is="item.component"
                 :style="itemStyle"
                 v-bind="item.prop"></component>
      <div v-else
           class="layout-item"
           :style="{...itemStyle,...item.style}">
        {{item.text}}
      </div>
    </grid-item>
  </grid-layout>
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
    [key: string]: any;
  };

  @Prop({
    type: Array,
    default: () => [],
  })
  public layout!: LayoutItem[];

  @Prop({
    type: Object,
    default: () => {},
  })
  public background: any;

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

  @Prop({
    type: Number,
    default: () => 1,
  })
  public scale!: number;

  @Prop()
  public activeIndex!: any;

  public get rowHeight() {
    return this.scale * 10;
  }

  public get margin() {
    return [10 * this.scale, 10 * this.scale];
  }

  public get layoutStyle() {
    return {
      width: `${1920 * this.scale}px`,
      height: `${1080 * this.scale}px`,
      backgroundSize: `${1920 * this.scale}px ${1080 * this.scale}px`,
      ...this.background,
    };
  }

  public get itemStyle() {
    return {
      width: `${100 / this.scale}%`,
      height: `${100 / this.scale}%`,
      transform: `scale(${this.scale})`,
    };
  }

  public handleLayoutChange(newLayout: LayoutItem[]) {
    this.$emit('update:layout', newLayout);
  }

  public handleResize(
    i: string,
    newH: string,
    newW: string,
    newHPx: string,
    newWPx: string,
  ) {
    this.$refs[`layoutItem${i}`]
      && this.$refs[`layoutItem${i}`][0].resize
      && this.$refs[`layoutItem${i}`][0].resize();
  }

  public resizeEvent(i: any) {
    this.$emit('resize', {
      i,
    });
  }

  public moveEvent(i: any) {
    this.$emit('move', {
      i,
    });
  }
}
</script>

<style lang="scss" scoped>
.vue-grid-layout {
  width: 960px;
  height: 540px;
  transform-origin: left top;
  background-size: 960px 540px;
  .layout-item {
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: left top;
  }
  .active{
    box-shadow: 0 0 5px #F56C6C;
  }
}
</style>
