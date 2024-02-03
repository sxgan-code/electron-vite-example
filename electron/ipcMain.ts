import {app, BrowserWindow, ipcMain, Notification} from "electron";
import path from 'node:path'

process.env.DIST = path.join(__dirname, '../dist')
// 判断是否已打包，打包则返回dist目录，否则使用public目录
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')
export const initIpcMain = (win:BrowserWindow) => {
    /* 渲染进程通过管道send-sys-notice向主进程发送msg */
    ipcMain.on('renderer-main-msg', (event, msg: string) => {
        console.log(event, msg)
        // 测试对 Renderer-process 的活动推送消息。
        /*
        https://www.electronjs.org/zh/docs/latest/api/web-contents
        事件：“did-finish-load”，导航完成时触发，即选项卡的旋转器将停止旋转，并指派事件后。
         */
        // 向主进程推送一个时间消息
        win?.webContents.send('main-renderer-msg', '测试推送消息:' + (new Date).toLocaleString())
    })

    ipcMain.on('renderer-main-notice',(event,msg)=>{
        const NOTIFICATION_TITLE: string = '通知'
        const NOTIFICATION_BODY: string = msg
        const appIcon = path.join(process.env.VITE_PUBLIC,'/icons/logo-web-app.ico')
        console.log(appIcon);
        new Notification({
            title: NOTIFICATION_TITLE,
            body: NOTIFICATION_BODY,
            icon: appIcon,
        }).show()
    })
    /*  */

    // // 同步处理通信，并等待主进程返回值
    // ipcMain.on("event-on-test", (e, data: string) => {
    //     setTimeout(() => {
    //         e.returnValue = "主进程同步响应：" + data;
    //     }, 2000);
    // });
    //
    // // 异步处理通信，异步返回结果
    // ipcMain.handle("event-handle-test", (e, data: string) => {
    //     return "主进程异步响应:" + data;
    // });
    //
    // // 异步处理一次
    // ipcMain.handleOnce("event-handleOnce-test", (e) => {
    //     console.log("异步通信处理一次！");
    // });
    //
    // // 双向通信处理
    // ipcMain.handle("event-handle-togeter-test", (e, data: string) => {
    //     e.sender.send("event-handle-togeter-test", "主进程通知" + data);
    // });
};