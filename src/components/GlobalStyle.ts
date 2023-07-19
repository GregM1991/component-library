import { createGlobalStyle } from "styled-components";
import { STYLE_RESET } from './constants'

export const GlobalStyle = createGlobalStyle`
  :root {
    --step--2: clamp(0.69rem, calc(0.66rem + 0.18vw), 0.80rem);
    --step--1: clamp(0.83rem, calc(0.78rem + 0.29vw), 1.00rem);
    --step-0: clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem);
    --step-1: clamp(1.20rem, calc(1.07rem + 0.63vw), 1.56rem);
    --step-2: clamp(1.44rem, calc(1.26rem + 0.89vw), 1.95rem);
    --step-3: clamp(1.73rem, calc(1.48rem + 1.24vw), 2.44rem);
    --step-4: clamp(2.07rem, calc(1.73rem + 1.70vw), 3.05rem);
    --step-5: clamp(2.49rem, calc(2.03rem + 2.31vw), 3.82rem);

    --space-3xs: clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem);
    --space-2xs: clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem);
    --space-xs: clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem);
    --space-s: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
    --space-m: clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem);
    --space-l: clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem);
    --space-xl: clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem);
    --space-2xl: clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem);
    --space-3xl: clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem);

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

  @font-face {
    font-family: 'ezramedium';
    src: url('src/assets/ezra_medium-webfont.woff2') format('woff2'),
         url('src/assets/ezra_medium-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
      font-family: 'ezramedium_italic';
      src: url('src/assets/ezra_mediumitalic-webfont.woff2') format('woff2'),
          url('src/assets/ezra_mediumitalic-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  ${STYLE_RESET}
`;
