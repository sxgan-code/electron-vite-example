<script setup lang="ts">
import useIPC from "@/hooks/useIPC.ts";

const {sendWinController} = useIPC();
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
  <div class="head-box">
    <div class="head-title">
      <div class="main-title">{{ props.title }}</div>
      <div class="simple-info">{{ props.info }}</div>
    </div>
    <div class="head-sys-click">
      <div class="icon-box-close" @click="sendWinController('close')"><i class="icon iconfont">&#xe68d</i></div>
      <div class="icon-box-max" @click="sendWinController('max-unmax')"><i class="icon iconfont">&#xe751</i></div>
      <div class="icon-box-min" @click="sendWinController('min')"><i class="icon iconfont">&#xe972</i></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.head-box{
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 9;
}
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

.head-sys-click {
  width: 12rem;
  height: 8rem;
  position: fixed;
  right: 1rem;
  top: 0.8rem;
  text-align: center;
  div {
    float: right;
    //background: lightcoral;
    margin-left: 0.3rem;
    display: inline;
    width: 3rem;
    height: 3rem;

    i {
      -webkit-app-region: no-drag;  // li点击元素去除拖拽，不然后面无法实现点击事件
      color: #fff;
      font-size: 1.8rem;
    }

  }
  .icon-box-min,.icon-box-max{
    margin-top: 0.15rem;
  }
  .icon-box-max i {
    font-weight: bold;
    font-size: 1.9rem;
  }

  .icon-box-close i {
    font-weight: bold;
    font-size: 2.2rem;
  }

  div:hover {
    i:hover {
      color: #8ec5fc;
    }
  }
}
</style>