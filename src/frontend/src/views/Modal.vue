<template>
  <div>
    <AppModal />
    <router-view />
  </div>
</template>

<script>
import AppModal from "@/modules/modal/components/AppModal.vue";

export default {
  name: "Modal",
  components: { AppModal },
};
</script>
