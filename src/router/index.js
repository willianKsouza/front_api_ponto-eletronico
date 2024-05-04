
import { createRouter, createWebHistory, } from "vue-router";
import TimeSheetForm from "@/views/timeSheet/TimeSheetForm.vue";
import Home from "@/views/home/Home.vue";
import HomeEmployee from "@/layouts/home/HomeEmployee.vue";
import Configuration from "@/views/config/Configuration.vue";


// const routes = [
//   {
//     path: "/",
//     component: () => import("@/layouts/login/FormLoginLayout.vue"),
//     children: [
//       {
//         path: "",
//         name: "Login",
//         component: () => import("@/views/login/FormLogin.vue"),
//       },
//     ],
//   },
//   {
//     path: "/home",
//     component: HomeEmployee,
//     children: [
//       {
//         path: "",
//         name: "Home",
//         component:Home,

//         children: [
//           {
//             path: "/timesheet",
//             name: "TimeSheetForm",
//             component: TimeSheetForm,
//           },
//           {
//             path: "/configuration",
//             name: "Configuration",
//             component: Configuration,
//           },
//         ],
//       },
//     ],
//   },
// ];

const routes = [
  {
    path:"/",
    component: () => import("@/layouts/home/HomeEmployee.vue"),
    children:[
      {
        path: "",
        name: "Login",
        component: () => import("@/views/login/FormLogin.vue"),
      },
      {
        path: "/home",
        name: "Home",
        component:Home,
        children: [
              {
                path: "/timesheet",
                name: "TimeSheetForm",
                component: TimeSheetForm,
              },
              {
                path: "/configuration",
                name: "Configuration",
                component: Configuration,
              },
        ],
      },
    ]
  }
]




// const routes = [
//   {
//     path: "/",
//     component: HomeEmployee,
//     children: [
//       {
//         path: "",
//         name: "Home",
//         component:Home,

//         children: [
//           {
//             path: "/timesheet",
//             name: "TimeSheetForm",
//             component: TimeSheetForm,
//           },
//           {
//             path: "/configuration",
//             name: "Configuration",
//             component: Configuration,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "/login",
//     component: () => import("@/layouts/login/FormLoginLayout.vue"),
//     children: [
//       {
//         path: "",
//         name: "Login",
//         component: () => import("@/views/login/FormLogin.vue"),
//       },
//     ],
//   },
// ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
