import Vue from 'vue';
import utils from '../utils/index';

declare module 'vue/types/vue' {
  interface Vue {
    $utils: typeof utils;
  }
}
