import Vue from "vue";
import Vuex from "vuex";
import AdminStore from "./adminStore"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    admin: AdminStore
  }
});
