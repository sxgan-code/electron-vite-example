<script setup lang="ts">
import {useMainStore} from '@/store/mainStore.ts'

const mainStore = useMainStore()
</script>

<template>
  <h1>这里是注册表单</h1>
  <el-button type="primary" @click="mainStore.increment()">通过increment方法自增</el-button>
  <el-button type="primary" @click="mainStore.counter++">通过直接访问自增</el-button>
</template>

<style scoped>

</style>