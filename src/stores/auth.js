import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);

  const isLoggedIn = computed(() => !!user.value);
  const userNickname = computed(() => user.value?.displayName || '방문자');

  function setUser(userData) {
    user.value = userData;
  }

  function clearUser() {
    user.value = null;
  }

  function logout() {
    return confirm("로그아웃 하시겠습니까?");
  }

  return { user, isLoggedIn, userNickname, setUser, clearUser, logout };
});