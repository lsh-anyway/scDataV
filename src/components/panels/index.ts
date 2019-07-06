import Vue from 'vue';
import linesPanel from './linesPanel.vue';
import linePanel from './linePanel.vue';
import barPanel from './barPanel.vue';

const components = [
  {
    name: 'linesPanel',
    component: linesPanel,
  },
  {
    name: 'linePanel',
    component: linePanel,
  },
  {
    name: 'barPanel',
    component: barPanel,
  },
];

components.forEach((component) => {
  Vue.component(component.name, component.component);
});
