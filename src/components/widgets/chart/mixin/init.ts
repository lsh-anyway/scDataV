import {
  Vue, Component, Prop, Watch,
} from 'vue-property-decorator';
import echarts from 'echarts';

interface schema {
  label: string;
  prop: string;
  formatter?: (val: any) => string;
  isMainAxis?: boolean;
  [key: string]: any;
}

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
  public data!: any;

  @Prop()
  // 图表数据模式
  public schema!: schema[];

  public chart!: echarts.ECharts;
  // public chart!: any;

  // public options!: echarts.EChartOption;
  public options!: any;

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
      this.chart.setOption(this.options);
      this.init && this.init();
    }, 100);
  }
}
