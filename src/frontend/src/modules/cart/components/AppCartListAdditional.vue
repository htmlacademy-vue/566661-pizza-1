<template>
  <div class="cart__additional">
    <ul class="additional-list">
      <AppCartListAdditionalItem
        v-for="misc in misc"
        :key="misc.id"
        :name="misc.name"
        :image="misc.image"
      />
    </ul>
  </div>
</template>

<script>
import AppCartListAdditionalItem from "./AppCartListAdditionalItem";
import misc from "@/static/misc.json";
export default {
  name: "AppCartListAdditional",
  data() {
    return {
      misc,
    };
  },
  components: {
    AppCartListAdditionalItem,
  },
};
</script>

<style scoped></style>
