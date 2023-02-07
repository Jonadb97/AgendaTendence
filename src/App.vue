<script setup lang="ts">
import 'animate.css'
import { onMounted, onUpdated, watch } from 'vue'
import VueRouter, { RouterLink } from 'vue-router'
import Instagram from './assets/svg/instagram.vue'
import Facebook from './assets/svg/facebook.vue'

</script>

<template>
  <div class="flex-row relative" id="app">

    <head>
    </head>

    <!-- Header -->
    <nav class="flex">
      <router-link id="brand1" class="mt-auto mb-auto" :to="{ path: '/' }"><img src="./assets/logo.png" width="64px"
          height="72px" alt="Logo Tendence Solutions"></router-link>
      <router-link id="brand2" class="mt-auto mb-auto" :to="{ path: '/' }">
        <h1 class="text-3xl m-0 p-0">Tendence</h1>
        <h1 id="solutions" class="text-4xl text-center">SOLUTIONS</h1>
      </router-link>
      <ul id="nav-links" class="flex mt-auto mb-auto ml-auto">
        <li class="hover:cursor-pointer"><router-link :to="{ path: '/' }">Inicio</router-link></li>
        <li class="hover:cursor-pointer"><router-link :to="{ path: '/login' }">Iniciar sesión</router-link></li>
        <li class="hover:cursor-pointer"><router-link :to="{ path: '/sacarTurno' }">Sacar turno</router-link></li>
        <li class="hover:cursor-pointer"><router-link :to="{ path: '/turnosPendientes' }">Mis turnos</router-link></li>
      </ul>
    </nav>

    <!-- Main -->
    <div class="h-screen">
      <transition name="fade" mode="out-in" appear>
        <router-view class="view m-8"></router-view>
      </transition>
    </div>

    <!-- Footer -->
    <div id="footer" class="flex-row text-center h-32 w-screen pb-12 fixed bottom-0">
      <p class="m-auto pt-12 bg-transparent">Encontranos en:</p>
      <Instagram class="w-8 p-4 m-auto" />
      <Facebook class="w-8 p-4 m-auto" />
    </div>
  </div>
</template>

<style scoped>

</style>
