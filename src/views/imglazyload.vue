<script setup lang="ts">
import {goToRouter} from "@/utils/CommonUtils.ts";
import songImages from "@/assets/datas/song-list.ts";
import useBackTop from "@/hooks/useBackTop.ts";
import {ref} from "vue";

const anchorsRef = ref('anchorsRef')
const {backTopFlag, scrollToTop, goBackAnchors} = useBackTop(anchorsRef)
</script>

<template>
  <div class="myicon-root-box">
    <head-title-box title="图片懒加载"
                    info="测试图片懒加载-当图片进入到视野中时才发送请求进行加载"/>
    <div class="myicon-content" @scroll="scrollToTop">
      <div ref="anchorsRef"></div>
      <!-- 懒加载组件在dev下显示不出来，可通过build后查看 -->
      <ReturnPageBtn @click='goToRouter("/main")' align="left" content="返回主页"/>
      <div class="image-box">
        <div class="img-div" v-for="(item,index) in songImages" :key="index">
          <!--防止页面过渡时懒加载导致图片未加载图片位置空白，所以设置进入页面时页面中已有的12个元素采用正常加载，不在页面的区域才使用懒加载-->
          <img v-if="index>12" width="150" height="150" v-lazys="item.url">
          <img v-if="index<=12" width="150" height="150" :src="item.url">
          <div class="img-index"><span>{{ index + 1 }}</span></div>
        </div>
      </div>
      <div style="position: fixed;left: calc(50vw - 6rem);bottom: 1rem;" v-if="backTopFlag">
        <ReturnPageBtn align="center-top" content="返回顶部" @click="goBackAnchors('')"/>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.myicon-root-box {
  .myicon-content {
    height: calc(100vh - 8rem);
    overflow-y: auto;

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
        background: rgba(#fff, 0.7);
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
  }
}


</style>