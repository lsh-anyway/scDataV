import {
  Vue, Component, Prop, Watch,
} from 'vue-property-decorator';
import echarts from 'echarts';
import { axisSchema, schema } from '@/@types/interface.d';

@Component
export default class ChartMixin extends Vue {
  public $refs!: {
    chart: HTMLDivElement;
  };

  @Prop()
  // 图表数据
  public data!: any;

  @Prop()
  // 图表配置
  public options!: any;

  @Prop()
  public schema!: schema[];

  @Prop()
  // 图表标题
  public title!: {
    text: string;
    textStyle?: {
      color?: string;
      fontSize?: number;
      fontWeight?: string;
    };
  };

  public chart!: echarts.ECharts;

  public chartOptions!: any;

  public init: any;

  public convertData: any;

  @Watch('data')
  @Watch('schema')
  public onDataChange() {
    this.convertData && this.convertData();
  }

  public mounted() {
    setTimeout(() => {
      this.convertData && this.convertData();
      this.chart = echarts.init(this.$refs.chart);
      this.chart.setOption(this.chartOptions);
      this.init && this.init();
    }, 100);
  }

  public resize() {
    this.chart && this.chart.resize();
  }
}
