<script setup lang="ts">
import {ref} from "vue";
import huaweiIconArr from "@/assets/iconfonts/huaweiicon/huaweifont.data.arry.ts";
import {copyToClipboard, goToRouter} from "@/utils/CommonUtils.ts";
import useBackTop from "@/hooks/useBackTop.ts";

const {backTopFlag, goBackTop} = useBackTop()
/* 定义锚点 */
const headRef = ref('readRef')

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
AZ
<template>
  <ReturnPageBtn align="left" content="返回主页" @click="goToRouter('/main')"/>
  <h1 ref="headRef" class="title">Huawei图标大全</h1>
  <div class="tabBox">
    <div id="head" class="hd">
      <ul>
        <li>font字体图标编码对照表</li>
        <li>使用指南</li>
      </ul>
    </div>
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
      <ReturnPageBtn align="center-top" content="返回顶部" @click="goBackTop(0)"/>
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

</template>

<style scoped lang="scss">
.title {
  font-size: 3rem;
  text-align: center;
}

h1, .tabBox {
  .hd {
    font-size: 1.6rem;

    ul li {
      text-align: center;
    }
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
        background: #ccc;
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

  .btn-fixed {
    position: fixed;
    left: calc(50vw - 6rem);
    bottom: 1rem;
  }

  .main-code p {
    font-size: 1.6rem;
    line-height: 2rem;
    margin-left: 2rem;

  }
}
</style>