<template>
  <div class="bg-grey-darkest home-background">
    <div ref="myName" class="name intro-anim">Ethan Painter</div>
    <div ref="myDescr" class="description intro-anim">Full Stack Web & Cloud Developer</div>
    <button ref="startButton" @click="startClick" class="btn start-btn intro-anim">Start</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      startSelected: false,
    };
  },
  methods: {
    startClick() {
      this.startSelected = true;
      // Remove intro animation from name, description, and button
      this.$refs.myName.classList.remove("intro-anim");
      this.$refs.myDescr.classList.remove("intro-anim");
      this.$refs.startButton.classList.remove("intro-anim");

      // Add new hide animation
      this.$refs.myName.classList.add("hide-content");
      this.$refs.myDescr.classList.add("hide-content");
      this.$refs.myName.classList.add("hide-content");

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
  top: 35%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: "Lobster";
  font-size: 8rem;
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
  text-align: center;
  opacity: 0;
  top: 55%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: "Lobster";
  font-size: 3rem;
  color: hsl(171, 17%, 92%);
  /* animation to show the text */
  &.intro-anim {
    animation: show-text 1s;
    animation-delay: 7s;
    animation-fill-mode: forwards;
  }
  /* animation to hide the content */
  &.hide-content {
    animation: hide-content 1.5s;
  }
}
.start-btn {
  top: 75%;
  left: 50%;
  transition: padding 1s ease-out;

  &:hover {
    padding: 0 5%;
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
@keyframes hide-content {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
