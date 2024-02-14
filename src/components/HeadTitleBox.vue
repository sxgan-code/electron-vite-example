<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: '此处为标题-请设置title属性',
    required: true
  },
  info: {
    type: String,
    default: '此处为简介-请设置info属性',
    required: false
  }
})
</script>

<template>
  <div class="head-root">
    <div class="head-box">
      <div class="head-title">
        <div class="main-title">{{ props.title }}</div>
        <div class="simple-info">{{ props.info }}</div>
      </div>
      <HeadSysController/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.head-root {
  height: 8rem;
  .head-box {
    .head-title {
      font-family: "JetBrainsMono Bold";
      background-color: #8EC5FC;
      background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 64%);
      height: 8rem;
      -webkit-app-region: drag; // 整个菜单栏可拖拽
      .main-title {
        padding-top: 1rem;
        font-size: 3rem;
        text-align: center;
        background-color: rgba(#4158D0, 1);
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
        background-clip: text; /*将设置的背景颜色限制在文字中*/
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; /*给文字设置成透明*/
      }
      .simple-info {
        margin: 1rem auto;
        font-size: 1rem;
        text-align: center;
        color: #333;
      }
    }
  }
}
</style>