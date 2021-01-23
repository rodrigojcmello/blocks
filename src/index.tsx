import { ChangeEvent, FC, StrictMode, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Home from './routes/home';
import Button from './routes/button';
import Page2 from './routes/page2';
import NotFound from './routes/not-found';
import WhiteUI, { Mode } from './components/Theme';
import themeTwitter from './theme-twitter.json';
import themeFacebook from './theme-facebook.json';

const ThemeBar = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 24,
  backgroundColor: '#000',
  paddingLeft: 8,
});

const ThemeSelect = styled.select({
  height: 24,
  marginRight: 8,
  border: 'none',
  backgroundColor: '#0d0d0d',
  color: '#9fad1f',
  paddingLeft: 8,
  paddingRight: 8,
  outline: 'none',
});

const App: FC = () => {
  const [theme, setTheme] = useState(themeTwitter);
  const [mode, setMode] = useState<Mode>('auto');

  const handleTheme = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'twitter') {
      setTheme(themeTwitter);
    } else if (event.target.value === 'facebook') {
      setTheme(themeFacebook);
    }
  };

  const handleMode = (event: ChangeEvent<HTMLSelectElement>) => {
    setMode(event.target.value as Mode);
  };

  return (
    <StrictMode>
      <WhiteUI theme={theme} name="default" mode={mode}>
        <ThemeBar>
          <ThemeSelect onChange={handleTheme}>
            <option value="twitter">twitter</option>
            <option value="facebook">facebook</option>
          </ThemeSelect>
          <ThemeSelect onChange={handleMode}>
            <option value="auto">auto</option>
            <option value="light">light</option>
            <option value="dark">dark</option>
          </ThemeSelect>
        </ThemeBar>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/button" exact component={Button} />
            <Route path="/page2" exact component={Page2} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </WhiteUI>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
