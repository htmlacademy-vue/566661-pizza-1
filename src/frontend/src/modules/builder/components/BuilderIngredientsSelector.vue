<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>
          <RadioButton
            v-for="sauce in sauces"
            class="radio ingredients__input"
            :key="sauce.id"
            :value="sauce.value"
            name="sauce"
            :text="sauce.name"
            :checked="sauce.value === currentSauce"
            @myChange="$emit('setCurrentSauce', sauce.value)"
          />
        </div>
        <div class="sheet__content ingredients">
          <div class="ingredients__filling">
            <p>Начинка:</p>

            <ul class="ingredients__list">
              <li
                v-for="ingredient in ingredients"
                :key="ingredient.id"
                class="ingredients__item"
              >
                <span :class="`filling filling--${ingredient.value}`">
                  {{ ingredient.name }}
                </span>
                <ItemCounter
                  class="counter counter--orange ingredients__counter"
                  @minusCount="removeIngredient(ingredient.value)"
                  @plusCount="addIngredient(ingredient.value)"
                  :value="ingredient.value"
                  :count="ingredient.count"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";
import ItemCounter from "@/common/components/ItemCounter";
export default {
  name: "BuilderIngredientsSelector",
  components: {
    RadioButton,
    ItemCounter,
  },
  props: {
    sauces: {
      type: Array,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    currentSauce: {
      type: String,
      required: true,
    },
  },
  methods: {
    addIngredient(value) {
      const idx = this.ingredients.findIndex((el) => el.value === value);
      this.ingredients[idx].count++;
      this.$emit("updateIngredients", this.ingredients);
    },
    removeIngredient(value) {
      const idx = this.ingredients.findIndex((el) => el.value === value);
      if (this.ingredients[idx].count > 0) {
        this.ingredients[idx].count--;
        this.$emit("updateIngredients", this.ingredients);
      }
    },
  },
};
</script>

<style scoped></style>
