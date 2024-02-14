<script setup lang="ts">
import useIPC from "@/hooks/useIPC.ts";

const {sendWinController} = useIPC();
</script>

<template>
  <div class="head-sys-click">
    <div class="icon-box-close" @click="sendWinController('close')"><i class="icon iconfont">&#xe68d</i></div>
    <div class="icon-box-max" @click="sendWinController('max-unmax')"><i class="icon iconfont">&#xe751</i></div>
    <div class="icon-box-min" @click="sendWinController('min')"><i class="icon iconfont">&#xe972</i></div>
  </div>
</template>

<style scoped lang="scss">
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
      -webkit-app-region: no-drag; // li点击元素去除拖拽，不然后面无法实现点击事件
      color: #fff;
      font-size: 1.8rem;
    }

  }

  .icon-box-min, .icon-box-max {
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