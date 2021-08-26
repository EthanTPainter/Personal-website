<template>
  <div class="container bg-blue-dark">
    <img class="img" src="src/assets/cards/Coveros.png" />
    <h2 class="txt">June 5th 2017 - August 4th, 2017</h2>
    <p class="txt">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at
      varius vel pharetra vel turpis. Pretium fusce id velit ut. Viverra
      accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Nibh ipsum
      consequat nisl vel pretium. Cras tincidunt lobortis feugiat vivamus.
      Integer feugiat scelerisque varius morbi enim nunc faucibus a
      pellentesque. Purus gravida quis blandit turpis cursus in hac habitasse
      platea. Amet risus nullam eget felis eget nunc lobortis mattis. Justo
      donec enim diam vulputate ut pharetra. Ultricies integer quis auctor elit
      sed vulputate mi. Est velit egestas dui id ornare arcu odio. Adipiscing
      commodo elit at imperdiet dui accumsan sit amet. Diam sollicitudin tempor
      id eu nisl. Quam quisque id diam vel. Augue neque gravida in fermentum.
      Auctor neque vitae tempus quam pellentesque nec. Volutpat ac tincidunt
      vitae semper quis. Euismod in pellentesque massa placerat duis ultricies
      lacus. Et netus et malesuada fames ac turpis. Tortor posuere ac ut
      consequat semper viverra nam. Egestas maecenas pharetra convallis posuere
      morbi leo urna molestie at. Imperdiet nulla malesuada pellentesque elit
      eget gravida cum sociis.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoverosCard",
});
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-areas:
    "img txt"
    "img txt";
  margin-top: 10%;
  margin-left: 10%;
  width: 60%;
  border-radius: 0.5rem;
}

.img {
  grid-area: img;
}

.text {
  grid-area: txt;
}
</style>