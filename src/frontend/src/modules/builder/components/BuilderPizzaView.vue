<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        v-model="namePizza"
        @keyup="setName"
      />
    </label>

    <div class="content__constructor">
      <div class="pizza pizza--foundation--big-tomato">
        <div class="pizza__wrapper">
          <div class="pizza__filling pizza__filling--ananas"></div>
          <div class="pizza__filling pizza__filling--bacon"></div>
          <div class="pizza__filling pizza__filling--cheddar"></div>
        </div>
      </div>
    </div>

    <BuilderPriceCounter :price="price" @ready="start" />
  </div>
</template>

<script>
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
export default {
  name: "BuilderPizzaView",
  data() {
    return {
      price: 0,
      namePizza: this.name,
      ready: false,
    };
  },
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  components: {
    BuilderPriceCounter,
  },
  methods: {
    setName() {
      this.$emit("setNamePizza", this.namePizza);
    },
    start(val) {
      this.ready = val;
    },
  },
};
</script>

<style scoped></style>
