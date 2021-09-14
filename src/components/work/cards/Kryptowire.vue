<template>
  <div class="container">
    <img class="img" src="src/assets/cards/kryptowire.png" />
    <h1 class="role">Mobile App Security Team Member</h1>
    <h2 class="date">August 28th 2017 - May 5th, 2018</h2>
    <ul class="text">
      <li>
        Participated with Kryptowire, LLC. in conjuction with George Mason
        University as a senior sponsored design project
      </li>
      <li>
        Researched available tools for decompiling Android applications into
        readable Smali code (readable format of binary Dalvik bytecode)
      </li>
      <li>
        Developed an official proposal including a work breakdown structure
        (WBS), a deliverable/task schedule, including regular meetings with
        special matter expert (SME) and customer
      </li>
      <li>
        Developed an android framework to disassemble Android APKs, inject code
        to modify functionality, and repackage to run on compatible Android
        devices
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "KryptowireCard",
});
</script>

<style scoped lang="scss">
.container {
  background: #34d399;
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
  height: 7vh;
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
  align-self: center;
}
</style>