import {app, BrowserWindow, Notification} from 'electron'
import path from 'node:path'
import {initIpcMain} from './ipcMain.ts'

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
// 判断是否已打包，打包则返回dist目录，否则使用public目录
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')

app.setAppUserModelId('ElectronTemp')

// 声明窗口变量类型为BrowserWindow、null
let win: BrowserWindow | null
// 设置窗口启动路径，是否包含指定URL，否则使用dist下的index
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
    /* 应用图标 */
    const appIcon = path.join(process.env.VITE_PUBLIC, '/icons/logo-web-app.ico')
    win = new BrowserWindow({
        width: 1000,
        height: 800,
        minWidth: 1000,
        minHeight: 800,
        modal:true,
        frame: false,// false为无边框模式
        transparent: true, // 窗口是否支持透明，如果想做高级效果最好为true,此项必须设置frame为false，且关闭DevTools，这两项会影响效果
        // 指定软件的图标
        icon: appIcon,
        show: false,
        // titleBarStyle 配合 titleBarOverlay 在 windows 下会在应用右上方显示三个系统按钮：最小、最大、关闭。
        // titleBarStyle: 'hidden',
        // titleBarOverlay: {
        //     color: '#ffffff00',
        //     symbolColor: '#000000ff',
        //     height: 30
        // },
        // 预加载文件
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false,
        },
    })

    /* 初始化IPC通信 */
    initIpcMain(win);
    // 在Electron工程启动文件main.js的头部设置以下内容，也可以屏蔽安全告警在console控制台的显示
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
    win.once('ready-to-show', () => {
        win?.show()
    })
    // 增加配置选择加载路径，只有dev环境打开DevTools
    if (VITE_DEV_SERVER_URL) {
        win.loadURL(VITE_DEV_SERVER_URL)
        win.webContents.openDevTools({mode: "detach"})
    } else {
        win.loadFile(path.join(process.env.DIST, 'index.html'))
    }

    /* 定义一个系统创建主窗口时的通知 */
    const NOTIFICATION_TITLE: string = '通知'
    const NOTIFICATION_BODY: string = 'Main process create window'
    new Notification({
        title: NOTIFICATION_TITLE,
        body: NOTIFICATION_BODY,
        icon: appIcon,
    }).show()
}


app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
/*
在 Windows 和 Linux 上，我们通常希望在关闭一个应用的所有窗口后让它退出。 要在您的Electron应用中实现这一点，
您可以监听 app 模块的 window-all-closed 事件，并调用 app.quit() 来退出您的应用程序。此方法不适用于 macOS。
*/
app.on('window-all-closed', () => {
    console.log('win closed')
    if (process.platform !== 'darwin') {
        app.quit()
        win = null
    }
})
// app.on("session-end", (event) => {
//     exec("mongodb/bin/mongo admin --eval 'db.shutdownServer()'");
//     process.exit(); // really let the app exit now
// });
app.whenReady().then(createWindow)
