import {BrowserWindow} from "electron";


/* 初始化子窗口的IPC通信 */
export const initIpcChild = (win: BrowserWindow) => {
    // // 子窗口控制
    // ipcMain.on('child-win-controller', (event, data) => {
    //     console.log(event.processId);
    //     console.log(data)
    //     win.close()
    // })
}