import echarts from 'echarts';

/**
 * offset取值范围0~1之间 0表示在0%处的颜色，1表示100%处颜色
 */
interface color{
  offset: number;
  color: string;
}
/**
 * 生成echarts线性渐变
 * @param right 取值范围0~1 渐变色的起止位置
 * @param bottom 取值范围0~1 渐变色的起止位置
 * @param left 取值范围0~1 渐变色的起止位置
 * @param top 取值范围0~1 渐变色的起止位置
 * @param colors 渐变色值数组
 */
const linearGradientColor = (
  right: number,
  bottom: number,
  left: number,
  top: number,
  colors: color[],
) => ({
  type: 'linear',
  x: right,
  y: bottom,
  x2: left,
  y2: top,
  colorStops: colors,
  globalCoord: false,
});

/**
 * 生成echarts径向渐变
 * @param x 取值范围0~1 圆心x轴位置
 * @param y 取值范围0~1 圆心x轴位置
 * @param r 取值范围0~1 圆的半径
 * @param colors 渐变色值数组
 */
const radialGradientColor = (
  x: number,
  y: number,
  r: number,
  colors: color[],
) => ({
  type: 'radial',
  x,
  y,
  r,
  colorStops: colors,
  globalCoord: false,
});

export default {
  linearGradientColor,
  radialGradientColor,
};
