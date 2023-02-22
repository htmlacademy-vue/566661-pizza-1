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
      <app-drop @drop="$emit('addIngredient', $event.ingredient)">
        <div
          class="pizza"
          :class="`pizza--foundation--${classDough}-${sauce.value}`"
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

    <BuilderPriceCounter :price="price" @ready="addOrder" />
  </div>
</template>

<script>
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
import AppDrop from "@/common/components/AppDrop";
import { mapActions, mapMutations, mapState } from "vuex";
import { RESET, SET_ENTITY } from "@/store/mutations-type";

export default {
  name: "BuilderPizzaView",
  data() {
    return {
      namePizza: this.name,
    };
  },
  props: {
    sauce: {
      type: Object,
      required: true,
    },
    dough: {
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
    ...mapActions({
      init: "init",
    }),
    ...mapActions("Cart", ["post"]),
    ...mapMutations({
      setEntity: SET_ENTITY,
      reset: RESET,
    }),
    addOrder() {
      this.setEntity({
        module: "Orders",
        entity: "price",
        value: this.price,
      });
      const id = this.pizza.length === 0 ? 0 : this.pizza.length;
      this.post({
        entity: "pizza",
        value: {
          id,
          name: this.name,
          dough: this.dough,
          size: this.size,
          sauce: this.sauce,
          price: this.price,
          count: 1,
          ingredients: this.ingredients.filter((el) => el.count > 0),
        },
      });
      this.reset();
      this.init();
    },
    getPizzaClasses(ingredient, count) {
      return {
        [`pizza__filling--${ingredient}`]: ingredient,
        "pizza__filling--second": count === 2,
        "pizza__filling--third": count === 3,
      };
    },
    setName() {
      this.setEntity({
        module: "Orders",
        entity: "name",
        value: this.namePizza,
      });
    },
  },
  computed: {
    ...mapState("Cart", ["pizza"]),
    ...mapState("Orders", ["name"]),
    price() {
      return (
        this.size.multiplier *
        (this.dough.price + this.sauce.price + this.countIngredients)
      );
    },
    countIngredients() {
      let num = 0;
      this.ingredients.forEach((item) => {
        num += item.count * item.price;
      });
      return num;
    },
    classDough() {
      return this.dough.value === "light" ? "small" : "big";
    },
  },
};
</script>

<style scoped></style>
