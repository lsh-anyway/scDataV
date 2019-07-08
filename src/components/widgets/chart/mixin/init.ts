import { Vue, Component, Prop } from 'vue-property-decorator';
import echarts from 'echarts';

@Component
export default class ChartMixin extends Vue {
  public $refs!: {
    chart: HTMLDivElement;
  };

  @Prop({
    type: String,
    // required: true,
  })
  // 图表类型
  public type!: string;

  @Prop()
  // 图表数据
  public data!: any[];

  public chart!: echarts.ECharts;
  // public chart!: any;

  // public options!: echarts.EChartOption;
  public options!: any;

  public init: any;

  public mounted() {
    setTimeout(() => {
      this.chart = echarts.init(this.$refs.chart);
      this.chart.setOption(this.options);
      this.init && this.init();
    }, 100);
  }
}
