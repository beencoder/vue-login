<template>
  <div class="main-wrap">
    <header :class="{active: changeColor}" class="header">
      <p class="member"><span v-if="userName" class="member__name">{{ userName }}</span><span v-else class="member__name">방문자</span>님, 반가워요 :)</p>
      <div @click="focusMenu = !focusMenu" :class="{active: focusMenu}" class="menu-btn">
        <span :class="{active: changeColor}" class="menu-btn__line top"></span>
        <span :class="{active: changeColor}" class="menu-btn__line bottom"></span>
      </div>
    </header>
    <div class="header__bg"></div>

    <nav :class="{active: focusMenu}" class="nav">
      <ul class="menu">
        <li>
          <router-link to="/">home</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link :to="{name: 'SignUp', params: {id: 'kimdabeen'}}">sign up</router-link>
        </li>
        <li v-else>
          <router-link to="/edit">edit info</router-link>
        </li>
        <li v-if="!isLoggedIn">
           <router-link to="/login">login</router-link>
        </li>
        <li v-else>
          <button @click="logout">logout</button>
        </li>
      </ul>
    </nav>

    <div class="side__left"></div>
    <div class="side__right"></div>
  </div>
</template>

<script>
import store from "../vuex";

export default {
  name: "FixedLayout",
  data() {
    return {
      userName: store.state.user,
      focusMenu: false,
      login: false,
      changeColor: false
    };
  },
  computed: {
    isLoggedIn() {
      return store.state.user || false;
    }
  },
  created() {
  },
  mounted() {
    window.addEventListener("transitionend", this.touchContent);
  },
  methods: {
    touchContent() {
      let headerBottom = document.querySelector(".header").getBoundingClientRect().bottom; // 60
      let navBottom = document.querySelector(".nav").getBoundingClientRect().bottom; // 700

      if (navBottom > 0) {
        this.changeColor = true;
      } else if (navBottom < headerBottom) {
        this.changeColor = false;
      }
    },

    logout() {
      store.dispatch("logout").then((res) => {
        if (res) this.$router.push("/login");
      });
    }
  }
};
</script>

<style scoped>
.main-wrap .header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 6rem;
  padding: 0 2.5rem;
  border-bottom: 1px solid #d2ad75;
  background-color: transparent;
  z-index: 100;
  transition: all .15s;
}
.main-wrap .header.active {
  border-bottom-color: #1d1a1b;
}
.main-wrap .header .member {
  font-size: 1.4rem;
  margin-right: 3rem;
}
.main-wrap .header.active .member {
  color: #1d1a1b;
}
.main-wrap .header .member .member__name {
  text-decoration: underline;
}
.main-wrap .header .menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: 2.5rem;
  transition: transform .4s cubic-bezier(.075, .82, .165, 1);
}
.main-wrap .header .menu-btn:hover {
  transform: scale3d(0.6, 1, 1);
}
.main-wrap .header .menu-btn.active .menu-btn__line.top {
  transform: translate3d(0, 0.6rem, 0);
}
.main-wrap .header .menu-btn.active .menu-btn__line.bottom {
  transform: translate3d(0, -0.6rem, 0);
}
.main-wrap .header .menu-btn .menu-btn__line {
  display: inline-block;
  width: 100%;
  height: 2px;
  background-color: #d2ad75;
  transition: transform .4s cubic-bezier(0.075, 0.82, 0.165, 1), background-color 0s;
}
.main-wrap .header .menu-btn .menu-btn__line.active {
  background-color: #1d1a1b;
}

.main-wrap .nav {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: -110%;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: #d2ad75;
  z-index: 50;
  transition: top 1.2s cubic-bezier(.99, .03, .66, .83);
}
.main-wrap .nav.active {
  top: 0;
}
.main-wrap .nav .menu {
  display: flex;
  flex-direction: column;
  margin-left: 9rem;
}
.main-wrap .nav .menu li {
  width: fit-content;
  overflow: hidden;
}
.main-wrap .nav .menu li > *  {
  position: relative;
  display: block;
  width: fit-content;
  margin-right: 2rem;
  margin-bottom: 3rem;
  font-size: 14.5rem;
  color: #1d1a1b;
  letter-spacing: -0.2rem;
  font-family: 'Trirong-Regular', serif;
  font-style: italic;
  text-transform: uppercase;
  transform: translate3d(0, 140%, 0) rotateZ(7deg);
  transition: transform 1.4s .4s cubic-bezier(.99, .03, .66, .83);
}
.main-wrap .nav .menu li:last-of-type > * {
  margin-bottom: 0;
}
.main-wrap .nav.active .menu li > * {
  transform: translate3d(0, 0, 0) rotateZ(0deg);
}
.main-wrap .nav .menu li > *::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: #1d1a1b;
  transform: scale3d(0, 1, 1);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(.92, .06, .44, .62);
}
.main-wrap .nav .menu li:hover > *::before {
  transform: scale3d(1, 1, 1);
  transform-origin: left;
}

.main-wrap .header__bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 6rem;
  background-color: #1d1a1b;
  z-index: 10;
}
.main-wrap .side__left, .side__right {
  position: fixed;
  top: 0;
  width: 8.5rem;
  height: 100vh;
  margin-top: 6rem;
  background-color: #1d1a1b;
  z-index: 10;
}
.main-wrap .side__left {
  left: 0;
  border-right: 1px solid #d2ad75;
}
.main-wrap .side__right {
  right: 0;
  border-left: 1px solid #d2ad75;
}

/* 반응형 */
@media screen and (max-width: 1024px) {
  .main-wrap .nav .menu {
    margin-left: 5.5rem;
  }
  .main-wrap .nav .menu li > *  {
    font-size: 12rem;
  }
  .main-wrap .side__left, .side__right {
    width: 5rem;
  }
}

@media screen and (max-width: 768px) {
  .main-wrap .nav .menu {
    margin-left: 4.5rem;
  }
  .main-wrap .nav .menu li > *  {
    font-size: 8rem;
  }
  .main-wrap .side__left, .side__right {
    width: 4rem;
  }
}

@media screen and (max-width: 480px) {
  .main-wrap .header .menu-btn {
    width: 3rem;
    height: 2rem;
  }
  .main-wrap .nav .menu {
    margin-left: 3rem;
  }
  .main-wrap .nav .menu li > *  {
    font-size: 5rem;
  }
  .main-wrap .side__left, .side__right {
    display: none;
  }
  .main-wrap .header .menu-btn.active .menu-btn__line.top {
    transform: translate3d(0, 0.5rem, 0);
  }
  .main-wrap .header .menu-btn.active .menu-btn__line.bottom {
    transform: translate3d(0, -0.5rem, 0);
  }
}
</style>
