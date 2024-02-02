<script setup lang="ts">
import {goToRouter} from "@/utils/CommonUtils.ts";
import {useMainStore} from '@/store/mainStore.ts'
import ReturnPageBtn from "@/components/ReturnPageBtn.vue";

const mainStore = useMainStore();
console.log("当前系统启动环境为："+import.meta.env.VITE_APP_ENV)
</script>

<template>
  <ReturnPageBtn align="left" content="返回主页" @click="goToRouter('/main')"/>
  <div class="nva-head">
    <el-button type="primary" @click="goToRouter('/auth/signin')">Sign in</el-button>
    <el-button type="primary" @click="goToRouter('/auth/signup')">Sing up</el-button>
    <el-button type="primary" @click="goToRouter('/main')">to main page</el-button>
    <router-link style="margin-left: 2rem;" to="/auth/signup">a link Sing up</router-link>
    <h1>当前的计数值为：{{mainStore.counter}} 当前双倍值为：{{mainStore.doubleCount}} 自动执行第{{mainStore.count}}次</h1>
  </div>
  <div class="nva-outview">
    <router-view/>
  </div>
</template>
<style scoped lang="scss">
.nva-head{
  height: 7rem;
  width: 100vw;
  background: var(--el-color-danger-light-5);
}
</style>