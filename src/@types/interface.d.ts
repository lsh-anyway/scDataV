export interface LayoutItem {
  x: number;
  y: number;
  w: number;
  h: number;
  static?: boolean;
  component?: string;
  [key: string]: any;
}

export interface schema {
  label?: string;
  prop: string;
  formatter?: (val: any) => string;
  isMainAxis?: boolean;
  options?: {
    itemStyle?: {
      color?: any;
    };
    areaStyle?: {
      color?: any;
      opacity?: number;
    };
    xAxisIndex?: number;
    yAxisIndex?: number;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface axisSchema {
  type: 'value' | 'category';
  name?: string;
  // 分割线
  splitLine?: {
    show?: boolean;
    onZero?: boolean;
    lineStyle?: {
      color?: any;
      width?: number;
      type?: 'solid' | 'dashed' | 'dotted';
    };
  };
  // 轴线
  axisLine?: {
    show?: boolean;
    lineStyle?: {
      color?: any;
      width?: number;
      type?: 'solid' | 'dashed' | 'dotted';
    };
  };
  // 刻度
  axisTick?: {
    show?: boolean;
    lineStyle?: {
      color?: any;
      width?: number;
      type?: 'solid' | 'dashed' | 'dotted';
    };
  };
  [key: string]: any;
}
