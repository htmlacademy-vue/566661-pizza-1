<template>
  <main class="layout">
    <div class="layout__content">
      <div class="layout__title">
        <h1 class="title title--big">Мои данные</h1>
      </div>

      <AppProfileUser :user="user" />

      <AppProfileAdressCurrent />

      <AppProfileAdressForm />

      <div class="layout__button">
        <button type="button" class="button button--border">
          Добавить новый адрес
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import AppProfileUser from "./AppProfileUser";
import user from "@/static/user.json";
import AppProfileAdressCurrent from "./AppProfileAdressCurrent";
import AppProfileAdressForm from "./AppProfileAddressForm.vue";

export default {
  name: "AppProfile",
  data() {
    return {
      user,
    };
  },
  components: {
    AppProfileAdressForm,
    AppProfileAdressCurrent,
    AppProfileUser,
  },
};
</script>
