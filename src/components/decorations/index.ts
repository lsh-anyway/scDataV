import Vue from 'vue';
import titleDecorations from './titleDecorations.vue';

const components = [
  {
    name: 'titleDecorations',
    component: titleDecorations,
  },
];

components.forEach((component) => {
  Vue.component(component.name, component.component);
});
