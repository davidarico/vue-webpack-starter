import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Journal from '../views/Journal.vue'
import Cooking from '../views/Cooking.vue'
import Training from '../views/Training.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/journal",
    name: "journal",
    component: Journal,
  },
  {
    path: "/cooking",
    name: "cooking",
    component: Cooking,
  },
  {
    path: "/training",
    name: "training",
    component: Training,
  }
];

const router = new VueRouter({
  routes,
});

export default router;