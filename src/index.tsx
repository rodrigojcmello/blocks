import React, { ReactElement, StrictMode } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from './routes/home';
import Button from './routes/button';
import Page2 from './routes/page2';
import NotFound from './routes/not-found';
import theme from './theme-01.json';

const themeX: any = {};

theme.themes.forEach((themeColors) => {
  themeX[`.${themeColors.name}`] = {};
  themeColors.light.primary.forEach((primary) => {
    themeX[`.${themeColors.name}`][`--primary-${Object.keys(primary)}`] =
      primary[Object.keys(primary)];
  });

  themeX[`.${themeColors.name}`]['@media (prefers-color-scheme: dark)'] = {};
  themeColors.dark.primary.forEach((primary) => {
    themeX[`.${themeColors.name}`]['@media (prefers-color-scheme: dark)'][
      `--primary-${Object.keys(primary)}`
    ] = primary[Object.keys(primary)];
  });
});

console.log({ themeX });

const GlobalStyle = createGlobalStyle(themeX);

function App(): ReactElement {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/button" exact component={Button} />
            <Route path="/page2" exact component={Page2} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </StrictMode>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
