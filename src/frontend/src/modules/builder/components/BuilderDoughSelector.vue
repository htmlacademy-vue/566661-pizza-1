<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <SelectorItem
          v-for="(item, k) in doughList"
          :key="item.id"
          :value="item.value"
          name="dought"
          :checked="item.value === doughPizza.value"
          :class="`dough__input dough__input--${item.value}`"
          :text-first="item.name"
          :text-second="item.description"
          @change="$emit('setCurrent', doughList[k])"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectorItem from "@/common/components/SelectorItem";
import { mapState } from "vuex";

export default {
  name: "BuilderDoughSelector",
  props: {
    doughPizza: {
      type: Object,
      required: true,
    },
  },
  components: {
    SelectorItem,
  },
  computed: {
    ...mapState("Builder", ["doughList"]),
  },
};
</script>

<style scoped></style>
