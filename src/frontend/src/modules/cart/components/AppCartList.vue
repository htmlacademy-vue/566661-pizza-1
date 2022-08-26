<template>
  <ul class="cart-list sheet">
    <AppCartListItem />
  </ul>
</template>

<script>
import AppCartListItem from "./AppCartListItem";
export default {
  name: "AppCartList",
  components: { AppCartListItem },
};
</script>

<style scoped></style>
