import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";

// Vue.config.productionTip = false;

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   router,
//   components: { App },
//   template: "<App/>"
// });

const app = createApp(App);
app.use(router);
app.mount('#app');
