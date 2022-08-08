<template>
  <div>
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="getCount"
      @click="$emit('minusCount')"
    >
      <span class="visually-hidden">{{ textBtnFirst }}</span>
    </button>
    <input type="text" name="counter" class="counter__input" v-model="count" />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="$emit('plusCount')"
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
    value: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentCount: this.count,
    };
  },
  computed: {
    getCount() {
      return !this.count > 0;
    },
  },
};
</script>

<style scoped></style>
