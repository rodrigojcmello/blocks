import React, { ReactElement, StrictMode } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './routes/home';
import Button from './routes/button';
import Page2 from './routes/page2';
import NotFound from './routes/not-found';

function App(): ReactElement {
  return (
    <StrictMode>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/button" exact component={Button} />
          <Route path="/page2" exact component={Page2} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </StrictMode>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
