<template>
  <div class="home" @click="fullscreen">
    <dashboard :layout="layout" :edit="true"></dashboard>
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
    h: 5,
    i: '0',
    static: true,
    component: 'dashboardTitle',
    prop: {
      title: '罗湖区新媒体宣传综合管理平台',
    },
  },
  {
    x: 0.5,
    y: 3,
    w: 3,
    h: 18,
    i: '1',
    static: false,
    component: 'tableBar',
    prop: {
      title: '文章阅读量排名',
      data: [{
        name: '测试很长很长很长很长很长很长的标题',
        value: 100,
      }, {
        name: '标题',
        value: 95,
      }, {
        name: '标题',
        value: 80,
      }, {
        name: '标题',
        value: 65,
      }, {
        name: '标题',
        value: 55,
      }, {
        name: '标题',
        value: 50,
      }, {
        name: '标题',
        value: 45,
      }, {
        name: '标题',
        value: 40,
      }, {
        name: '标题',
        value: 35,
      }, {
        name: '标题',
        value: 30,
      }, {
        name: '标题',
        value: 25,
      }, {
        name: '标题',
        value: 10,
      }],
    },
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
    component: 'panel',
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
