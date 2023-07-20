import { createGlobalStyle, css } from "styled-components";
import {
  // DEFAULT_SPACES,
  // DEFAULT_STEPS,
  SPACES_PREFIX,
  STYLE_RESET,
  TYPE_STEP_PREFIX,
} from "./constants";
import { GlobalStyleProps } from "./types";
import { printCssVars } from "./utils";

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${({ withStyleReset, steps, spaces }) => css`
    :root {
      /* Typography steps */
      ${steps
        ? printCssVars(steps, TYPE_STEP_PREFIX)
        : printCssVars(DEFAULT_STEPS, TYPE_STEP_PREFIX)}

      /* Spaces */
      ${spaces
        ? printCssVars(spaces, SPACES_PREFIX)
        : printCssVars(DEFAULT_SPACES, SPACES_PREFIX)}
    }

    ${withStyleReset && STYLE_RESET}
  `}

`;
