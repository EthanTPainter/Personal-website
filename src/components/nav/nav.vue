<template>
  <div class="nav-container">
    <div class="option">
      <h3
        @mouseover="mouseOver('home')"
        @mouseleave="mouseLeave()"
        @click="changeRoute('start')"
        class="option__text"
        :class="{
          option__active: isHomeRoute,
          option__mouseOver: showHomeBorder,
        }"
      >
        Home
      </h3>
    </div>
    <div class="option passions-option">
      <h3
        @mouseover="mouseOver('passion')"
        @mouseleave="mouseLeave()"
        @click="changeRoute('passions')"
        class="option__text"
        :class="{
          option__active: isPassionRoute,
          option__mouseOver: showPassionBorder,
        }"
      >
        Passions
      </h3>
    </div>
    <div class="option skills-option">
      <h3
        @mouseover="mouseOver('skill')"
        @mouseleave="mouseLeave()"
        @click="changeRoute('skills')"
        class="option__text"
        :class="{
          option__active: isSkillRoute,
          option__mouseOver: showSkillBorder,
        }"
      >
        Skills
      </h3>
    </div>
    <div class="option work-option">
      <h3
        @mouseover="mouseOver('work')"
        @mouseleave="mouseLeave()"
        @click="changeRoute('work')"
        class="option__text"
        :class="{
          option__active: isWorkRoute,
          option__mouseOver: showWorkBorder,
        }"
      >
        Work
      </h3>
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
    return {
      // route checking
      isHomeRoute: path.includes("start"),
      isPassionRoute: path.includes("passions"),
      isSkillRoute: path.includes("skills"),
      isWorkRoute: path.includes("work"),
      // Show Border vars
      showHomeBorder: false,
      showPassionBorder: false,
      showSkillBorder: false,
      showWorkBorder: false,
    };
  },
  methods: {
    mouseOver(navItem) {
      this.showHomeBorder = navItem === "home" ? true : false;
      this.showPassionBorder = navItem === "passion" ? true : false;
      this.showSkillBorder = navItem === "skill" ? true : false;
      this.showWorkBorder = navItem === "work" ? true : false;
    },
    mouseLeave() {
      this.showHomeBorder = false;
      this.showPassionBorder = false;
      this.showSkillBorder = false;
      this.showWorkBorder = false;
    },
    changeRoute(newPath) {
      // Need to add animation here to hide content
      this.$router.push(newPath);
    },
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato");

* {
  margin: 0;
  padding: 0;
}

.nav-container {
  display: flex;
  flex-direction: row;
}

.option {
  display: block;
  font-size: 1.2rem;
  font-family: Lato, sans-serif;
  padding: 0 2rem 0 2rem;

  &__text {
    position: relative;
    text-decoration: none;
    color: white;
    padding: 0rem 1rem;
    border-top: solid;
    border-left: solid;
    border-right: solid;
    border-bottom: solid;
    border-color: #111827;
    border-width: 2px;
    border-radius: 0.1rem;
    transition: border-left 0.3s ease-in 0.3s, border-right 0.3s ease-in 0.3s,
      border-top 0.3s ease-in;
  }

  &__active {
    border-bottom: 1px solid white;
    padding-bottom: 2px;
  }

  &__mouseOver {
    border: 2px solid;
    border-color: solid white;
    border-radius: 0.1rem;
  }
}

.white-filter {
  filter: invert(100%) sepia(0%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%);
}
</style>