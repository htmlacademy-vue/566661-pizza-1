<template>
  <form method="post" class="layout-form">
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <!-- <div class="sheet cart__empty">
          <p>В корзине нет ни одного товара</p>
        </div> -->

        <AppCartList />

        <AppCartListAdditional :misc="misc" />

        <AppCartForm />
      </div>
    </main>
    <section class="footer">
      <div class="footer__more">
        <router-link to="/" class="button button--border button--arrow"
          >Хочу еще одну</router-link
        >
      </div>
      <p class="footer__text">
        Перейти к конструктору<br />чтоб собрать ещё одну пиццу
      </p>
      <div class="footer__price">
        <b>Итого: {{ total }} ₽</b>
      </div>

      <div class="footer__submit">
        <button type="submit" class="button">
          <router-link :to="{ name: 'Modal' }">Оформить заказ</router-link>
        </button>
      </div>
    </section>
  </form>
</template>

<script>
import AppCartListAdditional from "./AppCartListAdditional";
import AppCartList from "./AppCartList";
import AppCartForm from "./AppCartForm";
import { mapGetters, mapState } from "vuex";

export default {
  name: "AppCart",
  components: { AppCartList, AppCartListAdditional, AppCartForm },
  computed: {
    ...mapGetters("Cart", ["total"]),
    ...mapState("Cart", {
      misc: "additional",
    }),
  },
};
</script>

<style scoped></style>
