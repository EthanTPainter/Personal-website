<template>
  <header id="header" role="banner">
    <nav class="header-nav">
      <!-- Possible loop change here -->
      <li class="li">
        <a :href="headerRouteData[0]" />
        {{ headerTitleData[0] }}
      </li>
      <li class="separator">|</li>
      <li class="li">
        <a :href="headerRouteData[1]" />
        {{ headerTitleData[1] }}
      </li>
      <li class="separator">|</li>
      <li class="li">
        <a :href="headerRouteData[2]" />
        {{ headerTitleData[2] }}
      </li>
      <li class="separator">|</li>
      <li class="li">
        <a :href="headerRouteData[3]" />
        {{ headerTitleData[3] }}
      </li>
      <li class="separator">|</li>
      <li class="li">
        <a :href="headerRouteData[4]" />
        {{ headerTitleData[4] }}
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
  text-align: left;
}
.separator {
  margin: 15px;
  display: inline-block;
}
.ul {
  display: inline-block;
}
.li {
  display: inline-block;
}
</style>
