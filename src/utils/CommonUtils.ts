/// @filename: CommonUtils.ts
import router from "@/router/index"

const sourceDir = import.meta.env.VITE_APP_ENV === 'development' ? 'public' : 'dist'

/*路由跳转指定地址*/
export function goToRouter(path: string) {
    router.push({path: path})
}

/*这是一个睡眠方法*/
export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

/*
系统复制通过execCommand-已过时
     * Executes a command on the current document, current selection, or the given range.
     * @param commandId String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.
     * @param showUI Display the user interface, defaults to false.
     * @param value Value to assign.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/execCommand)
     */
export function copyToClipboardByExecCommand(text: string): string {
    var textarea = document.createElement("textarea") //创建临时文本区域元素
    textarea.value = text //设置要复制的内容
    document.body.appendChild(textarea) //将该元素添加到页面上
    textarea.select() //选中文本区域的内容
    let msg: string = ''
    try {
        var successful = document.execCommand('copy') //调用系统复制命令
        if (successful) {
            ElMessage.success('成功复制到剪贴板！[ ' + text + ' ]')
        } else {
            ElMessage.error('无法复制到剪贴板！')
        }
    } catch (err) {
        ElMessage.error('无法复制到剪贴板！')
    } finally {
        document.body.removeChild(textarea) //移除临时文本区域元素
    }
    return msg
}

/* 系统复制命令-clipboard api方式 */
export async function copyToClipboard(text: string): Promise<void> {
    await navigator.clipboard.writeText(text).then(() => {
        ElMessage.success('成功复制到剪贴板！[ ' + text + ' ]')
    }).catch(() => {
        ElMessage.error('无法复制到剪贴板！')
    })
}

/* 获取图片地址 */
export function getBaseImgUtl(path: string): string {
    // console.log('当前环境图片地址',import.meta.env.VITE_BASE_IMG_URL)
    let baseImgUrl = import.meta.env.VITE_BASE_IMG_URL
    return baseImgUrl + path;
}

/* 根据数字，获取固定位数的字符串 */
export function getFixedPositionNumStr(num: number, positionNum: number): string {
    var numStr: string = num.toString();
    var fillNum: number = positionNum - numStr.length
    let result: string = ''
    if (fillNum < 0) {
        throw new Error("位数小于所传数字位数")
    } else {
        for (let i = 0; i < fillNum; i++) {
            result = result + '0'
        }
    }
    return result + numStr
}

/* 向系统直接发送消息 */
export function sendToSysNotice(msg: string) {
    let option = {
        title: '通知',
        body: msg,
        icon: sourceDir + '/icons/logo-web-app.ico'
    }
    new window.Notification(option.title, option)
}