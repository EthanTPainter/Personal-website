import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home.vue";
import PassionsPage from "../pages/Passions.vue";
import SkillsPage from "../pages/Skills.vue";
import WorkPage from "../pages/Work.vue";
import StartPage from "../pages/Start.vue";
import NotFoundPage from "../pages/NotFound.vue";
import ColorChangingLoadingAnimation from "../pages/Loading.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/passions",
    name: "Passions",
    component: PassionsPage,
  },
  {
    path: "/skills",
    name: "Skills",
    component: SkillsPage,
  },
  {
    path: "/work",
    name: "Work",
    component: WorkPage,
  },
  {
    path: '/start',
    name: "Start",
    component: StartPage
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundPage,
  },
  // Testing components
  {
    path: "/loading",
    name: "Loading",
    component: ColorChangingLoadingAnimation
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
