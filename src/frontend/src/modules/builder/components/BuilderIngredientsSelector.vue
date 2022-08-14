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
                  @minusCount="$emit('removeIngredient', ingredient.value)"
                  @plusCount="$emit('setIngredient', ingredient.value)"
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
export default {
  name: "BuilderIngredientsSelector",
  components: {
    RadioButton,
    ItemCounter,
    AppDrag,
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
};
</script>

<style scoped></style>
