<template>
    <div class="text-center">
        <div id="turnos-section1" class="h-screen">
            <h1>Sacar turno</h1>
            <h2 class="mt-6">¿Qué te vas a hacer?</h2>
            <el-carousel class="w-200 ml-auto mr-auto mt-20" :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <a href="#turnos-section2"><el-button class="mt-20" icon="el-icon-arrow-down" circle></el-button></a>
        </div>
        <div id="turnos-section2" class="h-screen">
            <h2 class="pt-20">¿Con quién?</h2>
            <el-carousel class="w-200 ml-auto mr-auto mt-20" :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <a href="#turnos-section3"><el-button class="mt-20" icon="el-icon-arrow-down" circle></el-button></a>
        </div>
        <div id="turnos-section3" class="h-screen">
            <h2 class="pt-20">¿Cuando?</h2>
            <div>
              <!--  <div class="flex mb-2">
                    <label class="text-gray-600 font-medium text-center m-auto"><input class="mr-1" type="radio" value=""
                            v-model="timezone">Local</label>
                    <label class="text-gray-600 font-medium ml-3 text-center m-auto"><input class="mr-1" type="radio" value="utc"
                            v-model="timezone">UTC</label>
                </div> -->
                <v-date-picker class="text-center mt-20" v-model="date" mode="dateTime" :timezone="timezone" is24hr is-dark/>
            </div>

            <br>
            <el-button class="" @click="$router.push('/turnosPendientes')" icon="el-icon-check" type="success" circle></el-button>
        </div>
    </div>
</template>

<script lang="ts">
export default({
  data() {
    return {
      date: new Date(),
      timezone: '',
    }
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