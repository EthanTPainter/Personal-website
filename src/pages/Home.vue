<template>
  <div class="bg-grey-darkest home-background">
    <div ref="myName" class="name" :class="{ 'intro-anim': triggerIntroAnimation, 'hide-text-anim': triggerHideAnimation }">
      Ethan Painter
    </div>
    <div
      ref="myDescr"
      class="description"
      :class="{ 'intro-anim': triggerIntroAnimation, 'hide-text-anim': triggerHideAnimation }"
    >
      Full Stack Web & Cloud Developer
    </div>
    <button
      ref="startButton"
      @click="startClick"
      :disabled="startSelected"
      class="btn start-btn"
      :class="{
        'intro-anim': triggerIntroAnimation,
        'reposition-btn-anim': triggerRepositionBtnAnimation,
        'hide-btn-anim': triggerHideBtnAnimation,
        'quick-hide-btn-anim': triggerQuickHideBtnAnimation,
        'quick-show-btn-anim': triggerQuickShowBtnAnimation,
        'change-btn-text-anim': triggerUpdatedText,
      }"
    >
      {{ btnText }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      btnText: "Learn More",
      triggerIntroAnimation: true,
      triggerHideAnimation: false,
      triggerRepositionBtnAnimation: false,
      triggerHideBtnAnimation: false,
      triggerQuickHideBtnAnimation: false,
      triggerQuickShowBtnAnimation: false,
      triggerUpdatedText: false,
      startSelected: false,
    };
  },
  methods: {
    async startClick() {
      /* Hide intro text and reposition btn */
      this.startSelected = true;
      this.triggerIntroAnimation = false;
      this.triggerHideAnimation = true;
      this.triggerRepositionBtnAnimation = true;

      /* Trigger quick hide animation, change text, and quick show */
      await this.delay(2000);
      this.triggerQuickHideBtnAnimation = true;

      /* Wait for hide btn animation to execute */
      await this.delay(500);
      this.btnText = "Starting now...";
      this.triggerQuickShowBtnAnimation = true;

      /* Trigger hide animation */
      await this.delay(2500);
      this.triggerQuickShowBtnAnimation = false;
      this.triggerHideBtnAnimation = true;

      /* Redirect to new page */
      setTimeout(() => {
        this.$router.push("start");
      }, 2000);
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Background styling */
.home-background {
  min-height: 100vh;
}
/* Text CSS */
.name {
  position: absolute;
  opacity: 0;
  top: 10%;
  left: 2%;
  font-family: "Lobster";
  font-size: 15rem;
  color: hsl(171, 17%, 92%);

  /* animation to show the text */
  &.intro-anim {
    animation: show-text 1.5s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }

  /* animation to hide the content */
  &.hide-text-anim {
    animation: hide-text 0.75s;
  }
}
.description {
  position: absolute;
  opacity: 0;
  top: 45%;
  left: 2%;
  font-family: "Lobster";
  font-size: 6rem;
  color: hsl(171, 17%, 92%);

  /* animation to show the text */
  &.intro-anim {
    animation: show-text 1s;
    animation-delay: 4s;
    animation-fill-mode: forwards;
  }

  /* animation to hide the content */
  &.hide-text-anim {
    animation: hide-text 0.75s;
  }
}

/* Button CSS */
.btn {
  border: solid;
  border-radius: 5px;
  padding: 15px;
  position: absolute;
  text-align: center;
  opacity: 0;
  font-family: "Lobster";
  font-size: 3rem;
  color: hsl(171, 17%, 92%);

  /* animation to show the text */
  &.intro-anim {
    animation: show-text 1s;
    animation-delay: 5s;
    animation-fill-mode: forwards;
  }
  /* animation to hide the content */
  &.hide-btn-anim {
    opacity: 1;
    animation: hide-btn .8s;
    animation-fill-mode: forwards;
  }

  &.reposition-btn-anim {
    opacity: 1;
    animation: reposition-btn 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  &.quick-hide-btn-anim {
    top: 40%;
    scale: 1.5;
    animation: hide-btn 0.5s;
    animation-fill-mode: forwards;
  }
  &.quick-show-btn-anim {
    top: 40%;
    scale: 1.5;
    opacity: 0;
    animation: show-btn 0.7s;
    animation-delay: .2s;
    animation-fill-mode: forwards;
  }
}
.start-btn {
  top: 65%;
  left: 30%;
}

/* Keyframes for showing text */
@keyframes show-text {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* Having trouble reversing above animation via onClick,
so creating a separate one for easier control */
@keyframes hide-text {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes hide-btn {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes show-btn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* Keyframes to reposition button */
@keyframes reposition-btn {
  100% {
    scale: 1.5;
    top: 40%;
  }
}
</style>
