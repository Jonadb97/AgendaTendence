<template>
    <div class="bg-transparent">
        <h1 class="text-center mb-16 mt-24" >Agenda web</h1>
       <img src="../assets/logo.png" class="flex bg-transparent w-48 m-auto animate__animated animate__flip animate__infinite animate__slower" alt="Barber Tendence Logo">
       <button  class="flex ml-auto mr-auto mt-16 p-2 rounded cursor-pointer font-bold hover:font-extrabold" @click="$router.push('/sacarTurno')">Sacar un turno</button>
    </div>
</template>

<style>
@import "../assets/base.css";
</style>