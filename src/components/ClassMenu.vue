<script setup lang="ts">

import {goToRouter} from "@/utils/CommonUtils.ts";
</script>

<template>
  <div class="class-root">
    <div class="main-content-class">
      <div class="class-title">VUE 技术类</div>
      <div class="all-class">
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/main/imglazyload')">图片懒加载实现</el-button>
        </div>
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/auth/signin')">简单的登录功能及Pinia基本使用</el-button>
        </div>
      </div>
      <div class="hr"></div>
    </div>
    <div class="main-content-class">
      <div class="class-title">Electron 相关</div>
      <div class="all-class">
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/electron/ipc')">进程间的通信</el-button>
        </div>
      </div>
      <div class="hr"></div>
    </div>
    <div class="main-content-class">
      <div class="class-title">资源类</div>
      <div class="all-class">
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/main/myiconfont')">MyIconFont 图标大全</el-button>
        </div>
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/main/huaweiicon')">Huawei Icon 图标大全</el-button>
        </div>
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/main/iconfont')">Iconfont图标大全</el-button>
        </div>
        <div class="one-item">
          <el-button type="primary" @click="goToRouter('/main/svgplugin')">Svg 图标大全及 SvgPlugin 使用</el-button>
        </div>
      </div>
      <div class="hr"></div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.class-root {
  min-height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  font-family: "JetBrainsMono Bold";
  .main-content-class {
    width: 98vw;
    display: flex;
    flex-direction: column;

    .class-title {
      font-size: 2rem;
      margin: 1rem 2rem;
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