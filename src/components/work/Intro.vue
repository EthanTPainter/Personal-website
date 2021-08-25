<template>
  <h2 class="work">Work</h2>
  <h2 class="projects">Personal Projects</h2>
  <h2 class="everything">And Everything In Between</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IntroWorkCard",
  setup() {},
});
</script>

<style scoped>
.work {
  color: white;
  font-size: 8vw;
  text-align: center;
}
.projects {
  color: white;
  font-size: 6vw;
  text-align: center;
}
.everything {
  color: white;
  font-size: 3vw;
  text-align: center;
}
</style>