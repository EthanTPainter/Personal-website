<template>
  <div class="main-container">
    <div @click="emitSelectEvent" class="sub-container">
      <h1 class="work">Work</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["thumbnail-click-event"],
  methods: {
    emitSelectEvent() {
      console.log("EMIT WORK CLICK");
      // Emit a signal to the parent to call this function
      this.$emit("thumbnail-click-event", {
        type: "work",
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
.work {
  font-size: 10rem;
  color: white;
  padding-left: 10rem;

  &:hover {
    cursor: grab;
  }
}
</style>
