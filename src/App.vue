<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <Navbar />
    
    <RouterView class="pt-40"/>

    <Footer />
  </main>
</template>

<style>
  html {
    scroll-behavior: smooth;
  }
  /* body {
    background-image: url("./assets/background.png");
  } */
</style>