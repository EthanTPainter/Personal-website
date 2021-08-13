<template>
  <div class="container">
    <img class="laptop" svg-inline src="src/assets/coolicons/laptop.svg" />
    <h1 class="work">Work</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scoped lang="scss">
.container {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}
.laptop {
  width: 30%;
  grid-row: 2;
}
.work {
  font-size: 10rem;
  color: white;
  grid-row: 3;
}
</style>
