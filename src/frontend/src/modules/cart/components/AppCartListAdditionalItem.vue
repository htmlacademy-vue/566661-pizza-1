<template>
  <li class="additional-list__item sheet">
    <p class="additional-list__description">
      <img :src="image" width="39" height="60" :alt="name" />
      <span>{{ name }}</span>
    </p>

    <div class="additional-list__wrapper">
      <ItemCounter :count="1" :class="['counter additional-list__counter']" />
      <div class="additional-list__price">
        <b>× 56 ₽</b>
      </div>
    </div>
  </li>
</template>

<script>
import ItemCounter from "../../../common/components/ItemCounter";
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
