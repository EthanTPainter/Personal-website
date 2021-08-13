<template>
  <div class="bg-grey-darkest start-background">
    <div class="main-container">
      <div class="passion-container">
        <passion-thumbnail></passion-thumbnail>
      </div>
      <div class="barrier1"></div>
      <div class="skills-container">
        <skills-thumbnail></skills-thumbnail>
      </div>
      <div class="barrier2"></div>
      <div class="work-container">
        <work-thumbnail></work-thumbnail>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PassionThumbnail from "../components/start/PassionThumbnail.vue";
import SkillsThumbnail from "../components/start/SkillsThumbnail.vue";
import WorkThumbnail from "../components/start/WorkThumbnail.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "StartPage",
  components: {
    PassionThumbnail,
    SkillsThumbnail,
    WorkThumbnail,
  },
  setup() {},
});
</script>

<style scoped lang="scss">
.start-background {
  min-height: 100vh;
  height: 100%;
}
.main-container {
  min-height: 100vh;
  display: flex;
}

/* Content Containers */
.passion-container {
  min-height: 100vh;
  order: 0;
  width: 30%;
  display: flex;
}
.skills-container {
  min-height: 100vh;
  order: 2;
  width: 30%;
  display: flex;
}
.work-container {
  min-height: 100vh;
  order: 4;
  width: 30%;
  display: flex;
}

/* Barrier Containers */
.barrier1 {
  order: 1;
  width: 0.2%;
  margin: 5% 2% 0 2%;
  max-height: 50vh;
  opacity: 0;
  border-radius: 2rem;
  background: rgb(214, 214, 214);
  animation: show-content 1s, move-bars 3s alternate infinite;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}
.barrier2 {
  order: 2;
  width: 0.2%;
  margin: 5% 2% 0 2%;
  max-height: 50vh;
  border-radius: 2rem;
  opacity: 0;
  background: rgb(255, 255, 255);
  animation: show-content 1s, move-bars 3s alternate infinite;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
}

/* Keyframes for showing barriers */
@keyframes show-content {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes move-bars {
  0% {
    margin: 0% 2% 0 2%;
  }
  100% {
    margin: 50% 2% 0 2%;
  }
}
</style>
