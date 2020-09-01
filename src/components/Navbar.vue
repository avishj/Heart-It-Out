<template>
  <div class="app-navbar">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/social/instagram">Insta</b-nav-item>
          <b-nav-item to="/social/facebook">FB</b-nav-item>
          <b-nav-item to="/social/linkedin">LinkedIn</b-nav-item>
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