<template>
  <main class="content">
    <router-view />
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <BuilderDoughSelector
          @setCurrent="setCurrentDough"
          :doughPizza="dough"
        />
        <BuilderSizeSelector :sizePizza="size" @setCurrent="setCurrentSize" />
        <BuilderIngredientsSelector
          :ingredients="ingredientsList"
          :saucePizza="sauce"
          @setCurrentSauce="setCurrentSauce"
          @setIngredient="addIngredient"
          @deleteIngredient="deleteIngredient"
        />
        <BuilderPizzaView
          @addIngredient="addIngredient"
          :ingredients="ingredientsList"
          :sauce="sauce"
          :dough="dough"
          :size="size"
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
import { mapMutations, mapState } from "vuex";
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SET_ENTITY,
} from "@/store/mutations-type";

export default {
  name: "IndexHome",
  components: {
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderDoughSelector,
    BuilderPizzaView,
  },
  methods: {
    ...mapMutations("Builder", {
      ADD_INGREDIENT,
      DELETE_INGREDIENT,
    }),
    ...mapMutations({
      setEntity: SET_ENTITY,
    }),
    addIngredient(value) {
      this.ADD_INGREDIENT(value);
    },
    deleteIngredient(value) {
      this.DELETE_INGREDIENT(value);
    },
    setCurrentSauce(value) {
      this.setEntity({
        module: "Orders",
        entity: "sauce",
        value,
      });
    },
    setCurrentDough(value) {
      this.setEntity({
        module: "Orders",
        entity: "dough",
        value,
      });
    },
    setCurrentSize(value) {
      this.setEntity({
        module: "Orders",
        entity: "size",
        value,
      });
    },
  },
  computed: {
    ...mapState("Builder", {
      ingredientsList: "ingredientsList",
    }),
    ...mapState("Orders", ["dough", "size", "sauce"]),
  },
};
</script>

<style scoped></style>
