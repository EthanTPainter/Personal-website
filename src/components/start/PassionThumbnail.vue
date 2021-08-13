<template>
  <div class="container">
    <img class="heart" svg-inline src="src/assets/coolicons/heart_outline.svg" />
    <h1 class="passion">Passions</h1>
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
  grid-template-rows: 1fr 1fr 1fr 1fr;
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
