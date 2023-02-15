<template>
  <li class="additional-list__item sheet">
    <p class="additional-list__description">
      <img :src="image" width="39" height="60" :alt="name" />
      <span>{{ name }}</span>
    </p>

    <div class="additional-list__wrapper">
      <ItemCounter
        :count="count"
        :min-count="0"
        :max-count="999"
        :class="['counter additional-list__counter']"
        @decrement="decrementCount"
        @increment="incrementCount"
      />
      <div class="additional-list__price">
        <b>× {{ price }} ₽</b>
      </div>
    </div>
  </li>
</template>

<script>
import ItemCounter from "../../../common/components/ItemCounter";
import { mapActions } from "vuex";

export default {
  name: "AppCartListAdditional",
  components: { ItemCounter },

  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    count: {
      typ: Number,
      required: true,
    },
    price: {
      typ: Number,
      required: true,
    },
    idx: {
      typ: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions("Cart", ["put", "delete"]),
    decrementCount() {
      let currentCount = this.count;
      --currentCount;
      if (currentCount > 0) {
        this.put({
          entity: "additional",
          value: {
            key: "count",
            idx: this.idx,
            el: currentCount,
          },
        });
      } else {
        this.delete({
          entity: "additional",
          value: this.idx,
        });
      }
    },
    incrementCount() {
      let currentCount = this.count;
      ++currentCount;
      this.put({
        module: "Cart",
        entity: "additional",
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
.additional-list__counter {
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
