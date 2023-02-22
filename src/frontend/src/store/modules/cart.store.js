import jsonOrders from "@/static/misc.json";
import {
  ADD_ORDER,
  DELETE_ENTITY,
  UPDATE_ENTITY,
} from "@/store/mutations-type";

const namespace = {
  module: "Cart",
};
export default {
  namespaced: true,
  state: {
    additional: [],
    pizza: [],
  },
  getters: {
    total({ pizza, additional }) {
      let sum = 0;
      if (pizza.length) {
        sum += pizza.reduce((a, b) => {
          return a + b.price * b.count;
        }, 0);
      }
      if (additional.length) {
        sum += additional.reduce((a, b) => {
          return a + b.price * b.count;
        }, 0);
      }
      return sum;
    },
  },
  mutations: {
    [ADD_ORDER](state, { entity, value }) {
      state[entity].push(value);
    },
  },
  actions: {
    query({ commit, state }) {
      if (state.additional.length === 0) {
        const orders = jsonOrders;
        orders.forEach((el, id) => {
          el.count = 1;
          el.id = id;
          commit(ADD_ORDER, {
            entity: "additional",
            value: el,
          });
        });
      }
    },
    post({ commit }, { entity, value }) {
      commit(ADD_ORDER, {
        entity,
        value,
      });
    },
    put({ commit }, { entity, value }) {
      commit(
        UPDATE_ENTITY,
        {
          ...namespace,
          entity,
          value: value,
        },
        { root: true }
      );
    },
    delete({ commit }, { entity, value }) {
      commit(
        DELETE_ENTITY,
        {
          ...namespace,
          entity,
          value: value,
        },
        { root: true }
      );
    },
  },
};
