import { FC } from 'react';
import ReactDOM from 'react-dom';
import Colors from './index';
import GlobalStyle from './GlobalStyle';

const App: FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Colors />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
