<template>
  <div class="bg-blue-light home-background">
    <h1 class="title">{{ header }}</h1>
    <div>
      <h2 class="sub-title">{{ subHeader }}</h2>
    </div>
    <button type="button" class="bg-green btn">{{ link }}</button>
    {{ countDown }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { HomeData } from "../data/home";

export default defineComponent({
  name: "Home",
  setup: () => {
    // Retrieve values for initializing home page
    const currentUrl = "https://localhost:3000";
    const first = HomeData(currentUrl)[0];
    const header = first.header;
    const subHeader = first.subHeader;
    const link = first.link;
    const countDown = ref(10);
    return { countDown, header, subHeader, link };
  },
});
</script>

<style scoped>
.home-background {
  height: 80vh;
}
.title {
  font-size: 115px;
  font-family: "Lobster";
}
.sub-title {
  font-size: 30px;
  font-family: fantasy;
  max-width: 550px;
  display: inline-block;
}
.btn {
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;
}
</style>
