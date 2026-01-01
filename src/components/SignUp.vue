<template>
  <FixedLayout />
  <div class="signUp-wrap">
    <h3 class="page__title">sign up</h3>
    <form @submit.prevent="signUp" novalidate>
      <div class="inner">
        <label for="nickName">닉네임</label>
        <input 
          type="text" 
          id="nickName" 
          :value="nickName" 
          @input="e => nickName = e.target.value" 
          placeholder="닉네임을 입력해주세요. (2~9자)" 
          maxlength="8"
        >
        <span v-show="warningMessage1" class="message">닉네임은 최소 2자리 이상이어야 합니다.</span>
      </div>

      <div class="inner">
        <label for="email">아이디(이메일)</label>
        <input 
          type="email" 
          id="email" 
          :value="email" 
          @input="e => email = e.target.value" 
          placeholder="아이디(이메일)를 입력해주세요."
        >
        <span v-show="warningMessage2" class="message">올바르지 않은 이메일 양식입니다.</span>
      </div>

      <div class="inner">
        <label for="password">비밀번호</label>
        <input 
          type="password" 
          id="password" 
          :value="password" 
          @input="e => password = e.target.value" 
          placeholder="비밀번호를 입력해주세요."
        >
        <span v-show="warningMessage3" class="message">비밀번호는 최소 6자리 이상이어야 합니다.</span>
      </div>

      <div class="inner">
        <label for="passwordConfirm">비밀번호 확인</label>
        <input 
          type="password" 
          id="passwordConfirm" 
          :value="passwordConfirm" 
          @input="e => passwordConfirm = e.target.value" 
          placeholder="비밀번호를 다시 한 번 입력해주세요."
        >
        <span v-show="warningMessage4" class="message">비밀번호가 일치하지 않습니다.</span>
      </div>
    </form>

    <div class="btn-wrap">
      <button 
        class="submit-btn" 
        :class="{ disable: !isFormValid }" 
        @click="signUp" 
        :disabled="!isFormValid"
      >회원가입</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthStore } from '@/stores/auth';
import FixedLayout from "../components/FixedLayout.vue";

const router = useRouter();
const authStore = useAuthStore();
const auth = getAuth();

const nickName = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");

// 유효성 검사
const warningMessage1 = computed(() => nickName.value !== "" && nickName.value.length < 2);
const warningMessage2 = computed(() => email.value !== "" && !email.value.includes("@"));
const warningMessage3 = computed(() => password.value !== "" && password.value.length < 6);
const warningMessage4 = computed(() => passwordConfirm.value !== "" && passwordConfirm.value !== password.value);

// 가입 버튼 활성화 조건
const isFormValid = computed(() => {
  return (
    nickName.value.length >= 2 &&
    email.value.includes("@") &&
    password.value.length >= 6 &&
    password.value === passwordConfirm.value
  );
});

const signUp = async () => {
  if (!isFormValid.value) return;

  try {
    // 계정 생성
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // 닉네임 프로필 업데이트
    await updateProfile(user, { displayName: nickName.value });

    // 스토어 업데이트
    authStore.setUser({
      ...user,
      displayName: nickName.value
    });

    alert("[회원가입 완료] 환영합니다!");
    router.push("/"); 
  } catch (err) {
    const messages = {
      "auth/email-already-in-use": "이미 사용 중인 이메일입니다.",
      "auth/invalid-email": "잘못된 이메일 형식입니다.",
      "auth/weak-password": "비밀번호가 너무 취약합니다."
    };
    alert(messages[err.code] || "오류가 발생했습니다: " + err.message);
  }
};
</script>

<style scoped>
.signUp-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.signUp-wrap .page__title {
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 5rem;
}
.signUp-wrap form {
  width: 65%;
  max-width: 60rem;
}
.signUp-wrap .inner {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
}
.signUp-wrap .inner label {
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
}
.signUp-wrap .inner input {
  padding: 1rem;
  font-size: 1.3rem;
}
.signUp-wrap .inner .message {
  display: block;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #ff4d4d;
}
.signUp-wrap .btn-wrap {
  width: 65%;
  max-width: 60rem;
  margin-top: .6rem;
}
.signUp-wrap .submit-btn {
  width: 100%;
  padding: 1.4rem 0;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: #d2ad75;
}
.signUp-wrap .submit-btn.disable {
  color: #a1a1a1;
  background-color: #d4d4d4;
}

/* 반응형 */
@media screen and (max-width: 480px) {
  .signUp-wrap {
    padding-top: 3rem;
  }
  .signUp-wrap .page__title {
    font-size: 3.5rem;
  }
  .signUp-wrap form, .signUp-wrap .btn-wrap {
    width: 80%;
  }
}
</style>
