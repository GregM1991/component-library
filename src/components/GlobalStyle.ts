import { createGlobalStyle, css } from "styled-components";
import { STYLE_RESET } from "./constants";
export interface GlobalStyleProps {
  withStyleReset?: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${({ withStyleReset }) => css`
    ${withStyleReset && STYLE_RESET}
  `}`;
