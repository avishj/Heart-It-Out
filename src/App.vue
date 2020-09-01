<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="sass">
@import "./assets/scss/custom-bootstrap.scss";
@import "../node_modules/bootstrap/scss/bootstrap";
@import "../node_modules/bootstrap-vue/src/index.scss";
</style>

<style>
@font-face {
  font-family: "Bison Bold";
  src: url("./assets/fonts/Bison-Bold.ttf");
}
</style>
