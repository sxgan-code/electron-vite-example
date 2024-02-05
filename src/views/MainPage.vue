<script setup lang="ts"></script>

<template>
  <div class="main-root">
    <div class="main-header-box">
      <HeadTitleBox title="案例大全" info="前端Electron21+Vite4+Vue3等系列案例"/>
    </div>
    <div class="main-content">
      <router-view v-slot="{ Component,route }">
        <transition>
          <component :is="Component" :key="route.path"/>
        </transition>
      </router-view>
    </div>

  </div>
</template>

<style scoped lang="scss">
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