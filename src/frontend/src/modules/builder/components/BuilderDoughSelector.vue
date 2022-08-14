<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <SelectorItem
          v-for="item in dough"
          :key="item.id"
          :value="item.value"
          name="dought"
          :checked="item.value === changeDough"
          :class="`dough__input dough__input--${item.value}`"
          :text-first="item.name"
          :text-second="item.description"
          @change="$emit('changeDough', item.value)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectorItem from "@/common/components/SelectorItem";

export default {
  name: "BuilderDoughSelector",
  props: {
    dough: {
      type: Array,
      required: true,
      validate(el) {
        return Object.keys(el).length > 0;
      },
    },
    changeDough: {
      type: String,
      required: true,
    },
  },
  components: {
    SelectorItem,
  },
};
</script>

<style scoped></style>
