import Vue from "vue";
import VueRouter from "vue-router";
import Word from "@/views/Word";
import WordRecite from "@/views/WordRecite";
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
    path: "/word-recite",
    name: "Word",
    component: WordRecite,
    children: [
      {
        path: "detail",
        component: () => import("../components/WordRecite/WordDetail")
      },
      {
        path: "sum",
        component: () => import("../components/WordRecite/WordSummary")
      }
    ]
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
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
