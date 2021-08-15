<template>
  <div class="bg-grey-darkest home-background">
    <div
      ref="myName"
      class="name"
      :class="{ 'intro-anim': triggerIntroAnimation, 'hide-content': triggerHideAnimation }"
    >
      Ethan Painter
    </div>
    <div
      ref="myDescr"
      class="description"
      :class="{ 'intro-anim': triggerIntroAnimation, 'hide-content': triggerHideAnimation }"
    >
      Full Stack Web & Cloud Developer
    </div>
    <button
      ref="startButton"
      @click="startClick"
      class="btn start-btn"
      :class="{ 'intro-anim': triggerIntroAnimation, 'hide-content': triggerHideAnimation }"
    >
      Learn More
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      triggerIntroAnimation: true,
      triggerHideAnimation: false,
      startSelected: false,
    };
  },
  methods: {
    startClick() {
      this.startSelected = true;
      this.triggerIntoAnimation = false;
      this.triggerHideAnimation = true;

      setTimeout(() => {
        this.$router.push("start");
      }, 2000);
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
  &.hide-content {
    animation: hide-content 1.5s;
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
  &.hide-content {
    animation: hide-content 1.5s;
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
  &.hide-content {
    animation: hide-content 1.5s;
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
@keyframes hide-content {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
