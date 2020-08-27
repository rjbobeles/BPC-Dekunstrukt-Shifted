import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Home from "../views/Home.vue";

// Styles
import "@/assets/tailwind/tailwind.css";
import "@/assets/scss/style.scss";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/acknowledgement",
    name: "Acknowledgement",
    component: () =>
      import(
        /* webpackChunkName: "acknowledgement" */ "../views/Acknowledgement.vue"
      ),
  },
  {
    path: "/entries",
    name: "Entries",
    component: () =>
      import(/* webpackChunkName: "entries" */ "../views/Entries.vue"),
  },
  {
    path: "/editors-note",
    name: "Editor's Note",
    component: () =>
      import(/* webpackChunkName: "editorsnote" */ "../views/EditorsNote.vue"),
  },
  {
    path: "/staffbox",
    name: "Staffbox",
    component: () =>
      import(/* webpackChunkName: "staffbox" */ "../views/Staffbox.vue"),
  },
  {
    path: "/contributors",
    name: "Contributors",
    component: () =>
      import(
        /* webpackChunkName: "contributors" */ "../views/Contributors.vue"
      ),
  },
  {
    path: "/404",
    name: "Page not found!",
    component: () =>
      import(/* webpackChunkName: "staffbox" */ "../views/404.vue"),
  },
  {
    path: "404",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
