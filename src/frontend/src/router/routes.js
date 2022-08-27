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
    //TODO можно как то вывести по другому еще компонент на отдельной странице??? Можно хотя бы ссылку кинуть плиз, чтобы не объяснять, если можно по другому
    path: "/account/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
];
