<template>
  <div ref="chart"
       class="chart"></div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import init from './mixin/init';

@Component
export default class scLine extends Mixins(init) {
  constructor() {
    super();
    this.options = {
      title: {
        text: '世界人口总量',
        textStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 'lighter',
        },
      },
      textStyle: {
        color: '#1397FF',
        fontSize: 12,
        fontWeight: 'lighter',
      },
      grid: {
        top: '50px',
        left: '0%',
        right: '3%',
        bottom: '0%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        // 刻度
        axisTick: { show: false },
        // 轴线
        axisLine: {
          // lineStyle: {
          //   color: ['#fff'],
          // },
        },
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: ['#333'],
            type: 'dashed',
          },
        },
        // 刻度
        axisTick: { show: false },
        // 轴线
        axisLine: {
          // lineStyle: {
          //   color: ['#fff'],
          // },
        },
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        itemStyle: {
          color: '#6cf5f2',
        },
        areaStyle: {
          color: this.$utils.echartsUtils.linearGradientColor(0, 0, 0, 1, [{
            offset: 0, color: '#6cf5f2',
          }, {
            offset: 1, color: 'transparent',
          }]),
        },
      }],
    };
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
