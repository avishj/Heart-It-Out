<template>
  <b-container fluid class="app-home">
    <Navbar />
    <b-img
      class="px--3 pt--2 image--main d-block mx-auto"
      fluid
      :src="require('../assets/img/HomeCard.png')"
    ></b-img>
    <div class="text-center text-color-b text-c1 my--2">4 SEPTEMBER - 6 SEPTEMBER</div>
    <br />
    <b-row no-gutters class="px--3 my--2" cols="1" cols-md="2">
      <b-col class="col-custom mr-auto">
        <b-button
          class="text-c2 btn-custom"
          block
          size="lg"
          variant="outline-color-c"
          v-scroll-to="{el: '#rules', easing: 'ease'}"
        >RULES</b-button>
      </b-col>
      <b-col class="col-custom ml-auto">
        <b-button block class="text-c2 btn-custom" size="lg" variant="color-c">REGISTER</b-button>
      </b-col>
    </b-row>
    <br />
    <br />
    <div class="text-color-c px--3">
      <div class="text-c3">September 4 (6:00 - 8:00 PM)</div>
      <br />
      <div class="text-c4">
        A webinar will be held about the art competition.
        <br />A speaker session will be held on the importance of art in life and its valuable role in mental health.
      </div>
      <br />
      <div class="text-c3">September 5 & 6</div>
      <br />
      <div class="text-c4">The entries to the competition shall be accepted via a form.</div>
    </div>
    <br />
    <br />
    <br />
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
/* .px--5 {
  padding-left: 5vw;
  padding-right: 5vw;
} */
/* .mx--3 {
  margin-left: 3vw;
  margin-right: 3vw;
} */
.pt--2 {
  padding-top: 2vw;
}
.image--main {
  min-width: 100%;
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
.text-c3 {
  font-size: 2.5rem;
  font-weight: bold;
}
.text-c4 {
  font-size: 1.8rem;
}
.col-custom {
  max-width: 45%;
  display: block;
}
.btn-custom {
  border-radius: 1rem;
  border-width: 0.35rem;
}
</style>