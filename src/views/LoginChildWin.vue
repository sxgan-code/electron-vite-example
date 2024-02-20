<script setup lang="ts">
import useChildIPC from "@/hooks/useChildIPC";
import {sleep} from "@/utils/CommonUtils.ts";
import {useMainStore} from "@/store/mainStore.ts";

const mainStore = useMainStore()
const {closeChildWin} = useChildIPC();

function afterFive(){
  mainStore.isMask = true
  sleep(1000).then(res=>{
    mainStore.isMask = false
  })

}
</script>

<template>
  <div class="root-box">
    <div class="head-box">
      <div class="head-sys-click">
        <div class="icon-box-close" @click="closeChildWin()"><i class="icon iconfont">&#xe68d</i></div>
      </div>
    </div>

    <div class="content-box">
      <el-button type="primary" @click="afterFive">点击延迟遮罩1秒</el-button>
      <p>这是一个子窗口</p>
    </div>
  </div>

</template>

<style scoped lang="scss">
.root-box{
  width: 100vw;
  height: 100vh;
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 64%);
  .head-box{
    height: 8rem;
    .head-sys-click {
      width: 12rem;
      height: 7rem;
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
  }

  .content-box{
    min-height: calc(100vh - 8rem);
    p{
      text-align: center;
      font-family: "HarmonyOS Sans Bold";
      font-size: 2rem;
    }
  }
}

</style>