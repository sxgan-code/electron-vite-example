import {onMounted, ref, Ref} from "vue";

export default function useIPC() {
    const fromMainMsg: Ref<string> = ref<string>('默认消息')
    const maxOrUnMaxStart = ref<boolean>(true)

    /* 所有监听 */
    onMounted(() => {
        /* 监听主线程消息 */
        window.ipcRenderer.on('main-renderer-msg', (event, msg) => {
            fromMainMsg.value = msg
            console.log(msg)
        })

    })

    /* 向主进程发送一个消息 */
    const sendToMainMsg = (msg: string) => {
        window.ipcRenderer.send('renderer-main-msg', msg)
    };
    /* 向主进程发送消息并让主进程触发消息通知 */
    const sendToMainMsgNotice = (msg: string) => {
        window.ipcRenderer.send('renderer-main-notice', msg)
    };
    /* 向主进程发送窗口控制消息，共有四种类型：min | max | unmax | close */
    const sendWinController = (controllerStr: string) => {
        let sendController = controllerStr
        if (controllerStr === 'max-unmax' && maxOrUnMaxStart.value) {
            sendController = 'max'
            maxOrUnMaxStart.value = false
        }else if (controllerStr === 'max-unmax'){
            sendController = 'unmax'
            maxOrUnMaxStart.value = true
        }
        console.log(sendController);
        window.ipcRenderer.send('win-controller', sendController)
    }


    return {
        fromMainMsg,
        sendToMainMsg,
        sendToMainMsgNotice,
        sendWinController,
    };
}