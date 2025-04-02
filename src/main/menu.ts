import { app, Menu, BrowserWindow, shell } from 'electron'
//创建菜单集合
const template = [
  {
    label: '文件(F)',
    submenu: [
      {
        label: '新建文件',
        accelerator: 'ctrl+n', //绑定快捷键
        click: () => {
          console.log('代开文件')
        }
      },
      {
        label: '新建窗口',
        accelerator: 'ctrl+shift+n',
        click: () => {
          //绑定事件
          let newWindow = new BrowserWindow({
            width: 500,
            height: 300,
            //主题渲染内容
            webPreferences: {
              nodeIntegration: true //集成node环境
            }
          })
          newWindow.loadFile('green.html')
          newWindow.on('closed', () => {
            newWindow = null
          })
        }
      }
    ]
  },
  {
    label: '帮助(H)',
    submenu: [
      {
        label: '更多',
        click: async () => {
          await shell.openExternal('https://electronjs.org')
        }
      }
    ]
  }
]
if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        click() {
          app.quit()
        }
      }
    ]
  })
}

export const initMenu = () => {
  // 注册菜单
  //载入模板
  const menu = Menu.buildFromTemplate(template)
  //主进程设置应用菜单
  Menu.setApplicationMenu(menu)
}
