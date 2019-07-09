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
      color: ['#0c2f3f', this.$utils.echartsUtils.linearGradientColor(0, 0, 1, 0, [{
        offset: 0,
        color: '#2b82cf',
      }, {
        offset: 1,
        color: '#01fdcc',
      }])],
      grid: {
        top: '40px',
        left: '0%',
        right: '20px',
        bottom: '0%',
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
      series: [
        {
          type: 'bar',
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
        },
      ],
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
            type: 'bar',
            barWidth: 10,
            name: schema.label,
            z: 10,
            data: [],
          };
          const formatter = schema.formatter || ((val: any) => val);
          const hasShadow = schema.hasShadow || false;
          if (hasShadow) {
            let shadowHeight: any = 0;
            this.data.forEach((data: any) => {
              serie.data.push(formatter(data[schema.prop]));
              shadowHeight = shadowHeight > data[schema.prop] ? shadowHeight : data[schema.prop];
            });
            const shadowSerie = {
              type: 'bar',
              silent: true,
              barWidth: 10,
              barGap: '-100%', // Make series be overlap
              data: new Array(this.data.length).fill(shadowHeight),
            };
            series.push(shadowSerie);
          } else {
            this.data.forEach((data: any) => {
              serie.data.push(formatter(data[schema.prop]));
            });
          }
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
