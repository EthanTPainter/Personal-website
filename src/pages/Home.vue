<template>
  <div class="bg-blue-light">
    <Header baseUrl="https://localhost:3000" />
    <Home />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Home from "../components/Home.vue";
import Header from "../components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
    Header,
  },
});
</script>