import React, { FC } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

export type Mode = 'auto' | 'light' | 'dark';

interface ThemeProps {
  theme: any;
  name: string;
  mode: Mode;
}

const WhiteUI: FC<ThemeProps> = ({ theme, name, mode, children }) => {
  const themeX: any = {};

  theme.themes.forEach((themeColors) => {
    if (mode === 'auto') {
      themeX[`.${themeColors.name}`] = {};
      themeColors.light.primary.forEach((primary) => {
        themeX[`.${themeColors.name}`][`--primary-${Object.keys(primary)}`] =
          primary[Object.keys(primary)];
      });

      themeX[`.${themeColors.name}`][
        '@media (prefers-color-scheme: dark)'
      ] = {};
      themeColors.dark.primary.forEach((primary) => {
        themeX[`.${themeColors.name}`]['@media (prefers-color-scheme: dark)'][
          `--primary-${Object.keys(primary)}`
        ] = primary[Object.keys(primary)];
      });
    }

    if (mode === 'light') {
      themeX[`.${themeColors.name}.light`] = {};
      themeColors.light.primary.forEach((primary) => {
        themeX[`.${themeColors.name}.light`][
          `--primary-${Object.keys(primary)}`
        ] = primary[Object.keys(primary)];
      });
    }

    if (mode === 'dark') {
      themeX[`.${themeColors.name}.dark`] = {};
      themeColors.dark.primary.forEach((primary) => {
        themeX[`.${themeColors.name}.dark`][
          `--primary-${Object.keys(primary)}`
        ] = primary[Object.keys(primary)];
      });
    }
  });

  console.log({ themeX });

  const GlobalStyle = createGlobalStyle(themeX);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className={`${name} ${mode}`}>{children}</div>
    </ThemeProvider>
  );
};

export default WhiteUI;
