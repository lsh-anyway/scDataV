<template>
  <div ref="chart"
       class="chart"></div>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import init from './mixin/init';

@Component
export default class scLine extends Mixins(init) {
  @Prop({
    default: () => 'xAxis',
  })
  private mainAxis!: string

  constructor() {
    super();
    const { mainAxis } = this;
    const secondaryAxis = mainAxis === 'xAxis' ? 'yAxis' : 'xAxis';
    this.options = {
      title: {
        text: '世界人口总量',
        textStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 'lighter',
        },
      },
      color: ['#6cf5f2', '#2B80CF', '#327EC8', '#486CB6', '#FFFFFF', '#24FEB4', '#23539B', '#3C9DE4'],
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
      [mainAxis]: {
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
      [secondaryAxis]: {
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
            offset: 0, color: 'rgba(108, 245, 242, 1)',
          }, {
            offset: 1, color: 'rgba(108, 245, 242, 0)',
          }]),
        },
      }],
    };

    this.convertData = () => {
      const mainAxisData: any[] = [];
      const series: any[] = [];
      this.schema.forEach((schema) => {
        if (schema.isMainAxis) {
          this.data.forEach((data: any) => {
            mainAxisData.push(data[schema.prop]);
          });
        } else {
          const serie: any = {
            type: 'line',
            name: schema.label,
            z: 10,
            data: [],
            areaStyle: {
              color: this.$utils.echartsUtils.linearGradientColor(0, 0, 0, 1, [{
                offset: 0, color: this.options.color[series.length],
              }, {
                offset: 1, color: 'transparent',
              }]),
            },
          };
          const formatter = schema.formatter || ((val: any) => val);
          const hasShadow = schema.hasShadow || false;
          this.data.forEach((data: any) => {
            serie.data.push(formatter(data[schema.prop]));
          });
          series.push(serie);
        }
      });

      this.options.series = series;
      this.options[this.mainAxis].data = mainAxisData;
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
