<template>
    <div class="text-center h-screen">
        <h1 class="mt-24 mb-12">Iniciar sesion</h1>
        <p class="font-bold">Mail</p>
        <input class="rounded m-4" type="email" name="mail" id="mailInput">
        <p class="font-bold pt-4">Contraseña</p>
        <input class="rounded m-4" type="password" name="contraseña" id="passwordInput">
        <br>
        <button class="m-4 p-2 rounded cursor-pointer hover:font-bold">Ingresar</button>
        <br>
        <sub class="font-sans color-red cursor-pointer hover:font-bold">¡Olvidé mi contraseña!</sub>
        <br>
        <sub class="font-sans m-2">¿No tenés cuenta? <button @click="$router.push('/register')" class="m-2 rounded border-green p-2 color-green cursor-pointer hover:font-bold">¡Registrate!</button></sub>
    </div>
</template>