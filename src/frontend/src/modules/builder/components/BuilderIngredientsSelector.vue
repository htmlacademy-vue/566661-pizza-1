<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>
          <RadioButton
            v-for="(sauce, k) in sauces"
            class="radio ingredients__input"
            :key="sauce.id"
            :value="sauce.value"
            name="sauce"
            :text="sauce.name"
            :checked="sauce.value === saucePizza.value"
            @click.native="$emit('setCurrentSauce', sauces[k])"
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
                <app-drag
                  :drag-element="ingredient.value"
                  :isDraggable="ingredient.count < 3"
                >
                  <span :class="`filling filling--${ingredient.value}`">
                    {{ ingredient.name }}
                  </span>
                </app-drag>
                <ItemCounter
                  class="counter counter--orange ingredients__counter"
                  @decrement="$emit('deleteIngredient', ingredient.value)"
                  @increment="$emit('setIngredient', ingredient.value)"
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
import AppDrag from "@/common/components/AppDrag";
import { mapState } from "vuex";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    RadioButton,
    ItemCounter,
    AppDrag,
  },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    saucePizza: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState("Builder", {
      sauces: "sauceList",
    }),
  },
};
</script>

<style scoped></style>
