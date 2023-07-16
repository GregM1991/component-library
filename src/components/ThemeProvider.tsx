import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './GlobalStyle';

export interface WithChildren<T = React.ReactNode> {
  children?: T;
  theme: any;
}

const theme = {

};

export const AppWrapper: FC<WithChildren> = ({ children, theme }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
