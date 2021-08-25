<template>
  <div class="work-bg bg-grey-darkest">
    <Nav class="nav"></Nav>
    <IntroWorkCard></IntroWorkCard>
    <CapOneCard></CapOneCard>
    <InfinitiveCard></InfinitiveCard>
    <SingleCommCard></SingleCommCard>
    <KryptowireCard></KryptowireCard>
    <CoverosCard></CoverosCard>
    <Nav class="bottom-nav"></Nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "../components/nav/nav.vue";
import IntroWorkCard from "../components/work/Intro.vue";
import CapOneCard from "../components/work/cards/CapOne.vue";
import InfinitiveCard from "../components/work/cards/Infinitive.vue";
import SingleCommCard from "../components/work/cards/SingleComm.vue";
import KryptowireCard from "../components/work/cards/Kryptowire.vue";
import CoverosCard from "../components/work/cards/Coveros.vue";

export default defineComponent({
  name: "WorkPage",
  components: {
    Nav,
    IntroWorkCard,
    CapOneCard,
    InfinitiveCard,
    SingleCommCard,
    KryptowireCard,
    CoverosCard,
  },
  setup() {},
});
</script>

<style scoped>
.work-bg {
  min-height: 100vh;
}

.nav {
  padding: 2rem 0 0 3rem;
}

.bottom-nav {
  flex-direction: row-reverse;
  padding: 0 0 2rem 3rem;
  margin-top: 10%;
}
</style>