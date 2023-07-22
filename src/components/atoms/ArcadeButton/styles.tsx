import styled, { css } from "styled-components";
import { variables } from "../../ThemeProvider";
import { PassedProps, Variant } from "./types";

const commonStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${variables.radii.md};
`;

const variantsColors = {
  primary: {
    colors: {
      main: variables.palette.primary,
      contrast: variables.palette.light,
    },
    typography: variables.typography.steps.zero,
  },
  secondary: {
    colors: {
      main: variables.palette.secondary,
      contrast: variables.palette.light,
    },
    typography: variables.typography.steps.zero,
  },
};

const sizes = {
  small: {
    typography: variables.typography.steps.minus1,
    padding: `${variables.spaces.xxxSmall} ${variables.spaces.xSmall}`,
  },
  medium: {
    typography: variables.typography.steps.zero,
    padding: `${variables.spaces.xxSmall} ${variables.spaces.xSmall}`,
  },
  large: {
    typography: variables.typography.steps.one,
    padding: `${variables.spaces.small} ${variables.spaces.medium}`,
  },
};

export const ArcadeButtonContainer = styled.button<PassedProps>`
  ${({ size }) => css`
    position: relative;
    font-size: ${sizes[size].typography};
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;

    &:hover {
      filter: brightness(110%);
    }
  `}
`;

export const Shadow = styled.span`
  ${commonStyles};
  background: hsl(0deg 0% 0% / 0.1);
  will-change: transform;
  transform: translateY(6px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);

  ${ArcadeButtonContainer}:hover & {
    transform: translateY(8px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  ${ArcadeButtonContainer}:active & {
    transform: translateY(4px);
    transition: transform 34ms;
  }
`;

export const Edge = styled.span<{ variant: Variant }>`
  ${({ variant }) => css`
    ${commonStyles};
    background: ${variantsColors[variant].colors.main};
  `}
`;

export const EdgeShadow = styled.span`
  ${commonStyles};
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 8%,
    rgba(0, 0, 0, 0.3) 92%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

export const Front = styled.span<PassedProps>`
  ${({ variant, size }) => css`
    ${commonStyles};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${variantsColors[variant].colors.main};
    color: ${variantsColors[variant].colors.contrast};
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    padding: ${sizes[size].padding};

    ${ArcadeButtonContainer}:hover & {
      transform: translateY(-6px);
      transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    }
    ${ArcadeButtonContainer}:active & {
      transform: translateY(-2px);
      transition: transform 34ms;
    }
  `}
`;
