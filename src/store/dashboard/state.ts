import { LayoutItem } from '@/@types/interface.d';

const backgroundImage = require('@/assets/bg.png');

export interface State {
  edit: {
    background: string;
    panel: string;
    decorationsLayout: LayoutItem[];
    chartLayout: LayoutItem[];
  };
}

const state: State = {
  edit: {
    // background: backgroundImage,
    background: '',
    panel: 'chart',
    decorationsLayout: [
      {
        x: 10,
        y: 2,
        w: 29,
        h: 4,
        i: '0',
        component: 'titleDecoration',
      },
      {
        x: 1,
        y: 6,
        w: 6,
        h: 36,
        i: '1',
        component: 'box',
      },
      {
        x: 7,
        y: 6,
        w: 19,
        h: 36,
        i: '2',
        component: 'box',
      },
      {
        x: 26,
        y: 6,
        w: 7,
        h: 18,
        i: '3',
        component: 'box',
      },
      {
        x: 33,
        y: 6,
        w: 7,
        h: 18,
        i: '4',
        component: 'box',
      },
      {
        x: 40,
        y: 6,
        w: 7,
        h: 18,
        i: '5',
        component: 'box',
      },
      {
        x: 26,
        y: 24,
        w: 7,
        h: 18,
        i: '6',
        component: 'box',
      },
      {
        x: 33,
        y: 24,
        w: 7,
        h: 18,
        i: '7',
        component: 'box',
      },
      {
        x: 40,
        y: 24,
        w: 7,
        h: 18,
        i: '8',
        component: 'box',
      },
    ],
    chartLayout: [
      {
        x: 17,
        y: 0,
        w: 15,
        h: 4,
        i: '0',
        title: '罗湖区新媒体宣传综合管理平台',
        style: {
          color: '#fff',
          fontSize: '36px',
          lineHeight: 2,
        },
      },
      {
        x: 17,
        y: 5,
        w: 15,
        h: 15,
        i: '1',
        component: 'chart',
        prop: {
          id: 2,
        },
      },
    ],
  },
};

export default state;
