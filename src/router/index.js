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
    name: "Entry",
    redirect: "/entries/c-homecoming",
  },
  {
    path: "/entries/:title",
    name: "Entries",
    beforeEnter: (to, from, next) => {
      function isValid(param) {
        switch (param) {
          case "c-homecoming":
            return 1;
          case "karera-pauwi":
            return 1;
          case "pila":
            return 1;
          case "little-things":
            return 1;
          case "false-hope":
            return 1;
          case "para-sa-kultura":
            return 1;
          case "panalangin":
            return 1;
          case "covered":
            return 1;
          case "hanggang-sa-muli":
            return 1;
          case "bagong-taon":
            return 1;
          case "id-120":
            return 1;
          case "what-was-what-is":
            return 1;
          case "siesta":
            return 1;
          case "yes-no":
            return 1;
          case "inside":
            return 1;
          case "time-travelling":
            return 1;
          case "time-split":
            return 1;
          case "tinig-ng-resistensya":
            return 1;
          case "kayod":
            return 1;
          case "before-the-pandemic":
            return 1;
          case "innocence-lost":
            return 1;
          case "iglot":
            return 1;
          case "lalabas-ka-ba":
            return 1;
          case "no-facemask-no-entry":
            return 1;
          case "a-month-apart":
            return 1;
          case "but-not-silenced":
            return 1;
          case "isolation":
            return 1;
          case "aliwan":
            return 1;
          case "nakakapanibagong-katahimikan":
            return 1;
          case "amidst-adversity":
            return 1;
          case "cost-of-education":
            return 1;
          case "distanced-unity":
            return 1;
          case "silent-voices":
            return 1;
          case "new-local-scene":
            return 1;
          case "full-gear":
            return 1;
          case "pagupit":
            return 1;
          default:
            return 0;
        }
      }

      if (!isValid(to.params.title)) {
        next({ name: "404" });
      }

      next();
    },
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
    name: "404",
    component: () =>
      import(/* webpackChunkName: "staffbox" */ "../views/404.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
