<script setup lang="ts">
import huaweiIconArr from "@/assets/iconfonts/huaweiicon/huaweifont.data.arry.ts";
import {copyToClipboard, goToRouter} from "@/utils/CommonUtils.ts";
import useBackTop from "@/hooks/useBackTop.ts";
import HeadTitleBox from "@/components/HeadTitleBox.vue";
import {ref} from 'vue'

const anchorsRef = ref('anchorsRef')
const {backTopFlag,scrollToTop, goBackAnchors} = useBackTop(anchorsRef)

function copyIconCode(enName: string, pathNum: number) {
  let copy: string = '<i class="icon huaweiicon ' + enName + '">';
  let spanStr: string = ''
  for (let i = 1; i <= pathNum; i++) {
    if (i === 1) {
      spanStr = '\n'
    }
    spanStr = spanStr + '<span class="path' + i + '"></span>'
    if (i === pathNum) {
      {
        spanStr = spanStr + '\n'
      }
    }
  }
  copy = copy + spanStr + '</i>'
  copyToClipboard(copy);
}
</script>
<template>
  <div class="myicon-root-box">
    <head-title-box title="Huawei图标大全"
                    info="font字体图标编码对照表及使用指南"/>
    <div class="tabBox" @scroll="scrollToTop">
      <div ref="anchorsRef"></div>
      <ReturnPageBtn align="left" content="返回主页" @click="goToRouter('/main')"/>
      <div class="bd">
        <div class="main-icon">
          <ul>
            <li v-for="(item,index) in huaweiIconArr" :key="index">
              <i @click="copyIconCode(item.enName,item.pathMaxNum)" :class="'icon huaweiicon ' + item.enName">
                <span :class="'path'+spanItem" v-for="(spanItem,i) in item.pathMaxNum" :key="i"></span>
              </i>
              <div>{{ item.enName }}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn-fixed" v-if="backTopFlag">
        <ReturnPageBtn align="center-top" content="返回顶部" @click="goBackAnchors('')"/>
      </div>

      <div class="main-code">
        <p>第一步：使用font-face声明字体</p>
        <HgCode
            lang="scss"
            code="$fontsDir: '@/assets/iconfonts/huaweiicon';
@font-face {
  font-family: 'huaweiicon';
  src: url('#{$fontsDir}/HuaweiIcon.eot'); /* IE9*/
  src: url('#{$fontsDir}/HuaweiIcon.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('#{$fontsDir}/HuaweiIcon.woff') format('woff'), /* chrome、firefox */
  url('#{$fontsDir}/HuaweiIcon.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('#{$fontsDir}/HuaweiIcon.svg#iconfont') format('svg'); /* iOS 4.1- */
}"/>
        <pre>

        </pre>
        <p>第二步：定义使用iconfont的样式</p>
        <HgCode
            lang="css"
            code=".huaweiicon{
  font-family:'huaweiicon' !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}"/>
        <p>第三步：挑选相应图标并点击获取字体代码，应用于页面，示例：</p>
        <HgCode
            lang="css"
            code='<i class="icon huaweiicon icon-ec0805b-a837-4ac1-9da0-ae9f7bc17035">
        <span class="path1"></span><span class="path2"></span><span class="path3"></span>
        </i>'/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabBox {
  height: calc(100vh - 8rem);
  overflow-y: auto;
  .btn-fixed {
    position: fixed;
    left: calc(50vw - 6rem);
    bottom: 1rem;
    z-index: 999;
  }
  .bd {
    .main-icon ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;

      li {
        width: 12rem;
        height: 12rem;
        margin: 0.8rem;
        padding: 1rem;
        background: rgba(#fff, 0.6);
        border-radius: 1rem;
        text-align: center;

        i {
          font-size: 6rem;
          color: var(--el-color-info);
          text-align: center;
        }

        div {
          margin-top: 1rem;
          line-height: 2rem;
          width: 12rem;
          font-size: 1.2rem;
          text-align: center;
          user-select: text;
          word-wrap: anywhere;
        }

        &:hover i {
          color: var(--el-color-primary);
        }
      }
    }
  }



  .main-code p {
    font-size: 1.6rem;
    line-height: 2rem;
    margin-left: 2rem;

  }
}
</style>