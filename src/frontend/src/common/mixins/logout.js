export default {
  methods: {
    async $logout() {
      // Вызываем действие логаута в хранилище.
      await this.$store.dispatch("Auth/logout");
      // Переводим пользователя на страницу логина.
      await this.$router.push("/login");
    },
  },
};
