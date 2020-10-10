import { app, BrowserWindow, Menu, MenuItem, dialog, nativeTheme } from 'electron';
import {initMenu} from './src/AppMenu'

let mainWindow: BrowserWindow = null;
nativeTheme.themeSource = 'dark';
let createWindow = function () {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    transparent: true,
    webPreferences: {
      // nodeIntegration: true
    }
    // fullscreenable:false,
    // maximizable:false
  });
  // mainWindow.webContents.openDevTools();
  mainWindow.loadFile('index.html');
  mainWindow.on('closed', function () {
    mainWindow = null
  });
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
});

initMenu();