<template>
  <div class="skills-bg bg-grey-darkest">
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
  setup() {},
});
</script>

<style scoped>
.skills-bg {
  min-height: 100vh;
}

.nav {
  padding: 2rem 0 0 3rem;
}
</style>