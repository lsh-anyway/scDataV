import Vue from 'vue';
import titleDecoration from './titleDecoration.vue';
import box from './box.vue';

const components = [
  {
    name: 'titleDecoration',
    component: titleDecoration,
  },
  {
    name: 'box',
    component: box,
  },
];

components.forEach((component) => {
  Vue.component(component.name, component.component);
});
