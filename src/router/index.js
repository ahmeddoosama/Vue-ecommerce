import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminRoutes from "../router/routes/AdminRoutes/index";

Vue.use(VueRouter);

const baseRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const routes = [...baseRoutes, ...AdminRoutes]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
