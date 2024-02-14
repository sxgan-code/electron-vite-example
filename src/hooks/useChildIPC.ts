import {onMounted} from "vue";

export default function useChildIPC() {
    /* 所有监听 */
    onMounted(() => {
        /* 监听主线程消息 */

    })
    /* 关闭子窗口*/
    const closeChildWin = () => {
        window.ipcRenderer.invoke('child-win-controller', '')
    }

    return {
        closeChildWin,
    };
}