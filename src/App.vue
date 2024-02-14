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
import {useMainStore} from "@/store/mainStore";

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
    <div class="main-root">
      <router-view v-slot="{ Component,route }">
        <transition>
          <component :is="Component" :key="route.path"/>
        </transition>
      </router-view>
    </div>
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
}

#app {
  height: 100vh;
  width: 100vw;
}
.main-root {
  background-image: linear-gradient(to top, rgba(#fff1eb, 0.9) 0%, rgba(#ace0f9, 0.9) 100%);
}

.main-header-box {
  width: 100vw;
  height: 8rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* translation 移动进入的效果，前缀为move*/
//.move-enter-active,
//.move-leave-active {
//  transition: all 1s inherit;
//}
//
//.move-enter-from {
//  //transform: translateX(100%);
//  opacity: 0;
//}
//
//.move-enter-to {
//  //transform: translateX(0);
//  opacity: 1;
//}
//
//.move-leave-from {
//  //  //transform: translateX(0);
//  opacity: 1;
//}
//
//.move-leave-to {
//  //transform: translateX(100%);
//  opacity: 0;
//}


</style>
