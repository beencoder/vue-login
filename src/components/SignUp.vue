<template>
  <FixedLayout />
  <div class="signUp-wrap">
    <h3 class="page__title">sign up</h3>
    <form novalidate>
      <div class="inner">
        <label for="nickName">닉네임</label>
        <input type="text" id="nickName" :value="nickName" @input="e => (nickName = e.target.value)" placeholder="닉네임을 입력해주세요. (2~9자)" maxlength="8">
        <span v-show="warningMessage1" class="message">닉네임은 최소 2자리 이상이어야 합니다.</span>
      </div>
      <div class="inner">
        <label for="email">아이디(이메일)</label>
        <input type="email" id="email" :value="email" @input="e => (email = e.target.value)" placeholder="아이디(이메일)를 입력해주세요.">
        <span v-show="warningMessage2" class="message">올바르지 않은 이메일 양식입니다.</span>
      </div>
      <div class="inner">
        <label for="password">비밀번호</label>
        <input type="password" id="password" :value="password" @input="e => (password = e.target.value)" placeholder="비밀번호를 입력해주세요.">
        <span v-show="warningMessage3" class="message">비밀번호는 최소 6자리 이상이어야 합니다.</span>
      </div>
      <div class="inner">
        <label for="passwordConfirm">비밀번호 확인</label>
        <input type="password" id="passwordConfirm" :value="passwordConfirm" @input="e => (passwordConfirm = e.target.value)" placeholder="비밀번호를 다시 한 번 입력해주세요.">
        <span v-show="warningMessage4" class="message">비밀번호가 일치하지 않습니다.</span>
      </div>
    </form>

    <div class="btn-wrap">
      <button class="submit-btn" :class="{disable: activated === false}" @click="signUp" :disabled="activated !== true">회원가입</button>
    </div>
  </div>
</template>

<script>
import FixedLayout from "../components/FixedLayout.vue";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "SignUp",
  components: {
    FixedLayout
  },
  props: {
    id: {
      type: String,
      default: "방문자"
    }
  },
  data() {
    return {
      nickName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      activated: false,
      warningMessage1: false,
      warningMessage2: false,
      warningMessage3: false,
      warningMessage4: false,
      user: {}
    };
  },
  watch: {
    nickName: function (value) {
      if (value !== "" && value.length < 2) {
        this.warningMessage1 = true;
        this.activated = false;
      } else this.warningMessage1 = false;

      this.checkedInput(value, this.email, this.password, this.passwordConfirm);
    },
    email: function (value) {
      if (value !== "" && value.includes("@") === false) {
        this.warningMessage2 = true;
        this.activated = false;
      } else this.warningMessage2 = false;

      this.checkedInput(this.nickName, value, this.password, this.passwordConfirm);
    },
    password: function (value) {
      if (value !== "" && value.length < 6) {
        this.warningMessage3 = true;
        this.activated = false;
      } else this.warningMessage3 = false;

      if (value !== this.passwordConfirm && this.passwordConfirm !== "") this.warningMessage4 = true;
      else this.warningMessage4 = false;

      this.checkedInput(this.nickName, this.email, value, this.passwordConfirm);
    },
    passwordConfirm: function (value) {
      if (value !== "" && value !== this.password) {
        this.warningMessage4 = true;
        this.activated = false;
      } else this.warningMessage4 = false;

      this.checkedInput(this.nickName, this.email, this.password, value);
    }
  },
  methods: {
    checkedInput(value1, value2, value3, value4) {
      if (value1.length >= 2 && value2.includes("@") && value3.length >= 6 && value4 === this.password) this.activated = true;
    },

    signUp() {
      const { email, password } = this;

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
          result.user.updateProfile({
            displayName: this.nickName
          });
          alert("[회원가입 완료] 환영합니다!");
          this.$router.push("/login");
        })
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
              return alert("이미 사용 중인 이메일입니다.");
            case "auth/network-request-failed":
              return alert("네트워크 연결에 실패하였습니다.");
            case "auth/invalid-email":
              return alert("잘못된 이메일 형식입니다.");
            case "auth/internal-error":
              return alert("잘못된 요청입니다.");
            default:
              return alert(err.message);
          }
        });
    }
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
  margin-bottom: 2rem;
}
.signUp-wrap .inner label {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}
.signUp-wrap .inner input {
  padding: 1rem;
  font-size: 1.3rem;
}
.signUp-wrap .btn-wrap {
  width: 65%;
  max-width: 60rem;
  margin-top: 1rem;
}
.signUp-wrap .submit-btn {
  width: 100%;
  padding: 1rem 0;
  font-size: 1.4rem;
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
