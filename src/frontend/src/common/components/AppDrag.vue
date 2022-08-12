<template>
  <div :class="$style.drag" :draggable="true" @dragstart.self="onDrag">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDrag",
  props: {
    dragElement: {
      type: String,
      required: true,
    },
  },
  methods: {
    onDrag({ dataTransfer }) {
      dataTransfer.setData(
        "ingredient",
        JSON.stringify({ ingredient: this.dragElement })
      );
    },
  },
};
</script>

<style module lang="scss">
.drag {
  cursor: all-scroll;
}
</style>
