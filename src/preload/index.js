const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('appContext', {
  sendPing: () => ipcRenderer.send('ping'),
  save: (payload) => {
    
    ipcRenderer.send('save', { text: payload });
  },
});
