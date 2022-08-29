<template>
  <ul class="order__list">
    <AppOrderListItem />
  </ul>
</template>

<script>
import AppOrderListItem from "./AppOrderListItem";
export default {
  name: "AppOrderList",
  components: {
    AppOrderListItem,
  },
};
</script>

<style scoped></style>
