<template>
  <div class="main-container">
    <div @click="emitSelectEvent" class="sub-container">
      <img class="heart" svg-inline src="src/assets/coolicons/heart_outline.svg" />
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
        type: "passions"
      });
    },
  },
});
</script>

<style scoped lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
}
.sub-container {
  display: grid;
  width: 100%;
  justify-items: center;
  align-items: center;
}
.heart {
  width: 30%;
  grid-row: 2;
}
.passion {
  font-size: 10rem;
  color: white;
  grid-row: 3;
}
</style>
