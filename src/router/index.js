import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../components/Index.vue'),
    meta: { requiresAuth: false, guestOnly: false }
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import('../components/SignUp.vue'),
    meta: { requiresAuth: false, guestOnly: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
    meta: { requiresAuth: false, guestOnly: true }
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../components/EditProfile.vue'),
    meta: { requiresAuth: true, guestOnly: false }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isLoggedIn = authStore.isLoggedIn;

  if (to.meta.requiresAuth && !isLoggedIn) {
    alert("로그인이 필요합니다.");
    return next('/login');
  }

  if (to.meta.guestOnly && isLoggedIn) {
    return next('/');
  }

  next();
});

export default router;