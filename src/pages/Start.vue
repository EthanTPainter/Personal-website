<template>
  <div class="bg-grey-darkest start-background">
    <div class="main-container">
      <div ref="passions" class="passion-container intro-anim">
        <passion-thumbnail @thumbnail-click-event="handleSelectionClick"></passion-thumbnail>
      </div>
      <div class="barrier1"></div>
      <div ref="skills" class="skills-container intro-anim">
        <skills-thumbnail @thumbnail-click-event="handleSelectionClick"></skills-thumbnail>
      </div>
      <div class="barrier2"></div>
      <div ref="work" class="work-container intro-anim">
        <work-thumbnail @thumbnail-click-event="handleSelectionClick"></work-thumbnail>
      </div>
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
      passionSelected: false,
      skillsSelected: false,
      workSelected: false,
    };
  },
  methods: {
    handleSelectionClick(event) {
      if (!event || !event.type) {
        return;
      }
      const eventType = event.type;
      this.passionSelected = event.type === "passions";
      this.skillsSelected = event.type === "skills";
      this.workSelected = event.type === "work";

      // Hide other sections before transition to new page
      if (this.passionSelected) {
        console.log(this.$refs.skills);
        console.log(this.$refs.work);
        this.$refs.skills.classList.remove("intro-anim");
        this.$refs.work.classList.remove("intro-anim");
        this.$refs.skills.classList.add("hide-content");
        this.$refs.work.classList.add("hide-content");
      }
      if (this.skillsSelected) {
        console.log(this.$refs.passions);
        console.log(this.$refs.work);
      }
      if (this.workSelected) {
        console.log(this.$refs.passions);
        console.log(this.$refs.skills);
      }
 
      setTimeout(() => {
        // this.$router.push(eventType);
      }, 2000);
    },
  },
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
  opacity: 0;

  /* animation to show the content */
  &.intro-anim {
    animation: show-content 0.5s;
    animation-delay: 3s;
    animation-fill-mode: forwards;
  }

  &.hide-content {
    animation: hide-content 1s;
  }
}
.skills-container {
  min-height: 100vh;
  order: 2;
  width: 30%;
  display: flex;
  opacity: 0;

  /* animation to show the content */
  &.intro-anim {
    animation: show-content 0.5s;
    animation-delay: 3s;
    animation-fill-mode: forwards;
  }

  &.hide-content {
    animation: hide-content 1s;
  }
}
.work-container {
  min-height: 100vh;
  order: 4;
  width: 30%;
  display: flex;
  opacity: 0;

  /* animation to show the content */
  &.intro-anim {
    animation: show-content 0.5s;
    animation-delay: 3s;
    animation-fill-mode: forwards;
  }

  &.hide-content {
    animation: hide-content 1s;
  }
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
  animation: show-content 1s, barrier1-move-bars 2s alternate infinite;
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
  animation: show-content 1s, barrier2-move-bars 2s alternate infinite;
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
@keyframes barrier1-move-bars {
  0% {
    margin: 0% 2% 0 2%;
  }
  100% {
    margin: 50% 2% 0 2%;
  }
}
@keyframes barrier2-move-bars {
  0% {
    margin: 50% 2% 0 2%;
  }
  100% {
    margin: 0% 2% 0 2%;
  }
}
@keyframes hide-content {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
