<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        v-model="namePizza"
        @keyup="setName"
      />
    </label>

    <div class="content__constructor">
      <app-drop @drop="$emit('setIngredient', $event.ingredient)">
        <div class="pizza" :class="`pizza--foundation--${size}-${sauce}`">
          <div class="pizza__wrapper">
            <template v-for="ingredient in ingredients">
              <div
                :key="ingredient.name"
                v-if="ingredient.count > 0"
                class="pizza__filling"
                :class="`pizza__filling--${ingredient.value}`"
              ></div>
            </template>
          </div></div
      ></app-drop>
    </div>

    <BuilderPriceCounter :price="price" @ready="total" />
  </div>
</template>

<script>
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
import AppDrop from "@/common/components/AppDrop";
export default {
  name: "BuilderPizzaView",
  data() {
    return {
      price: 0,
      namePizza: this.name,
      ready: false,
    };
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      required: true,
    },
    sauce: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
  },
  components: {
    BuilderPriceCounter,
    AppDrop,
  },
  methods: {
    setName() {
      this.$emit("setNamePizza", this.namePizza);
    },
    total(val) {
      this.ready = val;
    },
  },
};
</script>

<style scoped></style>
