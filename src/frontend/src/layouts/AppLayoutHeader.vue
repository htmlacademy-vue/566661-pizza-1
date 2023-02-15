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
      <router-link to="/cart">{{ total }} ₽</router-link>
    </div>
    <div class="header__user">
      <router-link v-if="!isAuth" to="/login" class="header__login"
        ><span>Войти</span></router-link
      >
      <template v-else>
        <a href="user-data.html">
          <picture>
            <source
              type="image/webp"
              srcset="img/users/user5.webp 1x, img/users/user5@2x.webp 2x"
            />
            <img
              src="@/assets/img/users/user5.jpg"
              srcset="@/assets/img/users/user5@2x.jpg"
              alt="Василий Ложкин"
              width="32"
              height="32"
            />
          </picture>
          <span>Василий Ложкин</span>
        </a>
        <a href="#" class="header__logout"><span>Выйти</span></a>
      </template>
    </div>
  </header>
</template>

<script>
import user from "@/static/user.json";
import { mapGetters } from "vuex";

export default {
  name: "AppLayoutHeader",
  data() {
    return {
      isAuth: false,
      user,
    };
  },
  computed: {
    ...mapGetters("Cart", ["total"]),
  },
};
</script>

<style scoped></style>
