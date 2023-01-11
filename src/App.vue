<script setup lang="ts">
import 'animate.css'
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <div id="app">
    <nav class="flex">
      <router-link class="mt-auto mb-auto" :to="{ path: '/' }"><img src="./assets/logo.png" width="64px" height="72px" alt="Logo Tendence Solutions"></router-link>
      <router-link class="mt-auto mb-auto" :to="{ path: '/' }"><h1 class="text-4xl">Tendence Solutions</h1></router-link>
      <ul id="nav-links" class="flex mt-auto mb-auto ml-auto mr-6">
        <li class="hover:cursor-pointer"><router-link :to="{ path: '/index' }">Inicio</router-link></li>
        <li>Mis turnos</li>
        <li>Sacar un turno</li>
      </ul>
    </nav>
    <div>
      <router-view class="view m-8"></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>
