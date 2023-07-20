import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme as customTheme } from './theme';
import { Steps, Spaces } from "./types";

export interface WithChildren<T = React.ReactNode> {
  withStyleReset?: boolean;
  steps?: Steps;
  spaces?: Spaces;
  children?: T;
  theme?: any;
}

export const AppWrapper: FC<WithChildren> = ({withStyleReset = true, steps, spaces, children, theme }) => (
  <>
    <GlobalStyle withStyleReset={withStyleReset} steps={steps} spaces={spaces}/>
    <ThemeProvider theme={theme ? theme : customTheme}>
      {children}
    </ThemeProvider>
  </>
);
