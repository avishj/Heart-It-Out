<template>
  <b-container fluid class="app-home">
    <Navbar />
    <b-img
      class="px--3 pt--2 image--main d-block mx-auto"
      fluid
      :src="require('../assets/img/HomeCard.png')"
    ></b-img>
    <div class="text-center text-color-b text-c1">4 SEPTEMBER - 6 SEPTEMBER</div>
  </b-container>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "Home",
  components: {
    Navbar
  }
};
</script>

<style>
.container-fluid {
  padding: 0 !important;
  margin: 0 !important;
}
.px--3 {
  padding-left: 3vw;
  padding-right: 3vw;
}
.pt--2 {
  padding-top: 2vw;
}
.image--main {
  min-width: 94vw;
}
.text-c1 {
  font-family: "Bison Bold";
  font-size: 3rem;
}
</style>