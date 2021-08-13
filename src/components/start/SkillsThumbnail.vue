<template>
  <div class="main-container">
    <div @click="emitSelectEvent" class="sub-container">
      <img class="js" svg-inline src="src/assets/coolicons/javascript.svg" />
      <h1 class="skills">Skills</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["thumbnail-click-event"],
  methods: {
    emitSelectEvent() {
      console.log("EMIT SKILLS CLICK");
      // Emit a signal to the parent to call this function
      this.$emit("thumbnail-click-event", {
        type: "skills",
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
.js {
  width: 30%;
  grid-row: 2;
}
.skills {
  font-size: 10rem;
  color: white;
  grid-row: 3;
}
</style>
