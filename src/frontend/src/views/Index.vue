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
          :sizes="sizeList"
          :sizePizza="currentSize"
          @changeSize="currentSize = $event"
        />
        <BuilderIngredientsSelector
          :sauces="sauceList"
          :ingredients="ingredientList"
          :currentSauce="currentSauce"
          @setCurrentSauce="currentSauce = $event"
          @updateIngredients="ingredientList = $event"
        />
        <BuilderPizzaView
          :name="namePizza"
          @setNamePizza="namePizza = $event"
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
    //TODO не совсем понял, почему при таком объявлении работает, а если указать сразу в return то не работает
    const normalizedDough = normalizeDough(dough);
    const normalizeSize = normalizeSizes(sizes);
    const normalizeSauce = normalizeSauces(sauces);
    return {
      doughList: normalizedDough,
      sizeList: normalizeSize,
      sauceList: normalizeSauce,
      ingredientList: normalizeIngredients(ingredients),
      namePizza: "",
      currentDough: normalizedDough[0].value,
      currentSize: normalizeSize[1].value,
      currentSauce: normalizeSauce[0].value,
    };
  },
};
</script>
