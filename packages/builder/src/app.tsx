import { FC } from 'react';
import ReactDOM from 'react-dom';
import Colors from './index';

// eslint-disable-next-line unicorn/consistent-function-scoping
// const openModal = (): void => {
//   console.log('##electron', window?.electron);
//   window?.electron?.dialog();
//   // window?.electron?.dialog?.showOpenDialog((fileNames) => {
//   //   // fileNames is an array that contains all the selected
//   //   if (fileNames === undefined) {
//   //     console.log('No file selected');
//   //   }
//   //
//   //   console.log({ fileNames });
//   // });
// };

const App: FC = () => {
  return (
    <div>
      {/* <h1>Hello, world! 1234</h1> */}
      {/* <button type="button" onClick={openModal}> */}
      {/*  click */}
      {/* </button> */}
      <Colors />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
