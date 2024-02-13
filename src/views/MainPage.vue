<script setup lang="ts">

/* 打开一个子窗口*/
const openChildWin = (path: string) => {
  let data = {
    width: 500,
    height: 600,
    url: path
  }
  console.log(path)
  window.ipcRenderer.invoke('renderer-open-win', data);
}
</script>

<template>
  <button type="button" @click="openChildWin('/login')">打开一个窗口</button>
</template>

<style scoped>

</style>