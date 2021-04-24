import { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Colors from './index';
import GlobalStyle from './GlobalStyle';
import Button from './routes/Button/Button';

const App: FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Button />
          </Route>
          <Route path="/colors">
            <Colors />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
