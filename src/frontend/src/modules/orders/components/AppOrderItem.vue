<template>
  <section class="sheet order">
    <div class="order__wrapper">
      <div class="order__number">
        <b>Заказ #11199929</b>
      </div>

      <div class="order__sum">
        <span>Сумма заказа: 1&nbsp;564&nbsp;₽</span>
      </div>

      <div class="order__button">
        <button type="button" class="button button--border">Удалить</button>
      </div>
      <div class="order__button">
        <button type="button" class="button">Повторить</button>
      </div>
    </div>

    <AppOrderList />
    <AppOrderItemAdditional />

    <p class="order__address">
      Адрес доставки: Тест (или если адрес новый - писать целиком)
    </p>
  </section>
</template>

<script>
import AppOrderList from "./AppOrderList";
import AppOrderItemAdditional from "./AppOrderItemAdditional";
export default {
  name: "AppOrderItem",
  components: { AppOrderList, AppOrderItemAdditional },
};
</script>

<style scoped></style>
