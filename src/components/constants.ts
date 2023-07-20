// import { Spaces, Steps } from "./types";

export const STYLE_RESET = `
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
 `;

 
export const TYPE_STEP_PREFIX = '--step-'
export const SPACES_PREFIX = '--space-'

// export const DEFAULT_STEPS: Steps = {
//   minus2: 'clamp(0.69rem, calc(0.66rem + 0.18vw), 0.80rem)',
//   minus1: 'clamp(0.83rem, calc(0.78rem + 0.29vw), 1.00rem)',
//   zero: 'clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem)',
//   one: 'clamp(1.20rem, calc(1.07rem + 0.63vw), 1.56rem)',
//   two: 'clamp(1.44rem, calc(1.26rem + 0.89vw), 1.95rem)',
//   three: 'clamp(1.73rem, calc(1.48rem + 1.24vw), 2.44rem)',
//   four: 'clamp(2.07rem, calc(1.73rem + 1.70vw), 3.05rem)',
//   five: 'clamp(2.49rem, calc(2.03rem + 2.31vw), 3.82rem)'
// }

// export const DEFAULT_SPACES: Spaces = {
//   xxxSmall: 'clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem)',
//   xxSmall: 'clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)',
//   xSmall: 'clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)',
//   small: 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
//   medium: 'clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)',
//   large: 'clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem)',
//   xLarge: 'clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)',
//   xxLarge: 'clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)',
//   xxxLarge: 'clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem)',
// }
