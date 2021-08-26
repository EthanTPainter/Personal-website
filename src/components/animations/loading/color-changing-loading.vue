<template>
  <div class="loader"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ColorChangingLoadingAnimation",
});
</script>

<style scoped>
@keyframes changeBg {
  to {
    filter: hue-rotate(360deg);
  }
}
.loader {
  position: absolute;
  width: 150px;
  height: 150px;
  background: linear-gradient(to top, #001d30 40%, #51eeee);
  border-radius: 50%;
  animation: rotate 2.5s linear infinite;
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
.loader::before {
  content: "";
  position: absolute;
  background: #001d30;
  inset: 20px 20px 0 0;
  border-radius: 50%;
}
.loader::after {
  content: "";
  position: absolute;
  top: 50px;
  right: -8px;
  height: 40px;
  width: 40px;
  background: #51eeee;
  border-radius: 50%;
  box-shadow: 0 0 5px #51eeee, 0 0 25px #51eeee, 0 0 50px #51eeee, 0 0 75px #51eeee;
}
</style>
