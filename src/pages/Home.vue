<template>
  <div class="bg-grey-darkest home-background">
    <div
      ref="myName"
      class="name"
      :class="{
        'intro-anim': triggerIntroAnimation,
        'hide-text-anim': triggerHideAnimation,
      }"
    >
      Ethan Painter
    </div>
    <div
      ref="myDescr"
      class="description"
      :class="{
        'intro-anim': triggerIntroAnimation,
        'hide-text-anim': triggerHideAnimation,
      }"
    >
      Full Stack Web & Cloud Developer
    </div>
    <button
      ref="startButton"
      @click="startClick"
      :disabled="startSelected"
      class="btn"
      :class="{
        'intro-anim': triggerIntroAnimation,
        'hide-btn-anim': triggerHideBtnAnimation,
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
      startSelected: false,
    };
  },
  methods: {
    async startClick() {
      /* Hide intro text and reposition btn */
      this.startSelected = true;
      this.triggerIntroAnimation = false;
      this.triggerHideAnimation = true;

      /* Redirect to new page */
      setTimeout(() => {
        this.$router.push("start");
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
  top: 65%;
  left: 30%;
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
</style>
