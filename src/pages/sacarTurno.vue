<template>
    <div id="root" class="text-center">
        <div id="turnos-section1" class="h-screen">
            <h1>Sacar turno</h1>
            <h2 class="mt-6 mb-6">¿Qué te vas a hacer?</h2>
            <el-carousel class=" ml-auto mr-auto" :interval="4000" type="card" >
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <a href="#turnos-section2" v-smooth-scroll><el-button class="mt-14" icon="el-icon-arrow-down"
                    circle></el-button></a>
        </div>
        <div id="turnos-section2" class="h-screen">
            <h2 class="pt-20">¿Con quién?</h2>
            <el-carousel class=" ml-auto mr-auto mt-20" :interval="4000" type="card" >
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <a href="#turnos-section3" v-smooth-scroll><el-button class="mt-22" icon="el-icon-arrow-down"
                    circle></el-button></a>
        </div>
        <div id="turnos-section3" class="h-screen pb-12 mb-12" v-smooth-scroll>
            <h2 class="pt-12">¿Cuando?</h2>
            <div class="">
                <!--  <div class="flex mb-2">
                    <label class="text-gray-600 font-medium text-center m-auto"><input class="mr-1" type="radio" value=""
                            v-model="timezone">Local</label>
                    <label class="text-gray-600 font-medium ml-3 text-center m-auto"><input class="mr-1" type="radio" value="utc"
                            v-model="timezone">UTC</label>
                </div> -->
                <!--
                <v-date-picker class="text-center mt-12" v-model="date" mode="dateTime" :timezone="timezone" is24hr is-dark/>
                -->
                <el-time-select class="p-6 mt-20" v-model="value" :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                }" placeholder="Elegí la hora">
                </el-time-select>
                <br>
                <el-date-picker type="dates" class="mt-36 mb-12" v-model="value2" placeholder="Elegí el día">
                </el-date-picker>

            </div>

            <br>
            <el-button class="mt-14" @click="$router.push('/turnosPendientes')" icon="el-icon-check" type="success"
                circle></el-button>
        </div>
    </div>
</template>

<script lang="ts">
export default ({
    data() {
        return {
            value: '',
            value2: '',
        }
    },
    created() {
        if (document.getElementById('root')) return;
        var scriptTag = document.createElement("script");
        scriptTag.src = "https://unpkg.com/v-calendar";
        scriptTag.id = "v-calendar";
        document.getElementsByTagName('head')[0].appendChild(scriptTag);
    }
})

</script>

<style>


.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>