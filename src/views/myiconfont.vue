<script setup lang="ts">
import {ref} from "vue";
import {copyToClipboard, goToRouter} from "@/utils/CommonUtils.ts";
import myIconFonts from "@/assets/iconfonts/myiconfont/myiconfont.data.arry.ts";

/* 定义锚点 */
const headRef = ref('readRef')


async function toAnchorPoint() {
  // @ts-ignore
  headRef.value.scrollIntoView({behavior: 'smooth', block: 'start'})
}

function copyIconCode(enName: string) {
  let pathClass: string = ''
  if (enName.includes('my-')) {
    pathClass = '<span class="path1"></span><span class="path2"></span><span class="path3"></span>'
  }
  let copy: string = '<i class="icon myiconfont ' + enName + '">' + pathClass + '</i>';
  console.log(copy)
  copyToClipboard(copy);
}
</script>

<template>
  <ReturnPageBtn align="left" content="返回主页" @click="goToRouter('/main')"/>
  <h1 ref="headRef" class="title">MyIconFont图标大全</h1>
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
          <li v-for="(item,index) in myIconFonts" :key="index">
              <i @click="copyIconCode(item.enName)" :class="'icon myiconfont ' + item.enName">
                <span class="path1" v-if="item.enName.includes('my-')"></span>
                <span class="path2" v-if="item.enName.includes('my-')"></span>
                <span class="path3" v-if="item.enName.includes('my-')"></span>
              </i>
              <div class="en-name">{{ item.enName }}</div>
          </li>
        </ul>
      </div>
      <ReturnPageBtn align="center-top" content="返回顶部" @click="toAnchorPoint()"/>
      <div class="main-code">
        <p>第一步：使用font-face声明字体</p>
        <HgCode
            lang="scss"
            code="$fontsDir: '@/assets/iconfonts/myiconfont';
@font-face {
  font-family: 'myiconfont';
  src: url('#{$fontsDir}/myiconfont.eot'); /* IE9*/
  src: url('#{$fontsDir}/myiconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('#{$fontsDir}/myiconfont.woff') format('woff'), /* chrome、firefox */
  url('#{$fontsDir}/myiconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('#{$fontsDir}/myiconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}"/>
        <pre>

        </pre>
        <p>第二步：定义使用iconfont的样式</p>
        <HgCode
            lang="css"
            code=".myiconfont{
  font-family:'myiconfont' !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}"/>
        <p>第三步：挑选相应图标并点击获取字体代码，应用于页面</p>
        <HgCode
            lang="css"
            code="<i class='icon myiconfont'>&#xecbb</i>"/>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.title {
  font-size: 3rem;
  text-align: center;
}

h1, .tabBox {
  width: 100vw;

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
        //width: 12rem;
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
          margin-top: 2rem;
          line-height: 2rem;
          min-width: 13rem;
          font-size: 1.2rem;
          text-align: center;
          user-select: text;
        }

        &:hover i {
          color: var(--el-color-primary);
        }
      }
    }


    .main-code p {
      font-size: 1.6rem;
      line-height: 2rem;
      margin-left: 2rem;

    }

  }

}
</style>