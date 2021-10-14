import Vue from "vue";
import VueRouter from "vue-router";
import Word from "@/views/Word";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/words"
  },
  {
    path: "/words",
    name: "Word",
    component: Word
  },
  {
    path: "/sentences",
    name: "Sentence",
    component: () => import("../views/Sentence")
  },
  {
    path: "/examples",
    name: "Example",
    component: () => import("../views/Example")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
