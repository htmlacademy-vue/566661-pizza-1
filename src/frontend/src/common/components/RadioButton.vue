<template>
  <label>
    <input
      type="radio"
      :name="name"
      :value="value"
      class="visually-hidden"
      :checked="checked"
    />
    <span>{{ text }}</span>
  </label>
</template>

<script>
export default {
  name: "RadioButton",
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
    text: {
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
