import {BrowserWindow, ipcMain, Notification} from "electron";
import path, {dirname, join} from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

process.env.DIST_ELECTRON = join(__dirname, '..')
process.env.DIST = join(process.env.DIST_ELECTRON, '../dist')
// 判断是否已打包，打包则返回dist目录，否则使用public目录
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
    ? join(process.env.DIST_ELECTRON, '../public')
    : process.env.DIST
const appIcon = path.join(process.env.VITE_PUBLIC, '/icons/logo-web-app.ico')


export const initMainWinIpc = (win: BrowserWindow) => {

    /* 渲染进程通过管道send-sys-notice向主进程发送msg */
    ipcMain.on('renderer-main-msg', (event, msg: string) => {

        // 测试对 Renderer-process 的活动推送消息。
        /*
        https://www.electronjs.org/zh/docs/latest/api/web-contents
        事件：“did-finish-load”，导航完成时触发，即选项卡的旋转器将停止旋转，并指派事件后。
         */
        // 向主进程推送一个时间消息

        win?.webContents.send('main-renderer-msg', '测试推送消息:' + (new Date).toLocaleString())
    })
    /* 渲染进程发送到主进程的消息，使用Notification发送系统通知 */
    ipcMain.on('renderer-main-notice', (event, msg) => {
        sendSysNotice(msg)
    })

    // 窗口控制
    ipcMain.on('win-controller', (event, data) => {
        if (data == 'max') {
            win.maximize()
        } else if (data == 'unmax') {
            win.unmaximize()
        } else if (data == 'min') {
            win.minimize()
        } else if (data == 'close') {
            win.close()
        }
    })


    // 同步处理通信，并等待主进程返回值
    ipcMain.on("renderer-to-main-sync", (e, data: string) => {
        setTimeout(() => {
            e.returnValue = "主进程同步响应：" + data;
        }, 2000);
    });

    // 异步处理通信
    ipcMain.handle("renderer-to-main-async", (e, data: string) => {
        setTimeout(() => {
            sendSysNotice("主进程任务处理完毕，处理时间：5s")
        }, 5000);
    });
    // 异步处理一次
    ipcMain.handleOnce("event-handleOnce-test", (e) => {
        console.log("异步通信处理一次！");
    });

    // 双向通信处理
    ipcMain.handle("event-handle-togeter-test", (e, data: string) => {
        e.sender.send("event-handle-togeter-test", "主进程通知" + data);
    });

    function sendSysNotice(msg: string) {
        const NOTIFICATION_TITLE: string = '通知'
        const NOTIFICATION_BODY: string = msg
        new Notification({
            title: NOTIFICATION_TITLE,
            body: NOTIFICATION_BODY,
            icon: appIcon,
        }).show()
    }


    // function openChildView(win: BrowserWindow, param: any) {
    //     let justChildView = new BrowserView({
    //         webPreferences:{
    //             webSecurity:false,
    //             devTools:true,
    //         }
    //     })
    //     win.setBrowserView(justChildView)
    //     justChildView.setBounds({
    //         x: 0,
    //         y: 0,
    //         width: 600,
    //         height: 500,
    //     })
    //     justChildView?.webContents.loadURL(winURL + '#' + param.url)  // hash路由
    //     justChildView.webContents.openDevTools()
    // }
};