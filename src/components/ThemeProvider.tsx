import { FC, createContext, useLayoutEffect, useRef, useMemo } from "react"
import { theme } from "./theme"

type IndexableObject = { [key: string]: any };

interface ThemeProviderProps {
  children: React.ReactNode;
}

const toVarNames = <T>(obj: T extends IndexableObject, prefix: string = '-'): T => {
  const vars: any = {}
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      vars[key] = toVarNames(value, `${prefix}-${key}`)
    } else {
      vars[key] = `var(${prefix}-${key})`
    }
  }
  return vars as T
}

const variables = toVarNames(theme)

const toVars = (obj: IndexableObject, prefix: string = '-') => {
  const vars: IndexableObject = {}
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      const nestedVars = toVars(value, `${prefix}-${key}`)
      for (const [nestedKey, nestedValue] of Object.entries(nestedVars)) {
        vars[nestedKey] = nestedValue
      }
    } else {
      vars[`${prefix}-${key}`] = value
    }
  }
  return vars
}

const ThemeContext = createContext(theme);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const root = useRef()

  useLayoutEffect(() => {
    const vars = toVars(theme)
    for (const [key, value] of Object.entries(vars)) {
      root.current.style.setProperty(key, value)
    }
  }, [theme])

  return (
    <ThemeContext.Provider>
      <div ref={root}> { children } < /div>
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { ThemeProvider, useTheme, variables }