<script setup lang="ts">
import {copyToClipboard} from "@/utils/CommonUtils.ts";

const props = defineProps({
  lang: {
    type: String,
    default: 'js'
  },
  code: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="code-root-box">
    <div class="code-head">
      <div class="head-left">
        <div class="flag"></div>
        <div class="flag"></div>
        <div class="flag"></div>
      </div>
      <div class="head-right">
        <div class="code-copy"><i @click="copyToClipboard(props.code);" class="icon iconfont">&#xe63f;</i>
        </div>
      </div>
    </div>
    <div class="code-box">
      <highlightjs
          autodetect="autodetect"
          :language="props.lang"
          :code="props.code"
      />
      <div class="code-lang">
        <i class="icon myiconfont my-embed2"><span class="path1"></span><span class="path2"></span><span
            class="path3"></span><span class="lang"></span></i>
        <span class="code-lang-text">{{ props.lang }}</span>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.code-root-box {
  width: 95vw;
  margin: 2rem auto;
  font-size: 1.6rem;
  font-family: "HarmonyOS Sans Bold";

  .code-head {
    background: #f89898;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    display: flex;
    justify-content: space-between;

    .head-left {
      width: 20rm;
      display: flex;
      margin-left: 1rem;

      .flag {
        margin: 0.4rem;
        width: 1rem;
        height: 1rem;
        background: #000;
        border-radius: 1rem;
      }

      .flag:nth-child(1) {
        background: #FC625D;
      }

      .flag:nth-child(2) {
        background: #FDBC40;
      }

      .flag:nth-child(3) {
        background: #35CD4B;
      }
    }

    .head-right {
      margin-right: 1rem;

      i {
        font-size: 1.3rem;
        color: cornsilk;
      }

      i:hover {
        color: #a0cfff;
      }
    }
  }

  .code-box {
    font-size: 1.6rem;
    text-align: left;
    user-select: auto;

    .hljs {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      padding-bottom: 2rem;
      box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.15);
      font-family: "JetBrainsMono Bold";
      overflow: auto;
      user-select: text;

      span {
        user-select: text;
        line-height: 2.4rem;
      }

    }

    .code-lang {
      width: 8rem;
      height: 2rem;
      margin: 0.5rem 0 0 auto;
      text-align: center;
      box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.15), -2px -2px 5px rgba(0, 0, 0, 0.15);
      border-radius: 0.5rem;
      display: flex;
      justify-content: space-between;
      font-family: 'JetBrainsMono Bold Italic';
      color: #f89898;

      i {
        font-size: 1.1rem;
        margin: auto 0.5rem;
      }

      .code-lang-text {
        font-size: 1.4rem;
        margin: 0 0.5rem;
        align-content: center;
      }
    }
  }

}
</style>