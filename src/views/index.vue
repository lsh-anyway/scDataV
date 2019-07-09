<template>
  <div class="home"
       @click="fullscreen">
    <dashboard ref="dashboard"
               :layout="layout"
               :edit="false"></dashboard>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import screenfull, { Screenfull } from 'screenfull';
import { LayoutItem } from '../@types/interface.d';

const layout = [
  {
    x: 4,
    y: 0,
    w: 16,
    h: 2,
    i: '0',
    static: true,
    title: '罗湖区新媒体宣传综合管理平台',
    style: {
      width: '100%',
      height: '100%',
      color: '#fff',
      fontSize: '36px',
      textAlign: 'center',
      lineHeight: 2,
    },
    // component: 'dashboardTitle',
    // prop: {
    //   title: '罗湖区新媒体宣传综合管理平台',
    // },
  },
  {
    x: 4,
    y: 1,
    w: 16,
    h: 3,
    i: '0',
    static: true,
    component: 'titleDecorations',
  },
  {
    x: 0.5,
    y: 3,
    w: 3,
    h: 18,
    i: '1',
    static: false,
    component: 'tableBarPanel',
  },
  {
    x: 3.5,
    y: 3,
    w: 9.5,
    h: 18,
    i: '1',
    static: true,
    component: 'linesPanel',
  },
  {
    x: 13,
    y: 3,
    w: 3.5,
    h: 9,
    i: '1',
    static: true,
    component: 'barPanel',
    prop: {
      title: '公众号粉丝数量排名',
    },
  },
  {
    x: 16.5,
    y: 3,
    w: 3.5,
    h: 9,
    i: '1',
    static: true,
    component: 'linePanel',
  },
  {
    x: 20,
    y: 3,
    w: 3.5,
    h: 9,
    i: '1',
    static: true,
    component: 'piePanel',
  },
  {
    x: 13,
    y: 12,
    w: 3.5,
    h: 9,
    i: '1',
    static: true,
    component: 'panel',
  },
  {
    x: 16.5,
    y: 12,
    w: 3.5,
    h: 9,
    i: '1',
    static: true,
    component: 'panel',
  },
  {
    x: 20,
    y: 12,
    w: 3.5,
    h: 9,
    i: '1',
    static: true,
    component: 'panel',
  },
];

@Component
export default class Home extends Vue {
  private layout!: LayoutItem[]

  constructor() {
    super();
    this.layout = layout;
  }

  public fullscreen() {
    if ((screenfull as Screenfull).enabled) {
      (screenfull as Screenfull).toggle();
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
