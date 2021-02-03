import { FC } from 'react';
import ReactDOM from 'react-dom';

const App: FC = () => {
  return <h1>Hello, world!</h1>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
