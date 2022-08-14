<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <BuilderDoughSelector
          :dough="doughList"
          @changeDough="currentDough = $event"
          :changeDough="currentDough"
        />
        <BuilderSizeSelector
          :sizes="sizesList"
          :sizePizza="currentSize"
          @changeSize="currentSize = $event"
        />
        <BuilderIngredientsSelector
          :sauces="saucesList"
          :ingredients="ingredientsList"
          :currentSauce="currentSauce"
          @setCurrentSauce="currentSauce = $event"
          @setIngredient="addIngredient"
          @removeIngredient="removeIngredient"
        />
        <BuilderPizzaView
          :name="namePizza"
          @setNamePizza="namePizza = $event"
          @setIngredient="addIngredient"
          :ingredients="ingredientsList"
          :sauce="currentSauce"
          :typeDough="getTypeDough"
        />
      </div>
    </form>
  </main>
</template>

<script>
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import {
  normalizeDough,
  normalizeIngredients,
  normalizeSauces,
  normalizeSizes,
} from "@/common/helpers";
import { dough, sizes, sauces, ingredients } from "@/static/pizza.json";

export default {
  name: "Index",
  components: {
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderDoughSelector,
    BuilderPizzaView,
  },

  data() {
    return {
      doughList: null,
      sizesList: null,
      saucesList: null,
      ingredientsList: null,
      namePizza: "",
      currentDough: null,
      currentSize: null,
      currentSauce: null,
    };
  },
  created() {
    this.addValue();
    this.addCurrentElements();
  },
  methods: {
    addValue() {
      this.doughList = normalizeDough(dough);
      this.sizesList = normalizeSizes(sizes);
      this.saucesList = normalizeSauces(sauces);
      this.ingredientsList = normalizeIngredients(ingredients);
    },
    addCurrentElements() {
      this.currentDough = normalizeDough(dough)[0].value;
      this.currentSize = normalizeSizes(sizes)[1].value;
      this.currentSauce = normalizeSauces(sauces)[0].value;
    },
    addIngredient(value) {
      const idx = this.ingredientsList.findIndex((el) => el.value === value);
      this.ingredientsList[idx].count++;
    },
    removeIngredient(value) {
      const idx = this.ingredientsList.findIndex((el) => el.value === value);
      if (this.ingredientsList[idx].count > 0) {
        this.ingredientsList[idx].count--;
      }
    },
  },
  computed: {
    getTypeDough() {
      return this.currentDough === "light" ? "small" : "big";
    },
  },
};
</script>
