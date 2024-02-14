<script setup lang="ts">
import {goToRouter} from "@/utils/CommonUtils";
import {useMainStore} from '@/store/mainStore'
import ReturnPageBtn from "@/components/ReturnPageBtn.vue";
import HeadTitleBox from "@/components/HeadTitleBox.vue";

const mainStore = useMainStore();
console.log("当前系统启动环境为：" + import.meta.env.VITE_APP_ENV)
</script>

<template>
  <div class="myicon-root-box">
    <head-title-box title="简单的登录功能及Pinia"
                    info="登录及验证码的前端功能请求，Pinia全局状态的基本使用，及子路由跳转等"/>
    <ReturnPageBtn align="left" content="返回主页" @click="goToRouter('/main')"/>
    <div class="nva-head">

      <h1>当前的计数值为：{{ mainStore.counter }} 当前双倍值为：{{ mainStore.doubleCount }}
        自动执行第{{ mainStore.count }}次</h1>
      <el-button type="primary" @click="goToRouter('/auth/signin')">Sign in</el-button>
      <el-button type="primary" @click="goToRouter('/auth/signup')">Sing up</el-button>
      <el-button type="primary" @click="goToRouter('/main')">to main page</el-button>
      <router-link style="margin-left: 2rem;" to="/auth/signup">a link Sing up</router-link>
    </div>
    <div class="nva-outview">
      <router-view/>
    </div>
  </div>
</template>
<style scoped lang="scss">
.myicon-root-box {
  min-height: 100vh;
}

.nva-head {
  height: 7rem;
  width: 100vw;
  background: var(--el-color-danger-light-5);
}
</style>