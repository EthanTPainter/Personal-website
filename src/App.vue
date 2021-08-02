<template>
  <div class="bg-blue-light">
    <Header baseUrl="https://localhost:3000" />
    <Home />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
    Header,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
