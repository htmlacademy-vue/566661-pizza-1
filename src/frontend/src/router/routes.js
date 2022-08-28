export default [
  {
    path: "/",
    name: "IndexHome",
    component: () => import("../views/Index"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login"),
      },
    ],
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart"),
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/my-profile",
    name: "Profile",
    component: () => import("../views/Profile"),
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../views/Orders"),
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/account/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
];
