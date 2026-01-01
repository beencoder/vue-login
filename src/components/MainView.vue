<template>
  <FixedLayout />
  <section class="main">
    <div class="container">
      <div class="title-inner">
        <h2 class="title">kimdabeen</h2>
      </div>
      <div class="round-box">
        <div class="eye-inner">
          <span class="eye"></span>
          <span class="eye"></span>
        </div>
        <svg class="mouth" xmlns="http://www.w3.org/2000/svg" width="59" height="15" viewBox="0 0 59 15" fill="currentcolor">
          <path d="M29.5 15.0001C45.1967 15.0001 54.236 7.93116 59 1.55185L56.9845 0.00012195C51.3043 5.86219 42.6315 10.1151 29.5 10.1151C16.3685 10.1151 7.69565 5.86219 2.01553 0.000118672L-9.25456e-08 1.55184C4.76397 7.93115 13.8033 15.0001 29.5 15.0001Z" fill="#currentcolor"></path>
        </svg>
      </div>
    </div>

    <div class="container">
      <div class="title-inner">
        <h2 class="title">ui developer &</h2>
      </div>
      <router-link v-if="show" to="/signUp"></router-link>
    </div>

    <div class="container">
      <router-link v-if="!authStore.isLoggedIn" class="round-box btn" to="/signUp">Sign Up</router-link>
      <router-link v-else class="round-box btn" to="/edit">Edit Info</router-link>
      <div class="title-inner">
        <h2 class="title">front-end</h2>
      </div>
    </div>

    <div class="container">
      <div class="title-inner">
        <h2 class="title">developer</h2>
      </div>
      <router-link v-if="!authStore.isLoggedIn" class="round-box btn" to="/login">Login</router-link>
      <button v-else @click="handleLogout" class="round-box btn">Logout</button>
    </div>
  </section>

  <section class="about">
    <p class="about__text">안녕하세요, 마크업 위에 GSAP과 다양한 API로 생동감을 불어넣는 UI 개발자 김다빈입니다. <br>계획적인 성격 덕분에 탭, 아코디언 하나를 만들어도 예외 케이스까지 꼼꼼히 챙기는 것을 좋아합니다. 단순히 기능만 구현하는 데 그치지 않고, MongoDB나 Firebase 같은 데이터를 연결해 서비스의 완성도를 높이는 과정에서 즐거움을 찾고 있습니다. 매일 쏟아지는 새로운 기술들 속에서도 기본기를 잃지 않고 유연하게 소통하며 함께 성장하고 싶습니다.</p>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signOut } from "firebase/auth"; 
import { useAuthStore } from '@/stores/auth';
import FixedLayout from "../components/FixedLayout.vue";

const router = useRouter();
const authStore = useAuthStore();
const auth = getAuth(); 
const show = ref(false);

const loadPage = () => {
  const titles = document.querySelectorAll(".title-inner .title");
  const roundBtn = document.querySelectorAll(".round-box");

  setTimeout(() => {
    titles.forEach(item => {
      item.style.transform = "translate3d(0, 0, 0) rotateZ(0deg)";
    });
  }, 300);

  setTimeout(() => {
    roundBtn.forEach(item => {
      item.style.opacity = "1";
      item.style.transform = "translateX(0)";
    });
  }, 1200);
};

const moveElement = (e) => {
  const eyes = document.querySelectorAll(".eye, .mouth");
  const limit = 15;
  const calcValue = (mouse, size) => (((mouse / size) * limit) - (limit / 2)).toFixed(1);

  const xValue = calcValue(e.clientX, window.innerWidth);
  const yValue = calcValue(e.clientY, window.innerHeight);

  eyes.forEach((item) => {
    item.style.transform = `translateX(${xValue * 0.8}px) translateY(${yValue * 0.8}px)`;
  });
};

// 로그아웃
const handleLogout = async () => {
  if (!confirm("로그아웃 하시겠습니까?")) return;

  try {
    await signOut(auth); 
    
    // 스토어 비우기
    authStore.clearUser(); 
    
    alert("로그아웃되었습니다.");
    router.push("/login");
  } catch (error) {
    console.error("로그아웃 에러:", error);
    alert("로그아웃 처리 중 오류가 발생했습니다.");
  }
};

onMounted(() => {
  loadPage();
  window.addEventListener("mousemove", moveElement);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", moveElement);
});
</script>

<style scoped>
section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-bottom: 1px solid #d2ad75;
}
section:nth-of-type(2) {
  height: 50vh;
}
.main {
  padding-top: 6rem;
}
.main .container {
  display: flex;
}
.main .container .title-inner {
  overflow: hidden;
}
.main .container:first-of-type .title-inner {
  padding: 0 2rem;
}
.main .container .title-inner .title {
  font-size: 13rem;
  line-height: 1;
  letter-spacing: -0.2rem;
  font-family: 'Trirong-Regular', serif;
  text-transform: uppercase;
  text-align: center;
  transform: translate3d(0, 140%, 0) rotateZ(7deg);
  transition: all 1s cubic-bezier(.05, .96, .8, .98);
}
.main .container:first-of-type .title-inner .title {
  font-style: italic;
}
.main .container *.round-box {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
  color: #d2ad75;
  border-radius: 50%;
  border: 1px solid #d2ad75;
  backdrop-filter: blur(4.2px);
  overflow: hidden;
  opacity: 0;
  z-index: 5;
  transition: transform .2s, color .2s;
}
.main .container:first-of-type div.round-box {
  left: -4%;
  justify-content: space-evenly;
  transform: translateY(-400%);
}
.main .container:nth-of-type(3) *.round-box.btn {
  right: -4%;
  transform: translateX(-400%);
}
.main .container:nth-of-type(4) *.round-box.btn {
  left: -5%;
  transform: translateX(400%);
}
.main .container .round-box.btn {
  font-size: 1.8rem;
}
.main .container .round-box.btn:hover {
  color: #1d1a1b;
}
.main .container .round-box.btn::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -103%;
  width: 15rem;
  height: 15rem;
  background-color: #d2ad75;
  transition: bottom .5s cubic-bezier(.05, .96, .8, .98);
  z-index: -1;
}
.main .container .round-box.btn:hover::before {
  bottom: 0;
}
.main .container .round-box .eye-inner {
  margin-top: 1.5rem;
}
.main .container .round-box .eye-inner .eye {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 1.5rem;
  border-radius: 50%;
  background-color: #d2ad75;
}
.main .container:first-of-type .round-box:hover .eye-inner .eye {
  animation: eyes 0.3s;
}
/* .main .container .round-box .mouth {
  display: block;
  width: 4rem;
  height: 0.5rem;
  background-color: #d2ad75;
} */
.about {
  padding: 20px 0;
}
.about .about__text {
  width: 70%;
  font-size: 1.8rem;
  line-height: 2;
}

@keyframes eyes {
  0%, 60% {
    height: 1.5rem;
  }
  30%, 100% {
    height: 0.2rem;
  }
}

:root {
  --content-size: fit-content;
}

/* 반응형 */
@media screen and (max-width: 1280px) {
  .main .container .title-inner .title {
    font-size: 10rem;
  }
  .main .container .round-box, .main .container .round-box.btn::before {
    width: 13rem;
    height: 13rem;
  }
}

@media screen and (max-width: 1024px) {
  section:first-of-type {
    height: 90vh;
  }
  .main .container .title-inner .title {
    font-size: 8rem;
  }
  .main .container .round-box, .main .container .round-box.btn::before {
    width: 10rem;
    height: 10rem;
  }
  .main .container .round-box .eye-inner .eye {
    width: 1.1rem;
    height: 1.1rem;
    margin: 0 1.1rem;
  }
  .main .container .round-box.btn {
    font-size: 1.4rem;
  }
}

@media screen and (max-width: 768px) {
  section:first-of-type {
    height: 70vh;
  }
  section:nth-of-type(2) {
  height: 80vh;
}
  .main .container .title-inner .title {
    font-size: 4.8rem;
  }
  .main .container .title-inner .title, .main .container:first-of-type .title-inner .title {
    line-height: 1.5;
  }
  .main .container .round-box {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .main .container .title-inner .title {
    font-size: 3.8rem;
  }
  .about .about__text {
    width: 85%;
  }
}   
</style>
