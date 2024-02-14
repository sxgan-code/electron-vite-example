<script setup lang="ts">
import {goToRouter, sendToSysNotice} from "@/utils/CommonUtils.ts";
import HeadTitleBox from "@/components/HeadTitleBox.vue";
/* 导入IPC */
import useIPC from "@/hooks/useIPC.ts";
import {ref} from "vue";

const {sendToMainMsg, fromMainMsg, sendToMainMsgNotice, sendSyncMsgToMain, sendAsyncMsgToMain,openChildWin} = useIPC()
let sysMsgByRendererProcess = ref('Hello, this is a system message that will be sent directly through the rendering process')
let sysMsgByMainProcess = ref('Hello, this is a system message that will be sent through the main process')

</script>

<template>
  <div class="ipc-root">
    <head-title-box title="Electron 通信" info="主要介绍Electron中通信API的使用"/>
    <div class="ipc-content">
      <return-page-btn align="left" content="返回主页" @click="goToRouter('/main')"/>
      <div class="small-title">1、IPC通信</div>
      <div class="renderer-to-main">
        <el-button class="but" type="primary"
                   @click="sendToMainMsg('Hello, this is a message sent by the rendering process')">
          渲染器进程到主进程（单向）
        </el-button>

        <el-button class="but" type="primary"
                   @click="sendSyncMsgToMain('向主进程发送同步消息，等待主进程处理两秒后返回消息')">
          向主进程发送同步消息，等待主进程处理两秒后返回消息
        </el-button>

        <el-button class="but" type="primary"
                   @click="sendAsyncMsgToMain('向主进程发送异步消息，无需等待主进程处理10秒后的返回消息')">
          向主进程发送异步消息，无需等待主进程(主进程会处理10秒)的返回消息
        </el-button>

        <el-button class="but" type="primary"
                   @click="openChildWin('/login')">
          打开一个子窗口
        </el-button>
        <hr>
        <p>主进程到渲染进程,项目启动后让主进程发送消息(消息将展示在input中)。</p>
        <p>此处因为展示所以我们借助上面的第一个按钮触发一个主进程的消息，默认消息会被替换:</p>
        <el-input class="input" type="text" v-model="fromMainMsg">
        </el-input>
      </div>
      <div class="small-title">2、与系统通信</div>
      <div class="renderer-to-main">
        <p>渲染进程发送系统通知可以直接在vue模版中通过直接调用new window.Notification来发送消息。</p>
        <p>
          注意：electron启用了上下文隔离，所以node无法使用所以该方式在dev下可正常显示ico,但在build后无法找到图标，尝试关闭上下文隔离并设置node集成，但electron出现无法预加载脚本，所以此处推荐使用通道让主进程发送通知。</p>
        <el-input class="input" type="text" v-model="sysMsgByRendererProcess"></el-input>
        <el-button class="but" type="primary" @click="sendToSysNotice(sysMsgByRendererProcess)">
          渲染进程直接向系统发送通知（系统显示弹窗）
        </el-button>
        <hr>
        <p>主进程发送系统通知的方式如下：</p>
        <p>在electron的main.ts中使用Notification方法来发送</p>
        <hg-code lang="TypeScript" code="
import {app,Notification} from 'electron'
/* 定义一个系统创建主窗口时的通知 */
const NOTIFICATION_TITLE: string = 'Basic Notification'
const NOTIFICATION_BODY: string = 'Notification from the Main process'
const appIcon = path.join(process.env.VITE_PUBLIC, '/icons/logo-web-app.ico')
// const image = clipboard.readImage()
// const appIcon = new Tray(image)
console.log(appIcon);
new Notification({
    title: NOTIFICATION_TITLE,
    body: NOTIFICATION_BODY,
    icon: appIcon,
}).show()
"/>
        <p>也可以让渲染进程发送一个消息到主进程，并让主进程监听并触发系统通知，以下是一个示例：</p>
        <el-input class="input" type="text" v-model="sysMsgByMainProcess"></el-input>
        <el-button class="but" type="primary" @click="sendToMainMsgNotice(sysMsgByMainProcess)">
          渲染进程向主进程发送消息，主进程处理后发送通知（系统显示弹窗）
        </el-button>
        <hr/>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.ipc-root {
  .ipc-content {
    height: calc(100vh - 8rem);
    overflow-y: auto;
  }

  p {
    font-size: 1.4rem;
    line-height: 5rem;
  }

  hr {
    height: 1rem;
    border: none;
    margin: 1rem 0;
    background: #f89898;
  }

  .small-title {
    font-size: 1.8rem;
    margin-left: 2rem;
    line-height: 7rem;
  }

  .renderer-to-main {
    margin: 0 3rem;

    button {
      line-height: 14rem;
      margin: 2rem 1rem;
    }

    .input {
      margin: 1rem 0;
    }
  }
}
</style>