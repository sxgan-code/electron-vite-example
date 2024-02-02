import {app, BrowserWindow} from 'electron'
import path from 'node:path'

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

// 声明窗口变量类型为BrowserWindow、null
let win: BrowserWindow | null
// 设置窗口启动路径，是否包含指定URL，否则使用dist下的index
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
    win = new BrowserWindow({
        width: 1000,
        height: 800,
        minWidth: 1000,
        minHeight: 800,
        frame: true,// false为无边框模式
        // 指定软件的图标
        icon: path.join(process.env.VITE_PUBLIC, 'icons/logo-web-app.ico'),
        // 预加载文件
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false
        },
    })
    // 在Electron工程启动文件main.js的头部设置以下内容，也可以屏蔽安全告警在console控制台的显示
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
    // 测试对 Renderer-process 的活动推送消息。
    win.webContents.on('did-finish-load', () => {
        // 向主进程推送一个时间消息
        win?.webContents.send('main-process-message', '测试推送消息:' + (new Date).toLocaleString())
    })
    // 更加配置选择加载路径
    if (VITE_DEV_SERVER_URL) {
        win.loadURL(VITE_DEV_SERVER_URL)
        win.webContents.openDevTools({mode: "detach"})
    } else {
        // win.loadFile('dist/index.html')
        win.loadFile(path.join(process.env.DIST, 'index.html'))
        win.webContents.openDevTools({mode: "detach"})

    }
}

// 当所有窗口都关闭时退出，macOS 除外。在那里，这很常见
// 使应用程序及其菜单栏保持活动状态，直到用户退出
// 显式使用 Cmd + Q。
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
        win = null
    }
})

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

app.whenReady().then(createWindow)
