<template>
  <div class="start-background">
    <div class="main-container">
      <div
        ref="passions"
        class="passion-container intro-anim"
        :class="{
          'intro-anim': triggerIntroAnimation,
          'hide-content': triggerHideAnimation.includes('passions'),
        }"
      >
        <passion-thumbnail
          @thumbnail-click-event="handleSelectionClick"
        ></passion-thumbnail>
      </div>
      <div
        ref="skills"
        class="skills-container"
        :class="{
          'intro-anim': triggerIntroAnimation,
          'hide-content': triggerHideAnimation.includes('skills'),
        }"
      >
        <skills-thumbnail
          @thumbnail-click-event="handleSelectionClick"
        ></skills-thumbnail>
      </div>
      <div
        ref="work"
        class="work-container"
        :class="{
          'intro-anim': triggerIntroAnimation,
          'hide-content': triggerHideAnimation.includes('work'),
        }"
      >
        <work-thumbnail
          @thumbnail-click-event="handleSelectionClick"
        ></work-thumbnail>
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
      // Section selected vars
      passionSelected: false,
      skillsSelected: false,
      workSelected: false,
      // Show/Hide animation vars
      triggerIntroAnimation: true,
      triggerHideAnimation: [],
    };
  },
  methods: {
    async handleSelectionClick(event) {
      if (!event || !event.type) {
        return;
      }
      const eventType = event.type;
      this.passionSelected = eventType === "passions";
      this.skillsSelected = eventType === "skills";
      this.workSelected = eventType === "work";

      // Hide two sections not selected
      this.passionSelected ? null : this.triggerHideAnimation.push("passions");
      this.skillsSelected ? null : this.triggerHideAnimation.push("skills");
      this.workSelected ? null : this.triggerHideAnimation.push("work");

      // Wait and hide the last remaining section
      await this.delay(1500);
      this.passionSelected ? this.triggerHideAnimation.push("passions") : null;
      this.skillsSelected ? this.triggerHideAnimation.push("skills") : null;
      this.workSelected ? this.triggerHideAnimation.push("work") : null;

      setTimeout(() => {
        this.$router.push(eventType);
      }, 1000);
    },
    delay(time) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    },
  },
});
</script>

<style scoped lang="scss">
.start-background {
  background: #111827;
  min-height: 100vh;
}
.main-container {
  padding-top: 2rem;
}

/* Content Containers */
.passion-container {
  opacity: 0;
  max-height: 25vh;

  /* animation to show the content */
  &.intro-anim {
    animation: show-content 0.5s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  &.hide-content {
    animation: hide-content 1s;
  }
}
.skills-container {
  opacity: 0;
  max-height: 25vh;

  /* animation to show the content */
  &.intro-anim {
    animation: show-content 0.5s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  &.hide-content {
    animation: hide-content 1s;
  }
}
.work-container {
  opacity: 0;
  max-height: 25vh;

  /* animation to show the content */
  &.intro-anim {
    animation: show-content 0.5s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  &.hide-content {
    animation: hide-content 1s;
  }
}

/* Keyframes for showing/hiding text */
@keyframes show-content {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
