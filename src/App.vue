<script setup lang="ts">
import 'animate.css'
import { onMounted, onUpdated, watch } from 'vue'
import VueRouter, { RouterLink } from 'vue-router'
import Instagram from './assets/svg/instagram.vue'
import Facebook from './assets/svg/facebook.vue'

</script>

<template>
  <div id="app">

    <!-- Header -->
    <nav class="flex">
      <router-link class="mt-auto mb-auto" :to="{ path: '/' }"><img src="./assets/logo.png" width="64px" height="72px"
          alt="Logo Tendence Solutions"></router-link>
      <router-link class="mt-auto mb-auto" :to="{ path: '/' }">
        <h1 class="text-3xl m-0 p-0">Tendence</h1><h1 id="solutions" class="text-4xl text-center" >SOLUTIONS</h1>
      </router-link>
      <ul id="nav-links" class="flex mt-auto mb-auto ml-auto mr-6">
        <li class="hover:cursor-pointer"><router-link :to="{ path: '/' }">Inicio</router-link></li>
        <li>Mis turnos</li>
        <li>Sacar un turno</li>
      </ul>
    </nav>

    <!-- Main -->
    <div>
      <router-view class="view m-8"></router-view>
    </div>

    <!-- Footer -->
    <div id="footer" class="block text-center absolute bottom-0 w-screen pb-12">
      <p class="m-auto pt-12 bg-transparent">Encontranos en:</p>
      <Instagram class="w-8 p-4 m-autos"/>
      <Facebook class="w-8 p-4 m-auto" />
    </div>
  </div>
</template>

<style scoped>

</style>
