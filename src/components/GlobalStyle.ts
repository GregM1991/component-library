import { createGlobalStyle } from "styled-components";

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
  }

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
