<script setup>
// import { /*RouterLink*/ RouterView } from 'vue-router'
import Navbar from '../src/components/NavBar.vue'
import FooterBar from './components/footerBar.vue';
</script>

<template>
  <v-app>
    <Navbar v-if="!['login', 'register', 'Forgot Password'].includes($route.name)"/>
    <!-- <v-main>
      <router-view></router-view>
    </v-main> -->
    <FooterBar  v-if="!['login', 'register', 'Forgot Password'].includes($route.name)"/>
  </v-app>

</template>

