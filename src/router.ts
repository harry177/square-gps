import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "./pages/AboutPage.vue";
import MapPage from "./pages/MapPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: AboutPage },
    { path: "/map", component: MapPage },
  ],
});

export default router;