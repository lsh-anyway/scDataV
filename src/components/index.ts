import Vue from 'vue';
import panel from './panel.vue';
import chart from './chart.vue';
import dashboard from './dashboard.vue';
import dashboard2 from './dashboard2.vue';
import './panels/index';
import './widgets/index';
import './decorations/index';

const components = [
  {
    name: 'dashboard',
    component: dashboard,
  },
  {
    name: 'dashboard2',
    component: dashboard2,
  },
  {
    name: 'panel',
    component: panel,
  },
  {
    name: 'chart',
    component: chart,
  },
];

components.forEach((component) => {
  Vue.component(component.name, component.component);
});
