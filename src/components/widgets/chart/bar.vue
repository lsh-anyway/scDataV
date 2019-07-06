<template>
  <div ref="chart"
       class="chart"></div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import init from './mixin/init';

@Component
export default class scBar extends Mixins(init) {
  constructor() {
    super();
    const yAxisData = [];
    for (let i = 9; i < 16; i++) {
      yAxisData.push(`5月${i}日`);
    }

    this.options = {
      title: {
        text: '世界人口总量',
        textStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 'lighter',
        },
      },
      grid: {
        top: '40px',
        left: '0%',
        right: '3%',
        bottom: '0%',
        containLabel: true,
      },
      textStyle: {
        color: '#1397FF',
        fontSize: 12,
        fontWeight: 'lighter',
      },
      xAxis: {
        type: 'value',
        // 分割线
        splitLine: { show: false },
      },
      yAxis: {
        type: 'category',
        data: yAxisData,
        // 轴线
        axisLine: { show: false },
        // 刻度
        axisTick: { show: false },
      },
      series: [
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#0c2f3f',
            },
          },
          silent: true,
          barWidth: 10,
          barGap: '-100%', // Make series be overlap
          data: [60, 60, 60, 60, 60, 60, 60],
        },
        {
          type: 'bar',
          barWidth: 10,
          z: 10,
          data: [45, 60, 13, 25, 13, 25, 25],
          itemStyle: {
            normal: {
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
      ],
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
