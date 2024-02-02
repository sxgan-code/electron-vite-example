<script setup lang="ts">
import {goToRouter} from "@/utils/CommonUtils.ts"
// @ts-ignore 获取全部图标的is,注意svg指定目录
import ids from "virtual:svg-icons-names"
</script>
<template>
  <ReturnPageBtn align="left" content="返回主页" @click="goToRouter('/main')"/>

  <div class="svg-box">
    <div class="svg-box-item" v-for="(item,index) in ids">
      <SvgPlugin :name="item.substring(5,item.length)" :key="index"/>
      <div>{{item}}</div>
    </div>
  </div>
  <img class="img-div" src="@/assets/images/common/svg/icons-huawei-4.svg" alt="">
</template>
<style scoped lang="scss">
.img-div{
  width: 10rem;
  height: 10rem;
  transition: transform 3s,width 1s ,height 2s,e 2s;
}
.img-div:hover{
  transform:  rotate(180deg) ;
  width: 20rem;
  height: 20rem;
}
.svg-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  .svg-box-item {
    margin: 3rem;
    padding: 1rem;
    width: 10rem;
    height: 10rem;
  }
}


</style>
