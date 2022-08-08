<template>
  <div class="content__result">
    <p>Итого: {{ price }} ₽</p>
    <button
      type="button"
      class="button"
      :disabled="!isDisabled"
      @click="$emit('ready')"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: "BuilderPriceCounter",
  props: {
    price: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isDisabled() {
      return this.price > 0;
    },
  },
};
</script>

<style scoped></style>
