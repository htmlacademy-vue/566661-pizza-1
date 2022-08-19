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
        <div
          class="pizza"
          :class="`pizza--foundation--${typeDough.value}-${sauce.value}`"
        >
          <div class="pizza__wrapper">
            <template v-for="ingredient in ingredients">
              <div
                :key="ingredient.name"
                v-if="ingredient.count > 0"
                class="pizza__filling"
                :class="getPizzaClasses(ingredient.value, ingredient.count)"
              ></div>
            </template>
          </div></div
      ></app-drop>
    </div>

    <BuilderPriceCounter :price="calculatePrice" @ready="total" />
  </div>
</template>

<script>
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
import AppDrop from "@/common/components/AppDrop";
export default {
  name: "BuilderPizzaView",
  data() {
    return {
      namePizza: this.name,
    };
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    sauce: {
      type: Object,
      required: true,
    },
    typeDough: {
      type: Object,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    size: {
      type: Object,
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
    getPizzaClasses(ingredient, count) {
      return {
        [`pizza__filling--${ingredient}`]: ingredient,
        "pizza__filling--second": count === 2,
        "pizza__filling--third": count === 3,
      };
    },
  },
  computed: {
    calculatePrice() {
      /* eslint-disable */
      return this.size.price * (this.typeDough.price + this.sauce.price + this.countIngredients);
      /* eslint-enable */
    },
    countIngredients() {
      let num = 0;
      this.ingredients.forEach((item) => {
        num += item.count;
      });
      return num;
    },
  },
};
</script>

<style scoped></style>
