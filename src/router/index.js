
import { createRouter, createWebHistory } from "vue-router";
import TimeSheetForm from "@/views/timeSheet/TimeSheetForm.vue";
import Home from "@/views/home/Home.vue";
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/home/HomeEmployee.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:Home,
        children: [
          {
            path: "",
            name: "FormTimeSheet",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: TimeSheetForm,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/layouts/login/FormLoginLayout.vue"),
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("@/views/login/FormLogin.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
