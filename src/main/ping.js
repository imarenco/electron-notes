const { ipcMain, dialog } = require('electron')
const fs = require('fs');
const os = require('os');

ipcMain.on('ping', (event, arg) => {
  event.reply('ping-reply', `Pong from ${os.hostname()}`)
})


ipcMain.on('save', (event, payload) => {
  var options = {
    title: "Save Note",
    defaultPath: "my_note",
    buttonLabel: "Save",

    filters: [
      { name: 'txt', extensions: ['txt'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  };


  dialog.showSaveDialog(null, options).then(({ filePath }) => {
    console.log('aca perro', filePath, payload);
    fs.writeFileSync(filePath, payload.text, 'utf-8');
  });
})