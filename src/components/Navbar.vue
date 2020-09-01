<template>
  <div class="app-navbar">
    <b-navbar class="margin-nav" type="dark" variant="color-a">
      <b-navbar-brand class="nav--brand" to="/">
        <b-img class="ml--7-5 my-3" fluid :src="require('../assets/img/SOSLogoNav.png')"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr--4">
          <b-nav-item class="px--4" to="/social/instagram">
            <i class="fab fa-instagram fa-custom"></i>
          </b-nav-item>
          <b-nav-item class="px--4" to="/social/facebook">
            <i class="fab fa-facebook-f fa-custom"></i>
          </b-nav-item>
          <b-nav-item class="px--4" to="/social/linkedin">
            <i class="fab fa-linkedin-in fa-custom"></i>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.nav--brand {
  max-width: 20vw;
}
.margin-nav {
  margin-top: 2.5vh;
  margin-left: 3vw;
  margin-right: 3vw;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
  min-height: 12vh;
}
.ml--7-5 {
  margin-left: 7.5vw;
}
.px--4 {
  padding-left: 4vw;
  padding-right: 4vw;
}
.mr--4 {
  margin-right: 4vw;
}
.fa-custom {
  font-size: 3vw;
  color: rgba(255, 255, 255, 0.85);
}
.fa-custom:hover {
  color: rgba(255, 255, 255, 1);
}
</style>