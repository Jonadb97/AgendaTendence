<template>
    <div class="text-center">
        <div class="">
            <h1 class="mt-12">Turnos pendientes</h1>
            <el-carousel class="ml-auto mr-auto mt-24" :interval="4000" type="card">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
