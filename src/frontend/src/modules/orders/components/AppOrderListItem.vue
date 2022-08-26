<template>
  <li class="order__item">
    <div class="product">
      <img
        src="../../../assets/img/product.svg"
        class="product__img"
        width="56"
        height="56"
        alt="Капричоза"
      />
      <div class="product__text">
        <h2>Капричоза</h2>
        <p>
          30 см, на тонком тесте<br />
          Соус: томатный<br />
          Начинка: грибы, лук, ветчина, пармезан, ананас
        </p>
      </div>
    </div>

    <p class="order__price">782 ₽</p>
  </li>
</template>

<script>
export default {
  name: "AppOrderListItem",
};
</script>

<style scoped></style>
