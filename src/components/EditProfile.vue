<template>
  <FixedLayout />
  <div class="edit-wrap">
    <h3 class="page__title">edit info</h3>
    <form novalidate>
      <div class="inner">
        <label for="nickName">닉네임</label>
        <input type="text" id="nickName" :value="newNickName" @input="e => (newNickName = e.target.value)" placeholder="닉네임을 입력해주세요. (2~9자)" maxlength="9">
        <span v-show="warningMessage" class="message">닉네임은 최소 2자리 이상이어야 합니다.</span>
      </div>
      <div class="inner">
        <label for="email">아이디(이메일)</label>
        <input type="email" id="email" :value="email" disabled>
      </div>
    </form>

    <div class="right">
      <button class="submit-btn" :class="{disable: warningMessage || newNickName === ''}" @click="changeName" :disabled="warningMessage || newNickName === ''">회원정보 수정</button>
    </div>
  </div>
</template>

<script>
import FixedLayout from "../components/FixedLayout.vue";
import firebase from "firebase/app";
import "firebase/auth";
import store from "../vuex";

export default {
  name: "Edit",
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
      newNickName: "",
      email: "",
      warningMessage: false
    };
  },
  watch: {
    newNickName: function (value) {
      if (value !== "" && value.length < 2) this.warningMessage = true;
      else this.warningMessage = false;
    }
  },
  created() {
  },
  mounted() {
    this.findUser();
  },
  methods: {
    findUser() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user !== null) {
          this.newNickName = user.displayName;
          this.email = user.email;
          }
      });
    },

    async changeName() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user !== null) {
          user.updateProfile({
            displayName: this.newNickName
          }).then(() => {
            alert("프로필 수정을 완료하였습니다!");
            store.state.user = this.newNickName;
            sessionStorage.setItem("userInfo", this.newNickName);
            this.$router.push("/");
          }).catch((err) => {
            alert(err.message);
          });
        }
      });
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
  margin-bottom: 2rem;
}
.edit-wrap .inner label {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}
.edit-wrap .inner input {
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}
.edit-wrap .right {
  text-align: right;
}
.edit-wrap .submit-btn {
  width: 100%;
  padding: 1rem 0;
  font-size: 1.4rem;
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
