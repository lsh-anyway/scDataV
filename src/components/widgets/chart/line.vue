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
    this.chartOptions = {
      title: this.title,
      color: ['#6cf5f2', '#2B80CF', '#327EC8', '#486CB6', '#FFFFFF', '#24FEB4', '#23539B', '#3C9DE4'],
      textStyle: {
        color: '#1397FF',
        fontSize: 12,
        fontWeight: 'lighter',
      },
      grid: {
        top: '20px',
        left: '20px',
        right: '20px',
        bottom: '20px',
        containLabel: true,
      },
      [mainAxis]: {
        type: 'category',
        boundaryGap: false,
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
      ...this.options,
    };

    this.convertData = () => {
      const mainAxisData: any[] = [];
      const series: any[] = [];
      this.schema.forEach((schema) => {
        if (schema.isMainAxis) {
          this.data.forEach((data: any) => {
            mainAxisData.push(data[schema.prop]);
          });
          // this.chartOptions[this.mainAxis].name = schema.label;
        } else {
          const serie: any = {
            type: 'line',
            name: schema.label,
            z: 10,
            data: [],
            areaStyle: {
              color: this.$utils.echartsUtils.linearGradientColor(0, 0, 0, 1, [{
                offset: 0, color: this.chartOptions.color[series.length],
              }, {
                offset: 1, color: 'transparent',
              }]),
            },
            ...schema.options,
          };
          const formatter = schema.formatter || ((val: any) => val);
          this.data.forEach((data: any) => {
            serie.data.push(formatter(data[schema.prop]));
          });
          series.push(serie);
        }
      });

      this.chartOptions.series = series;
      this.chartOptions[this.mainAxis].data = mainAxisData;
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
