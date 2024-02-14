import {BrowserWindow, ipcMain} from "electron";


/* 初始化子窗口的IPC通信 */
export const initJustChildWinIpc = (justChildWin: BrowserWindow) => {
    // 子窗口控制
    ipcMain.handle('child-win-controller', (event, data) => {
        justChildWin.close()
    })
}