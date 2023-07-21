export interface DefaultTheme {
  palette: { [key: string]: string };
  shadows: { [key: string]: string };
  typography: { [key: string]: string };
  radii: { [key: string]: string };
  breakpoints: { [key: string]: string };
  spaces: { [key: string]: string };
}

const palette = {
  primary: "#7d2ae8",
  secondary: "#280f91",
  light: "#e9ecef",
  dark: "#0e1318",
};

const shadows = {
  small: "0.5px 1px 1px hsl(0deg, 0%, 50%,)",
  medium:
    "1px 2px 2px hsl(0deg, 0%, 50% / 0.333), 2px 4px 4px hsl(0deg, 0%, 50% / 0.333), 3px 6px 6px hsl(0deg, 0%, 50% / 0.333)",
};

const typography = {
  heading: "inherit",
  body: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
  steps: {
    minus2: "clamp(0.69rem, calc(0.66rem + 0.18vw), 0.80rem)",
    minus1: "clamp(0.83rem, calc(0.78rem + 0.29vw), 1.00rem)",
    zero: "clamp(1.00rem, calc(0.91rem + 0.43vw), 1.25rem)",
    one: "clamp(1.20rem, calc(1.07rem + 0.63vw), 1.56rem)",
    two: "clamp(1.44rem, calc(1.26rem + 0.89vw), 1.95rem)",
    three: "clamp(1.73rem, calc(1.48rem + 1.24vw), 2.44rem)",
    four: "clamp(2.07rem, calc(1.73rem + 1.70vw), 3.05rem)",
    five: "clamp(2.49rem, calc(2.03rem + 2.31vw), 3.82rem)",
  },
};

const radii = {
  none: "0",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "9999px",
};

const breakpoints = {
  sm: "768px",
  md: "1024px",
  lg: "1280px",
  xlg: "1440px",
};

const spaces = {
  xxxSmall: "clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem)",
  xxSmall: "clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)",
  xSmall: "clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)",
  small: "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
  medium: "clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)",
  large: "clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem)",
  xLarge: "clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)",
  xxLarge: "clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)",
  xxxLarge: "clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem)",
};

export const theme = {
  palette,
  shadows,
  typography,
  radii,
  breakpoints,
  spaces,
};
