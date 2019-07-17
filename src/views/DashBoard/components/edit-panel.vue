<template>
  <div class="edit-panel"
       ref="editPanel"
       @click="fullscreen">
    <dashboard2 ref="decorations"
                v-if="scale > 0"
                class="decorations"
                :layout.sync="decorationsLayout"
                :edit="true"
                :resize="true"
                :scale="scale"
                :background="backgroundImage"
                :activeIndex="activeDecorations"
                @resize="decorationsEdit"
                @move="decorationsEdit"></dashboard2>
    <dashboard2 ref="chart"
                v-if="scale > 0"
                class="chart"
                :style="chartPointerEvents"
                :layout.sync="chartLayout"
                :edit="true"
                :scale="scale"
                :resize="true"
                :activeIndex="activeChart"
                @resize="chartEdit"
                @move="chartEdit"></dashboard2>
  </div>
</template>


<script lang="ts">
import {
  Vue, Component, Prop, Watch,
} from 'vue-property-decorator';
import screenfull, { Screenfull } from 'screenfull';
import { LayoutItem } from '@/@types/interface.d';

const backgroundImage = require('@/assets/bg.png');

@Component
export default class EditPanel extends Vue {
  $refs: any;

  @Prop()
  public panel!: string;

  @Prop()
  private decorationsLayout!: LayoutItem[];

  @Prop()
  private chartLayout!: LayoutItem[];

  @Prop()
  private background!: any;

  @Prop()
  private editItem!: any;

  private scale!: number;

  private activeChart!: any;

  private activeDecorations!: any;

  constructor() {
    super();
    this.scale = 0;
    this.activeChart = null;
    this.activeDecorations = null;
  }

  @Watch('editItem')
  public getActiveItem(val: any) {
    if (val.type === 'chart') {
      this.activeDecorations = null;
      this.activeChart = val.i;
    } else if (val.type === 'decorations') {
      this.activeChart = null;
      this.activeDecorations = val.i;
    } else {
      this.activeChart = null;
      this.activeDecorations = null;
    }
  }

  public get chartPointerEvents() {
    const pointerEvents = this.panel === 'chart' ? 'auto' : 'none';
    return {
      pointerEvents,
    };
  }

  public get backgroundImage() {
    return {
      backgroundImage: `url(${this.background})`,
    };
  }

  public fullscreen() {
    // if ((screenfull as Screenfull).enabled) {
    //   (screenfull as Screenfull).toggle();
    // }
  }

  public decorationsEdit(data: any) {
    this.$emit('decorationsEdit', data);
  }

  public chartEdit(data: any) {
    this.$emit('chartEdit', data);
  }

  public mounted() {
    const { editPanel } = this.$refs;
    const height = editPanel.clientHeight;
    const width = editPanel.clientWidth;
    this.scale = Math.min(width / 1920, height / 1080);
    editPanel.style.width = `${1920 * this.scale}px`;
    editPanel.style.height = `${1080 * this.scale}px`;
  }
}
</script>


<style lang="scss" scoped>
.edit-panel {
  position: relative;
  height: 100%;
  width: 100%;
  .decorations {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
