<script setup lang="ts">
import {getBaseImgUtl, getFixedPositionNumStr, goToRouter} from "@/utils/CommonUtils.ts";

console.log(import.meta.env.VITE_APP_ENV)
const isDev = (import.meta.env.VITE_APP_ENV === 'development')
console.log("是否是DEV环境：" + isDev)

</script>

<template>
  <!-- 懒加载组件在dev下显示不出来，可通过build后查看 -->
  <ReturnPageBtn @click='goToRouter("/main")' align="left" content="返回主页"/>
  <div class="image-box">
    <div class="img-div" v-for="(item,index) in 10" :key="index">
      <img width="150" height="150"
           v-lazy="getBaseImgUtl('/music/songListImg/song-list-zip-'+getFixedPositionNumStr(item,4)+'.jpg')">
      <div class="img-index"><span>{{ item }}</span></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  .img-div {
    display: flex;
    flex-direction: column;
    width: 18rem;
    height: 20rem;
    margin: 2rem;
    background: rgba(#ccc, 0.3);
    border-radius: 1rem;
    padding-bottom: 1rem;

    img {
      margin: auto;
    }

    .img-index {
      display: flex;
      justify-content: center;

      span {
        font-family: "JetBrainsMono Bold";
        font-size: 1.6rem;
      }
    }
  }
}
</style>