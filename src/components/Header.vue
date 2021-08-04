<template>
  <header id="header" role="banner">
    <nav class="header-nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li class="separator">|</li>
      <li>
        <router-link to="/passions">Passions</router-link>
      </li>
      <li class="separator">|</li>
      <li>
        <router-link to="skills">Skills & Experience </router-link>
      </li>
      <li class="separator">|</li>
      <li>
        <router-link to="/work">Work</router-link>
      </li>
      <li class="separator">|</li>
      <li>
        <router-link to="/connect"> Connect </router-link>
      </li>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import { headerTitleData, headerRouteData } from "../data/header";

export default defineComponent({
  name: "Header",
  props: {
    baseUrl: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { headerTitleData, headerRouteData };
  },
  methods: {
    isActive(page) {
      return this.$route.path.indexOf(page) !== -1;
    },
  },
});
</script>

<style scoped>
#header {
  margin: 0 20px;
  height: 20vh;
}
.header-nav {
  text-align: center;
}
.separator {
  margin: 15px 10px;
  display: inline-block;
}
.ul {
  display: inline-block;
}
li {
  display: inline-block;
  font-family: "Abril Fatface";
}
</style>
