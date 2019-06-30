const commonLayout = () => import("layouts/Common.vue");

const menuRoutes = {
  path: "/",
  component: commonLayout,
  children: [
    {
      path: "",
      name: "home",
      component: () => import("pages/Index.vue"),
      meta: {
        title: "home",
        icon: "home",
        role: ["all"],
        noCache: true
      }
    },
    {
      path: "userinfo",
      name: "user-info",
      component: () => import("pages/UserInfo.vue"),
      meta: {
        title: "User Informations",
        icon: "face",
        role: ["all"],
        noCache: true
      }
    }
  ]
};

const routes = [menuRoutes];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
