<template>
  <div class="container">
    <img class="img" src="src/assets/cards/infinitive.svg" />
    <h2 class="role">Principal Full Stack Software Developer</h2>
    <h2 class="date">October 5th, 2020 - February 19th, 2021</h2>
    <ul class="text">
      <li>
        Developed an application to allow high school staff to request
        accommodations for students when taking accredited College Board exams
      </li>
      <li>
        Developed frontend features in TypeScript and React with Babel and
        Webpack
      </li>
      <li>
        Developed backend microservices in Python and NodeJS, and deployed to
        AWS via the Serverless Framework
      </li>
      <li>
        Created a custom authorizer and applied an authorization pattern for
        microservices for managing document processing, creation, and registry
      </li>
      <li>
        Maintained data consistency across NoSQL and legacy Oracle database
      </li>
      <li>
        Coordinated, deployed, and validated production releases for immediate
        production defects
      </li>
      <li>
        Provisioned and managed release candidate, or demo, environments for
        developing new features for expected production release schedules
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfinitiveCard",
});
</script>

<style scoped lang="scss">
.container {
  background: #d97706;
  display: grid;
  grid-template-areas:
    "img txt"
    "img txt"
    "role txt"
    "date txt";
  margin-top: 10%;
  margin-left: 30%;
  width: 60%;
  border-radius: 0.5rem;
}

.img {
  grid-area: img;
  justify-self: center;
  align-self: center;
  height: 9vh;
}
.role {
  grid-area: role;
  font-size: 1.2em;
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
}
</style>