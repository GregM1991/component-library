import styled from "styled-components";

const commonStyles = `
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const ArcadeButtonContainer = styled.button`
  position: relative;
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

const Shadow = styled.span`
  ${commonStyles};
  position: absolute;
  background: hsl(0deg 0% 0% / 0.10);
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

const Edge = styled.span`
  ${commonStyles};
  position: absolute;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.2) 8%,
    rgba(0, 0, 0, 0.2) 92%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

const Front = styled.span<{ color?: ColorProp }>`
  ${({ color }) => `
  ${commonStyles};
  color: ${color?.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 32px;
  background: ${color?.background};
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);

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

interface ColorProp {
  background: string;
  text: string;
}

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  color?: ColorProp;
  className?: string;
}

export const ArcadeButton = ({
  primary = false,
  size = "medium",
  label,
  color = { background: "#eee", text: "#333" },
  className,
  ...props
}: ButtonProps) => {
  return (
    <ArcadeButtonContainer
      type="button"
      className={className}
      {...props}
    >
      <Shadow></Shadow>
      <Edge></Edge>
      <Front color={color}> {label}</Front>
    </ArcadeButtonContainer>
  );
};