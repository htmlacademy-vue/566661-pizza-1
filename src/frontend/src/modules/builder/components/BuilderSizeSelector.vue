<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
    </div>
    <div class="sheet__content diameter">
      <RadioButton
        v-for="(size, k) in sizes"
        :class="`diameter__input diameter__input--${size.value}`"
        :key="size.id"
        :value="size.value"
        name="diameter"
        :checked="k === sizePizza.id - 1"
        :text="size.name"
        @myChange="$emit('setCurrent', sizes[k])"
      />
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";
import { mapState } from "vuex";

export default {
  name: "BuilderSizeSelector",
  props: {
    sizePizza: {
      type: Object,
      required: true,
    },
  },
  components: {
    RadioButton,
  },
  computed: {
    ...mapState("Builder", {
      sizes: "sizesList",
    }),
  },
};
</script>

<style scoped></style>
