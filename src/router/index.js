import { createRouter, createWebHistory } from 'vue-router';
import { getCurrentUser } from '@/services/auth';

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

router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser();
  
  console.log("Guard Auth Check:", user ? user.email : "No User");

  const isLoggedIn = !!user;
  const isGuestOnlyPage = to.meta.guestOnly; 
  const isAuthRequiredPage = to.meta.requiresAuth;

  // 이미 로그인했는데 가입/로그인 페이지 가려고 할 때
  if (isGuestOnlyPage && isLoggedIn) {
    alert("이미 로그인된 상태입니다.");
    return next('/');
  }

  // 로그인 안 했는데 수정 페이지 가려고 할 때
  if (isAuthRequiredPage && !isLoggedIn) {
    alert("로그인이 필요합니다.");
    return next('/login');
  }

  next();
});

export default router;