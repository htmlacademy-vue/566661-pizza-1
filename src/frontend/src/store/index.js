import Vue from "vue";
import Vuex from "vuex";
import modules from "@/store/modules";
import builderStore from "@/store/modules/builder.store";
import ordersStore from "@/store/modules/orders.store";

import {
  DELETE_ENTITY,
  RESET,
  SET_ENTITY,
  UPDATE_ENTITY,
} from "@/store/mutations-type";
import vuexPlugins from "@/plugins/vuexPlugins";

Vue.use(Vuex);

let initialState = {
  Orders: ordersStore.state,
  Builder: builderStore.state,
};

const state = () => ({
  users: [],
});

const getters = {};

const mutations = {
  [SET_ENTITY](state, { module, entity, value }) {
    if (/\//g.test(module)) {
      const tempVariables = module.split("/");
      state[tempVariables[0]][tempVariables[1]][entity] = value;
    } else if (module) {
      state[module][entity] = value;
    } else {
      state[entity] = value;
    }
  },
  [UPDATE_ENTITY](state, { module, entity, value }) {
    const { key, idx, el } = value;
    if (module) {
      state[module][entity][idx][key] = el;
    } else {
      state[entity][idx][key] = el;
    }
  },
  [DELETE_ENTITY](state, { module, entity, value }) {
    if (module) {
      state[module][entity] = state[module][entity].filter(
        (el) => el.id !== value
      );
    } else {
      state[entity] = state[entity].filter((el) => el.id !== value);
    }
  },
  [RESET]() {
    // Object.keys(initialState).forEach((key) => {
    //   console.log(initialState[key]);
    //   Object.assign(state[key], initialState[key]);
    // });
  },
};

const actions = {
  async init({ dispatch }) {
    dispatch("fetchUsers");
    dispatch("Builder/query");
    dispatch("Cart/query");
  },
  async fetchUsers({ commit }) {
    const users = await this.$api.users.query();
    commit(SET_ENTITY, { module: null, entity: "users", value: users });
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [vuexPlugins],
});
