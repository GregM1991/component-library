import {
  ArcadeButtonContainer,
  Edge,
  EdgeShadow,
  Front,
  Shadow,
} from "./styles";
import { ArcadeButtonProps } from "./types";

export const ArcadeButton = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  className,
  ...props
}: ArcadeButtonProps) => {
  return (
    <ArcadeButtonContainer
      onClick={onClick}
      type="button"
      className={className}
      variant={variant}
      size={size}
      {...props}
    >
      <Shadow />
      <Edge variant={variant} />
      <EdgeShadow />
      <Front variant={variant} size={size}>
        {label}
      </Front>
    </ArcadeButtonContainer>
  );
};
