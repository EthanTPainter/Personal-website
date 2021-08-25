<template>
  <div class="nav-container">
    <div class="option" :class="{ }">
      <img
        v-if="isHomeRoute"
        src="src/assets/iconmonstr-play-thin.svg"
        class="white-filter" />
      <h3>{{ homeText }}</h3>
    </div>
    <div class="option passions-option">
      <img
        v-if="isPassionRoute"
        src="src/assets/iconmonstr-play-thin.svg"
        class="white-filter"
      />
      <h3>{{ passionText }}</h3>
    </div>
    <div class="option skills-option">
      <img
        v-if="isSkillRoute"
        src="src/assets/iconmonstr-play-thin.svg"
        class="white-filter"
      />
      <h3>{{ skillText }}</h3>
    </div>
    <div class="option work-option">
      <img
        v-if="isWorkRoute"
        src="src/assets/iconmonstr-play-thin.svg"
        class="white-filter"
      />
      <h3>{{ workText }}</h3>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Nav",
  data() {
    const path = useRoute().path;
    const isHomeRoute = path.includes("start");
    const isPassionRoute = path.includes("passions");
    const isSkillRoute = path.includes("skills");
    const isWorkRoute = path.includes("work");
    return {
      // valid routes
      isHomeRoute,
      isPassionRoute,
      isSkillRoute,
      isWorkRoute,
      // Default text
      homeText: "H",
      passionText: "P",
      skillText: "S",
      workText: "W",
    };
  },
  setup() {},
});
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.option {
  display: block;
}

.white-filter {
  filter: invert(100%) sepia(0%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%);
}
</style>