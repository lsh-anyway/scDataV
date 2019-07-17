import Vue from 'vue';
import { AxiosInstance } from 'axios';
import utils from '../utils/index';
import api from '../api/index';

declare module 'vue/types/vue' {
  interface Vue {
    $utils: typeof utils;
    $api: typeof api;
    $http: AxiosInstance
  }
}
