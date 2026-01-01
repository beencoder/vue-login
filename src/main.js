import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from '@/stores/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAcgKVRK7v00jclp87pDpnXBJPVNmafkLw",
  authDomain: "vue-firebase-27018.firebaseapp.com",
  databaseURL: "https://vue-firebase-27018-default-rtdb.firebaseio.com",
  projectId: "vue-firebase-27018",
  storageBucket: "vue-firebase-27018.appspot.com",
  messagingSenderId: "744106227744",
  appId: "1:744106227744:web:c9ab4467f3b14c340f6445",
  measurementId: "G-32GP3JZB8V"
};

// Firebase 초기화
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

// 인증 상태 감지
const authStore = useAuthStore();

let isAppMounted = false;

onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    authStore.setUser(firebaseUser);
  } else {
    authStore.clearUser(); 
  }

  if (!isAppMounted) {
    app.use(router);
    app.mount('#app');
    isAppMounted = true;
  }
});