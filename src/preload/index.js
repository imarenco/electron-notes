const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('appContext', {
  sendPing: () => ipcRenderer.send('ping'),
  saveFile: (payload) => {
    ipcRenderer.send('saveFile', { text: payload });
  },
});
