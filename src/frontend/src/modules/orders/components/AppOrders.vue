<template>
  <main class="layout">
    <div class="layout__content">
      <div class="layout__title">
        <h1 class="title title--big">История заказов</h1>

        <AppOrderItem />
      </div>
    </div>
  </main>
</template>

<script>
import AppOrderItem from "./AppOrderItem";
export default {
  name: "AppOrders",
  components: {
    AppOrderItem,
  },
};
</script>

<style scoped></style>
