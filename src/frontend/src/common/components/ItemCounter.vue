<template>
  <div>
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="getCount"
      @click="$emit('decrement')"
    >
      <span class="visually-hidden">{{ textBtnFirst }}</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      v-model="count"
      readonly
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="$emit('increment')"
      :disabled="!isDisabled"
    >
      <span class="visually-hidden">{{ textBtnSecond }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  props: {
    textBtnFirst: {
      type: String,
      default: "Меньше",
    },
    textBtnSecond: {
      type: String,
      default: "Больше",
    },
    count: {
      type: Number,
      default: 0,
    },
    maxCount: {
      type: Number,
      default: 3,
    },
    minCount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    getCount() {
      return this.count === this.minCount;
    },
    isDisabled() {
      return this.count < this.maxCount;
    },
  },
};
</script>

<style scoped></style>
