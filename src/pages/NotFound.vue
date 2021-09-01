<template>
  <div class="container">
    <h1 class="text">Uhhhhh.....</h1>
    <h2 class="text">How did you get here!?</h2>
    <h3><a href="/">Home</a></h3>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundPage",
});
</script>

<style scoped>
.container {
  background: #111827;
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
h2 {
  color: hsl(171, 17%, 92%);
  font-family: initial;
  font-size: 2rem;
  position: absolute;
  top: 40%;
  left: 30%;
}
h3 {
  color: hsl(171, 17%, 92%);
  font-family: initial;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 30%;
}
</style>
