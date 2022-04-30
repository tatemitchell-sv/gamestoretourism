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
    path: "/searchresults",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/searchresults",
        component: () => import("src/pages/SearchPage.vue"),
      },
    ],
  },

  {
    path: "/browse",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/browse", component: () => import("pages/BrowsePage.vue") },
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
