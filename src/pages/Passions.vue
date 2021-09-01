<template>
  <div class="passion-bg">
    <Nav class="nav"></Nav>
    <ImageRotation
      @arrow-click-event="handleArrowClick"
      class="images"
    ></ImageRotation>
    <TextRotation
      class="text"
      v-bind:suppliedText="currentDynamicText"
    ></TextRotation>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "../components/nav/nav.vue";
import ImageRotation from "../components/passions/ImageRotation.vue";
import TextRotation from "../components/passions/TextRotation.vue";

export default defineComponent({
  name: "PassionsPage",
  components: {
    Nav,
    ImageRotation,
    TextRotation,
  },
  data() {
    const dynamicText = [
      "First",
      "Second",
      "Third",
      "Fourth",
      "Fifth",
      "Sixth",
      "Seventh",
      "Eigth",
    ];
    const currentCount = 0;
    return {
      currentCount,
      currentDynamicText: dynamicText[currentCount],
      dynamicText,
    };
  },
  methods: {
    handleArrowClick(event: { left: boolean; right: boolean }) {
      console.log(`Event: ${JSON.stringify(event)}`);
      if (event.left) {
        if (this.currentCount === 0) {
          this.currentCount = 7;
        } else {
          this.currentCount -= 1;
        }
      }
      if (event.right) {
        if (this.currentCount === 7) {
          this.currentCount = 0;
        } else {
          this.currentCount += 1;
        }
      }
      console.log(this.currentCount);
      this.currentDynamicText = this.dynamicText[this.currentCount];
    },
  },
});
</script>

<style scoped>
.passion-bg {
  background: #111827;
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    "nav"
    "images"
    "images"
    "txt"
    ".";
}

.nav {
  padding: 2rem 0 0 3rem;
  grid-area: nav;
}
.images {
  grid-area: images;
}
.text {
  grid-area: txt;
}
</style>