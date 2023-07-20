export type Variant = "primary" | "secondary"

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
}