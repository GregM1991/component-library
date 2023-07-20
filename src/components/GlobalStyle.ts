import { createGlobalStyle, css } from "styled-components";
import { DEFAULT_SPACES, DEFAULT_STEPS, SPACES_PREFIX, STYLE_RESET, TYPE_STEP_PREFIX } from './constants'
import { GlobalStyleProps, StepsOrSpaces } from "./types";



const printCssVars = (varObj: StepsOrSpaces, prefix: string) => {
  const keys = Object.keys(varObj) as Array<keyof StepsOrSpaces>;
  return keys.map((key) => {
    const value = varObj[key];
    return `${prefix+key}: ${value};`;
  })
}


export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${({ withStyleReset, steps, spaces }) => css` 
    :root {
      /* Typography steps */
      ${steps ? printCssVars(steps, TYPE_STEP_PREFIX) : printCssVars(DEFAULT_STEPS, TYPE_STEP_PREFIX)}

      /* Spaces */
      ${spaces ? printCssVars(spaces, SPACES_PREFIX) : printCssVars(DEFAULT_SPACES, SPACES_PREFIX)}

      /* One-up pairs */
      --space-3xs-2xs: clamp(0.31rem, calc(0.20rem + 0.54vw), 0.63rem);
      --space-2xs-xs: clamp(0.56rem, calc(0.43rem + 0.65vw), 0.94rem);
      --space-xs-s: clamp(0.88rem, calc(0.74rem + 0.65vw), 1.25rem);
      --space-s-m: clamp(1.13rem, calc(0.86rem + 1.30vw), 1.88rem);
      --space-m-l: clamp(1.69rem, calc(1.40rem + 1.41vw), 2.50rem);
      --space-l-xl: clamp(2.25rem, calc(1.73rem + 2.61vw), 3.75rem);
      --space-xl-2xl: clamp(3.38rem, calc(2.81rem + 2.83vw), 5.00rem);
      --space-2xl-3xl: clamp(4.50rem, calc(3.46rem + 5.22vw), 7.50rem);

      /* Custom pairs */
      --space-s-l: clamp(1.13rem, calc(0.65rem + 2.39vw), 2.50rem);
      --space-3xs-3xl: clamp(0.31rem, calc(-2.19rem + 12.50vw), 7.50rem);
    }

    ${withStyleReset && STYLE_RESET}
  `}

`;
