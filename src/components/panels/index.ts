import Vue from 'vue';
import linesPanel from './linesPanel.vue';
import linePanel from './linePanel.vue';
import barPanel from './barPanel.vue';
import piePanel from './piePanel.vue';
import tableBarPanel from './tableBarPanel.vue';

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
  {
    name: 'piePanel',
    component: piePanel,
  },
  {
    name: 'tableBarPanel',
    component: tableBarPanel,
  },
];

components.forEach((component) => {
  Vue.component(component.name, component.component);
});
