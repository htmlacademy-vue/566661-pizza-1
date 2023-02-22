<template>
  <li class="cart-list__item">
    <div class="product cart-list__product">
      <img
        src="@/assets/img/product.svg"
        class="product__img"
        width="56"
        height="56"
        alt="Капричоза"
      />
      <div class="product__text">
        <h2>{{ title }}</h2>
        <ul>
          <li>{{ size }}, на {{ doughTransform }} тесте</li>
          <li>Соус: {{ sauceTransform }}</li>
          <li v-if="ingredientsTransform">
            Начинка: {{ ingredientsTransform }}
          </li>
        </ul>
      </div>
    </div>

    <ItemCounter
      :min-count="0"
      :max-count="999"
      :count="count"
      :class="['counter cart-list__counter']"
      @decrement="decrementCount"
      @increment="incrementCount"
    />
    <div class="cart-list__price">
      <b>{{ total }} ₽</b>
    </div>

    <div class="cart-list__button">
      <button type="button" class="cart-list__edit">Изменить</button>
    </div>
  </li>
</template>

<script>
import ItemCounter from "../../../common/components/ItemCounter";
import { mapActions } from "vuex";

export default {
  name: "AppCartListItem",
  components: { ItemCounter },
  props: {
    idx: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    dough: {
      type: String,
      required: true,
    },
    sauce: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    ingredients: {
      type: Array,
      required: false,
    },
  },
  computed: {
    doughTransform() {
      return this.dough.slice(0, -1).toLowerCase() + "м";
    },
    sauceTransform() {
      return this.sauce.toLowerCase();
    },
    ingredientsTransform() {
      return this.ingredients.map((el) => el.name.toLowerCase()).join(", ");
    },
    total() {
      return this.price * this.count;
    },
  },
  methods: {
    ...mapActions("Cart", ["put", "delete"]),
    decrementCount() {
      let currentCount = this.count;
      --currentCount;
      if (currentCount > 0) {
        this.put({
          entity: "pizza",
          value: {
            key: "count",
            idx: this.idx,
            el: currentCount,
          },
        });
      } else {
        this.delete({
          entity: "pizza",
          value: this.idx,
        });
      }
    },
    incrementCount() {
      let currentCount = this.count;
      ++currentCount;
      this.put({
        module: "Cart",
        entity: "pizza",
        value: {
          key: "count",
          idx: this.idx,
          el: currentCount,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.cart-list__counter {
  ::v-deep {
    .counter__button--plus {
      background-color: #ff6b00;
      &:hover {
        background-color: #ff6b00;
      }
    }
  }
}
</style>
