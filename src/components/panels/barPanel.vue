<template>
  <panel :layout="layout"></panel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import barData from '@/mock/barData';
import { schema } from '@/@types/interface.d';

@Component
export default class BarPanel extends Vue {
  public layout: any = []

  public chartData = barData.data;

  public mainAxis = 'yAxis';

  public title = {
    text: '世界人口总量',
    textStyle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'lighter',
    },
  }

  public schema: schema[] = [
    {
      // label: '日期',
      prop: 'date',
      isMainAxis: true,
    },
    {
      label: '生命值',
      prop: 'a',
      hasShadow: true,
      options: {
        itemStyle: {
          color: this.$utils.echartsUtils.linearGradientColor(0, 0, 1, 0, [{
            offset: 0,
            color: '#2b82cf',
          }, {
            offset: 1,
            color: '#01fdcc',
          }]),
        },
      },
    },
    // {
    //   label: '生命值',
    //   prop: 'b',
    //   options: {
    //     type: 'line',
    //     yAxisIndex: 1,
    //   },
    // },
  ];

  public yAxis = [{
    type: 'value',
    // 分割线
    splitLine: { show: false },
  }, {
    type: 'value',
    // 分割线
    splitLine: { show: false },
  }];

  public mounted() {
    const layout = [
      {
        i: '0',
        x: 0,
        y: 0,
        w: 24,
        h: 11,
        static: false,
        component: 'scBar',
        prop: {
          data: this.chartData,
          schema: this.schema,
          title: this.title,
          mainAxis: this.mainAxis,
          options: {
            // yAxis: this.yAxis,
          },
        },
      },
    ];
    this.layout = layout;
  }
}
</script>
