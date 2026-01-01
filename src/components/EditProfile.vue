<template>
  <FixedLayout />
  <div v-if="!isLoading" class="edit-wrap">
    <h3 class="page__title">edit info</h3>
    <form @submit.prevent="changeName" novalidate>
      <div class="inner">
        <label for="nickName">닉네임</label>
        <input 
          type="text" 
          id="nickName" 
          :value="newNickName" 
          @input="e => newNickName = e.target.value" 
          placeholder="닉네임을 입력해주세요. (2~9자)" 
          maxlength="9"
        >
        <span v-show="warningMessage" class="message">닉네임은 최소 2자리 이상이어야 합니다.</span>
      </div>
      <div class="inner">
        <label for="email">아이디(이메일)</label>
        <input type="email" id="email" :value="email" disabled>
      </div>
    </form>

    <div class="right">
      <button 
        class="submit-btn" 
        :class="{ disable: isButtonDisabled }" 
        @click="changeName" 
        :disabled="isButtonDisabled"
      >회원정보 수정</button>
    </div>
  </div>

  <div v-else class="loading-state">
    <p>정보를 확인 중입니다...</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, updateProfile } from "firebase/auth";
import { useAuthStore } from '@/stores/auth';
import { getCurrentUser } from '@/services/auth';
import FixedLayout from "../components/FixedLayout.vue";

const router = useRouter();
const authStore = useAuthStore();
const auth = getAuth();

const newNickName = ref("");
const email = ref("");
const currentDisplayName = ref("");
const isLoading = ref(true);

// 유효성 검사
const warningMessage = computed(() => newNickName.value !== "" && newNickName.value.length < 2);
const isButtonDisabled = computed(() => {
  return warningMessage.value || newNickName.value === "" || newNickName.value === currentDisplayName.value;
});

onMounted(async () => {
  try {
    const user = await getCurrentUser();
    
    if (user) {
      newNickName.value = user.displayName || "";
      email.value = user.email || "";
      isLoading.value = false; 
    } else {
      authStore.logout();
      router.push("/login");
    }
  } catch (error) {
    router.push("/login");
  }
});

const changeName = async () => {
  if (isButtonDisabled.value) return;

  const user = auth.currentUser;
  if (user) {
    try {
      await updateProfile(user, {
        displayName: newNickName.value
      });

      authStore.login(newNickName.value);
      
      alert("프로필 수정을 완료하였습니다!");
      router.push("/");
    } catch (err) {
      alert("수정 중 오류가 발생했습니다: " + err.message);
    }
  }
};
</script>

<style scoped>
.edit-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0 25%;
}
.edit-wrap .page__title {
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 5rem;
}
.edit-wrap .inner {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
}
.edit-wrap .inner label {
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
}
.edit-wrap .inner input {
  padding: 1rem;
  font-size: 1.4rem;
}
.edit-wrap .inner .message {
  display: block;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #ff4d4d;
}
.edit-wrap .right {
  margin-top: .6rem;
  text-align: right;
}
.edit-wrap .submit-btn {
  width: 100%;
  padding: 1.4rem 0;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: #d2ad75;
}
.edit-wrap .submit-btn.disable {
  color: #a1a1a1;
  background-color: #d4d4d4;
}

/* 반응형 */
@media screen and (max-width: 480px) {
  .edit-wrap {
    margin: 0 12%;
  }
  .edit-wrap .page__title {
    font-size: 3.5rem;
  }
  .edit-wrap .inner {
    margin-bottom: 1.5rem;
  }
  .edit-wrap .inner label, .edit-wrap .submit-btn {
    font-size: 1.3rem;
  }
  .edit-wrap .inner input {
    font-size: 1.2rem;
  }
}
</style>
