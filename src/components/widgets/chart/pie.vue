<template>
  <div ref="chart"
       class="chart"></div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import init from './mixin/init';

@Component
export default class scPie extends Mixins(init) {
  private animation: any

  private highlightIndex: number

  private timeout: number

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
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'lighter',
      },
      color: ['#486CB6', '#FFFFFF', '#24FEB4', '#23539B', '#3C9DE4'],
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['60%', '70%'],
          hoverAnimation: true,
          hoverOffset: 5,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: '{d}%\n\n{b}',
              textStyle: {
                fontSize: '16',
                fontWeight: 'normal',
              },
            },
            emphasis: {
              show: true,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' },
          ],
        },
      ],
    };
    this.highlightIndex = 0;
    this.timeout = 3000;
    this.animation = null;
    this.init = () => {
      this.highlightAnimation();
      this.initChartEvent();
    };
  }

  public initChartEvent() {
    this.chart.on('mouseover', (params: any) => {
      this.animation && clearInterval(this.animation);
      this.chart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
      });
      this.chart.dispatchAction({
        type: 'highlight',
        dataIndex: params.dataIndex,
      });
    });
    this.chart.on('mouseout', (params: any) => {
      this.animation && clearInterval(this.animation);
      this.highlightIndex = params.dataIndex;
      this.highlightAnimation();
    });
  }

  public highlightAnimation() {
    const { length } = this.options.series[0].data;
    this.chart.dispatchAction({
      type: 'highlight',
      dataIndex: this.highlightIndex % length,
    });
    this.animation = setInterval(() => {
      this.highlightIndex++;
      this.chart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
      });
      this.chart.dispatchAction({
        type: 'highlight',
        dataIndex: this.highlightIndex % length,
      });
    }, this.timeout);
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
