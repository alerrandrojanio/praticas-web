import {
  createWebHashHistory,
  createRouter,
} from "vue-router";
 
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import Cadastrar from "@/views/Cadastrar.vue";
 
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    props: true,
  },
  {
    path: "/cadastrar",
    name: "Cadastrar",
    component: Cadastrar,
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];
 
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
 
export default router;
