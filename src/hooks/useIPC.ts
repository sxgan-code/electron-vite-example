import {onMounted, ref, Ref} from "vue";

export default function useIPC() {
    const fromMainMsg:Ref<string> = ref<string>('默认消息')
    /* 向主进程发送一个消息 */
    const sendToMainMsg = (msg: string) => {
        window.ipcRenderer.send('renderer-main-msg', msg)
    };
    /* 向主进程发送消息并让主进程触发消息通知 */
    const sendToMainMsgNotice = (msg: string) => {
        window.ipcRenderer.send('renderer-main-notice', msg)
    };

    onMounted(() => {
        console.log('onMounted 创建监听main-renderer-msg')
        window.ipcRenderer.on('main-renderer-msg', (event, msg) => {
            fromMainMsg.value = msg
            console.log(msg)
        })
    })
    return {
        fromMainMsg,
        sendToMainMsg,
        sendToMainMsgNotice,
    };
}