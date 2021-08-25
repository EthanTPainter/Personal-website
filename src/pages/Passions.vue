<template>
  <div class="passion-bg bg-grey-darkest">
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "../components/nav/nav.vue";

export default defineComponent({
  name: "PassionsPage",
  components: {
    Nav,
  },
  setup() {},
});
</script>

<style scoped>
.passion-bg {
  min-height: 100vh;
}
</style>