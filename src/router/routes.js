const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/search",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/search", component: () => import("pages/SearchPage.vue") },
    ],
  },

  {
    path: "/store/:id",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/store/:id",
        component: () => import("pages/StoreDetailsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
