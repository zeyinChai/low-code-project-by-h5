import { createRouter, createWebHashHistory } from "vue-router";

import Editor from "../components/editor/index.vue";
import Canvas from "../components/canvas/index.vue";

const routes = [
  { path: "/", component: Editor },
  { path: "/about", component: Canvas },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
