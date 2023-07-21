import { FC } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

export interface WithChildren<T = React.ReactNode> {
  withStyleReset?: boolean;
  children?: T;
  customTheme?: any;
}

export const AppWrapper: FC<WithChildren> = ({
  withStyleReset = true,
  children,
  customTheme = theme,
}) => (
  <>
    <GlobalStyle withStyleReset={withStyleReset} />
    <ThemeProvider customTheme={customTheme}>{children}</ThemeProvider>
  </>
);
