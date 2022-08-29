<template>
  <div class="sign-form">
    <router-link to="/" class="close close--white">
      <span class="visually-hidden">Закрыть форму авторизации</span>
    </router-link>
    <div class="sign-form__title">
      <h1 class="title title--small">Авторизуйтесь на сайте</h1>
    </div>
    <AppLoginForm />
  </div>
</template>

<script>
import AppLoginForm from "./AppLoginForm";
export default {
  name: "AppLogin",
  components: {
    AppLoginForm,
  },
};
</script>

<style scoped></style>
