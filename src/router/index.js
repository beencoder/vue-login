import { createWebHistory, createRouter } from "vue-router";
import Index from "../components/Index.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import Edit from "../components/EditProfile.vue";

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "Index",
    component: Index
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: SignUp,
    props: true
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;