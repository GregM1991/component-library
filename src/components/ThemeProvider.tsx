import { createContext, useContext, useLayoutEffect, useRef } from "react";
import { DefaultTheme } from "./theme";
import { toVarNames, toVars } from "./utils";
import { theme } from "./theme";

interface ThemeProviderProps {
  customTheme?: Partial<DefaultTheme>;
  children: React.ReactNode;
}

const variables = toVarNames(theme);

const ThemeContext = createContext<DefaultTheme>(theme);

const ThemeProvider = ({ customTheme, children }: ThemeProviderProps) => {
  const root = useRef<HTMLDivElement>(null);

  const mergedTheme = { ...theme, ...customTheme };

  useLayoutEffect(() => {
    const vars = toVars(mergedTheme);
    if (root.current !== null) {
      for (const [key, value] of Object.entries(vars)) {
        root.current.style.setProperty(key, value);
      }
    }
  }, [mergedTheme]);

  return (
    <ThemeContext.Provider value={mergedTheme}>
      <div ref={root}>{children}</div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme, variables };
