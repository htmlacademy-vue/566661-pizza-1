<template>
  <form @submit.prevent="login" method="post">
    <div class="sign-form__input">
      <label class="input" v-focus>
        <span>E-mail</span>
        <input
          ref="email"
          type="email"
          name="email"
          v-model="email"
          placeholder="example@mail.ru"
        />
      </label>
    </div>

    <div class="sign-form__input">
      <label class="input">
        <span>Пароль</span>
        <input
          v-model="password"
          type="password"
          name="pass"
          placeholder="***********"
        />
      </label>
    </div>
    <button type="submit" class="button">Авторизоваться</button>
  </form>
</template>

<script>
export default {
  name: "AppLoginForm",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    async login() {
      if (this.email.length === 0 && this.password.length === 0) {
        return;
      }
      await this.$store.dispatch("Auth/login", {
        email: this.email,
        password: this.password,
      });
      await this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
