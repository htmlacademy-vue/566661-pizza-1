import Vue from "vue";
import JwtService from "@/services/jwt.service";
import { createResources } from "@/common/helpers";

const plugins = {
  install(Vue) {
    Vue.mixin({
      computed: {
        $api() {
          return createResources();
        },
        $jwt: () => JwtService,
      },
    });
  },
};

Vue.use(plugins);
