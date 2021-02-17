const electron = require('electron');
const { app, BrowserWindow } = electron;

// Set env
process.env.NODE_ENV = 'production';

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
})

app.on('closed', () => {
    app.quit
    win = null;
})