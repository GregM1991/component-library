import {
  ArcadeButtonContainer,
  Edge,
  EdgeShadow,
  Front,
  Shadow,
} from "./styles";
import { ButtonProps } from "./types";

export const ArcadeButton = ({
  label,
  onClick,
  variant = 'primary',
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
      <Edge variant={variant} />
      <EdgeShadow />
      <Front variant={variant}>{label}</Front>
    </ArcadeButtonContainer>
  );
};
