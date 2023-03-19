import { SET_ENTITY } from "@/store/mutations-type";

export default {
  namespaced: true,
  state: {
    user: null,
    isAuthenticated: false,
  },

  getters: {
    getUserAttribute: (state) => (attr) => state.user ? state.user[attr] : "",
  },

  actions: {
    async login({ dispatch }, params) {
      const data = await this.$api.auth.login(params);
      this.$jwt.saveToken(data.token);
      this.$api.auth.setAuthHeader();
      dispatch("getMe");
    },
    async getMe({ commit, dispatch }) {
      try {
        const data = await this.$api.auth.getMe();
        commit(
          SET_ENTITY,
          { module: "Auth", entity: "isAuthenticated", value: true },
          { root: true }
        );
        commit(
          SET_ENTITY,
          {
            module: "Auth",
            entity: "user",
            value: data,
          },
          { root: true }
        );
      } catch {
        dispatch("logout", false);
      }
    },
    async logout({ commit }, sendRequest = true) {
      if (sendRequest) await this.$api.auth.logout();

      this.$jwt.destroyToken();
      this.$api.auth.setAuthHeader();
      commit(
        SET_ENTITY,
        {
          module: "Auth",
          entity: "user",
          value: null,
        },
        { root: true }
      );
      commit(
        SET_ENTITY,
        { module: "Auth", entity: "isAuthenticated", value: false },
        { root: true }
      );
    },
  },
};
