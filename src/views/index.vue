<template>
  <div class="home"
       @click="fullscreen">
    <dashboard ref="dashboard"
               :layout="layout"
               :resize="true"
               :background="background"></dashboard>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import screenfull, { Screenfull } from 'screenfull';
import { LayoutItem } from '@/@types/interface.d';
import barData from '@/mock/barData';

const backgroundImage = require('@/assets/bg.png');

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
    component: 'titleDecoration',
  },
  {
    x: 0.5,
    y: 4,
    w: 3,
    h: 18,
    i: '1',
    static: false,
    component: 'tableBarPanel',
  },
  {
    x: 3.5,
    y: 4,
    w: 9.5,
    h: 18,
    i: '1',
    static: true,
    component: 'linesPanel',
  },
  {
    x: 13,
    y: 4,
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
    y: 4,
    w: 3.5,
    h: 9,
    i: '1',
    static: true,
    component: 'linePanel',
  },
  {
    x: 20,
    y: 4,
    w: 3.5,
    h: 9,
    i: '1',
    static: true,
    component: 'piePanel',
  },
  {
    x: 13,
    y: 13,
    w: 3.5,
    h: 9,
    i: '1',
    static: true,
    component: 'radarPanel',
  },
  {
    x: 16.5,
    y: 13,
    w: 3.5,
    h: 9,
    i: '1',
    static: true,
    component: 'panel',
  },
  {
    x: 20,
    y: 13,
    w: 3.5,
    h: 9,
    i: '1',
    static: true,
    component: 'panel',
  },
  {
    x: 3.5,
    y: 22.5,
    w: 9.5,
    h: 4,
    i: '1',
    static: true,
    component: 'scLine',
    prop: {
      data: barData.data,
      schema: [
        {
          label: '日期',
          prop: 'date',
          formatter: '',
          isMainAxis: true,
        },
        {
          label: '生命值',
          prop: 'a',
          formatter: '',
          isMainAxis: false,
          hasShadow: true,
        },
      ],
    },
  },
  {
    x: 13,
    y: 23,
    w: 3.5,
    h: 2.5,
    i: '1',
    static: true,
    component: 'scSimpleTable',
    prop: {
      data: [
        {
          label: '接入新媒体账号数量',
          value: '24个',
        },
        {
          label: '累计粉丝总量',
          value: '1435万人',
        },
      ],
    },
  },
  {
    x: 16.5,
    y: 23,
    w: 3.5,
    h: 2.5,
    i: '1',
    static: true,
    component: 'scSimpleTable',
  },
  {
    x: 20,
    y: 23,
    w: 3.5,
    h: 2.5,
    i: '1',
    static: true,
    component: 'scSimpleTable',
  },
];

@Component
export default class Home extends Vue {
  private layout!: LayoutItem[];

  private background: any;

  constructor() {
    super();
    this.layout = layout;
    this.background = {
      backgroundImage: `url(${backgroundImage})`,
    };
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
