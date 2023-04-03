import Vuex from "vuex";
// import * as Cookies from "js-cookie";
import persistedstate from "vuex-persistedstate";

export default new Vuex.Store({
  state: { // [변수 정의]
    user: localStorage.getItem("userInfo")
  },
  getters: { // [state의 변수들을 get호출]
    getUser: (state) => {
      return state.user;
    }
  },
  mutations: { // [변수들을 동기 처리하는 함수]
    login(state, info) {
      state.user = info;
      localStorage.setItem("userInfo", info);
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("userInfo");
    }
  },
  actions: { // [비동기 처리하는 함수]
    login({commit}, {email}) {
      commit("login", email, { root: true });
      // return true;
    },
    logout: ({ commit }) => {
      if (!confirm("로그아웃 하겠습니까?")) return true;
      commit("logout", { root: true });
      localStorage.removeItem("userInfo");
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
