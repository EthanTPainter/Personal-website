<template>
  <div class="skills-bg">
    <Nav class="nav"></Nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "../components/nav/nav.vue";

export default defineComponent({
  name: "SkillsPage",
  components: {
    Nav,
  },
});
</script>

<style scoped>
.skills-bg {
  background: #111827;
  min-height: 100vh;
}

.nav {
  padding: 2rem 0 0 3rem;
}
</style>