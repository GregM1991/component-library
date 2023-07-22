export interface PassedProps {
  variant: Variant;
  size: Size;
}

export type Variant = "primary" | "secondary";

export type Size = "small" | "medium" | "large";

export interface ArcadeButtonProps {
  label: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
}
