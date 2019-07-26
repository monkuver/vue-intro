import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/Layout.vue";
import Login from "./views/Login.vue";
import store from "@/store";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      component: Layout,
      name: "layout",
      beforeEnter(to, from, next) {
        console.log(store.getters.checkUser);
        store.getters.checkUser ? next() : next("/login");
      },
      children: [
        {
          path: "reddit",
          component: () => import("./views/Reddits.vue")
        },
        {
          path: "github",
          component: () => import("./views/Github.vue")
        },
        {
          path: "so",
          component: () => import("./views/StackOverflow.vue")
        },
        {
          path: "settings",
          component: () => import("./views/Settings.vue")
        }
      ]
    },
    {
      path: "*",
      component: () => {
        console.log("Not found");
      }
    }
  ]
});
