<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link to="/cart" v-if="isAuthenticated">{{ total }} ₽</router-link>
    </div>
    <div class="header__user">
      <router-link v-if="!isAuthenticated" to="/login" class="header__login"
        ><span>Войти</span></router-link
      >
      <template v-else>
        <router-link :to="{ name: 'Profile' }">
          <picture>
            <img
              :src="getUserAttribute('avatar')"
              :srcset="getUserAttribute('avatar')"
              :alt="getUserAttribute('name')"
              width="32"
              height="32"
            />
          </picture>
          <span>{{ getUserAttribute("name") }}</span>
        </router-link>
        <button class="header__logout" @click="$logout">
          <span>Выйти</span>
        </button>
      </template>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { logout } from "@/common/mixins";

export default {
  name: "AppLayoutHeader",
  computed: {
    ...mapGetters("Cart", ["total"]),
    ...mapGetters("Auth", ["getUserAttribute"]),
    ...mapState("Auth", ["isAuthenticated"]),
  },
  mixins: [logout],
};
</script>

<style scoped></style>
