import styled, { css } from "styled-components";
import { ColorProp } from "./types";

const commonStyles = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const ArcadeButtonContainer = styled.button`
  position: relative;
  font-size: var(--step-zero);
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;

  &:hover {
    filter: brightness(110%);
  }
`;

export const Shadow = styled.span`
  ${commonStyles};
  position: absolute;
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

export const Edge = styled.span<{ color?: ColorProp }>`
  ${({ color }) => css`
    ${commonStyles};
    position: absolute;
    background: ${color?.background};
  `}
`;

export const EdgeShadow = styled.span`
  ${commonStyles};
  position: absolute;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 8%,
    rgba(0, 0, 0, 0.3) 92%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

export const Front = styled.span<{ color?: ColorProp }>`
  ${({ color }) => css`
    ${commonStyles};
    font-family: "ezramedium";
    color: ${color?.text};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: ${color?.background};
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    padding: var(--space-xxSmall);

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
