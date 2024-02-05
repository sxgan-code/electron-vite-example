import {app, BrowserWindow, ipcMain, Notification} from "electron";
import path from 'node:path'

process.env.DIST = path.join(__dirname, '../dist')
// 判断是否已打包，打包则返回dist目录，否则使用public目录
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')
const appIcon = path.join(process.env.VITE_PUBLIC, '/icons/logo-web-app.ico')
// 判断开发环境
const winURL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:9999'
    : `file://${__dirname}/index.html`
// 唯一子窗口
let justChildWin: null | BrowserWindow = null
export const initIpcMain = (win: BrowserWindow) => {
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
    // 异步打开窗口
    ipcMain.handle("renderer-open-win", (e, param: string) => {
        if (justChildWin === null) {
            openChildWindow(win, param);
        }
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


    function openChildWindow(win: BrowserWindow, param: any) {
        justChildWin = new BrowserWindow({
            parent:win,
            width: param.width,
            height: param.height,
            show: false,
            icon: appIcon,
            resizable: true,
            // frame:false,
            // autoHideMenuBar: true,
            modal: true, //现在子窗口可以拖动，而且只有关闭子窗口，才能触碰到父窗口
            // titleBarStyle 配合 titleBarOverlay 在 windows 下会在应用右上方显示三个系统按钮：最小、最大、关闭。
            // titleBarStyle: 'hidden',
            // titleBarOverlay: {
            //     color: '#ffffff00',
            //     symbolColor: '#000000ff',
            //     height: 30
            // },

            webPreferences: {
                preload: path.resolve(__dirname, "../preload.js")
            }
        })

        justChildWin.loadURL(winURL + '#' + param.url)  // hash路由
        justChildWin.show()
        justChildWin.webContents.openDevTools()
        justChildWin.on('closed', () => {
            justChildWin = null

        })
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