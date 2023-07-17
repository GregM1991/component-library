import { ArcadeButtonContainer, Edge, Front, Shadow } from "./styles";
import { ButtonProps } from "./types";

export const ArcadeButton = ({
  label,
  onClick,
  color = { background: "#ddd", text: "#2a2a2a" },
  className,
  ...props
}: ButtonProps) => {
  return (
    <ArcadeButtonContainer
      onClick={onClick}
      type="button"
      className={className}
      {...props}
    >
      <Shadow />
      <Edge />
      <Front color={color}>{label}</Front>
    </ArcadeButtonContainer>
  );
};
