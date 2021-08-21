<template>
  <div class="main-container">
    <div @click="emitSelectEvent" class="sub-container">
      <h1 class="skills">Skills</h1>
      <div class="barrier"></div>
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
  align-items: center;
}
.sub-container {
  display: grid;
  width: 100%;
  align-items: center;
}
.skills {
  font-size: 10rem;
  color: white;
  padding-left: 10rem;
  font-size: 40rem;
}
.barrier {
  order: 1;
  width: 0.2%;
  margin: 5% 2% 0 2%;
  opacity: 0;
  border-radius: 2rem;
  background: rgb(214, 214, 214);
  // animation: show-content 1s, barrier-move-bars 2s alternate infinite;
  animation-fill-mode: forwards;
}
/* Keyframes for animations */
@keyframes show-content {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes barrier-move-bars {
  0% {
    margin: 50% 2% 0 2%;
  }
  100% {
    margin: 0% 2% 0 2%;
  }
}
</style>
