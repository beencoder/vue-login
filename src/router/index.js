import { createWebHistory, createRouter } from "vue-router";
import MainView from "../components/MainView.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import Edit from "../components/EditProfile.vue";

const routes = [
  {
    path: "/",
    name: "MainView",
    component: MainView
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
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
