<template>
  <label>
    <input
      type="radio"
      :name="name"
      :value="value"
      class="visually-hidden"
      :checked="checked"
      @change="$emit('change')"
    />
    <b>{{ textFirst }}</b>
    <span>{{ textSecond }}</span>
  </label>
</template>

<script>
export default {
  name: "SelectorItem",
  props: {
    name: {
      type: String,
      required: true,
      validate(el) {
        return el.length > 0;
      },
    },
    value: {
      type: String,
      required: true,
    },
    textFirst: {
      type: String,
      validate(el) {
        return el.length > 0;
      },
    },
    textSecond: {
      type: String,
      validate(el) {
        return el.length > 0;
      },
    },
    checked: {
      type: Boolean,
    },
  },
};
</script>
