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
    path: "/login",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/login", component: () => import("pages/LogInPage.vue") },
    ],
  },

  {
    path: "/account",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/account",
        component: () => import("pages/AccountPage.vue"),
      },
    ],
  },

  {
    path: "/notauthorized",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/notauthorized",
        component: () => import("pages/NotAuthorized.vue"),
      },
    ],
  },

  {
    path: "/signup",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/signup", component: () => import("pages/SignUpPage.vue") },
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
