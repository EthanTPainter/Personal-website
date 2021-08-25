<template>
  <div class="main-container">
    <div @click="emitSelectEvent" class="sub-container">
      <h1 class="passion">Passions</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["thumbnail-click-event"],
  methods: {
    emitSelectEvent() {
      // Emit a signal to the parent to call this function
      console.log("EMIT PASSION CLICK");
      this.$emit("thumbnail-click-event", {
        type: "passions",
      });
    },
  },
});
</script>

<style scoped lang="scss">
.main-container {
  width: 100%;
  height: 100%;
}
.sub-container {
  width: 100%;
}
.passion {
  font-size: 10rem;
  color: white;
  padding-left: 10rem;

  &:hover {
    cursor: grab;
  }
}
</style>
