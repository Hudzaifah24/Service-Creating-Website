import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/client",
      name: "client",
      component: () => import("../views/ClientView.vue"),
    },
    {
      path: "/website",
      name: "website",
      component: () => import("../views/WebsiteView.vue"),
    },
    {
      path: "/android",
      name: "android",
      component: () => import("../views/AndroidView.vue"),
    },

    // AUTH
    {
      path: "/register",
      name: "register",
      component: () => import("../views/auth/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/LoginView.vue"),
    },
  ],
});

export default router;
