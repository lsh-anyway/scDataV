import Vue from 'vue';
import Bar from './chart/bar.vue';
import Line from './chart/line.vue';
import Lines from './chart/lines.vue';
import Pie from './chart/pie.vue';
import tableBar from './table-bar/table-bar.vue';
import Card from './card.vue';

const components = [
  {
    name: 'scBar',
    component: Bar,
  },
  {
    name: 'scLine',
    component: Line,
  },
  {
    name: 'scLines',
    component: Lines,
  },
  {
    name: 'scPie',
    component: Pie,
  },
  {
    name: 'scTableBar',
    component: tableBar,
  },
  {
    name: 'scCard',
    component: Card,
  },
];

components.forEach((component) => {
  Vue.component(component.name, component.component);
});
