import { auth, isLoggedIn } from "@/middlewares";

export default [
  {
    path: "/",
    name: "IndexHome",
    component: () => import("../views/Index"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart"),
    meta: { layout: "AppLayoutDefault", middlewares: [auth] },
  },
  {
    path: "/modal",
    name: "Modal",
    component: () => import("../views/Modal"),
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile"),
    meta: { layout: "AppLayoutMain", middlewares: [auth] },
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../views/Orders"),
    meta: { layout: "AppLayoutMain", middlewares: [auth] },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
    meta: {
      middlewares: [isLoggedIn],
    },
  },
];
