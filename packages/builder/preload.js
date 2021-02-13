/* eslint-disable no-undef,import/no-extraneous-dependencies */
const { dialog } = require('electron');
// const { dialog } = require('electron').remote;

window.electron = {};
window.electron.dialog = () => {
  dialog
    .showOpenDialog(undefined, {
      properties: ['openFile', 'openDirectory'],
    })
    .then();
};
