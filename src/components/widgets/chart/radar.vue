<template>
  <div ref="chart"
       class="chart"></div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import init from './mixin/init';

@Component
export default class scRadar extends Mixins(init) {
  constructor() {
    super();
    this.chartOptions = {
      textStyle: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'lighter',
      },
      radar: {
        shape: 'circle',
        splitNumber: 5,
        radius: '55%',
        // nameGap: 5,
        center: ['50%', '50%'],
        name: {
          textStyle: {
            color: '#1397FF',
            fontSize: 12,
            fontWeight: 'lighter',
          },
        },
        splitLine: {
          lineStyle: {
            color: [
              'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
              'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
              'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)',
            ].reverse(),
          },
        },
        indicator: [
          { name: '销售', max: 6500 },
          { name: '管理', max: 16000 },
          { name: '信息技术', max: 30000 },
          { name: '客服', max: 38000 },
          { name: '研发', max: 52000 },
          { name: '市场', max: 25000 },
        ],
        splitArea: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(238, 197, 102, 0.5)',
          },
        },
      },
      color: ['#486CB6', '#FFFFFF', '#24FEB4', '#23539B', '#3C9DE4'],
      series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '预算分配（Allocated Budget）',
            symbol: 'none',
            lineStyle: {
              normal: {
                width: 1,
                opacity: 0.5,
              },
            },
            itemStyle: {
              normal: {
                color: '#486CB6',
              },
            },
            areaStyle: {
              normal: {
                opacity: 0.1,
              },
            },
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '实际开销（Actual Spending）',
            lineStyle: {
              normal: {
                width: 1,
                opacity: 0.5,
              },
            },
            itemStyle: {
              normal: {
                color: '#24FEB4',
              },
            },
            areaStyle: {
              normal: {
                opacity: 0.05,
              },
            },
          },
        ],
      }],
      ...this.options,
    };
    // this.convertData = () => {
    //   const serie: any = {
    //     name: '访问来源',
    //     type: 'pie',
    //     center: ['50%', '60%'],
    //     radius: ['60%', '70%'],
    //     hoverAnimation: true,
    //     hoverOffset: 5,
    //     avoidLabelOverlap: false,
    //     label: {
    //       normal: {
    //         show: false,
    //         position: 'center',
    //         formatter: '{d}%\n\n{b}',
    //         textStyle: {
    //           fontSize: '16',
    //           fontWeight: 'normal',
    //         },
    //       },
    //       emphasis: {
    //         show: true,
    //       },
    //     },
    //     labelLine: {
    //       normal: {
    //         show: false,
    //       },
    //     },
    //     data: [],
    //   };
    //   this.schema.forEach((schema) => {
    //     const formatter = schema.formatter || ((val: any) => val);
    //     serie.data.push({
    //       value: formatter(this.data[schema.prop]),
    //       name: schema.label,
    //       ...schema.options,
    //     });
    //   });

    //   this.chartOptions.series = [serie];
    // };
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
