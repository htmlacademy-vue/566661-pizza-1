<template>
  <div
    :class="{ [$style['drop-hover']]: dropHover }"
    @drop.stop="onDrop"
    @dragenter.prevent="onEnter"
    @dragover.prevent
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDrop",
  data() {
    return {
      dropHover: false,
    };
  },
  methods: {
    onDrop({ dataTransfer }) {
      this.dropHover = false;
      if (!dataTransfer) {
        return;
      }
      const pay = dataTransfer.getData("ingredient");
      if (pay) {
        const transferData = JSON.parse(dataTransfer.getData("ingredient"));
        this.$emit("drop", transferData);
      }
    },
    onEnter() {
      this.dropHover = true;
    },
  },
};
</script>

<style module lang="scss">
.drop-hover {
  transition: all 0.3s;
  opacity: 0.8;
}
</style>
