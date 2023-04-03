<template>
  <FixedLayout />
  <div class="login-wrap">
    <h3 class="page__title">login</h3>
    <div class="inner">
      <label for="email">아이디(이메일)</label>
      <input type="email" id="email" :value="email" @input="e => (email = e.target.value)" placeholder="아이디(이메일)를 입력해주세요.">
    </div>
    <div class="inner">
      <label for="password">비밀번호</label>
      <input type="password" id="password" :value="password" @input="e => (password = e.target.value)" placeholder="비밀번호를 입력해주세요.">
    </div>

    <button class="guide" @click="openModal()">비밀번호를 잊으셨나요?</button>

    <div class="right">
      <button class="btn" @click="login">로그인</button>
      <router-link class="btn" to="/signUp">가입하기</router-link>
    </div>
  </div>

  <!-- 모달창 -->
  <div class="modal-wrap" v-if="showModal">
    <div class="modal">
      <h4 class="modal__title">비밀번호 재설정</h4>
      <input type="email" id="modalEmail" :value="modalEmail" @input="e => (modalEmail = e.target.value)" placeholder="아이디(이메일)를 입력해주세요.">
      <span v-show="warningMessage" class="message">올바르지 않은 이메일 양식입니다.</span>
      <div class="btn-wrap">
        <button class="submit-btn" :class="{disable: warningMessage || modalEmail === ''}" @click="resetPassword()" :disabled="warningMessage || modalEmail === ''">Submit</button>
        <button @click="closeModal()">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import FixedLayout from "../components/FixedLayout.vue";
import firebase from "firebase/app";
import "firebase/auth";
import store from "../vuex";

export default {
  name: "Login",
  components: {
    FixedLayout
  },
  data() {
    return {
      email: "",
      modalEmail: "",
      password: "",
      showModal: false,
      warningMessage: false
    };
  },
  watch: {
    modalEmail: function (value) {
      if (value !== "" && value.includes("@") === false) this.warningMessage = true;
      else this.warningMessage = false;
    }
  },
  created() {

  },
  methods: {
    login() {
      const { email, password } = this;

      if (!email) {
        alert("아이디(이메일)을 입력해주세요.");
        return;
      }
      if (!password) {
        alert("비밀번호를 입력해주세요.");
        return;
      }

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          store.dispatch("login", {
            email: user.user.displayName
          });
          alert("[로그인 완료] 환영합니다!");
          this.$router.push("/index");
        })
        .catch((err) => {
          switch (err.code) {
            case "auth/user-not-found" || "auth/wrong-password":
              return alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
            case "auth/network-request-failed":
              return alert("네트워크 연결에 실패하였습니다.");
            case "auth/internal-error":
              return alert("잘못된 요청입니다.");
            default:
              return alert(err.message);
          }
        });
    },

    openModal() {
      this.showModal = true;
      document.body.classList.add("scroll-off");
    },

    async resetPassword() {
      try {
        await firebase.auth().sendPasswordResetEmail(this.modalEmail);
        alert("비밀번호 재설정 메일을 보냈습니다! 메일함을 확인해주세요.");
        this.showModal = false;
      } catch (err) {
        switch (err.code) {
          case "auth/user-not-found":
            return alert("가입되어 있지 않은 이메일입니다.");
          case "auth/invalid-email":
            return alert("올바르지 않은 이메일 양식입니다.");
          default:
            return alert(err.message);
        }
      }
    },

    closeModal() {
      this.showModal = false;
      document.body.classList.remove("scroll-off");
    }
  }
};
</script>

<style scoped>
.login-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0 25%;
}
.login-wrap .page__title {
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 5rem;
}
.login-wrap .inner {
  display: flex;
  flex-direction: column;
}
.login-wrap .inner label {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}
.login-wrap .inner input {
  padding: 1rem;
  font-size: 1.3rem;
}
.login-wrap .inner:first-of-type input {
  margin-bottom: 2rem;
}
.login-wrap .guide {
  font-size: 1rem;
  text-align: left;
  color: #d2ad75;
  margin: 1rem 0 2rem;
}
.login-wrap .right {
  display: flex;
  justify-content: space-between;
}
.login-wrap .btn {
  width: 49%;
  padding: 1rem 0;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  color: #1d1a1b;
  background-color: #d2ad75;
}

.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
}
.modal-wrap .modal {
  position: relative;
  width: 40rem;
  height: 18rem;
  padding: 1.5rem;
  color: #1d1a1b;
  background-color: #d2ad75;
}
.modal-wrap .modal .modal__title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #1d1a1b;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #1d1a1b;
}
.modal-wrap .modal input {
  width: calc(100% - 2rem);
  padding: 1rem;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #1d1a1b;
  border-bottom: 1px solid #1d1a1b;
  background-color: transparent;
}
.modal-wrap .modal .btn-wrap {
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  display: flex;
  justify-content: flex-end;
}
.modal-wrap .modal .btn-wrap button {
  font-size: 1.2rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid #1d1a1b;
  border-radius: 0.3rem;
}
.modal-wrap .modal .btn-wrap .submit-btn {
  margin-right: 0.5rem;
}
.modal-wrap .modal .btn-wrap .submit-btn.disable {
  color: #a1a1a1;
  background-color: #d4d4d4;
}

/* 반응형 */
@media screen and (max-width: 480px) {
  .login-wrap {
    margin: 0 12%;
  }
  .login-wrap .page__title {
    font-size: 3.5rem;
  }
  .login-wrap .inner label, .login-wrap .btn {
    font-size: 1.3rem;
  }
  .login-wrap .inner input {
    font-size: 1.2rem;
  }
  .login-wrap .inner:first-of-type input {
    margin-bottom: 1.5rem;
  }
}
</style>
