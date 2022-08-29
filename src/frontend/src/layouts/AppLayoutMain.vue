<template>
  <div>
    <AppLayoutHeader />
    <AppLayoutSidebar />
    <slot />
  </div>
</template>

<script>
import AppLayoutSidebar from "./AppLayoutSidebar";
import AppLayoutHeader from "./AppLayoutHeader";
export default {
  name: "AppLayoutMain",
  components: {
    AppLayoutHeader,
    AppLayoutSidebar,
  },
};
</script>

<style scoped></style>
