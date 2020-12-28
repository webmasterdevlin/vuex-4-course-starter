import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";

const routerHistory = createWebHistory(process.env.BASE_URL);

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/heroes",
      name: "heroes",
      component: () => import("../views/Heroes"),
    },
    {
      path: "/anti-heroes",
      name: "anti-heroes",
      component: () => import("../views/AntiHeroes"),
    },
  ],
});
