<script setup lang="ts">

// 生产环境禁止使用ctrl+shift+i打开DevTools
// document.addEventListener('keydown', evt => {
//   if (evt.ctrlKey && evt.shiftKey && 73 === evt.keyCode) {
//     evt.preventDefault();
//     return false;
//   }
// });
</script>

<template>
  <div class="main-root">
    <router-view v-slot="{ Component,route }">
      <transition>
        <component :is="Component" :key="route.path"/>
      </transition>
    </router-view>
  </div>
</template>

<style>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.electron:hover {
  filter: drop-shadow(0 0 2em #9FEAF9);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
