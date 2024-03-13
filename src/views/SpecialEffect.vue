<script setup lang="ts">

import {goToRouter} from "@/utils/CommonUtils.ts";
</script>

<template>
  <div class="main-header-box">
    <HeadTitleBox title="拟态玻璃案例" info="前端HTML、CSS实现的拟态玻璃"/>
  </div>
  <div class="content-box">
    <div class="card">
      <return-page-btn align="left" content="返回主页" @click="goToRouter('/main')"/>
      <h1>TiKi Platinum</h1>
      <h2>6228 8076 2232 8768</h2>
      <h3>van conf banck</h3>
      <h4>03 / 29</h4>
    </div>
  </div>


</template>

<style scoped lang="scss">
.content-box{
  width: 100vw;
  height: calc(100vh - 8rem);
  background-color: #8EC5FC;
  background-image: linear-gradient(-45deg, #8EC5FC 20%, #E0C3FC 64%);
  opacity: 0.6;
}
.card {
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  right: 100px;
  bottom: 100px;
  z-index: 10;
  font-family: sans-serif;
  text-align: center;
  width: 300px;
  height: 500PX;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(to top right, rgba(90, 149, 207, 0.5), rgba(58, 76, 99, 0.8));
  box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.2),
  -10px 10px 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  border-radius: 20px;
  transform: rotate(-15deg);
}

h1 {
  margin-top: 50px;
}

h2 {
  margin-top: 250px;
}

h3, h4 {
  padding-left: 60px;
  text-align: left;
}

h3 {
  margin-top: 40px;
  text-transform: uppercase;
}

h4 {
  margin-top: 10px;
}

.circle {
  width: 160px;
  height: 160px;
  position: absolute;
  right: 240px;
  bottom: 520px;
  background: linear-gradient(to top left, rgb(135 116 249), rgb(75 162 237));
  border-radius: 80px;
}

.rect {
  width: 160px;
  height: 160px;
  position: absolute;
  right: 110px;
  bottom: 520px;
  background: linear-gradient(to top left, rgba(135, 116, 249, 0.9), rgba(75, 162, 237, 0.9));
  border-radius: 20px;
}

</style>