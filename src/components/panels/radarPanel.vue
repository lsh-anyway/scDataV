<template>
  <panel :layout="layout"></panel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LayoutItem } from '@/@types/interface.d';
import pieData from '@/mock/pieData';

@Component
export default class PiePanel extends Vue {
  public layout: LayoutItem[] = []

  public chartData = pieData;

  public title = {
    text: '世界人口总量',
    textStyle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'lighter',
    },
  }

  public schema = [{
    label: '生命值',
    prop: 'a',
    formatter: '',
  }, {
    label: '魔法值',
    prop: 'b',
    formatter: '',
  }, {
    label: '魅力值',
    prop: 'c',
    formatter: '',
  }]


  public mounted() {
    const layout = [
      {
        i: '0',
        x: 0,
        y: 0,
        w: 24,
        h: 8,
        static: false,
        component: 'scRadar',
        prop: {
          data: this.chartData,
          schema: this.schema,
          title: this.title,
        },
      },
      {
        i: '0',
        x: 0,
        y: 7.8,
        w: 24,
        h: 3,
        static: false,
        component: 'scCard',
        prop: {
          title: '新增关注最快',
          prefix: '罗湖城事',
          content: '+',
          suffix: '20.60%',
        },
      },
    ];
    this.layout = layout;
  }
}
</script>
