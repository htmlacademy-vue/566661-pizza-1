<template>
  <div>
    <component :is="layout">
      <slot />
    </component>
  </div>
</template>

<script>
const defaultLayout = "AppLayoutDefault";
export default {
  name: "AppLayout",
  computed: {
    layout() {
      let layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>

<style scoped></style>
