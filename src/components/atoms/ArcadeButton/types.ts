export interface ButtonProps {
  label: string;
  onClick?: () => void;
  color?: ColorProp;
  className?: string;
}

export interface ColorProp {
  background: string;
  text: string;
}