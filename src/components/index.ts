import Vue from 'vue';
import title from './title.vue';
import panel from './panel.vue';
import dashboard from './dashboard.vue';
import tableBar from './table-bar/table-bar.vue';
import './panels/index';
import './widgets/index';

const components = [
  {
    name: 'dashboard',
    component: dashboard,
  },
  {
    name: 'tableBar',
    component: tableBar,
  },
  {
    name: 'dashboardTitle',
    component: title,
  },
  {
    name: 'panel',
    component: panel,
  },
];

components.forEach((component) => {
  Vue.component(component.name, component.component);
});
