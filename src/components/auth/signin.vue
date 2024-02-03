<script setup lang="ts">
/* 状态管理*/
import {useMainStore} from '@/store/mainStore.ts'
/* 登录相关业务*/
import {getCaptchaApi, loginApi} from '@/api/auth/index.ts'
import {LoginData} from "@/api/auth/types.ts";
import {ref} from "vue";
import {ElMessage} from "element-plus";

const mainStore = useMainStore()

const loginData = ref<LoginData>({
  username: "daniel",
  password: "xxxx",
  verifyCode: "",
})

function toSignin() {
  loginApi(loginData.value).then(res => {
    console.log(res)
    ElMessage.success(res.data.token)
  })
}

function getVerify() {
  getCaptchaApi(loginData.value).then(res => {
    ElMessage.success(res.data.verifyCode)
  })
}
</script>

<template>
  <h1>这里是登录表单</h1>
  <el-button type="primary" @click="toSignin()">登录</el-button>
  <el-button type="primary" @click="getVerify()">获取验证码</el-button>
  <hr/>
  <el-button type="primary" @click="mainStore.increment()">通过increment方法自增</el-button>
  <el-button type="primary" @click="mainStore.counter++">通过直接访问自增</el-button>
  <el-button type="primary" @click="mainStore.autoIncrement()">每200ms自增一次共执行100次</el-button>
  <el-button type="primary" @click="mainStore.$reset()">重置状态</el-button>
  <el-button type="primary" @click="mainStore.count=0">重置自增次数</el-button>
  <hr/>


</template>

<style scoped lang="scss">
$imageDir:'@/assets/images'


</style>