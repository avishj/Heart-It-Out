<template>
  <b-container fluid class="app-home">
    <Navbar />
    <b-img
      class="px--3 pt--2 image--main d-block mx-auto"
      fluid
      :src="require('../assets/img/HomeCard.png')"
    ></b-img>
    <div class="text-center text-color-b text-c1 my--2">4 SEPTEMBER - 6 SEPTEMBER</div>
    <b-row no-gutters class="my--2" cols="1" cols-md="2">
      <b-col class="col-custom mx-auto">
        <b-button
          class="text-c2 btn-custom"
          block
          size="lg"
          variant="outline-color-c"
          v-scroll-to="{el: '#rules', easing: 'ease'}"
        >RULES</b-button>
      </b-col>
      <b-col class="col-custom mx-auto">
        <b-button block class="text-c2 btn-custom" size="lg" variant="color-c">REGISTER</b-button>
      </b-col>
    </b-row>
    <br />
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
/* .mx--3 {
  margin-left: 3vw;
  margin-right: 3vw;
} */
.pt--2 {
  padding-top: 2vw;
}
.image--main {
  min-width: 94vw;
}
.p--1 {
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-left: 1vw;
  padding-right: 1vw;
}
.my--2 {
  margin-top: 2vw;
  margin-bottom: 2vw;
}
.text-c1 {
  font-family: "Bison Bold";
  font-size: 3rem;
}
.text-c2 {
  font-family: "Bison Bold";
  font-size: 2rem;
}
.col-custom {
  max-width: 39%;
  display: block;
}
.btn-custom {
  border-radius: 1rem;
  border-width: 0.35rem;
}
</style>