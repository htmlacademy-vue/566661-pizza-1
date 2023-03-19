import Vue from "vue";

Vue.directive("focus", {
  bind(el) {
    el.focus();
  },
});
