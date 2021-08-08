<template>
  <div class="bg-grey-darkest home-background">
    <div class="name">Ethan Painter</div>
    <div class="description">Full Stack Web & Cloud Developer</div>
    <button @click="$router.push('passions')" class="btn passion-btn">Passions</button>
    <button @click="$router.push('work')" class="btn work-btn">Work</button>
    <button @click="$router.push('skills')" class="btn skill-btn">Skills</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      opacity: 0,
      clickCounter: 0,
      showedName: false,
      showedDescription: false,
    };
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home-background {
  min-height: 100vh;
}
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
  animation: show-text 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
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
  animation: show-text 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

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
  animation: show-text 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
.passion-btn {
  top: 80%;
  left: 20%;
}
.work-btn {
  top: 80%;
  left: 50%;
}
.skill-btn {
  top: 80%;
  left: 80%;
}

@keyframes show-text {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
