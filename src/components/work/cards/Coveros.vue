<template>
  <div class="container">
    <img class="img" src="src/assets/cards/Coveros.png" />
    <h1 class="role">Software Development Intern</h1>
    <h2 class="date">June 5th 2017 - August 4th, 2017</h2>
    <ul class="text">
      <li>
        Developed open source, hybrid, mobile application for a future mobile
        app testing course
      </li>
      <li>
        Created and maintained continuous integration (CI) pipeline for
        building, testing, and deployment through Jenkins
      </li>
      <li>
        Simulated Agile experience with designated Special Matter Expert (SME),
        scrum master, scrum team, and customer
      </li>
      <li>Certified in Agile processes/practices via IC Agile (June 2017)</li>
      <li>
        Presented a demo of the project and discussed internship experience to
        all members of the company during a company All Hands.
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoverosCard",
});
</script>

<style scoped lang="scss">
.container {
  background: #2563eb;
  display: grid;
  grid-template-areas:
    "img txt"
    "img txt"
    "role txt"
    "date txt";
  margin-top: 10em;
  margin-left: 12em;
  width: 60%;
  border-radius: 0.5rem;
}

.img {
  grid-area: img;
  justify-self: center;
  align-self: center;
  height: 17vh;
  margin: 3em;
}
.role {
  grid-area: role;
  font-size: 1.2em;
  margin-top: -1em;
  justify-self: center;
  align-self: start;
}
.date {
  grid-area: date;
  font-size: 1em;
  justify-self: center;
  align-self: start;
  margin-bottom: 1.5em;
}
.text {
  grid-area: txt;
  align-self: center;
}
</style>