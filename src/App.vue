<template>
  <MainView />
</template>

<script>
// component
import MainView from "./components/MainView.vue";

export default {
  name: "App",
  components: {
    MainView
  }
}
</script>

<style>
@import url("./assets/css/reset.css");
@import url("./assets/css/common.css");

@font-face {
  font-family: 'NotoSansKR-Regular';
  src: url('./assets/fonts/NotoSansKR-Regular.otf');
}
@font-face {
  font-family: 'Trirong-Regular';
  src: url('./assets/fonts/Trirong-Regular.ttf');
}
@font-face {
  font-family: 'Trirong-Medium';
  src: url('./assets/fonts/Trirong-Medium.ttf');
}

#app {
  width: 100%;
  color: #d2ad75;
  background-color: #1d1a1b;
  overflow-x: hidden;
  -ms-overflow-style: none;
  font-family: 'NotoSansKR-Regular', sans-serif;
}
::-webkit-scrollbar {
  display: none;
}

a {
  color: #d2ad75;
}
</style>
