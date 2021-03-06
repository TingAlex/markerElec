const electron = require('electron');

const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} = require('electron-devtools-installer');

// app 负责整个项目的执行流程，BrowserWindow 是用来打开一个新窗口的
// 新增 ipcMain 是后端向前端发送信息用的
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

// 监听 到 ready 信号后执行函数内部代码
app.on('ready', () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL('http://localhost:8080');
  // mainWindow.loadURL(`file://${__dirname}/frontEnd/public/index.html`);

  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));

  installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err));
});

// 接收前端数据
// ipcMain.on('video:submit', (event, path) => {
//   ffmpeg.ffprobe(path, (err, metadata) => {
//     // 将数据发送回前端
//     console.log(metadata.format.duration);
//     mainWindow.webContents.send('video:metadata', metadata.format.duration);
//   });
// });
