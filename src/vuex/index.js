import Vuex from "vuex";
// import * as Cookies from "js-cookie";
import persistedstate from "vuex-persistedstate";

export default new Vuex.Store({
  state: { // [변수 정의]
    user: sessionStorage.getItem("userInfo")
  },
  getters: { // [state의 변수들을 get호출]
    getUser: (state) => {
      return state.user;
    }
  },
  mutations: { // [변수들을 동기 처리하는 함수]
    login(state, info) {
      state.user = info;
      sessionStorage.setItem("userInfo", info);
    },
    logout(state) {
      state.user = null;
      sessionStorage.removeItem("userInfo");
    }
  },
  actions: { // [비동기 처리하는 함수]
    login: ({commit}, {email}) => {
      commit("login", email, { root: true });
      // return true;
    },
    logout: ({commit}) => {
      if (!confirm("로그아웃 하겠습니까?")) {
        return false;
      }
      commit("logout", { root: true });
      sessionStorage.removeItem("userInfo");
      alert("로그아웃되었습니다.");
      return true;
    }
  },
  plugins: [
    persistedstate({
      paths: ["token", "user"]
    })
  ]
});
