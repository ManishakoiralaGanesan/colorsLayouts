import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PersonalDetail from "./../components/PersonalDetail.vue";
import EducationalDetails from "./../components/EducationDetails.vue";
import Skills from "./../components/Skills.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/educational-detail",
    name: "EducationalDetails",
    component: EducationalDetails,
  },
  {
    path: "/personal-detail",
    name: "PersonalDetail",
    component: PersonalDetail,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
