import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

/**
 * constantRoutes
 * a base page that does not have permission requirements(不需要权限，所有用户都能看到)
 * all roles can accessed
 */
export const constantRoutes = [
  {
    path: "/",
    name: "home",
    component: Home
  }
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles(需要权限才能访问)
 */
export const asyncRoutes = [
  {
    path: "/about",
    name: "about",
    component: Home
  }
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

export default router;
