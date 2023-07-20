import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Steps } from "./GlobalStyle";
import { theme as customTheme } from './theme';

export interface WithChildren<T = React.ReactNode> {
  withStyleReset?: boolean;
  steps?: Steps;
  children?: T;
  theme?: any;
}

export const AppWrapper: FC<WithChildren> = ({withStyleReset = true, steps, children, theme }) => (
  <>
    <GlobalStyle withStyleReset={withStyleReset} steps={steps}/>
    <ThemeProvider theme={theme ? theme : customTheme}>
      {children}
    </ThemeProvider>
  </>
);
