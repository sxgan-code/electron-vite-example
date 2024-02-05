<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// 使用 Mock
// import Mock from 'mockjs'

// var data = Mock.mock({
//   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//   'list|1-10': [{
//     // 属性 id 是一个自增数，起始值为 1，每次增 1
//     'id|+1': 1
//   }]
// })
// 输出结果
// console.log("test mock data:", JSON.stringify(data, null, 4))
import MainPage from "@/views/MainPage.vue";
import {useMainStore} from "@/store/mainStore.ts";

var mainStore = useMainStore();
</script>

<template>
  <div id="app">
    <div class="globe-mask" v-if="mainStore.isMask">
      <div class="globe-rotating-element icon-box">
        <i class="icon myiconfont my-spinner9 "><span
            class="path1"></span><span class="path2"></span><span class="path3"></span></i>
      </div>
    </div>
    <main-page/>
  </div>
</template>

<style lang="scss">
.globe-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background: rgba(#000, 0.3);

  .icon-box {
    width: 10rem;
    height: 10rem;
    margin: calc(50vh - 5rem) auto 0;
    background-image: linear-gradient(43deg, rgba(#4158D0, 0.5) 0%, rgba(#C850C0, 0.4) 46%, rgba(#FFCC70, 0.9) 100%); /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
    background-clip: text; /*将设置的背景颜色限制在文字中*/
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; /*给文字设置成透明*/
    i {
      font-size: 10rem;
      color: #f89898;
    }
  }
;
}

#app {
  height: 100vh;
  width: 100vw;
}

</style>
