<script setup lang="ts">
import iconfontArr from "@/assets/iconfonts/iconfont/iconfont.data.arry";
import {copyToClipboard, goToRouter} from "@/utils/CommonUtils";
import useBackTop from "@/hooks/use-back-top";
import HeadTitleBox from "@/components/HeadTitleBox.vue";
import {ref} from 'vue'

const anchorsRef = ref('anchorsRef')
const {goBackAnchors, backTopFlag, scrollToTop} = useBackTop(anchorsRef)

function copyIconCode(copyCode: string) {
  let copy: string = '<i class="icon iconfont">&#xe' + copyCode + '</i>';
  copyToClipboard(copy);
}
</script>

<template>
  <div class="myicon-root-box">
    <head-title-box title="IconFont图标大全"
                    info="font字体图标编码对照表及使用指南"/>
    <div class="root-box-content" @scroll="scrollToTop">
      <div ref="anchorsRef"></div>
      <ReturnPageBtn align="left" content="返回主页" @click="goToRouter('/main')"/>
      <div class="tabBox">
        <div class="bd">
          <div class="main-icon">
            <ul>
              <li @click="copyIconCode(item.copyCode)" v-for="(item,index) in iconfontArr" :key="index">
                <i class="icon iconfont">{{ item.code }}</i>
                <div class="name">{{ index + 1 + '、' + item.name }}</div>
              </li>
            </ul>
          </div>
          <div class="btn-fixed" v-if="backTopFlag">
            <ReturnPageBtn align="center-top" content="返回顶部" @click="goBackAnchors('top')"/>
          </div>
          <div class="main-code">
            <p>第一步：使用font-face声明字体</p>
            <HgCode
                lang="css"
                code="@font-face {
  font-family: 'iconfont';
  src: url('iconfont.eot'); /* IE9*/
  src: url('iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('iconfont.woff') format('woff'), /* chrome、firefox */
  url('iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}"/>
            <pre>

        </pre>
            <p>第二步：定义使用iconfont的样式</p>
            <HgCode
                lang="css"
                code=".iconfont{
  font-family:'iconfont' !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}"/>
            <p>第三步：挑选相应图标并点击获取字体代码，应用于页面</p>
            <HgCode
                lang="css"
                code="<i class='icon iconfont'>&#xe600</i>"/>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>

<style scoped lang="scss">
.title {
  font-size: 3rem;
  text-align: center;
}

.root-box-content {
  height: calc(100vh - 8rem);
  overflow-y: auto;
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
        background: rgba(#fff, 0.6);
        border-radius: 1rem;
        text-align: center;

        i {
          font-size: 6rem;
          color: var(--el-color-info);
          text-align: center;
        }

        div {
          margin-top: 2rem;
          line-height: 2rem;
          width: 13rem;
          font-size: 1.2rem;
          text-align: center;
          user-select: text;
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
    z-index: 9;
  }

  .main-code p {
    font-size: 1.6rem;
    line-height: 2rem;
    margin-left: 2rem;

  }
}
</style>