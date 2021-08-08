<template>
  <section>
    <color-changing-loading-animation />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColorChangingLoadingAnimation from "../components/animations/loading/color-changing-loading.vue";

export default defineComponent({
  name: "LoadingPage",
  components: {
    ColorChangingLoadingAnimation,
  },
  setup() {},
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #001d30;
  animation: changeBg 6s linear infinite;
}
@keyframes changeBg {
  to {
    filter: hue-rotate(360deg);
  }
}
</style>
