export type StepsOrSpaces = Steps | Spaces;

export type Steps = {
  minus2: string;
  minus1: string;
  zero: string;
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
}

export type Spaces = {
  xxxSmall: string;
  xxSmall: string;
  xSmall: string;
  small: string;
  medium: string;
  large: string;
  xLarge: string;
  xxLarge: string;
  xxxLarge: string;
}

export interface GlobalStyleProps {
  withStyleReset?: boolean;
  steps?: Steps;
  spaces?: Spaces;
}