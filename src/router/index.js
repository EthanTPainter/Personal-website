import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home.vue";
import PassionsPage from "../pages/Passions.vue";
import SkillsPage from "../pages/Skills.vue";
import WorkPage from "../pages/Work.vue";
import ConnectPage from "../pages/Connect.vue";

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
    path: "/connect",
    name: "Connect",
    component: ConnectPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
