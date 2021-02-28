import { FC } from 'react';
import ReactDOM from 'react-dom';
import { Dialog } from 'electron';
import Colors from './index';
import GlobalStyle from './GlobalStyle';

const electron = window.require('electron');
const { remote } = electron;
const { dialog } = remote;

const openModal = (): void => {
  (dialog as Dialog)
    .showOpenDialog({
      properties: ['openFile', 'openDirectory'],
    })
    .then((result) => {
      console.log(result.canceled);
      console.log(result.filePaths);
    })
    .catch((error) => {
      console.log(error);
    });
};

const App: FC = () => {
  return (
    <div>
      <GlobalStyle />
      <button type="button" onClick={openModal}>
        click
      </button>
      <Colors />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
