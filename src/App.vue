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
</script>

<template>
  <div id="app">
    <router-view v-slot="{ Component,route }">
      <transition name="move" mode="in-out">
        <component :is="Component" :key="route.path"/>
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
/* translation 移动进入的效果，前缀为move*/
.move-enter-active,
.move-leave-active {
  transition: all 1s inherit;
}

.move-enter-from {
  //transform: translateX(100%);
  opacity: 0;
}

.move-enter-to {
  //transform: translateX(0);
  opacity: 1;
}

.move-leave-from {
  //  //transform: translateX(0);
  opacity: 1;
}

.move-leave-to {
  //transform: translateX(100%);
  opacity: 0;
}
</style>
