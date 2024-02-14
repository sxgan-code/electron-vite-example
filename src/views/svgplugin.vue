<script setup lang="ts">
import {goToRouter} from "@/utils/CommonUtils"
// @ts-ignore 获取全部图标的is,注意svg指定目录
import ids from "virtual:svg-icons-names"
import HeadTitleBox from "@/components/HeadTitleBox.vue";
</script>
<template>
  <div class="myicon-root-box">
    <head-title-box title="SVG 图标" info="主要介绍SVG Plugin 使用"/>
    <ReturnPageBtn align="left" content="返回主页" @click="goToRouter('/main')"/>

    <div class="svg-box">
      <div class="svg-box-item img-div" v-for="(item,index) in ids">
        <SvgPlugin :name="item.substring(5,item.length)" :key="index"/>
        <div>{{ item }}</div>
      </div>
    </div>

  </div>

</template>
<style scoped lang="scss">
.myicon-root-box{
  min-height: 100vh;
}
.img-div {
  width: 10rem;
  height: 10rem;
  transition: transform 1s, width 1s, height 2s, e 2s;
}

.img-div:hover {
  transform: rotate(360deg);
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
