import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(sessionStorage.getItem("userInfo"));
  const getUser = computed(() => user.value);
  const isLoggedIn = computed(() => !!user.value);

  function login(email) {
    user.value = email;
    sessionStorage.setItem("userInfo", email);
  }

  function logout() {
    if (!confirm("로그아웃 하겠습니까?")) return false;
    
    user.value = null;
    sessionStorage.removeItem("userInfo");
    alert("로그아웃되었습니다.");
    return true;
  }

  return { user, getUser, isLoggedIn, login, logout };
}, {
  persist: true // 플러그인 설정 시 자동 저장
});