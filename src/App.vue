<template>
  <div id="app">
    <nav-bar />
    <the-header />
    <about-me />
    <services />
    <projects />
    <contact />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./components/Header";
import TheFooter from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutMe from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    NavBar,
    AboutMe,
    Services,
    Projects,
    Contact,
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
