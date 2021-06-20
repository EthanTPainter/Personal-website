<template>
  <div id="app">
    <home-page />
  </div>
</template>

<script>
import HomePage from "./components/Home";

export default {
  name: "App",
  components: {
    HomePage
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>
