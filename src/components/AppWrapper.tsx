import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme as customTheme } from './theme';

export interface WithChildren<T = React.ReactNode> {
  children?: T;
  theme?: any;
}

export const AppWrapper: FC<WithChildren> = ({ children, theme }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme ? theme : customTheme}>
      {children}
    </ThemeProvider>
  </>
);
