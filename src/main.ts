import {createApp} from 'vue'
import '@/assets/css/common.scss'
import App from '@/App.vue'
import router from "@/router";
import {createPinia} from 'pinia'
//引入图片懒加载插件
// import Lazyload from "vue3-lazyload";
/* 导入代码高亮模块 */
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
/* svg plugin */
import 'virtual:svg-icons-register'
//注册懒加载插件
// app.use(Lazyload, {
//     loading: '@/assets/images/common/svg/icons-loading.svg',//可以指定加载中的图像
//     error: '@/assets/images/common/svg/icons-img-not-loaded-01.svg',//可以指定加载失败的图像
// });
import laze from '@/utils/lazyVueCommand.ts'
/* 创建应用 */
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(hljsVuePlugin)

app.use(laze)
app.mount('#app').$nextTick(() => {
    // Remove Preload scripts loading
    postMessage({payload: 'removeLoading'}, '*')

    // Use contextBridge
    window.ipcRenderer.on('main-process-message', (_event, message) => {
        console.log(message)
    })
})
