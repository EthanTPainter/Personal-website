<template>
  <div @click="emitSelectEvent" class="sub-container">
    <h1 class="passion">Passions</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["thumbnail-click-event"],
  methods: {
    emitSelectEvent() {
      this.$emit("thumbnail-click-event", {
        type: "passions",
      });
    },
  },
});
</script>

<style scoped lang="scss">
.passion {
  font-size: 10em;
  color: white;
  text-align: center;

  &:hover {
    cursor: grab;
  }
}
</style>
