<template>
  <div class="content__result">
    <p>Итого: {{ price }} ₽</p>
    <button
      type="button"
      class="button"
      :disabled="isDisabled"
      @click="$emit('ready')"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BuilderPriceCounter",
  props: {
    price: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState("Auth", ["isAuthenticated"]),
    isDisabled() {
      return !this.isAuthenticated;
    },
  },
};
</script>

<style scoped></style>
