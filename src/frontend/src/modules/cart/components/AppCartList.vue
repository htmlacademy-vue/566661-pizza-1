<template>
  <ul class="cart-list sheet">
    <AppCartListItem
      v-for="(item, i) in pizza"
      :key="item + i"
      :title="item.name"
      :size="item.size.name"
      :dough="item.dough.name"
      :sauce="item.sauce.name"
      :ingredients="item.ingredients"
      :price="item.price"
      :count="item.count"
      :idx="i"
    />
  </ul>
</template>

<script>
import AppCartListItem from "./AppCartListItem";
import { mapState } from "vuex";

export default {
  name: "AppCartList",
  components: { AppCartListItem },
  computed: {
    ...mapState("Cart", {
      pizza: "pizza",
    }),
  },
};
</script>

<style scoped></style>
