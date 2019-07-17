import { Module } from 'vuex';
import state, { State } from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

const module: Module<State, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default module;
