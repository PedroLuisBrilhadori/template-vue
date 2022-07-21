import { createRouter, createWebHistory } from "vue-router";
import ViteTemplate from "./views/vite-template.vue";

const routes = [{ component: ViteTemplate, path: "/", name: "ViteTemplate" }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
