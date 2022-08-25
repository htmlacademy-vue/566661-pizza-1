<template>
  <div class="layout__sidebar sidebar">
    <router-link to="/" class="logo layout__logo">
      <img
        src="@/assets/img/logo.svg"
        alt="V!U!E! Pizza logo"
        width="90"
        height="40"
      />
    </router-link>
    <template v-for="sidebar in sidebars">
      <router-link
        :key="sidebar.to"
        class="layout__link"
        :class="{ ['layout__link--active']: getActiveLink === sidebar.to }"
        :to="sidebar.to"
      >
        {{ sidebar.text }}
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "AppLayoutSidebar",
  data: () => ({
    sidebars: [
      {
        to: "/orders",
        text: "История заказов",
      },
      {
        to: "/my-profile",
        text: "Мои данные",
      },
    ],
  }),
  computed: {
    getActiveLink() {
      return this.$route.path;
    },
  },
};
</script>
