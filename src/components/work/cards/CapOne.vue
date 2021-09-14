<template>
  <div class="container">
    <img class="img" src="src/assets/cards/capitalone.svg" />
    <h1 class="role">Senior Associate Software Engineer</h1>
    <h2 class="date">February 22nd, 2021 - PRESENT</h2>
    <ul class="text">
      <li>
        Developed backend microservice APIs in Java Spring Boot and NodeJS
        (TypeScript), and frontend features in Angular and VueJS
      </li>
      <li>
        Managed application vulnerabilities and coordinated efforts to resolve
        within allotted time periods
      </li>
      <li>Provisioned and deployed code to AWS ECS and EKS clusters</li>
      <li>
        Designed unit, functional, and performance tests for API business logic
        and performance metric validations
      </li>
      <li>
        Managed API versioning and Swagger documentation for major and minor
        updates for multiple APIs
      </li>
      <li>
        Created Flyway migrations for new tables and field changes to a
        PostgreSQL database
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CapOneCard",
});
</script>

<style scoped lang="scss">
.container {
  background: #60a5fa;
  display: grid;
  grid-template-areas:
    "img txt"
    "img txt"
    "role txt"
    "date txt";
  margin-top: 10%;
  margin-left: 10%;
  width: 60%;
  border-radius: 0.5rem;
}

.img {
  grid-area: img;
  justify-self: center;
  align-self: center;
  height: 15vh;
  margin: 3em;
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