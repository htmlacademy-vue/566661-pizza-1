import jsonPizza from "@/static/pizza.json";
import {
  normalizeDough,
  normalizeIngredients,
  normalizeSauces,
  normalizeSizes,
} from "@/common/helpers";
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SET_ENTITY,
} from "@/store/mutations-type";

const module = "Builder";

export default {
  namespaced: true,
  state: {
    doughList: [],
    sizesList: [],
    sauceList: [],
    ingredientsList: [],
  },
  mutations: {
    [ADD_INGREDIENT](state, value) {
      const idx = state.ingredientsList.findIndex((el) => el.value === value);
      if (state.ingredientsList[idx].count < 4) {
        state.ingredientsList[idx].count++;
      }
    },
    [DELETE_INGREDIENT](state, value) {
      const idx = state.ingredientsList.findIndex((el) => el.value === value);
      if (state.ingredientsList[idx].count > 0)
        state.ingredientsList[idx].count--;
    },
  },
  actions: {
    query({ commit }) {
      const dough = normalizeDough(jsonPizza.dough);
      const sizes = normalizeSizes(jsonPizza.sizes);
      const sauces = normalizeSauces(jsonPizza.sauces);
      const ingredients = normalizeIngredients(jsonPizza.ingredients);

      commit(
        SET_ENTITY,
        {
          module,
          entity: "doughList",
          value: dough,
        },
        { root: true }
      );
      commit(
        SET_ENTITY,
        {
          module,
          entity: "sizesList",
          value: sizes,
        },
        { root: true }
      );
      commit(
        SET_ENTITY,
        {
          module,
          entity: "sauceList",
          value: sauces,
        },
        { root: true }
      );
      commit(
        SET_ENTITY,
        {
          module,
          entity: "ingredientsList",
          value: ingredients,
        },
        { root: true }
      );
      commit(
        SET_ENTITY,
        {
          module: "Orders",
          entity: "dough",
          value: dough[0],
        },
        { root: true }
      );
      commit(
        SET_ENTITY,
        {
          module: "Orders",
          entity: "size",
          value: sizes[1],
        },
        { root: true }
      );
      commit(
        SET_ENTITY,
        {
          module: "Orders",
          entity: "sauce",
          value: sauces[0],
        },
        { root: true }
      );
    },
  },
};
