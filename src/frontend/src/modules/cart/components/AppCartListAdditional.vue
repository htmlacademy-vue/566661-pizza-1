<template>
  <div class="cart__additional">
    <ul class="additional-list">
      <AppCartListAdditionalItem
        v-for="(misc, idx) in misc"
        :key="misc.id + idx"
        :name="misc.name"
        :image="misc.image"
        :price="misc.price"
        :count="misc.count"
        :idx="idx"
      />
    </ul>
  </div>
</template>

<script>
import AppCartListAdditionalItem from "./AppCartListAdditionalItem";

export default {
  name: "AppCartListAdditional",
  components: {
    AppCartListAdditionalItem,
  },
  props: {
    misc: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style scoped></style>
