import Vue from 'vue';
import panel from './panel.vue';
import dashboard from './dashboard.vue';
import './panels/index';
import './widgets/index';
import './decorations/index';

const components = [
  {
    name: 'dashboard',
    component: dashboard,
  },
  {
    name: 'panel',
    component: panel,
  },
];

components.forEach((component) => {
  Vue.component(component.name, component.component);
});
