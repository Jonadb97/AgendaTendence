<template>
    <div>
        <div id="content" class="h-auto">
            <h1>Pagina principal</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, nesciunt quam. Officia animi ratione
                harum, non repudiandae officiis cupiditate deserunt ipsam facilis quia aut sunt vitae architecto atque
                deleniti. Distinctio.</p>
            <el-carousel class="pt-6" :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<style>
@import "../assets/base.css";

  .el-carousel__item h3 {
    color: var(--Blanco);
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: var(--Blanco);
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: var(--Blanco);
  }
</style>