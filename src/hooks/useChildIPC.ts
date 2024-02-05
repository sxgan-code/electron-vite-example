import {onMounted} from "vue";

export default function useChildIPC() {
    /* 所有监听 */
    onMounted(() => {
        /* 监听主线程消息 */

    })
    /* 关闭子窗口*/
    const closeChildWin = () => {
        console.log("renderer-close")
        console.log(window.ipcRenderer)
        // Window.ipcRenderer.send('child-win-controller', '')

        // window.ipcRenderer.invoke();
    }

    return {
        closeChildWin,
    };
}