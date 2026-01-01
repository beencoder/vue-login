import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(router);

// Firebase 인증 상태가 결정된 후에 마운트
onAuthStateChanged(auth, () => {
  if (!app._instance) {
    app.mount('#app');
  }
});

// 다른 탭에서의 로그인/로그아웃 상태 변화 감지
window.addEventListener('storage', (event) => {
  if (event.key === 'userInfo' || event.key?.includes('auth')) {
    if (event.oldValue !== event.newValue) {
      window.location.reload();
    }
  }
});
