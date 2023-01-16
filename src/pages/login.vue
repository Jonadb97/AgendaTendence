<template>
    <div class="text-center h-screen">
        <h1 class="m-24">Iniciar sesion</h1>
        <p>Mail</p>
        <input class="rounded m-4" type="email" name="mail" id="mailInput">
        <p>Contraseña</p>
        <input class="rounded m-4" type="password" name="contraseña" id="passwordInput">
        <br>
        <button class="m-4 p-2 rounded cursor-pointer">Ingresar</button>
        <br>
        <sub class="font-sans color-red cursor-pointer">¡Olvidé mi contraseña!</sub>
        <br>
        <sub class="font-sans m-2">¿No tenés cuenta? <button @click="$router.push('/register')" class="m-2 rounded border-green p-2 color-green cursor-pointer">¡Registrate!</button></sub>
    </div>
</template>