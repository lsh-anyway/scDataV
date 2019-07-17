import Mock from 'mockjs';
import api from '@/api';
import data from '@/mock/data';
import utils from '@/utils';

Mock.mock(api.chart.show, (options: any) => {
  const body = JSON.parse(options.body);
  const { id } = body;
  const componentMap: any = {
    0: 'scTableBar',
    1: 'scLines',
    2: 'scBar',
    3: 'scLine',
    4: 'scPie',
    5: 'scRadar',
  };
  return {
    data: {
      id,
      component: componentMap[id],
      prop: {
        data: data.data,
        schema: [
          {
            label: '日期',
            prop: 'date',
            isMainAxis: true,
          },
          {
            label: '生命值',
            prop: 'a',
            hasShadow: true,
            options: {
              itemStyle: id === 2 && {
                color: utils.echartsUtils.linearGradientColor(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#2b82cf',
                  },
                  {
                    offset: 1,
                    color: '#01fdcc',
                  },
                ]),
              },
            },
          },
        ],
        mainAxis: id === 2 ? 'yAxis' : 'xAxis',
      },
    },
  };
});

Mock.mock(api.chart.index, (options: any) => ({
  data: [
    {
      name: 'tableBar',
      id: '0',
    },
    {
      name: '迁徙图',
      id: '1',
    },
    {
      name: '柱状图',
      id: '2',
    },
    {
      name: '折线图',
      id: '3',
    },
    {
      name: '饼图',
      id: '4',
    },
    {
      name: '雷达图',
      id: '5',
    },
  ],
}));

Mock.mock(api.decorations.index, (options: any) => ({
  data: [
    {
      name: 'box',
      component: 'box',
    },
    {
      name: '标题装饰',
      component: 'titleDecoration',
    },
  ],
}));
