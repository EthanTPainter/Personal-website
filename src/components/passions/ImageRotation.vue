<template>
  <div class="image-container">
    <div class="left">
      <img class="image image__side" src="src/assets/passions/airplay.svg" />
    </div>
    <div class="main">
      <img
        class="image image__arrows"
        src="src/assets/passions/chevrons-left.svg"
        @click="emitLeftArrowClick"
      />
      <img class="image image__main" src="src/assets/passions/wifi.svg" />
      <img
        class="image image__arrows"
        src="src/assets/passions/chevrons-right.svg"
        @click="emitRightArrowClick"
      />
    </div>
    <div class="right">
      <img class="image image__side" src="src/assets/passions/music.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageRotation",
  emits: ["arrow-click-event"],
  methods: {
    emitLeftArrowClick() {
      console.log("LEFT ARROW CLICK");
      this.$emit("arrow-click-event", {
        left: true,
        right: false,
      });
    },
    emitRightArrowClick() {
      console.log("RIGHT ARROW CLICK");
      this.$emit("arrow-click-event", {
        left: false,
        right: true,
      });
    },
  },
});
</script>

<style scoped lang="scss">
.image-container {
  display: grid;
  grid-template-areas: "leftImg mainImg rightImg";
}

.left {
  grid-area: leftImg;
  display: flex;
  justify-content: center;
}
.main {
  grid-area: mainImg;
  display: flex;
  justify-content: center;
}
.right {
  grid-area: rightImg;
  display: flex;
  justify-content: center;
}

.image {
  filter: invert(100%);

  &__side {
    width: 30%;
    filter: invert(40%);
  }

  &__arrows {
    width: 15%;
    filter: invert(80%);
  }

  &__main {
    width: 70%;
  }
}
</style>