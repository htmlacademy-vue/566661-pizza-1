<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
    </div>
    <div class="sheet__content diameter">
      <RadioButton
        v-for="size in sizes"
        :class="`diameter__input diameter__input--${size.value}`"
        :key="size.id"
        :value="size.value"
        name="diameter"
        :checked="size.value === sizePizza"
        :text="size.name"
        @myChange="$emit('changeSize', size.value)"
      />
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderSizeSelector",
  data() {
    return {
      currentSize: this.sizes[1].value,
    };
  },
  props: {
    sizes: {
      type: Array,
      required: true,
    },
    sizePizza: {
      type: String,
      required: true,
    },
  },
  components: {
    RadioButton,
  },
};
</script>

<style scoped></style>
