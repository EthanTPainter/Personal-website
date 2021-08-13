<template>
  <div class="container">
    <img class="js" svg-inline src="src/assets/coolicons/javascript.svg" />
    <h1 class="skills">Skills</h1>
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
