<template>
  <div class="bg-grey-darkest">
    <h1 class="text">Uh oh. How did you get here!?</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundPage",
  setup() {},
});
</script>

<style scoped>
div {
  background: "bg-grey-darkest";
  min-height: 100vh;
}
h1 {
  color: hsl(171, 17%, 92%);
  font-family: initial;
  font-size: 2rem;
  position: absolute;
  top: 30%;
  left: 30%;
}
</style>
