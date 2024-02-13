<script setup lang="ts">
function sendMsgByChildWin(){
  window.ipcRenderer.invoke('child-win-controller','哈哈哈哈哈哈哈')
}
</script>

<template>
<h1>这是子窗口</h1>
  <button type="button" @click="sendMsgByChildWin()">发送消息</button>
</template>

<style scoped>

</style>