/*
 * @Author: Armito 1656318310@qq.com
 * @Date: 2022-06-16 21:41:55
 * @LastEditors: Armito 1656318310@qq.com
 * @LastEditTime: 2022-06-19 10:29:16
 * @FilePath: \iAccount\electron-main\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            contextIsolation: false, // 是否开启隔离上下文
            nodeIntegration: true, // 渲染进程使用Node API
            // preload: path.join(__dirname, '../electron-preload/index.js'), // 需要引用js文件
        },
        show: false,
        icon: 'public/armito_mini.ico',
    })

    win.once('ready-to-show', () => {
        win.show()
    })

    // 如果打包了，渲染index.html
    if (app.isPackaged) {
        win.loadFile(path.join(__dirname, '../index.html'))
    } else {
        const url = 'http://localhost:8080'
        win.loadURL(url)
        win.webContents.openDevTools()
    }
}

app.whenReady().then(() => {
    createWindow() // 创建窗口
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 关闭窗口
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// 监听渲染进程方法
ipcMain.on('window-new', (e: Event, data: string) => {
    console.log(data)
})
