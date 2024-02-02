import {createApp} from 'vue'

import App from '@/App.vue'
import router from "@/router";
import {createPinia} from 'pinia'
/* 导入全局样式 */
import '@/assets/css/common.scss'
import '@/assets/css/animation.scss'

/* 导入代码高亮模块 */
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
/* svg plugin */
import 'virtual:svg-icons-register'
//注册懒加载
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
