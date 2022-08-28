<template>
  <div class="layout__sidebar sidebar">
    <router-link to="/" class="logo layout__logo">
      <img
        src="@/assets/img/logo.svg"
        alt="V!U!E! Pizza logo"
        width="90"
        height="40"
        style="opacity: 0"
      />
    </router-link>
    <template v-for="sidebar in sidebars">
      <router-link :key="sidebar.to" class="layout__link" :to="sidebar.to">
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
};
</script>

<style scoped>
.router-link-active {
  background-color: rgba(65, 182, 25, 0.1);
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px;
  display: block;
  padding: 8px 14px;
  transition: 0.3s;
  color: #000000;
}
</style>
