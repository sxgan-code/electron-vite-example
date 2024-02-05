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
        window.ipcRenderer.sendSync('renderer-main-notice', msg)
    };
    /* 向主进程发送窗口控制消息，共有四种类型：min | max | unmax | close */
    const sendWinController = (controllerStr: string) => {
        let sendController = controllerStr
        if (controllerStr === 'max-unmax' && maxOrUnMaxStart.value) {
            sendController = 'max'
            maxOrUnMaxStart.value = false
        } else if (controllerStr === 'max-unmax') {
            sendController = 'unmax'
            maxOrUnMaxStart.value = true
        }
        console.log(sendController);
        window.ipcRenderer.send('win-controller', sendController)
    }
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
    /* 向主进程发送同步消息，等待主进程处理两秒后返回消息*/
    const sendSyncMsgToMain = (msg: string) => {
        var sendSync = window.ipcRenderer.sendSync('renderer-to-main-sync', msg);
        ElMessage.success(sendSync)
    }
    /* 向主进程发送同步消息，等待主进程处理两秒后返回消息*/
    const sendAsyncMsgToMain = (msg: string) => {
        window.ipcRenderer.invoke('renderer-to-main-async', msg).then(res => {
            // ElMessage.success(res)
        }).catch(err => {

        })
        ElMessage.info('这是renderer进程invoke调用后的消息')
    }

    return {
        fromMainMsg,
        sendToMainMsg,
        sendToMainMsgNotice,
        sendWinController,
        sendSyncMsgToMain,
        sendAsyncMsgToMain,
        openChildWin,
    };
}