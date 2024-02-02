<script setup lang="ts">
import {goToRouter} from "@/utils/CommonUtils.ts";
</script>

<template>
  <div class="main-root">
    <div class="main-top">
      <div class="main-title">案例大全</div>
      <p>前端Electron21+Vite4+Vue3等系列案例</p>
    </div>
    <div class="main-content-class">
      <div class="class-title">资源类</div>
      <div class="all-class">
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/main/myiconfont')">MyIconFont图标大全</el-button>
        </div>
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/main/huaweiicon')">Huawei Icon图标大全</el-button>
        </div>
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/main/iconfont')">Iconfont图标大全</el-button>
        </div>
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/main/svgplugin')">Svg图标大全及SvgPlugin使用</el-button>
        </div>
      </div>
      <div class="hr"></div>
    </div>
    <div class="main-content-class">
      <div class="class-title">技术类</div>
      <div class="all-class">
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/auth/signin')">认证登录模块搭建</el-button>
        </div>
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/main/imglazyload')">图片懒加载实现</el-button>
        </div>
      </div>
      <div class="hr"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-root {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  overflow: hidden;
  .main-top {
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 64%);
    height: 8rem;
    .main-title {
      font-family: "HarmonyOS Sans Bold";
      width: 20rem;
      margin: 1rem auto;
      font-size: 3rem;
      text-align: center;
      background-color: #4158D0;
      background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
      background-clip: text; /*将设置的背景颜色限制在文字中*/
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; /*给文字设置成透明*/
    }

    p {
      width: 40rem;
      margin: 1rem auto;
      font-size: 1rem;
      text-align: center;
      color: #333;
    }
  }

  .main-content-class {
    width: 98vw;
    display: flex;
    flex-direction: column;
    .class-title {
      font-size: 2rem;
      margin: 1rem 2rem ;
    }

    .all-class {
      width: 95vw;
      margin: 1rem auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .one-item {
        line-height: 4rem;
        height: 4rem;
        margin: auto 1rem;
      }
    }

    .hr {
      height: 1rem;
      width: 100vw;
      border: none;
      background-color: #8EC5FC;
      background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 64%);
    }
  }
}

</style>