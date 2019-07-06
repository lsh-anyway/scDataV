declare module 'vue-grid-layout' {
  import Vue, { VueConstructor } from 'vue';

  export const GridLayout: VueConstructor<Vue>;
  export const GridItem: VueConstructor<Vue>;

  // interface VueGridLayout {
  //   GridLayout: Vue,
  //   GridItem: Vue,
  // }
  // export default VueGridLayout;
}
