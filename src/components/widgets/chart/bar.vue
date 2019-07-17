<template>
  <div ref="chart"
       class="chart"></div>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import init from './mixin/init';

@Component
export default class scBar extends Mixins(init) {
  @Prop({
    default: () => 'xAxis',
  })
  private mainAxis!: string

  private secondaryAxis: string

  constructor() {
    super();
    const { mainAxis } = this;
    const secondaryAxis = mainAxis === 'xAxis' ? 'yAxis' : 'xAxis';
    this.secondaryAxis = secondaryAxis;
    this.chartOptions = {
      color: ['#6cf5f2', '#2B80CF', '#327EC8', '#486CB6', '#FFFFFF', '#24FEB4', '#23539B', '#3C9DE4'],
      grid: {
        top: '20px',
        left: '20px',
        right: '20px',
        bottom: '20px',
        containLabel: true,
      },
      textStyle: {
        color: '#1397FF',
        fontSize: 12,
        fontWeight: 'lighter',
      },
      [secondaryAxis]: {
        type: 'value',
        // 分割线
        splitLine: { show: false },
      },
      [mainAxis]: {
        type: 'category',
        // 轴线
        axisLine: { show: false },
        // 刻度
        axisTick: { show: false },
      },
      ...this.options,
    };

    this.convertData = () => {
      const mainAxisData: any[] = [];
      const series: any[] = [];
      let max: any = 0;
      this.schema.forEach((schema) => {
        if (schema.isMainAxis) {
          this.data.forEach((data: any) => {
            mainAxisData.push(data[schema.prop]);
          });
          // this.chartOptions[this.mainAxis].name = schema.label;
        } else {
          const serie: any = {
            type: 'bar',
            barWidth: 10,
            name: schema.label,
            z: 10,
            data: [],
            ...schema.options,
          };
          const formatter = schema.formatter || ((val: any) => val);
          const hasShadow = schema.hasShadow || false;
          this.data.forEach((data: any) => {
            serie.data.push(formatter(data[schema.prop]));
            max = max > data[schema.prop] ? max : data[schema.prop];
          });
          if (hasShadow) {
            const shadowSerie = {
              type: 'bar',
              silent: true,
              barWidth: 10,
              barGap: '-100%', // Make series be overlap
              data: new Array(this.data.length).fill(max),
              itemStyle: {
                color: '#0c2f3f',
              },
            };
            series.push(shadowSerie);
          }
          series.push(serie);
        }
      });

      this.chartOptions.series = series;
      this.chartOptions[this.mainAxis].data = mainAxisData;
      this.chartOptions[this.secondaryAxis].max = max;
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
